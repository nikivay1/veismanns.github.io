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
      ariaLabel: 'Perfil y navegación', backToTopLabel: 'Volver arriba', downloadLabel: 'Descargar CV', availability: 'Disponible para proyectos seleccionados',
      name: ['Nikita', 'Veisman'], role: ['Senior Frontend', 'Developer'], locationLabel: 'Vivo en', location: 'Valencia, España', timeLabel: 'Horario de trabajo', time: 'CET / CEST',
      coreSkillsLabel: 'Habilidades clave', coreSkills: shared.coreSkills, socialLabel: 'Redes',
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
      groups: shared.toolkitGroups,
    },
    contact: {
      index: '04', title: 'Contacto', heading: ['Hagamos', 'lo complejo', 'claro.'],
      links: [{ label: 'Email', ...shared.contacts.email }, { label: 'Telegram', ...shared.contacts.telegram, external: true }, { label: 'LinkedIn', ...shared.contacts.linkedin, external: true }, { label: 'GitHub', ...shared.contacts.github, external: true }],
    },
    footer: { copyright: 'Nikita Veisman', note: 'Creado para la velocidad · Sin framework en el cliente', backToTop: 'Volver arriba ↑' },
  } satisfies PortfolioContent;
