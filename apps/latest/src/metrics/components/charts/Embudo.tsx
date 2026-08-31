import type { Conteo } from "../../data/types";

const AQUA = "#41DEF4";

/** Embudo: cuánta gente queda al ir apilando filtros.
 *
 *  Cada paso se dibuja proporcional al primero, así se ve de un vistazo cuánto
 *  se pierde en cada corte. Muestra también el % sobre el paso inicial.
 */
export default function Embudo({ pasos }: { pasos: Conteo }) {
  const entradas = Object.entries(pasos).filter(([, v]) => v != null) as [
    string,
    number,
  ][];
  if (!entradas.length) return null;
  const base = entradas[0][1];

  return (
    <ol className="space-y-3">
      {entradas.map(([etiqueta, valor], i) => (
        <li key={etiqueta}>
          <div className="mb-1 flex items-baseline justify-between gap-3">
            <span className="text-sm text-white/92">{etiqueta}</span>
            <span className="shrink-0 tabular-nums">
              <span className="text-lg font-bold text-white">{valor}</span>
              {i > 0 && (
                <span className="ml-2 text-sm text-white/70">
                  {Math.round((100 * valor) / base)}% del inicio
                </span>
              )}
            </span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full transition-[width]"
              style={{
                width: `${(valor / base) * 100}%`,
                backgroundColor: AQUA,
                opacity: 1 - i * 0.15,
              }}
            />
          </div>
        </li>
      ))}
    </ol>
  );
}
