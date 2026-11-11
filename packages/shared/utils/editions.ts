/**
 * Ediciones publicadas de CaribeConf. Fuente única para el dropdown de
 * ediciones del footer y la lista de ediciones de la página Coming Soon.
 * Agregar aquí cada edición nueva cuando su sitio esté publicado.
 */
export interface EditionInfo {
  year: string
  url: string
  /** Texto corto de la edición, p. ej. "Primera edición". */
  label: string
  /** Fecha legible, sin el año. */
  date: string
  city: string
}

export const EDITIONS: EditionInfo[] = [
  {
    year: '2025',
    url: 'https://2025.caribeconf.com',
    label: 'Primera edición',
    date: '26 de abril',
    city: 'Barranquilla',
  },
  {
    year: '2026',
    url: 'https://2026.caribeconf.com',
    label: 'Segunda edición',
    date: '14 y 15 de agosto',
    city: 'Barranquilla',
  },
]

export const CARIBEDEV_URL = 'https://www.caribedev.org'
