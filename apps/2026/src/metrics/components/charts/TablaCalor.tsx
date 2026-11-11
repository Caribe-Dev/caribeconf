import type { Asociacion } from "../../data/types";

/** Heatmap como tabla HTML, no como SVG: los números quedan seleccionables y
 *  legibles por lector de pantalla, que es lo que pide un dashboard público. */

interface Props {
  asociacion: Asociacion;
  tituloFilas: string;
  tituloColumnas: string;
  /** La conclusión, en una frase. Va primero y destacada. */
  titular: string;
  /** El detalle en lenguaje llano, con cifras concretas. */
  interpretacion: string;
  /** Qué puede hacer con esto quien patrocina o evalúa patrocinar. */
  paraMarca: string;
}

/** Umbral bajo el cual una fila tiene tan pocas personas que sus porcentajes
 *  se mueven demasiado con una sola respuesta distinta. */
const MINIMO_FIABLE = 15;

/** Interpola sobre la rampa del sitio: transparente -> pink -> aqua es
 *  ambiguo para magnitud, así que se usa un solo matiz (pink) con opacidad. */
function fondo(pct: number) {
  return `rgba(190, 53, 127, ${0.08 + (pct / 100) * 0.82})`;
}

export default function TablaCalor({
  asociacion,
  tituloFilas,
  tituloColumnas,
  titular,
  interpretacion,
  paraMarca,
}: Props) {
  const { filas, columnas, tabla } = asociacion;
  const pctCeldasBajas = Math.round(
    (100 * asociacion.celdas_esperadas_bajas) / asociacion.celdas_total,
  );

  const totalDeFila = (f: string) =>
    columnas.reduce((s, c) => s + tabla[f][c], 0);

  // La advertencia de celdas escasas, dicha en términos de personas: qué grupos
  // son tan chicos que su porcentaje no es de fiar.
  const filasChicas = filas
    .map((nombre) => ({ nombre, total: totalDeFila(nombre) }))
    .filter((f) => f.total < MINIMO_FIABLE);

  const fuerza =
    asociacion.cramers_v >= 0.35
      ? "fuerte"
      : asociacion.cramers_v >= 0.2
        ? "moderada"
        : "débil";

  return (
    <div>
      {/* Tabla ancha: scroll propio para que el body nunca desborde. */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-separate border-spacing-1 text-sm">
          <caption className="sr-only">
            {tituloFilas} por {tituloColumnas}. Cada celda muestra el conteo y
            el porcentaje dentro de su fila.
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="p-2 text-left font-medium text-white/80"
              >
                {tituloFilas}
              </th>
              {columnas.map((c) => (
                <th
                  scope="col"
                  key={c}
                  className="p-2 text-center font-medium text-white/80"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filas.map((f) => {
              const totalFila = totalDeFila(f);
              return (
                <tr key={f}>
                  <th
                    scope="row"
                    className="p-2 text-left font-medium whitespace-nowrap"
                  >
                    {f} <span className="text-white/70">({totalFila})</span>
                  </th>
                  {columnas.map((c) => {
                    const n = tabla[f][c];
                    const pct = totalFila
                      ? Math.round((100 * n) / totalFila)
                      : 0;
                    return (
                      <td
                        key={c}
                        className="rounded-md p-2 text-center tabular-nums"
                        style={{ backgroundColor: fondo(pct) }}
                      >
                        <span className="font-bold">{n}</span>
                        <span className="block text-xs text-white/85">
                          {pct}%
                        </span>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-6 space-y-4 text-sm">
        {/* El titular va primero y grande: es la conclusión, no el método. */}
        <p className="text-base leading-relaxed font-bold text-aqua md:text-lg">
          {titular}
        </p>

        <p className="leading-relaxed text-white/90">{interpretacion}</p>

        <div className="rounded-xl border border-aqua/25 bg-aqua/8 px-4 py-3">
          <p className="mb-1 text-xs font-bold tracking-[1px] text-aqua uppercase">
            Qué significa esto para una marca
          </p>
          <p className="leading-relaxed text-white/90">{paraMarca}</p>
        </div>

        {filasChicas.length > 0 && (
          <p className="text-white/75">
            <strong className="text-warm">Un detalle de precisión: </strong>
            {filasChicas.map((f) => `${f.nombre} (${f.total} personas)`).join(" y ")}{" "}
            {filasChicas.length === 1 ? "es un grupo" : "son grupos"} muy
            pequeño{filasChicas.length === 1 ? "" : "s"} dentro de la muestra.
            Sus porcentajes dan una idea, pero no los uses para tomar una
            decisión por sí solos.
          </p>
        )}

        <details className="text-white/75">
          <summary className="cursor-pointer hover:text-white">
            Cómo se midió (detalle estadístico)
          </summary>
          <div className="mt-3 space-y-2">
            <p>
              La fuerza de la relación se mide con Cramér&apos;s V, que va de 0
              (los dos datos no tienen nada que ver) a 1 (sabiendo uno, se
              deduce el otro). Este cruce da{" "}
              <strong className="text-white">
                {asociacion.cramers_v.toFixed(2)}
              </strong>
              , una relación {fuerza}, sobre {asociacion.n} personas.
            </p>
            <p>
              χ² = {asociacion.chi2} · gl = {asociacion.dof}.{" "}
              {asociacion.celdas_esperadas_bajas} de {asociacion.celdas_total}{" "}
              celdas ({pctCeldasBajas}%) tienen frecuencia esperada menor a 5,
              por encima del 20% que tolera la regla práctica del chi-cuadrado.
              El p-valor por tanto no es confiable, y V se reporta como medida
              descriptiva de este grupo de asistentes, no como prueba de
              hipótesis extrapolable a futuras ediciones.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
