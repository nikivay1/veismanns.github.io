import { shared } from '../shared';
import type { PortfolioContent } from '../types';

export const en = {
    meta: {
      title: 'Nikita Veisman — Senior Frontend Developer',
      description: 'Senior Frontend Developer specializing in React, Vue, TypeScript, performance, and scalable frontend architecture.',
      ogDescription: 'Frontend architecture, performance, and reliable product engineering.',
      skipToContent: 'Skip to content',
    },
    sidebar: {
      ariaLabel: 'Profile and navigation',
      backToTopLabel: 'Back to top',
      downloadLabel: 'Download CV',
      availability: 'Open to work',
      name: ['Nikita', 'Veisman'],
      role: ['Senior Frontend', 'Developer'],
      locationLabel: 'Based in',
      location: 'Valencia, Spain',
      timeLabel: 'Working time',
      time: 'CET / CEST',
      coreSkillsLabel: 'Core skills',
      coreSkills: shared.coreSkills,
      socialLabel: 'Social',
      socialLinks: shared.socialLinks.map((link) => ({ ...link, ariaLabel: `Nikita Veisman on ${link.network === 'telegram' ? 'Telegram' : link.network === 'linkedin' ? 'LinkedIn' : 'GitHub'}` })),
      navigationLabel: 'Main navigation',
      navigation: [
        { number: '01', label: 'About', href: '#about' },
        { number: '02', label: 'Experience', href: '#work' },
        { number: '03', label: 'Skills', href: '#toolkit' },
        { number: '04', label: 'Contact', href: '#contact' },
      ],
      languageLabel: 'Language',
    },
    about: {
      index: '01',
      title: 'About',
      summary: [
        'Senior Frontend Developer with 6+ years of experience building high-load web and cross-platform applications.',
        'Contributed to international products, including a crypto wallet with Web3 integrations and enterprise-grade systems, with a focus on frontend architecture, performance, reliability, and maintainability.',
        'Skilled in modernizing legacy codebases, leading TypeScript migrations, and designing scalable frontend solutions in close collaboration with backend and product teams.',
      ],
      impactAriaLabel: 'Selected impact',
      impact: [['½', 'load time'], ['4×', 'onboarding speed'], ['30%', 'reliability gain']],
      facts: [
        { label: 'Languages', lines: ['Russian · Native', 'English · B1', 'Spanish - A1'] },
        { label: 'Education', lines: ['Information Technology & Higher Mathematics', 'Ivanovo State University'] },
        { label: 'Base', lines: ['Valencia, Spain'] },
      ],
    },
    experience: {
      index: '02',
      title: 'Experience',
      technologiesLabel: 'Technologies',
      jobs: [
        {
          period: '2024 — 2026', company: 'Atomic Wallet', location: 'Estonia · International', role: 'Frontend / Mobile Developer',
          summary: 'Frontend architecture for a high-load cryptocurrency wallet, focused on performance, security, stability, and developer experience.',
          impact: [['40 → 20s', 'mobile load time'], ['4×', 'faster onboarding'], ['20%', 'faster token refresh']],
          work: [
            'I refined the backend authorization logic during the transition from a JWT-based scheme to server-side sessions: I implemented server-side user session management and integrated it with the client application, which improved security and control over critical login scenarios.',
            'Reworked token balance calculation and transaction-processing algorithms, reducing data inconsistencies and decreasing token refresh and calculation time by 20%.',
            'Reduced mobile application load time from 40 to 20 seconds by introducing the p-queue library for new processing logic and optimizing token loading.',
            'Improved the team’s developer experience by reworking build and local development workflows, extracting a dedicated Webpack configuration for development, and introducing Docker, which reduced new developer onboarding time by 4x.',
          ],
          stack: ['Vue', 'Web3.js', 'Node.js', 'Webpack', 'Docker'],
        },
        {
          period: '2022 — 2024', company: 'OPUS', location: 'Japan · International', role: 'Frontend / Mobile Developer',
          summary: 'Cross-platform product engineering at a large-scale full-cycle software company.',
          impact: [['+30%', 'notification reliability'], ['−30%', 'unnecessary re-renders']],
          work: [
            'Improved release stability by establishing a practice of validating critical user scenarios before production releases, eliminating key defects before deployment and reducing the volume of urgent post-release fixes.',
            'Redesigned the notification delivery flow in a desktop application, increasing delivery reliability by 30% and reducing the risk of missing important user events.',
            'Led a systematic legacy code refactor by decomposing overloaded components, removing duplicated logic, and optimizing rendering, which reduced unnecessary re-renders by 30%.',
          ],
          stack: ['Vue', 'Electron', 'Cordova', 'TypeScript', 'Playwright'],
        },
        {
          period: '2020 — 2022', company: 'IT2G', location: 'Russia', role: 'Frontend Developer',
          summary: 'Frontend delivery and technical leadership for full-cycle systems integration projects.',
          impact: [['2×', 'fewer frame drops'], ['−20%', 'development errors']],
          work: [
            'Improved sprint planning and task decomposition, increasing team delivery predictability and reducing development errors by 20%.',
            'Optimized interface performance on mobile devices by replacing resource-intensive CSS animations with requestAnimationFrame-based logic and reducing unnecessary re-renders with React.memo, which cut frame drops on low-end devices by 2x.',
            'Led a team of developers, defined technical approaches, and broke complex functionality into executable tasks, improving team efficiency and reducing issues during development.',
          ],
          stack: ['React', 'Redux', 'TypeScript', 'Sass'],
        },
        {
          period: '2019 — 2020', company: 'LIVREZON', location: 'Russia', role: 'Fullstack Developer',
          summary: 'A platform for creating educational and publishing content.',
          impact: [['Kafka', 'service communication']],
          work: [
            'Improved application scalability by designing and implementing a service communication system and interaction rules using Kafka.',
            'Simplified application navigation and improved overall performance by developing a new interface, introducing new logic, and optimizing the product for different devices.',
          ],
          stack: ['React', 'Python', 'Kafka', 'REST API'],
        },
      ],
    },
    toolkit: {
      index: '03', title: 'Skills',
      groups: shared.toolkitGroups,
    },
    contact: {
      index: '04', title: 'Contact', heading: ['Let’s make', 'the complex', 'clear.'],
      links: [{ label: 'Email', ...shared.contacts.email }, { label: 'Telegram', ...shared.contacts.telegram, external: true }, { label: 'LinkedIn', ...shared.contacts.linkedin, external: true }, { label: 'GitHub', ...shared.contacts.github, external: true }],
    },
    footer: { copyright: 'Nikita Veisman', note: 'Built for speed · No client-side framework', backToTop: 'Back to top ↑' },
  } satisfies PortfolioContent;
