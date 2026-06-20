export const SPEAKER_FORM_URL = import.meta.env.SPEAKER_FORM_URL;
export const BUY_TICKET_URL = import.meta.env.BUY_TICKET_URL;

export const speakers = [
  {
    name: 'Erasmo Hernández',
    role: 'Tech Lead',
    country: 'venz-chl',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781562658/erasmo_sjmcoh.png',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781562658/erasmo_sjmcoh.png',
    talk: '',
    schedule: '',
    social: {
      type: 'website',
      url: 'https://www.erasmoh.dev/es'
    }
  },
  {
    name: 'Andrea Monsalve',
    role: 'Senior Product Designer',
    country: 'venz-chl',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781707610/andrea-monsalve_kjbgwg.webp',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781707610/andrea-monsalve_kjbgwg.webp',
    talk: '',
    schedule: '',
    social: {
      type: 'instagram',
      url: 'https://www.instagram.com/soyandreamons/'
    }
  },
  {
    name: 'Oscar Barajas',
    role: 'Senior Software Architech',
    country: 'mx-col',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781969942/oscar-barajas_qknfss.png',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781969942/oscar-barajas_qknfss.png',
    talk: 'Hacking Your Life with AI',
    schedule: '',
    social: {
      type: 'website',
      url: 'https://gndx.dev/'
    }
  },
  {
    name: 'Eduardo Alvarez',
    role: 'Tech Lead',
    country: 'chile-v2',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781969588/eduardo-alvarez_npsfwa.png',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781969588/eduardo-alvarez_npsfwa.png',
    talk: '',
    schedule: '',
    social: {
      type: 'website',
      url: 'https://www.eduardoalvarez.dev/'
    }
  },
  // {
  //   name: 'Giselle Ulloa',
  //   role: 'Tech Community Leader',
  //   country: 'colombia-v2',
  //   image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781968559/giselle-ulloa_eh7k1a.webp',
  //   thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781968559/giselle-ulloa_eh7k1a.webp',
  //   talk: '¿IA local o en la nube? Cómo integrar Gemma 4 en tus sistemas sin depender de APIs externas',
  //   schedule: '',
  //   social: {
  //     type: 'website',
  //     url: 'https://www.eduardoalvarez.dev/'
  //   }
  // },
  {
    name: 'Luis Araujo',
    role: 'CTO de Tienda Negocio',
    country: 'ven-v2',
    image: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781969201/luis-araujo_ygmsgf.png',
    thumbnail: 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1781969201/luis-araujo_ygmsgf.png',
    talk: 'Jugando en Serio: Beneficios de aplicar técnicas UX de videojuegos en tu APP',
    schedule: '',
    social: {
      type: 'instagram',
      url: 'https://www.instagram.com/lucholabs/'
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