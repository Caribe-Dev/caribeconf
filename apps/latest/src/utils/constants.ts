export const SPEAKER_FORM_URL = import.meta.env.SPEAKER_FORM_URL;
export const BUY_TICKET_URL = import.meta.env.BUY_TICKET_URL;

export const speakers = [
  {
    id: 'erasmo-hernandez',
    name: 'Erasmo Hernández',
    role: 'Tech Lead',
    country: 'venz-chl',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781562658/erasmo_sjmcoh.png',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781562658/erasmo_sjmcoh.png',
    talk: 'Cómo una charla en este escenario me cambió la vida',
    schedule: '9:00 – 9:20',
    social: {
      type: 'website',
      url: 'https://www.erasmoh.dev/es'
    }
  },
  {
    id: 'andrea-monsalve',
    name: 'Andrea Monsalve',
    role: 'Senior Product Designer',
    country: 'venz-chl',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781707610/andrea-monsalve_kjbgwg.webp',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781707610/andrea-monsalve_kjbgwg.webp',
    talk: 'Del ejecutor al estratega: lo que la IA me obligó a aprender sobre mi propio trabajo',
    schedule: '10:45 – 11:05',
    social: {
      type: 'instagram',
      url: 'https://www.instagram.com/soyandreamons/'
    }
  },
  {
    id: 'oscar-barajas',
    name: 'Oscar Barajas',
    role: 'Senior Software Architech',
    country: 'mx-col',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781969942/oscar-barajas_qknfss.png',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781969942/oscar-barajas_qknfss.png',
    talk: 'Hacking Your Life with AI',
    schedule: '9:45 – 10:15',
    social: {
      type: 'website',
      url: 'https://gndx.dev/'
    }
  },
  {
    id: 'eduardo-alvarez',
    name: 'Eduardo Alvarez',
    role: 'Tech Lead',
    country: 'chile-v2',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781969588/eduardo-alvarez_npsfwa.png',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781969588/eduardo-alvarez_npsfwa.png',
    talk: 'Microfrontends sin dolor: cómo escalar React (y tu equipo) sin romperlo todo',
    schedule: '14:10 – 14:40',
    social: {
      type: 'website',
      url: 'https://www.eduardoalvarez.dev/'
    }
  },
  {
    id: 'gisell-ulloa',
    name: 'Gisell Ulloa',
    role: 'Tech Community Leader',
    country: 'colombia-v2',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1782170322/gisell-ulloa_jymnnp.webp',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1782170322/gisell-ulloa_jymnnp.webp',
    talk: '¿IA local o en la nube? Cómo integrar Gemma 4 en tus sistemas sin depender de APIs externas',
    schedule: '11:00 – 11:25',
    social: {
      type: 'instagram',
      url: 'https://www.instagram.com/giulloa/'
    }
  },
  {
    id: 'luis-araujo',
    name: 'Luis Araujo',
    role: 'CTO de Tienda Negocio',
    country: 'ven-arg',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781969201/luis-araujo_ygmsgf.png',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781969201/luis-araujo_ygmsgf.png',
    talk: 'Jugando en Serio: Beneficios de aplicar técnicas UX de videojuegos en tu APP',
    schedule: '15:20 – 15:50',
    social: {
      type: 'instagram',
      url: 'https://www.instagram.com/lucholabs/'
    }
  },
  {
    id: 'julian-luna',
    name: 'Julián Luna',
    role: 'Cloud Solutions Architect ',
    country: 'colombia-v2',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1783025894/Julian-luna_lyajxd.webp',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1783025894/Julian-luna_lyajxd.webp',
    talk: 'Me ascendieron a arquitecto ¿y ahora qué?',
    schedule: '11:35 – 12:00',
    social: {
      type: 'website',
      url: 'https://trycatch.tv/'
    }
  },
  {
    id: 'santiago-carrillo',
    name: 'Santiago Carrillo',
    role: 'CEO Co-Founder de Ada School',
    country: 'colombia-v2',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1783025894/santiago-carrillo_di3o9c.webp',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1783025894/santiago-carrillo_di3o9c.webp',
    talk: 'Del Vibe Coding al Desarrollo Guiado por Especificaciones {SDD} en Android Nativo',
    schedule: '14:45 – 15:15',
    social: {
      type: 'instagram',
      url: 'https://www.instagram.com/sancarbar/'
    }
  },
  {
    id: 'mateo-robayo',
    name: 'Mateo Robayo',
    role: 'Gameplay Programmer',
    country: 'colombia-v2',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1783025894/mateo-robayo_wlrjop.webp',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1783025894/mateo-robayo_wlrjop.webp',
    talk: 'Haz un videojuego rápido con Popochiu',
    schedule: '13:35 – 14:05',
    social: {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/mapedorr/'
    }
  },
  {
    id: 'mariam-villa',
    name: 'Mariam Villa',
    role: 'Developer Advocate en Interledger',
    country: 'colombia-v2',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1783040533/mariam-villa_sfrpyh.webp',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1783040533/mariam-villa_sfrpyh.webp',
    talk: '¿Agentes para Pagos? Sí, con Open Payments es Posible.',
    schedule: '9:25 – 9:45',
    social: {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/marianvilla/'
    }
  },
  {
    id: 'maicol-ruidiaz',
    name: 'Maicol Ruidiaz',
    role: 'Software Architecture',
    country: 'colombia-v2',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1783470997/maicol-ruidiaz_htkcl7.webp',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1783470997/maicol-ruidiaz_htkcl7.webp',
    talk: 'API Gateway: El pilar de la gestión de APIs y microservicios',
    schedule: '14:00 – 15:30',
    social: {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/maicol-r-8365a4b1/'
    }
  },
  {
    id: 'zuleima-de-la-rosa',
    name: 'Zuleima De la Rosa',
    role: 'Chief Product Officer',
    country: 'colombia-v2',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1783470773/zuleima-de-la-rosa_zlsxo1.webp',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1783470773/zuleima-de-la-rosa_zlsxo1.webp',
    talk: 'IA-First, Humanos Siempre: Liderazgo y propósito en la era de la automatización.',
    schedule: '11:10 – 11:30',
    social: {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/zullydelarosa/'
    }
  },
  {
    id: 'renzo-tincopa',
    name: 'Renzo Tincopa',
    role: 'Freelance Developer',
    country: 'peru-v2',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1783470359/renzo-tincopa_ks4ybr.webp',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1783470359/renzo-tincopa_ks4ybr.webp',
    talk: 'Más allá de la productividad: Creando productos para los próximos 20 años.',
    schedule: '10:25 – 10:55',
    social: {
      type: 'instagram',
      url: 'https://www.instagram.com/wiracocha_labs'
    }
  },
  {
    id: 'rob-rimola',
    name: 'Rob Rimola',
    role: 'Project Manager',
    country: 'guatemala-v2',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1783470372/rob-rimola_pkhtxo.webp',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1783470372/rob-rimola_pkhtxo.webp',
    talk: 'Ingeniería de humor: campos semánticos con LLMs',
    schedule: '16:30 – 16:45',
    social: {
      type: 'instagram',
      url: 'https://www.instagram.com/robrimola'
    }
  },
  {
    id: 'geovanny-mendoza',
    name: 'Geovanny Mendoza',
    role: 'Backend Developer ',
    country: 'colombia-v2',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1784673165/geovanny-mendoza_rglsur.webp',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1784673165/geovanny-mendoza_rglsur.webp',
    talk: 'Construyendo un backend real con Kotlin: de cero a producción',
    schedule: '14:00 – 15:30',
    social: {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/geovannycode/'
    }
  },
  {
    id: 'luis-delascar',
    name: 'Luis Delascar',
    role: 'CIO en Dirsoft',
    country: 'colombia-v2',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1784673166/luis-delascar-valencia_txs6ua.webp',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1784673166/luis-delascar-valencia_txs6ua.webp',
    talk: 'Transformación digital real en comunidades olvidadas para la agricultura',
    schedule: '15:55 – 16:25',
    social: {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/luis-delascar-valencia-mena-6803441a/'
    }
  },
  {
    id: 'sandy-atencio',
    name: 'Sandy Atencio',
    role: 'Data engineer en Bancolombia',
    country: 'colombia-v2',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1784680020/sandy-atencio_hg2lnb.webp',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1784680020/sandy-atencio_hg2lnb.webp',
    talk: 'Observabilidad para aplicaciones basadas en LLMs: la historia detrás de cada respuesta',
    schedule: '15:45 – 17:15',
    social: {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/satencioh/'
    }
  },
  // {
  //   id: 'dario-guzman',
  //   name: 'Dario Guzmán',
  //   role: '',
  //   country: 'colombia-v2',
  //   image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1741668329/speaker_gndva4.webp',
  //   thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1741668329/speaker_gndva4.webp',
  //   talk: 'Ingestión de video de alto rendimiento con Python asíncrono',
  //   schedule: '15:45 – 17:15',
  //   social: null
  // },
  {
    id: 'rina-plata',
    name: 'Rina Plata',
    role: 'CEO Guardianes Ancestrales',
    country: 'colombia-v2',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1784763809/rina-plata_tbttzi.webp',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1784763809/rina-plata_tbttzi.webp',
    talk: 'La inclusión también se programa',
    schedule: '11:30 – 11:55',
    social: {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/rina-plata/'
    }
  },
  {
    id: 'harold-combita',
    name: 'Harold Combita',
    role: 'CEO de LiderIA',
    country: 'colombia-v2',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1784763809/harold-combita_cuztmi.webp',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1784763809/harold-combita_cuztmi.webp',
    talk: 'Vibecoding, Vibe Engineer y la transformación del rol del programador',
    schedule: '10:20 – 10:40',
    social: {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/haroldcombita/'
    }
  },
  {
    id: 'nathalia-gonzalez',
    name: 'Nathalia González',
    role: 'Product Manager en FUSE',
    country: 'colombia-v2',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1784763808/nathalia-gonzalez_ianva3.webp',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1784763808/nathalia-gonzalez_ianva3.webp',
    talk: '¿Quién construye tech — y quién decide quién puede?',
    schedule: '9:25 – 9:40',
    social: {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/nathaliagoos'
    }
  }
]

export const speakerToBeConfirmed = {
  name: 'Por Confirmar',
  role: '',
  country: '',
  thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1741668329/speaker_gndva4.webp',
  image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1741668329/speaker_gndva4.webp',
  alt: 'Imagen de conferencista por confirmar',
  social: null
}

export const allies = [
  {
    name: 'Fomo',
    img: '/images/allies/fomo-logo.webp',
    url: 'https://holafomo.com/',
    h: 80
  },
  {
    name: 'Miguel Teheran',
    img: '/images/allies/miguel-teheran.svg',
    url: 'https://mteheran.dev/',
    h: 60
  },
  {
    name: 'JetBrains',
    img: '/images/allies/jetbrains-logo.webp',
    url: 'https://www.jetbrains.com/',
    h: 40
  },
  {
    name: '4Geeks',
    img: '/images/allies/4geeks.svg',
    url: 'https://www.4geeks.com/',
    h: 54
  },
  {
    name: 'BaqJUG',
    img: '/images/allies/baqjug.png',
    url: 'https://www.instagram.com/barranquillajug/',
    h: 80
  },
  {
    name: 'Dappsco',
    img: '/images/allies/dappsco.svg',
    url: 'https://dappsco.io/',
    h: 50
  },
  {
    name: 'QuillaBlocks',
    img: '/images/allies/quilla-blocks.png',
    url: 'https://www.quillablocks.org/',
    h: 52
  },
  {
    name: 'RubyBaq',
    img: '/images/allies/rubybaq.svg',
    url: 'https://www.instagram.com/rubybarranquilla',
    h: 74
  },
  {
    name: 'ZTM',
    img: '/images/allies/ztm.svg',
    url: 'https://zerotomastery.io/',
    h: 60
  },
  {
    name: 'Lider IA',
    img: '/images/allies/lider-ai-logo.png',
    url: 'https://lideria.org/',
    h: 68
  },
  {
    name: 'BaqJS',
    img: '/images/allies/baqjs.svg',
    url: 'https://barranquillajs.org/',
    h: 76
  },
]
