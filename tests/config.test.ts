import { config } from '@/config';

/** Icon names that are registered in Icon.tsx */
const REGISTERED_ICONS = new Set([
  'Cloud', 'Terminal', 'Layout', 'GitBranch', 'Network', 'Shield',
  'Award', 'Monitor', 'Server', 'Package', 'GitMerge', 'Database',
  'Activity', 'FlaskConical', 'Bot', 'Users', 'BookOpen',
  'GraduationCap', 'Zap', 'Mountain', 'Wind', 'Box', 'Layers',
  'Gamepad2', 'Star', 'Circle',
]);

describe('config — meta', () => {
  it('config_meta_hasTitle', () => {
    expect(config.meta.title).toBeTruthy();
  });

  it('config_meta_hasDescription', () => {
    expect(config.meta.description).toBeTruthy();
  });

  it('config_meta_githubUrlIsHttps', () => {
    expect(config.meta.githubUrl).toMatch(/^https?:\/\//);
  });

  it('config_meta_linkedinUrlIsHttps', () => {
    expect(config.meta.linkedinUrl).toMatch(/^https?:\/\//);
  });

  it('config_meta_resumeUrlIsDefined', () => {
    expect(config.meta.resumeUrl).toBeTruthy();
  });
});

describe('config — hero', () => {
  it('config_hero_hasGreeting', () => {
    expect(config.hero.greeting).toBeTruthy();
  });

  it('config_hero_hasName', () => {
    expect(config.hero.name).toBeTruthy();
  });

  it('config_hero_hasAtLeastOneTagline', () => {
    expect(config.hero.taglines.length).toBeGreaterThanOrEqual(1);
  });

  it('config_hero_taglines_eachUnder60Chars', () => {
    config.hero.taglines.forEach((tagline) => {
      expect(tagline.length).toBeLessThanOrEqual(60);
    });
  });

  it('config_hero_hasAtLeastOneBioParagraph', () => {
    expect(config.hero.bio.length).toBeGreaterThanOrEqual(1);
  });

  it('config_hero_ctaHasLabelAndHref', () => {
    expect(config.hero.cta.label).toBeTruthy();
    expect(config.hero.cta.href).toBeTruthy();
  });
});

describe('config — experience', () => {
  it('config_experience_hasAtLeastOneEntry', () => {
    expect(config.experience.entries.length).toBeGreaterThanOrEqual(1);
  });

  it('config_experience_eachEntry_hasRequiredFields', () => {
    config.experience.entries.forEach((entry) => {
      expect(entry.id).toBeTruthy();
      expect(entry.company).toBeTruthy();
      expect(entry.role).toBeTruthy();
      expect(entry.period).toBeTruthy();
      expect(entry.summary).toBeTruthy();
    });
  });

  it('config_experience_eachEntry_hasHighlights', () => {
    config.experience.entries.forEach((entry) => {
      expect(entry.highlights.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('config_experience_eachEntry_hasTechnologies', () => {
    config.experience.entries.forEach((entry) => {
      expect(entry.technologies.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('config_experience_entryIds_areUnique', () => {
    const ids = config.experience.entries.map((e) => e.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});

describe('config — skills', () => {
  it('config_skills_hasAtLeastOneCategory', () => {
    expect(config.skills.length).toBeGreaterThanOrEqual(1);
  });

  it('config_skills_eachCategory_hasRequiredFields', () => {
    config.skills.forEach((category) => {
      expect(category.category).toBeTruthy();
      expect(category.icon).toBeTruthy();
      expect(category.skills.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('config_skills_eachCategory_iconIsRegistered', () => {
    config.skills.forEach((category) => {
      expect(REGISTERED_ICONS.has(category.icon)).toBe(true);
    });
  });

  it('config_skills_eachSkill_levelIsBetween1And5', () => {
    config.skills.forEach((category) => {
      category.skills.forEach((skill) => {
        expect(skill.level).toBeGreaterThanOrEqual(1);
        expect(skill.level).toBeLessThanOrEqual(5);
      });
    });
  });
});

describe('config — projects', () => {
  it('config_projects_hasAtLeastOneEntry', () => {
    expect(config.projects.length).toBeGreaterThanOrEqual(1);
  });

  it('config_projects_eachProject_hasRequiredFields', () => {
    config.projects.forEach((project) => {
      expect(project.id).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.impact).toBeTruthy();
      expect(project.technologies.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('config_projects_ids_areUnique', () => {
    const ids = config.projects.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});

describe('config — githubProjects', () => {
  it('config_githubProjects_hasAtLeastOneEntry', () => {
    expect(config.githubProjects.length).toBeGreaterThanOrEqual(1);
  });

  it('config_githubProjects_eachProject_hasRequiredFields', () => {
    config.githubProjects.forEach((project) => {
      expect(project.id).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.repo).toBeTruthy();
      expect(project.description).toBeTruthy();
    });
  });

  it('config_githubProjects_repoFields_areOwnerSlashRepo', () => {
    // repo stores GitHub short-form paths (e.g. "PseudoCoding/repo-name")
    config.githubProjects.forEach((project) => {
      expect(project.repo).toMatch(/^[^/]+\/[^/]+$/);
    });
  });
});

describe('config — education', () => {
  it('config_education_hasAtLeastOneEntry', () => {
    expect(config.education.length).toBeGreaterThanOrEqual(1);
  });

  it('config_education_eachEntry_hasRequiredFields', () => {
    config.education.forEach((entry) => {
      expect(entry.institution).toBeTruthy();
      expect(entry.degree).toBeTruthy();
      expect(entry.field).toBeTruthy();
      expect(entry.year).toBeTruthy();
    });
  });
});

describe('config — certifications', () => {
  it('config_certifications_eachCert_hasRequiredFields', () => {
    config.certifications.forEach((cert) => {
      expect(cert.name).toBeTruthy();
      expect(cert.issuer).toBeTruthy();
    });
  });
});

describe('config — community', () => {
  it('config_community_hasAtLeastOneEntry', () => {
    expect(config.community.length).toBeGreaterThanOrEqual(1);
  });

  it('config_community_eachEntry_hasRequiredFields', () => {
    config.community.forEach((entry) => {
      expect(entry.title).toBeTruthy();
      expect(entry.description).toBeTruthy();
      expect(entry.icon).toBeTruthy();
    });
  });

  it('config_community_eachEntry_iconIsRegistered', () => {
    config.community.forEach((entry) => {
      expect(REGISTERED_ICONS.has(entry.icon)).toBe(true);
    });
  });
});

describe('config — hobbies', () => {
  it('config_hobbies_hasAtLeastOneEntry', () => {
    expect(config.hobbies.length).toBeGreaterThanOrEqual(1);
  });

  it('config_hobbies_eachHobby_hasRequiredFields', () => {
    config.hobbies.forEach((hobby) => {
      expect(hobby.name).toBeTruthy();
      expect(hobby.icon).toBeTruthy();
      expect(hobby.description).toBeTruthy();
    });
  });

  it('config_hobbies_eachHobby_iconIsRegistered', () => {
    config.hobbies.forEach((hobby) => {
      expect(REGISTERED_ICONS.has(hobby.icon)).toBe(true);
    });
  });
});

describe('config — testimonials', () => {
  it('config_testimonials_eachTestimonial_hasRequiredFields', () => {
    config.testimonials.forEach((testimonial) => {
      expect(testimonial.quote).toBeTruthy();
      expect(testimonial.author).toBeTruthy();
      expect(testimonial.role).toBeTruthy();
      expect(testimonial.company).toBeTruthy();
    });
  });
});

describe('config — contact', () => {
  it('config_contact_hasHeading', () => {
    expect(config.contact.heading).toBeTruthy();
  });

  it('config_contact_hasSubheading', () => {
    expect(config.contact.subheading).toBeTruthy();
  });
});
