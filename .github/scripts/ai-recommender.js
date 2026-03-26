import fs from 'fs';
import path from 'path';

const API_KEY = process.env.GITHUB_TOKEN;
if (!API_KEY) {
  console.error("Error: GITHUB_TOKEN environment variable is missing.");
  process.exit(1);
}

const scope = process.argv[2];
if (!scope || !['content', 'aesthetics', 'libraries'].includes(scope)) {
  console.error("Usage: node ai-recommender.js <content|aesthetics|libraries>");
  process.exit(1);
}

const SYSTEM_PROMPTS = {
  libraries: "You are an expert web development AI. Review the provided file (package.json) and update the library versions in 'dependencies' and 'devDependencies' to modern, stable, secure versions. You may also suggest replacements for deprecated libraries. Return ONLY the valid JSON of the entire new package.json file, with NO markdown formatting, NO backticks, and NO additional text.",
  content: "You are an expert copywriter and SEO specialist. Review the provided file from a developer's portfolio site. Enhance the text content to be more engaging, professional, and SEO-friendly. Do NOT alter any structural HTML tags, logic, variables, or code elements. Only improve the text inside tags or attributes like 'alt' and 'title'. Return ONLY the complete modified file's content with NO markdown formatting, NO backticks, and NO additional text.",
  aesthetics: "You are an expert modern UI/UX designer. Enhance the provided Tailwind configuration file by adding a stunning, modern color palette (e.g., modern dark mode scales, vibrant accents) and advanced animation configurations (e.g., custom easings, keyframes) to the `theme.extend` section. Keep the existing necessary plugins/content logic. Ensure the output is syntactically valid JS. Return ONLY the complete modified file's content with NO markdown formatting, NO backticks, and NO additional text."
};

const TARGET_FILES = {
  libraries: ['package.json'],
  content: ['index.html'],
  aesthetics: ['tailwind.config.js']
};

function stripMarkdown(str) {
  // Try to remove standard markdown code fences
  let clean = str.trim();
  if (clean.startsWith('```')) {
    const firstNewline = clean.indexOf('\n');
    if (firstNewline !== -1) {
      clean = clean.slice(firstNewline + 1);
    }
    if (clean.endsWith('```')) {
      clean = clean.slice(0, clean.length - 3).trim();
    }
  }
  return clean;
}

async function queryAI(systemPrompt, userContent) {
  const response = await fetch("https://models.inference.ai.azure.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: "File to modify:\n\n" + userContent }
      ],
      temperature: 0.5,
    })
  });

  const data = await response.json();
  if (data.error) {
    throw new Error(data.error.message);
  }
  
  return stripMarkdown(data.choices[0].message.content);
}

async function run() {
  console.log(`Starting AI Recommender for scope: ${scope}`);
  const files = TARGET_FILES[scope];
  const prompt = SYSTEM_PROMPTS[scope];

  for (const filePath of files) {
    const absolutePath = path.resolve(filePath);
    if (!fs.existsSync(absolutePath)) {
      console.log(`Skipping ${filePath} as it does not exist.`);
      continue;
    }

    console.log(`Processing file: ${filePath}`);
    const content = fs.readFileSync(absolutePath, 'utf8');

    try {
      const newContent = await queryAI(prompt, content);
      
      // Basic sanity checks
      if (!newContent || newContent.length < 10) {
        throw new Error("AI returned an empty or unreasonably short response.");
      }
      
      if (scope === 'libraries') {
        // Validate JSON
        JSON.parse(newContent);
      }
      
      fs.writeFileSync(absolutePath, newContent, 'utf8');
      console.log(`Successfully updated ${filePath}`);
    } catch (err) {
      console.error(`Failed to process ${filePath}:`, err.message);
      process.exit(1);
    }
  }
}

run();
