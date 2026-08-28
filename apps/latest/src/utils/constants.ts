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
    schedule: '15:45 – 17:15',
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
    schedule: '11:35 – 12:00',
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
    schedule: '15:20 – 15:50',
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
    id: 'marian-villa',
    name: 'Marian Villa',
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
    schedule: '15:45 – 17:15',
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
    schedule: '9:25 – 9:40',
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
    schedule: '11:00 – 11:25',
    social: {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/satencioh/'
    }
  },
  {
    id: 'dario-guzman',
    name: 'Dario Guzmán',
    role: 'Founder & CEO en Gudar Devs',
    country: 'colombia-v2',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1785381085/dario-guzman_kml5jq.webp',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1785381085/dario-guzman_kml5jq.webp',
    talk: 'Ingestión de video de alto rendimiento con Python asíncrono',
    schedule: '14:00 – 15:30',
    social: {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/gudarjs'
    }
  },
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
    schedule: '16:30 – 16:50',
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
  {
    name: 'Platzi',
    img: '/images/allies/platzi-logo.png',
    url: 'https://platzi.com/',
    h: 120
  },
]

// --- Galería de ediciones anteriores (Issue #44) -----------------------------
// Las fotos se sirven directo desde Google Drive vía lh3.googleusercontent.com.
// `id` = ID del archivo de Drive (parte de la URL /file/d/<id>/view).
// Es una muestra distribuida uniformemente sobre toda la carpeta pública de la
// edición; el botón "Ver álbum completo" enlaza al folder de Drive entero.
// Nota: los hotlinks de Drive pueden ser limitados por Google; si en algún
// momento fallan, migrar `driveImage` a Cloudinary sin tocar el componente.
const driveImage = (id: string, width: number) =>
  `https://lh3.googleusercontent.com/d/${id}=w${width}`

interface GalleryPhotoInput {
  id: string
  alt?: string
}

const galleryPhotos2026: GalleryPhotoInput[] = [
  { id: '1dNDp_oMpsxqTyC9mJ1M9mBTXXKgaCBAQ' },  // 0ba0d0ed-3c6f-4a1f-9db1-ac65379bbdf4.jpg
  { id: '1lcoG2j-zWXWBwxpfSp9COvaoK7l-5YLM' },  // 9b58b758-44c5-4d4e-a0ab-1505d92208dd.jpg
  { id: '1WwY9o9c0KdZDksGzDnnV45-AFMQusmlx' },  // 15 AGOSTO - CARIBE CONF-17.jpg
  { id: '1Kosh68qahv2Dk7rSjxyUnyKQq7UG_nxA' },  // 15 AGOSTO - CARIBE CONF-39.jpg
  { id: '15KweSTHb5sMFzP8SjQp8wzaPmEQBV3To' },  // 30-DSC04059.jpg
  { id: '1Knp9yTjGQyWvlOfcFQ7mnNT6e2RnRx_J' },  // 50-DSC04092.jpg
  { id: '1Iu3n0ncmD4m0c5GnJ0dwZ3mtQt-BlZ_w' },  // 72-DSC04138.jpg
  { id: '1Ig3vZwkf8lFPbj0sGYYTUwMYhLk077fv' },  // 91-DSC04193.jpg
  { id: '1PAUusTPhspYt4hiXQ3mRbbb4DSyXrqvM' },  // 112-DSC04251.jpg
  { id: '1d8gFRI07EJj1SoyTpp39jXUOWvd1xMkp' },  // 134-DSC04330.jpg
  { id: '19sWr-h_wq5QlG6KBX39d1VKYXLer53xt' },  // 156-DSC04401.jpg
  { id: '1Y4cwxE3oVU3UveRdiFxOVnTfj8nbMpBT' },  // 179-DSC04494.jpg
  { id: '17r-qCW0g6OBCoaHTzqGMnwhar9FnR4r5' },  // 201-DSC04582.jpg
  { id: '1sA7AaypVEpAY16YXwt_X_uXA2PgkkwXl' },  // 223-DSC04636.jpg
  { id: '1DsDJ86Vibbd3tUOr8QA4lW2bxLJ8AUTt' },  // 245-DSC04711.jpg
  { id: '1TKBVETT7g2Da_lXvQEgPk4Nz5WcRNKad' },  // 268-DSC04769.jpg
  { id: '1x5VcXuRycOalrW81f3pcc4a0WPXQfpsb' },  // 290-DSC04848.jpg
  { id: '1GtizosyPoEESaeklu6d1uZp9Gj8WbuvR' },  // 312-DSC04930.jpg
  { id: '1iJ4N_rpZNuOSh3E2s6U7drf-xlOF3cKu' },  // 333-DSC04993.jpg
  { id: '1RGG2hwqv4sLEe3oElsbPUC8HP0_4hF40' },  // 355-DSC05094.jpg
  { id: '1DQp5AbrnHJiQKOUlI_tvPL0WgCNmh4Fi' },  // 377-DSC05184.jpg
  { id: '1y3zDke5NZ-ly8mZL_eiabbnhRjAGPkts' },  // 6311651B-055B-46A0-9E95-95F96EE938FA.JPG
  { id: '14VJOuJw108ulkOP22CtVgRKyKAPdsk6C' },  // d28b2904-7c89-4391-9a76-f4026e77991e.jpg
  { id: '1kw_KKMXffrnIMPlDnkskp70CwniFMpzy' },  // DSC03841.jpg
  { id: '1ODP7OoLR-lqro1ZcgXDEeak65iQLrCZQ' },  // DSC03865.jpg
  { id: '1-ixH-3SrBi0uv8EhEOhZmgmlafcMh_9O' },  // DSC03895.jpg
  { id: '10qSy9PMYapzNE0gyMpA9dcwCMV6AF7Fg' },  // DSC03936.jpg
  { id: '17geP5LZKVDpZaIOZbWU6SbTih1EGDL4I' },  // DSC04088.jpg
  { id: '1uwazlHtoFrPouS7Iwfenk-oBvodKJAhD' },  // DSC04180.jpg
  { id: '13Yd7nPBsa-xSmUKuy9KY3qaRS67ITm1r' },  // DSC04444.jpg
  { id: '16nlx2_vt3nF5TtNYN334h8M9Y75BYBti' },  // DSC04655.jpg
  { id: '1Jc4-epD7BS6tcjbX4HaqaBFnkSg5icmB' },  // DSC04865.jpg
  { id: '1m71pQB_pLVhUC3NSw1V1zLuGZEMZXCzN' },  // DSC05036.jpg
  { id: '1JsWUHMXXcQMBQ_GEpSJtnOYRkWpBTxWX' },  // DSC05109.jpg
  { id: '1wrQT_anFQrqpyK4AEV9nuLKN_bxRbqt-' },  // DSC05228.jpg
  { id: '1nl_IWGvncej0PXvNRxXYssLVloHvIpz6' },  // DSC05309.jpg
  { id: '1SJcIr7aOO3WSR0F0bRQQeaZjXLFt3Iw-' },  // DSC05367.jpg
  { id: '1zQwCAFrh_wHZMbGS3EGQ_5Ol_JLqpP_6' },  // DSC05450.jpg
  { id: '1P8uz90fFSDKrY8d6vQUvYlAh7G4eIVkH' },  // DSC05519.jpg
  { id: '1Dj_U6La_n_FyvylDo-FbL16CuXiXZ-0h' },  // DSC05563.jpg
  { id: '1firkZ-Zo8EOQ-DCrHyDNolGOjipOr9du' },  // DSC05608.jpg
  { id: '1ApUC_m8Yr5VcX6aj6INuRPiAVZPHeB8o' },  // DSC05678.jpg
  { id: '1kMdTtuj--mXiPBEOEtpZca0gowy1zo4U' },  // DSC05735.jpg
  { id: '1P869cYkTJbPCmHMDGfVpuvQN1k75DMaq' },  // DSC05805.jpg
  { id: '18Yn3JG-FPowrcwCaOBUCwrmDQUqZHU8I' },  // DSC05904.jpg
  { id: '1AYcOPwoTIRPJIYqJ3-0ZQXWVtEtLi7cV' },  // DSC05985.jpg
  { id: '1yoEOPygQgvtM6GoHPimFXfEJFy6jXCzJ' },  // DSC06079.jpg
  { id: '1prZAAB_RqK-iVstym9McKBZujQZNQt4v' },  // IMG_0044.JPG
  { id: '1DAIuEYSwvD4PYf4E8L-lUNV8_F9RZKWj' },  // IMG_0118.JPG
  { id: '1Zw3_mDV1ASCVd9slKT_GcNXy6UfL_8zZ' },  // IMG_4229_edited.jpg
]

export const GALLERY_ALBUM_URL_2026 =
  'https://drive.google.com/drive/folders/1sv7aKDtgelhwYKH7-BKr1yuJ_cx_mmeg'

export const galleryImages = galleryPhotos2026.map(({ id, alt }) => ({
  src: driveImage(id, 1600),
  thumb: driveImage(id, 320),
  alt: alt ?? 'Foto de CaribeConf 2026',
}))
