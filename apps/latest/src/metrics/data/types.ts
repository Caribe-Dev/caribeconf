/** Forma de images/metrics.json, generado por caribeconf-metrics/scripts/export_charts.py */

/** Conteos por categoría. `null` significa "la opción no existía ese año". */
export type Conteo = Record<string, number | null>

export interface Kpi {
  registros: number
  asistieron: number
  tasa_asistencia: number
}

export interface Comparativo {
  orden: string[]
  '2025': Conteo
  '2026': Conteo
}

export interface Asociacion {
  cramers_v: number
  chi2: number
  p: number
  dof: number
  n: number
  celdas_esperadas_bajas: number
  celdas_total: number
  filas: string[]
  columnas: string[]
  tabla: Record<string, Record<string, number>>
}

/** Tabla de tasa por segmento: % con el n sobre el que se calculó. */
export interface Tasa {
  orden: string[]
  pct: Record<string, number>
  n: Record<string, number>
  asistieron: Record<string, number>
}

export interface Metrics {
  generado: string
  kpis: { '2025': Kpi; '2026': Kpi }
  comparativo: {
    nivel_ingles: Comparativo
    nivel_experiencia: Comparativo
  }
  '2026': {
    ticket_usado: Conteo
    area: Conteo
    situacion_actual: Conteo
    nivel_experiencia: Conteo
    nivel_ingles: Conteo
    objetivo_evento: { conteo: Conteo; personas: number; selecciones: number }
    speakers: {
      conteo: Conteo
      con_nombre: number
      sin_preferencia: number
      fuera_del_roster: number
    }
    interes_ofertas: Conteo
    cupones: { usaron: number; sin_cupon: number; distintos: number }
    cobertura_pago: {
      pagaron: number
      cortesia: number
      total: number
      pct_pagaron: number
    }
    disponibilidad: {
      conteo: Conteo
      busca_algo: number
      total: number
      contradictorias: number
    }
    interes_por_seniority: {
      orden: string[]
      pct: Record<string, number>
      n: Record<string, number>
      si: Record<string, number>
    }
    embudo_contratable: Conteo
  }
  organizadores: {
    asistencia_global: number
    por_experiencia: Tasa
    por_situacion: Tasa
    por_area: Tasa
    por_pago: Tasa
    por_momento_registro: Tasa
    por_cupon: Tasa
    cupones_descartados: number
    cupones_top: Conteo
    minimo_segmento: number
  }
  asociaciones: {
    situacion_x_experiencia: Asociacion
    situacion_x_ingles: Asociacion
  }
  notas: Record<string, string>
}

/** Serie lista para Recharts. */
export interface Punto {
  nombre: string
  valor: number
  pct: number
}

/** Conteo -> array ordenado, con el % sobre la base indicada. */
export function aPuntos(conteo: Conteo, base: number, orden?: string[]): Punto[] {
  const claves = orden ?? Object.keys(conteo)
  return claves
    .filter((k) => conteo[k] != null)
    .map((k) => ({
      nombre: k,
      valor: conteo[k] as number,
      pct: Math.round((1000 * (conteo[k] as number)) / base) / 10,
    }))
}
