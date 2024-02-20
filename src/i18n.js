import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        navbarHome: "HOME",
        navbarAbout: "ABOUT ME",
        navbarExperience: "EXPERIENCE",
        navbarProjects: "PROJECTS",
        title: "Hi! My name is",
        description:
          "I'm a 25 years old Full Stack Developer from Buenos Aires, Argentina.",
        aboutTitle: "About Me",
        aboutDescriptionFirst:
          "I am a passionate software developer with 3 years of experience developing robust and efficient technological solutions.",
        aboutDescriptionSecond:
          "I am always seeking opportunities to enhance my skills and stay current with the latest technological trends.",
        experienceTitle: "Proffesional Experience",
        jobTitle1: "Fullstack Devleoper",
        jobInfo1: "Axon Training | March 2023 - Present",
        jobDescription1:
          "I am currently adding new features and fixing bugs of the different applications using mainly React, Typescript, Reactstrap, Chakra and Next. I also build REST APIs using PHP, SQL and Postman.",
        jobTitle2: "React & React Native Developer",
        jobInfo2: "LONI.ai | August 2022 - March 2023",
        jobDescription2:
          "My principal task was adding new features and fixing bugs for the mobile application using React Native and also for the web using React Js, I had responsibilities such as: -Producing clean, efficient code based on specifications. -Testing and deploying programs and systems. -Fixing and improving existing software.",
        jobTitle3: "IT Analyst",
        jobInfo3: "Banco Galicia | March 2022 - September 2022",
        jobDescription3:
          "I worked solving the different problems that users may encounter in the platform when operating in the foreign trade module, using programming languages such as SQL and JavaScript.",
        jobTitle4: "Functional Analyst",
        jobInfo4: "Vivatia | September 2021 - March 2022",
        jobDescription4:
          "I worked with capture software and document management using technologies such as Java and MySQL, I perform tasks such as: -Definition and analysis of user requirements. -Creation of user manuals and documentation of solutions. -Development of solutions based on the analyzed requirements. -Implementation and maintenance of software systems.",
        jobTitle5: "Freelance Web Developer",
        jobInfo5: "Freelance | March 2021 - August 2022",
        jobDescription5:
          "I realized multiple projects for different small companies such as clothing stores, building materials companies and drink bars for events, using technologies such as React, SASS, Redux, Firebase, Node and PostgreSQL.",
        jobTitle6: "Help Desk",
        jobInfo6: "COTO CICSA | March 2017 - September 2021",
        jobDescription6:
          "I worked as a Help Desk operator for a year providing technical support looking to solve possible incidents in a comprehensive way, in addition to the attention to requirements related to IT.",
        projectsTitle: "Projects",
        projectsLink: "Visit Website",
        footerText: "Created with React and lots of"
      },
    },
    es: {
      translation: {
        navbarHome: "INICIO",
        navbarAbout: "ACERCA DE MÍ",
        navbarExperience: "EXPERIENCIA",
        navbarProjects: "PROYECTOS",
        title: "Hola! Mi nombre es",
        description:
        "Tengo 25 años y soy un Desarrollador Full Stack de Buenos Aires, Argentina",
        aboutTitle: "Acerca de Mí",
        aboutDescriptionFirst:
        "Soy un apasionado desarrollador de software con 3 años de experiencia desarrollando soluciones tecnológicas robustas y eficientes.",
        aboutDescriptionSecond:
        "Siempre estoy buscando oportunidades para mejorar mis habilidades y mantenerme actualizado con las últimas tendencias tecnológicas.",
        experienceTitle: "Experiencia Profesional",
        jobTitle1: "Desarrollador Full Stack",
        jobInfo1: "Axon Training | Marzo 2023 - Actualidad",
        jobDescription1:
        "Me encuentro añadiendo nuevas características y corrigiendo errores de las diferentes aplicaciones que posee la empresa, además de proporcionar soporte interno a otros sectores con problemas que puedan encontrarse relacionados con IT. Utilizando tecnologías como React, Typescript, Reactstrap, Chakra y Next. También cree REST APIs utilizando PHP, SQL y Postman.",
        jobTitle2: "Desarrollador React & React Native",
        jobInfo2: "LONI.ai | Agosto 2022 - Marzo 2023",
        jobDescription2:
        "Mi tarea principal era agregar nuevas características y corregir errores para la aplicación móvil usando React Native y para la web usando React Js, tenía responsabilidades tales como: -Producir código limpio y eficiente basado en especificaciones. -Probar y desplegar programas y sistemas. -Arreglar y mejorar el software existente.",
        jobTitle3: "Analista IT",
        jobInfo3: "Banco Galicia | Marzo 2022 - Septiembre 2022",
        jobDescription3:
        "Trabajé resolviendo los diferentes incidentes que los usuarios puedan encontrarse en la plataforma al operar en el módulo de comercio exterior, usando lenguajes de programación como SQL y JavaScript.",
        jobTitle4: "Analista Funcional",
        jobInfo4: "Vivatia | Septiembre 2021 - Marzo 2022",
        jobDescription4:
        "Trabajé con software de captura y manejo de documentación usando tecnologías como Java y SQL, realizo tareas como: -Definición y de los requerimientos del usuario. -Creación de manuales y documentación de las soluciones. -Desarrollo de soluciones basadas en los requerimientos analizados. -Implementación y mantenimiento de los sistemas de software.",
        jobTitle5: "Desarrollador Freelance",
        jobInfo5: "Freelance | Marzo 2021 - Agosto 2022",
        jobDescription5:
        "Realicé múltiples proyectos para diferentes compañías pequeñas como tiendas de ropa, empresas de materiales de construcción y barras de tragos para eventos, utilizando tecnologías como React, SASS, Redux, Firebase, Node y PostgreSQL.",
        jobTitle6: "Operador Mesa de Ayuda",
        jobInfo6: "COTO CICSA | Marzo 2017 - Septiembre 2021",
        jobDescription6:
        "Trabajé como Operador de Mesa de Ayuda durante un año dando soporte técnico y buscando resolver los posibles incidentes de manera comprensiva, en adición a la atención de requerimientos relacionados a IT.",
        projectsTitle: "Proyectos",
        projectsLink: "Visitar Sitio",
        footerText: "Creado con React y mucho"
      },
    },
  },
});

export default i18n;
