import { shared } from '../shared';
import type { PortfolioContent } from '../types';

export const es = {
    meta: {
      title: 'Nikita Veisman — Senior Frontend Developer',
      description: 'Senior Frontend Developer especializado en React, Vue, TypeScript, rendimiento y arquitectura frontend escalable.',
      ogDescription: 'Arquitectura frontend, rendimiento y desarrollo de producto fiable.',
      skipToContent: 'Ir al contenido',
    },
    sidebar: {
      ariaLabel: 'Perfil y navegación',
      backToTopLabel: 'Volver arriba',
      downloadLabel: 'Descargar CV',
      availability: 'Disponible para trabajar',
      name: ['Nikita', 'Veisman'], role: ['Senior Frontend', 'Developer'],
      locationLabel: 'Vivo en',
      location: 'Valencia, España',
      timeLabel: 'Horario de trabajo',
      time: 'CET / CEST',
      coreSkillsLabel: 'Habilidades clave',
      coreSkills: shared.coreSkills,
      socialLabel: 'Redes',
      socialLinks: shared.socialLinks.map((link) => ({ ...link, ariaLabel: `Nikita Veisman en ${link.network === 'telegram' ? 'Telegram' : link.network === 'linkedin' ? 'LinkedIn' : 'GitHub'}` })),
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
      facts: [{ label: 'Idiomas', lines: ['Ruso · Nativo', 'Inglés · B1', 'Español · A2'] }, { label: 'Formación', lines: ['Tecnologías de la Información y Matemáticas Superiores', 'Universidad Estatal de Ivánovo'] }, { label: 'Ubicación', lines: ['Valencia, España'] }],
    },
    experience: {
      index: '02', title: 'Experiencia', technologiesLabel: 'Tecnologías',
      jobs: [
        { period: '2024 — 2026', company: 'Atomic Wallet', location: 'Estonia · Internacional', role: 'Frontend / Mobile Developer', summary: 'Arquitectura frontend para una cartera de criptomonedas de alta carga, centrada en rendimiento, seguridad, estabilidad y experiencia de desarrollo.', impact: [['40 → 20s', 'carga móvil'], ['4×', 'onboarding más rápido'], ['20%', 'actualización de tokens']], work: ['Perfeccioné la lógica de autorización del backend durante la transición de un esquema basado en JWT a sesiones del servidor: implementé la gestión de sesiones de usuario en el servidor y la integré con la aplicación cliente, mejorando la seguridad y el control de los escenarios críticos de inicio de sesión.', 'Reestructuré los algoritmos de cálculo del saldo de tokens y procesamiento de transacciones, reduciendo las inconsistencias de datos y disminuyendo en un 20% el tiempo de actualización y cálculo de tokens.', 'Reduje el tiempo de carga de la aplicación móvil de 40 a 20 segundos al introducir la biblioteca p-queue para la nueva lógica de procesamiento y optimizar la carga de tokens.', 'Mejoré la experiencia de desarrollo del equipo al renovar los flujos de compilación y desarrollo local, extraer una configuración de Webpack específica para desarrollo e introducir Docker, lo que redujo cuatro veces el tiempo de onboarding de nuevos desarrolladores.'], stack: ['Vue', 'Web3.js', 'Node.js', 'Webpack', 'Docker'] },
        { period: '2022 — 2024', company: 'OPUS', location: 'Japón · Internacional', role: 'Frontend / Mobile Developer', summary: 'Desarrollo de producto multiplataforma en una gran empresa de software de ciclo completo.', impact: [['+30%', 'fiabilidad de avisos'], ['−30%', 'renders innecesarios']], work: ['Mejoré la estabilidad de las versiones al establecer la práctica de validar escenarios críticos de usuario antes de los lanzamientos a producción, eliminando defectos clave antes del despliegue y reduciendo el volumen de correcciones urgentes posteriores al lanzamiento.', 'Rediseñé el flujo de entrega de notificaciones en una aplicación de escritorio, aumentando la fiabilidad de entrega en un 30% y reduciendo el riesgo de perder eventos importantes para el usuario.', 'Lideré una refactorización sistemática del código legacy mediante la descomposición de componentes sobrecargados, la eliminación de lógica duplicada y la optimización del renderizado, lo que redujo en un 30% los renders innecesarios.'], stack: ['Vue', 'Electron', 'Cordova', 'TypeScript', 'Playwright'] },
        { period: '2020 — 2022', company: 'IT2G', location: 'Rusia', role: 'Frontend Developer', summary: 'Desarrollo frontend y liderazgo técnico para proyectos de integración de sistemas de ciclo completo.', impact: [['2×', 'menos frames perdidos'], ['−20%', 'errores de desarrollo']], work: ['Mejoré la planificación de sprints y la descomposición de tareas, aumentando la previsibilidad de las entregas del equipo y reduciendo en un 20% los errores de desarrollo.', 'Optimicé el rendimiento de la interfaz en dispositivos móviles al sustituir animaciones CSS que consumían muchos recursos por lógica basada en requestAnimationFrame y reducir renders innecesarios con React.memo, lo que disminuyó a la mitad la pérdida de frames en dispositivos de gama baja.', 'Lideré un equipo de desarrolladores, definí enfoques técnicos y dividí funcionalidades complejas en tareas ejecutables, mejorando la eficiencia del equipo y reduciendo los problemas durante el desarrollo.'], stack: ['React', 'Redux', 'TypeScript', 'Sass'] },
        { period: '2019 — 2020', company: 'LIVREZON', location: 'Rusia', role: 'Fullstack Developer', summary: 'Plataforma para crear contenido educativo y editorial.', impact: [['Kafka', 'comunicación entre servicios']], work: ['Mejoré la escalabilidad de la aplicación al diseñar e implementar un sistema de comunicación entre servicios y reglas de interacción mediante Kafka.', 'Simplifiqué la navegación de la aplicación y mejoré el rendimiento general al desarrollar una nueva interfaz, introducir nueva lógica y optimizar el producto para distintos dispositivos.'], stack: ['React', 'Python', 'Kafka', 'REST API'] },
      ],
    },
    toolkit: {
      index: '03', title: 'Habilidades',
      groups: shared.toolkitGroups,
    },
    contact: {
      index: '04', title: 'Contacto', heading: ['Hagamos', 'lo complejo', 'claro.'],
      links: [{ label: 'Email', ...shared.contacts.email }, { label: 'Telegram', ...shared.contacts.telegram, external: true }, { label: 'LinkedIn', ...shared.contacts.linkedin, external: true }, { label: 'GitHub', ...shared.contacts.github, external: true }],
    },
    footer: { copyright: 'Nikita Veisman', note: 'Creado para la velocidad · Sin framework en el cliente', backToTop: 'Volver arriba ↑' },
  } satisfies PortfolioContent;
