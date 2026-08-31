import { useEffect, useRef, useState } from 'react'

/** Mide el ancho real del contenedor para adaptar la geometría de la gráfica.
 *
 *  Recharts necesita un ancho numérico para el eje de categorías, y un valor fijo
 *  no sirve: 190px de gutter dejan sin espacio a las barras en un móvil de 390px.
 *  `width="auto"` tampoco alcanza, porque mide la etiqueta más larga y no tiene
 *  en cuenta cuánto queda para el dato.
 */
export function useAncho<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  const [ancho, setAncho] = useState(0)

  useEffect(() => {
    const nodo = ref.current
    if (!nodo) return
    const observador = new ResizeObserver((entradas) => {
      const entrada = entradas[0]
      if (entrada) setAncho(entrada.contentRect.width)
    })
    observador.observe(nodo)
    return () => observador.disconnect()
  }, [])

  // 480px: por debajo de eso el gutter de 190px del eje deja sin espacio a la
  // barra. Cubre móviles (~320) y las cards a dos columnas en tablet (~340).
  // ancho 0 = todavía sin medir; se asume ancho para no parpadear.
  const compacto = ancho > 0 && ancho < 480
  return { ref, ancho, compacto }
}

/** Recorta una etiqueta larga para el eje, dejando el nombre completo al tooltip. */
export function recortar(texto: string, maximo: number) {
  return texto.length <= maximo ? texto : `${texto.slice(0, maximo - 1).trimEnd()}…`
}
