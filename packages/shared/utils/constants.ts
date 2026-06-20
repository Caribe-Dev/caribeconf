const CDN = 'https://res.cloudinary.com/dpu0uajtw/image/upload'
const FLAG_TRANSFORM = 'ar_2.1,c_pad,b_transparent'

export const FLAGS: Record<string, string> = {
    // v1
    'colombia': 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1741747850/colombia-flag_o0xnlj.webp',
    'venezuela': 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1741826111/venezuela-flag_lq9whn.webp',
    'chile': 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1741747850/chile-flag_t6zi7b.webp',
    'canada': 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1741747850/canada-flag_buhs2m.webp',
    'mexico': 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1741747850/mexico-flag_exjqqm.webp',
    'peru': 'https://res.cloudinary.com/dpu0uajtw/image/upload/v1744340053/peru-flag_nfmiyt.png',
    // v2
    'venz-chl': `${CDN}/${FLAG_TRANSFORM}/v1781565554/venz-chl_vma4qk.webp`,
    'mx-col': `${CDN}/${FLAG_TRANSFORM}/v1781740445/mx-col_xbhysc.webp`,
    'chile-v2': `${CDN}/${FLAG_TRANSFORM}/v1781974480/chile_qgf28l.webp`,
    'colombia-v2': `${CDN}/${FLAG_TRANSFORM}/v1781741596/colombia_jfowww.webp`,
    'mexico-v2': `${CDN}/${FLAG_TRANSFORM}/v1781741594/mexico_gacpsf.webp`,
    'ven-v2': `${CDN}/${FLAG_TRANSFORM}/v1781741595/venezuela_ncnkvo.webp`,
  }
