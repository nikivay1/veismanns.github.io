export const locales = ['en', 'ru', 'es'] as const;

export type Locale = (typeof locales)[number];
export type Impact = readonly [value: string, label: string];

export interface LocaleLink {
  code: Locale;
  label: string;
  href: string;
  ariaLabel: string;
}

export interface NavigationItem {
  number: string;
  label: string;
  href: string;
}

export interface SocialLink {
  network: 'telegram' | 'linkedin';
  href: string;
  ariaLabel: string;
}

export interface SidebarContent {
  ariaLabel: string;
  backToTopLabel: string;
  downloadLabel: string;
  availability: string;
  name: readonly [string, string];
  role: readonly [string, string];
  locationLabel: string;
  location: string;
  timeLabel: string;
  time: string;
  coreSkillsLabel: string;
  coreSkills: readonly string[];
  socialLabel: string;
  socialLinks: readonly SocialLink[];
  navigationLabel: string;
  navigation: readonly NavigationItem[];
  languageLabel: string;
}

export interface AboutContent {
  index: string;
  title: string;
  summary: readonly string[];
  impactAriaLabel: string;
  impact: readonly Impact[];
  facts: readonly { label: string; lines: readonly string[] }[];
}

export interface Experience {
  period: string;
  company: string;
  location: string;
  role: string;
  summary: string;
  impact: readonly Impact[];
  work: readonly string[];
  stack: readonly string[];
}

export interface ExperienceContent {
  index: string;
  title: string;
  technologiesLabel: string;
  jobs: readonly Experience[];
}

export interface ToolkitContent {
  index: string;
  title: string;
  groups: readonly { title: string; skills: readonly string[] }[];
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export interface ContactContent {
  index: string;
  title: string;
  heading: readonly [string, string, string];
  links: readonly ContactLink[];
}

export interface FooterContent {
  copyright: string;
  note: string;
  backToTop: string;
}

export interface PortfolioContent {
  meta: {
    title: string;
    description: string;
    ogDescription: string;
    skipToContent: string;
  };
  sidebar: SidebarContent;
  about: AboutContent;
  experience: ExperienceContent;
  toolkit: ToolkitContent;
  contact: ContactContent;
  footer: FooterContent;
}

const shared = {
  coreSkills: ['TypeScript', 'React', 'Vue', 'Architecture', 'Performance', 'Web3'],
  socialLinks: [
    { network: 'telegram', href: 'https://t.me/veismanns' },
    { network: 'linkedin', href: 'https://www.linkedin.com/in/veismanns' },
  ] as const,
  contacts: {
    email: { value: 'nikivay312@gmail.com', href: 'mailto:nikivay312@gmail.com' },
    telegram: { value: '@veismanns', href: 'https://t.me/veismanns' },
    linkedin: { value: '/in/veismanns', href: 'https://www.linkedin.com/in/veismanns' },
  },
};

export const content: Record<Locale, PortfolioContent> = {
  en: {
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
      availability: 'Available for selected projects',
      name: ['Nikita', 'Veisman'],
      role: ['Senior Frontend', 'Developer'],
      locationLabel: 'Based in',
      location: 'Valencia, Spain',
      timeLabel: 'Working time',
      time: 'CET / CEST',
      coreSkillsLabel: 'Core skills',
      coreSkills: shared.coreSkills,
      socialLabel: 'Social',
      socialLinks: shared.socialLinks.map((link) => ({ ...link, ariaLabel: `Nikita Veisman on ${link.network === 'telegram' ? 'Telegram' : 'LinkedIn'}` })),
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
        { label: 'Languages', lines: ['Russian · Native', 'English · B1'] },
        { label: 'Education', lines: ['Information Technology & Higher Mathematics', 'Ivanovo State University'] },
        { label: 'Base', lines: ['Valencia, Spain', 'Also available from Tbilisi, Georgia'] },
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
          work: ['Integrated server-side session management during the move away from JWT-based authorization.', 'Reworked token balance and transaction-processing algorithms to reduce data inconsistencies.', 'Rebuilt development workflows around a dedicated Webpack setup and Docker.'],
          stack: ['Vue', 'Web3.js', 'Node.js', 'Webpack', 'Docker'],
        },
        {
          period: '2022 — 2024', company: 'OPUS', location: 'Japan · International', role: 'Frontend / Mobile Developer',
          summary: 'Cross-platform product engineering at a large-scale full-cycle software company.',
          impact: [['+30%', 'notification reliability'], ['−30%', 'unnecessary re-renders']],
          work: ['Established pre-production validation of critical user journeys to improve release stability.', 'Redesigned desktop notification delivery to reduce missed user events.', 'Led a systematic legacy refactor: smaller components, less duplication, leaner rendering.'],
          stack: ['Vue', 'Electron', 'Cordova', 'TypeScript', 'Playwright'],
        },
        {
          period: '2020 — 2022', company: 'IT2G', location: 'Russia', role: 'Frontend Developer',
          summary: 'Frontend delivery and technical leadership for full-cycle systems integration projects.',
          impact: [['2×', 'fewer frame drops'], ['−20%', 'development errors']],
          work: ['Optimized low-end mobile performance with requestAnimationFrame and React.memo.', 'Improved sprint planning and task decomposition for more predictable delivery.', 'Led developers, set technical direction, and broke complex features into executable work.'],
          stack: ['React', 'Redux', 'TypeScript', 'Sass'],
        },
        {
          period: '2019 — 2020', company: 'LIVREZON', location: 'Russia', role: 'Fullstack Developer',
          summary: 'A platform for creating educational and publishing content.',
          impact: [['Kafka', 'service communication']],
          work: ['Designed service communication rules and implemented them with Kafka.', 'Built a new responsive interface and simplified product navigation.'],
          stack: ['React', 'Python', 'Kafka', 'REST API'],
        },
      ],
    },
    toolkit: {
      index: '03', title: 'Skills',
      groups: [
        { title: 'Core', skills: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
        { title: 'Frontend', skills: ['React', 'Vue', 'Redux', 'Vuex', 'Sass', 'Less'] },
        { title: 'Product surfaces', skills: ['Web', 'Electron', 'Cordova', 'Cross-platform mobile'] },
        { title: 'Backend & Web3', skills: ['Node.js', 'Python', 'REST API', 'Web3.js', 'Kafka'] },
        { title: 'Delivery', skills: ['Playwright', 'Webpack', 'Babel', 'Docker', 'Git', 'Jira'] },
      ],
    },
    contact: {
      index: '04', title: 'Contact', heading: ['Let’s make', 'the complex', 'clear.'],
      links: [{ label: 'Email', ...shared.contacts.email }, { label: 'Telegram', ...shared.contacts.telegram, external: true }, { label: 'LinkedIn', ...shared.contacts.linkedin, external: true }],
    },
    footer: { copyright: 'Nikita Veisman', note: 'Built for speed · No client-side framework', backToTop: 'Back to top ↑' },
  },
  ru: {
    meta: {
      title: 'Никита Вейсман — Senior Frontend Developer',
      description: 'Senior Frontend Developer: React, Vue, TypeScript, производительность и масштабируемая frontend-архитектура.',
      ogDescription: 'Frontend-архитектура, производительность и надёжная продуктовая разработка.',
      skipToContent: 'Перейти к содержанию',
    },
    sidebar: {
      ariaLabel: 'Профиль и навигация', backToTopLabel: 'Наверх', downloadLabel: 'Скачать CV', availability: 'Открыт для интересных проектов',
      name: ['Никита', 'Вейсман'], role: ['Senior Frontend', 'Developer'], locationLabel: 'Живу в', location: 'Валенсия, Испания', timeLabel: 'Рабочее время', time: 'CET / CEST',
      coreSkillsLabel: 'Основные навыки', coreSkills: shared.coreSkills, socialLabel: 'Соцсети',
      socialLinks: shared.socialLinks.map((link) => ({ ...link, ariaLabel: `Никита Вейсман в ${link.network === 'telegram' ? 'Telegram' : 'LinkedIn'}` })),
      navigationLabel: 'Основная навигация',
      navigation: [{ number: '01', label: 'Обо мне', href: '#about' }, { number: '02', label: 'Опыт', href: '#work' }, { number: '03', label: 'Навыки', href: '#toolkit' }, { number: '04', label: 'Контакты', href: '#contact' }],
      languageLabel: 'Язык',
    },
    about: {
      index: '01', title: 'Обо мне',
      summary: [
        'Senior Frontend Developer с более чем 6-летним опытом разработки высоконагруженных веб- и кроссплатформенных приложений.',
        'Участвовал в создании международных продуктов, включая криптовалютный кошелёк с интеграциями Web3 и системы корпоративного уровня, уделяя особое внимание frontend-архитектуре, производительности, надёжности и сопровождаемости.',
        'Имею опыт модернизации legacy-кода, руководства миграциями на TypeScript и проектирования масштабируемых frontend-решений в тесном сотрудничестве с backend- и product-командами.',
      ],
      impactAriaLabel: 'Ключевые результаты', impact: [['½', 'время загрузки'], ['4×', 'быстрее onboarding'], ['30%', 'рост надёжности']],
      facts: [{ label: 'Языки', lines: ['Русский · Родной', 'Английский · B1'] }, { label: 'Образование', lines: ['Информационные технологии и высшая математика', 'Ивановский государственный университет'] }, { label: 'Локация', lines: ['Валенсия, Испания', 'Также доступен из Тбилиси, Грузия'] }],
    },
    experience: {
      index: '02', title: 'Опыт', technologiesLabel: 'Технологии',
      jobs: [
        { period: '2024 — 2026', company: 'Atomic Wallet', location: 'Эстония · Международная команда', role: 'Frontend / Mobile Developer', summary: 'Frontend-архитектура высоконагруженного криптовалютного кошелька с фокусом на производительность, безопасность, стабильность и developer experience.', impact: [['40 → 20с', 'загрузка приложения'], ['4×', 'быстрее onboarding'], ['20%', 'быстрее обновление токенов']], work: ['Интегрировал серверное управление сессиями при отказе от JWT-авторизации.', 'Переработал алгоритмы балансов и транзакций, сократив расхождения данных.', 'Перестроил процессы разработки вокруг выделенной конфигурации Webpack и Docker.'], stack: ['Vue', 'Web3.js', 'Node.js', 'Webpack', 'Docker'] },
        { period: '2022 — 2024', company: 'OPUS', location: 'Япония · Международная команда', role: 'Frontend / Mobile Developer', summary: 'Кроссплатформенная продуктовая разработка в крупной компании полного цикла.', impact: [['+30%', 'надёжность уведомлений'], ['−30%', 'лишние перерисовки']], work: ['Внедрил предпродакшн-проверку критических пользовательских сценариев.', 'Перепроектировал доставку desktop-уведомлений, сократив число пропущенных событий.', 'Провёл системный рефакторинг legacy-кода: меньше компонентов, дублирования и лишнего рендеринга.'], stack: ['Vue', 'Electron', 'Cordova', 'TypeScript', 'Playwright'] },
        { period: '2020 — 2022', company: 'IT2G', location: 'Россия', role: 'Frontend Developer', summary: 'Frontend-разработка и техническое лидерство в проектах системной интеграции полного цикла.', impact: [['2×', 'меньше потерь кадров'], ['−20%', 'ошибок разработки']], work: ['Оптимизировал работу на слабых мобильных устройствах с requestAnimationFrame и React.memo.', 'Улучшил планирование спринтов и декомпозицию задач для предсказуемой поставки.', 'Руководил разработчиками, задавал техническое направление и декомпозировал сложные функции.'], stack: ['React', 'Redux', 'TypeScript', 'Sass'] },
        { period: '2019 — 2020', company: 'LIVREZON', location: 'Россия', role: 'Fullstack Developer', summary: 'Платформа для создания образовательного и издательского контента.', impact: [['Kafka', 'связь сервисов']], work: ['Спроектировал правила взаимодействия сервисов и реализовал их с Kafka.', 'Создал новый адаптивный интерфейс и упростил навигацию продукта.'], stack: ['React', 'Python', 'Kafka', 'REST API'] },
      ],
    },
    toolkit: {
      index: '03', title: 'Навыки',
      groups: [
        { title: 'Основа', skills: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
        { title: 'Frontend', skills: ['React', 'Vue', 'Redux', 'Vuex', 'Sass', 'Less'] },
        { title: 'Платформы', skills: ['Web', 'Electron', 'Cordova', 'Кроссплатформенная mobile-разработка'] },
        { title: 'Backend и Web3', skills: ['Node.js', 'Python', 'REST API', 'Web3.js', 'Kafka'] },
        { title: 'Поставка', skills: ['Playwright', 'Webpack', 'Babel', 'Docker', 'Git', 'Jira'] },
      ],
    },
    contact: {
      index: '04', title: 'Контакты', heading: ['Давайте сделаем', 'сложное', 'понятным.'],
      links: [{ label: 'Почта', ...shared.contacts.email }, { label: 'Telegram', ...shared.contacts.telegram, external: true }, { label: 'LinkedIn', ...shared.contacts.linkedin, external: true }],
    },
    footer: { copyright: 'Никита Вейсман', note: 'Создан для скорости · Без клиентского фреймворка', backToTop: 'Наверх ↑' },
  },
  es: {
    meta: {
      title: 'Nikita Veisman — Senior Frontend Developer',
      description: 'Senior Frontend Developer especializado en React, Vue, TypeScript, rendimiento y arquitectura frontend escalable.',
      ogDescription: 'Arquitectura frontend, rendimiento y desarrollo de producto fiable.',
      skipToContent: 'Ir al contenido',
    },
    sidebar: {
      ariaLabel: 'Perfil y navegación', backToTopLabel: 'Volver arriba', downloadLabel: 'Descargar CV', availability: 'Disponible para proyectos seleccionados',
      name: ['Nikita', 'Veisman'], role: ['Senior Frontend', 'Developer'], locationLabel: 'Vivo en', location: 'Valencia, España', timeLabel: 'Horario de trabajo', time: 'CET / CEST',
      coreSkillsLabel: 'Habilidades clave', coreSkills: shared.coreSkills, socialLabel: 'Redes',
      socialLinks: shared.socialLinks.map((link) => ({ ...link, ariaLabel: `Nikita Veisman en ${link.network === 'telegram' ? 'Telegram' : 'LinkedIn'}` })),
      navigationLabel: 'Navegación principal',
      navigation: [{ number: '01', label: 'Perfil', href: '#about' }, { number: '02', label: 'Experiencia', href: '#work' }, { number: '03', label: 'Habilidades', href: '#toolkit' }, { number: '04', label: 'Contacto', href: '#contact' }],
      languageLabel: 'Idioma',
    },
    about: {
      index: '01', title: 'Perfil',
      summary: [
        'Senior Frontend Developer con más de 6 años de experiencia en el desarrollo de aplicaciones web de alta carga y aplicaciones multiplataforma.',
        'Participé en productos internacionales, entre ellos una cartera de criptomonedas con integraciones Web3 y sistemas de nivel empresarial, con especial atención a la arquitectura frontend, el rendimiento, la fiabilidad y la mantenibilidad.',
        'Experiencia en la modernización de código legacy, el liderazgo de migraciones a TypeScript y el diseño de soluciones frontend escalables en estrecha colaboración con equipos de backend y producto.',
      ],
      impactAriaLabel: 'Resultados destacados', impact: [['½', 'tiempo de carga'], ['4×', 'onboarding más rápido'], ['30%', 'más fiabilidad']],
      facts: [{ label: 'Idiomas', lines: ['Ruso · Nativo', 'Inglés · B1'] }, { label: 'Formación', lines: ['Tecnologías de la Información y Matemáticas Superiores', 'Universidad Estatal de Ivánovo'] }, { label: 'Ubicación', lines: ['Valencia, España', 'También disponible desde Tiflis, Georgia'] }],
    },
    experience: {
      index: '02', title: 'Experiencia', technologiesLabel: 'Tecnologías',
      jobs: [
        { period: '2024 — 2026', company: 'Atomic Wallet', location: 'Estonia · Internacional', role: 'Frontend / Mobile Developer', summary: 'Arquitectura frontend para una cartera de criptomonedas de alta carga, centrada en rendimiento, seguridad, estabilidad y experiencia de desarrollo.', impact: [['40 → 20s', 'carga móvil'], ['4×', 'onboarding más rápido'], ['20%', 'actualización de tokens']], work: ['Integré la gestión de sesiones del servidor durante la migración desde la autorización basada en JWT.', 'Reestructuré los algoritmos de saldos y transacciones para reducir inconsistencias de datos.', 'Renové los flujos de desarrollo con una configuración dedicada de Webpack y Docker.'], stack: ['Vue', 'Web3.js', 'Node.js', 'Webpack', 'Docker'] },
        { period: '2022 — 2024', company: 'OPUS', location: 'Japón · Internacional', role: 'Frontend / Mobile Developer', summary: 'Desarrollo de producto multiplataforma en una gran empresa de software de ciclo completo.', impact: [['+30%', 'fiabilidad de avisos'], ['−30%', 'renders innecesarios']], work: ['Establecí la validación previa a producción de los recorridos críticos del usuario.', 'Rediseñé la entrega de notificaciones de escritorio para reducir eventos perdidos.', 'Lideré una refactorización sistemática del código legacy: componentes más pequeños, menos duplicación y renderizado más eficiente.'], stack: ['Vue', 'Electron', 'Cordova', 'TypeScript', 'Playwright'] },
        { period: '2020 — 2022', company: 'IT2G', location: 'Rusia', role: 'Frontend Developer', summary: 'Desarrollo frontend y liderazgo técnico para proyectos de integración de sistemas de ciclo completo.', impact: [['2×', 'menos frames perdidos'], ['−20%', 'errores de desarrollo']], work: ['Optimicé el rendimiento en móviles de gama baja con requestAnimationFrame y React.memo.', 'Mejoré la planificación de sprints y la descomposición de tareas para una entrega más predecible.', 'Lideré desarrolladores, definí la dirección técnica y convertí funciones complejas en trabajo ejecutable.'], stack: ['React', 'Redux', 'TypeScript', 'Sass'] },
        { period: '2019 — 2020', company: 'LIVREZON', location: 'Rusia', role: 'Fullstack Developer', summary: 'Plataforma para crear contenido educativo y editorial.', impact: [['Kafka', 'comunicación entre servicios']], work: ['Diseñé las reglas de comunicación entre servicios y las implementé con Kafka.', 'Construí una nueva interfaz responsive y simplifiqué la navegación del producto.'], stack: ['React', 'Python', 'Kafka', 'REST API'] },
      ],
    },
    toolkit: {
      index: '03', title: 'Habilidades',
      groups: [
        { title: 'Base', skills: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
        { title: 'Frontend', skills: ['React', 'Vue', 'Redux', 'Vuex', 'Sass', 'Less'] },
        { title: 'Plataformas', skills: ['Web', 'Electron', 'Cordova', 'Mobile multiplataforma'] },
        { title: 'Backend y Web3', skills: ['Node.js', 'Python', 'REST API', 'Web3.js', 'Kafka'] },
        { title: 'Entrega', skills: ['Playwright', 'Webpack', 'Babel', 'Docker', 'Git', 'Jira'] },
      ],
    },
    contact: {
      index: '04', title: 'Contacto', heading: ['Hagamos', 'lo complejo', 'claro.'],
      links: [{ label: 'Email', ...shared.contacts.email }, { label: 'Telegram', ...shared.contacts.telegram, external: true }, { label: 'LinkedIn', ...shared.contacts.linkedin, external: true }],
    },
    footer: { copyright: 'Nikita Veisman', note: 'Creado para la velocidad · Sin framework en el cliente', backToTop: 'Volver arriba ↑' },
  },
};

export function getContent(locale: Locale): PortfolioContent {
  return content[locale];
}

export function getLocaleLinks(currentLocale: Locale): readonly LocaleLink[] {
  const labels: Record<Locale, string> = { en: 'English', ru: 'Русский', es: 'Español' };
  const paths: Record<Locale, string> = { en: '/', ru: '/ru/', es: '/es/' };

  return locales.map((code) => ({
    code,
    label: code.toUpperCase(),
    href: paths[code],
    ariaLabel: `${labels[code]}${code === currentLocale ? ' — current language' : ''}`,
  }));
}
