import guideMarkdown from './job_guide.md?raw';

interface GuideSection {
  title: string;
  items: string[];
}

const SECTION_ORDER: ReadonlyArray<string> = [
  'Mindset & Market Reality',
  'Resume & Application Strategy',
  'Online Resources & Tools',
  'The Interview Process',
  'Additional Note (from on of my friends)',
  'Other links',
];

function parseGuide(markdown: string): { intro: string; sections: GuideSection[] } {
  const lines = markdown.split('\n');
  const sections: GuideSection[] = [];
  let intro = '';
  let currentTitle = '';
  let currentItems: string[] = [];

  const pushCurrent = () => {
    if (currentTitle && currentItems.length > 0) {
      sections.push({ title: currentTitle, items: currentItems });
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      continue;
    }

    if (!intro && line.toLowerCase().startsWith("here's the guide")) {
      intro = line;
      continue;
    }

    if (line.startsWith('- ') || line.startsWith('* ')) {
      currentItems.push(line.slice(2).trim());
      continue;
    }

    pushCurrent();
    currentTitle = line;
    currentItems = [];
  }

  pushCurrent();

  return { intro, sections };
}

function renderInlineMarkdown(text: string): Array<string | JSX.Element> {
  const tokenRegex = /(\[([^\]]+)\]\((https?:\/\/[^\s)]+)\))|(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|(_([^_]+)_)|(https?:\/\/[^\s)]+)/g;
  const parts: Array<string | JSX.Element> = [];
  let lastIndex = 0;

  for (const match of text.matchAll(tokenRegex)) {
    const start = match.index ?? 0;

    if (start > lastIndex) {
      parts.push(text.slice(lastIndex, start));
    }

    if (match[2] && match[3]) {
      const label = match[2];
      const url = match[3];
      parts.push(
        <a
          key={`md-link-${start}`}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-lime-300 underline decoration-lime-400/40 underline-offset-4 transition-colors hover:text-lime-200"
        >
          {renderInlineMarkdown(label)}
        </a>,
      );
    } else if (match[5]) {
      parts.push(
        <strong key={`md-bold-${start}`} className="font-semibold text-slate-50">
          {renderInlineMarkdown(match[5])}
        </strong>,
      );
    } else if (match[7]) {
      parts.push(
        <em key={`md-italic-star-${start}`} className="italic text-slate-100">
          {renderInlineMarkdown(match[7])}
        </em>,
      );
    } else if (match[9]) {
      parts.push(
        <em key={`md-italic-underscore-${start}`} className="italic text-slate-100">
          {renderInlineMarkdown(match[9])}
        </em>,
      );
    } else if (match[10]) {
      const url = match[10];
      parts.push(
        <a
          key={`md-url-${start}`}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-lime-300 underline decoration-lime-400/40 underline-offset-4 transition-colors hover:text-lime-200"
        >
          {url}
        </a>,
      );
    }

    lastIndex = start + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export function JobGuidePage() {
  const { intro, sections } = parseGuide(guideMarkdown);
  const sectionOrderMap = new Map(SECTION_ORDER.map((title, index) => [title, index]));
  const orderedSections = [...sections].sort((a, b) => {
    const aOrder = sectionOrderMap.get(a.title) ?? Number.MAX_SAFE_INTEGER;
    const bOrder = sectionOrderMap.get(b.title) ?? Number.MAX_SAFE_INTEGER;
    return aOrder - bOrder;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-14 lg:px-10">
        <header className="mb-12 border-b border-lime-400/20 pb-8">
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-lime-300/80 uppercase">Private page</p>
          <h1 className="text-balance text-4xl leading-tight font-semibold text-slate-50 sm:text-5xl">
            Job Hunt Guide
          </h1>
          {intro ? <p className="mt-4 max-w-2xl text-base text-slate-300">{intro}</p> : null}
        </header>

        <main className="space-y-8">
          {orderedSections.map((section) => (
            <section key={section.title} className="glass-card p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-semibold text-lime-300">{section.title}</h2>
              <ul className="space-y-4 text-slate-200">
                {section.items.map((item) => (
                  <li key={item} className="relative pl-5 leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="absolute top-[0.65rem] left-0 h-1.5 w-1.5 rounded-full bg-lime-300"
                    />
                    {renderInlineMarkdown(item)}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}