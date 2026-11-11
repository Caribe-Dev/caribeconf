import type { Tasa } from "../../data/types";
import { recortar, useAncho } from "./useAncho";

const AQUA = "#41DEF4";

/** Barras de porcentaje por segmento.
 *
 *  Distinta de BarraCategorica: aquí el dato es una tasa, no un conteo, así que
 *  el eje va de 0 a 100 y cada barra declara su n. Sin ese n, un 95% sobre 21
 *  personas se lee igual que uno sobre 300.
 */
interface Props {
  tasa: Tasa;
  /** Deja el orden del JSON tal cual (escalas ordinales); si no, ordena por %. */
  respetarOrden?: boolean;
}

export default function BarraTasa({ tasa, respetarOrden = false }: Props) {
  const { ref, compacto } = useAncho();

  const filas = [...tasa.orden]
    .sort((a, b) => (respetarOrden ? 0 : tasa.pct[b] - tasa.pct[a]))
    .map((nombre) => ({
      nombre,
      etiqueta: compacto ? recortar(nombre, 18) : nombre,
      pct: tasa.pct[nombre],
      n: tasa.n[nombre],
    }));

  const maximo = Math.max(...filas.map((f) => f.pct));

  return (
    <div ref={ref} className="min-w-0">
      <ul className="space-y-3">
        {filas.map((f) => (
          <li key={f.nombre} className="grid grid-cols-[1fr_auto] items-center gap-3">
            <div className="min-w-0">
              <div className="mb-1 flex items-baseline justify-between gap-3">
                <span className="truncate text-sm text-white/92">{f.etiqueta}</span>
                <span className="shrink-0 text-sm font-bold tabular-nums text-white">
                  {f.pct}%
                  <span className="ml-2 font-normal text-white/70">n={f.n}</span>
                </span>
              </div>
              {/* Barra en HTML, no Recharts: es una sola dimensión y así el
                  texto queda seleccionable y el layout no depende de medir. */}
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(f.pct / Math.max(maximo, 1)) * 100}%`,
                    backgroundColor: AQUA,
                  }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
