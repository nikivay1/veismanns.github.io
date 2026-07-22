import { shared } from '../shared';
import type { PortfolioContent } from '../types';

export const ru = {
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
      socialLinks: shared.socialLinks.map((link) => ({ ...link, ariaLabel: `Никита Вейсман в ${link.network === 'telegram' ? 'Telegram' : link.network === 'linkedin' ? 'LinkedIn' : 'GitHub'}` })),
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
      groups: shared.toolkitGroups,
    },
    contact: {
      index: '04', title: 'Контакты', heading: ['Давайте сделаем', 'сложное', 'понятным.'],
      links: [{ label: 'Почта', ...shared.contacts.email }, { label: 'Telegram', ...shared.contacts.telegram, external: true }, { label: 'LinkedIn', ...shared.contacts.linkedin, external: true }, { label: 'GitHub', ...shared.contacts.github, external: true }],
    },
    footer: { copyright: 'Никита Вейсман', note: 'Создан для скорости · Без клиентского фреймворка', backToTop: 'Наверх ↑' },
  } satisfies PortfolioContent;
