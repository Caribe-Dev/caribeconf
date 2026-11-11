import {
  Bar,
  BarChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { Punto } from "../../data/types";
import { recortar, useAncho } from "./useAncho";

const AQUA = "#41DEF4";
const PINK = "#BE357F";

interface Props {
  datos: Punto[];
  /** Base de los porcentajes, para el tooltip y las etiquetas. */
  base: number;
  /** Cómo llamar a la base en el tooltip ("registros", "personas"…). */
  unidad?: string;
  /** Pinta las categorías residuales ("Otros") en pink para que no se lean
   *  como una respuesta más del ranking. */
  destacarResiduales?: boolean;
  alturaPorBarra?: number;
}

const esResidual = (nombre: string) => /^otros?\b/i.test(nombre);

/** Dos series en lugar de color por dato: `Cell` está deprecado en Recharts 3
 *  y el `shape` personalizado no renderiza. Cada fila llena una sola de las dos
 *  series, y el `stackId` compartido las coloca en la misma posición, así que se
 *  ve una barra por fila con su color correspondiente. */
interface Fila extends Punto {
  normal: number | null;
  residual: number | null;
  /** Etiqueta del eje, recortada en pantallas angostas. El tooltip usa `nombre`. */
  etiquetaEje: string;
}

interface TooltipProps {
  active?: boolean;
  payload?: { payload: Fila }[];
  base: number;
  unidad: string;
}

function TooltipBarra({ active, payload, base, unidad }: TooltipProps) {
  if (!active || !payload?.length) return null;
  const p = payload[0].payload;
  return (
    <div className="bg-purple/95 rounded-lg border border-white/20 px-3 py-2 text-sm shadow-lg">
      <p className="font-bold">{p.nombre}</p>
      <p className="text-white/80">
        {p.valor} de {base} {unidad} · {p.pct}%
      </p>
    </div>
  );
}

export default function BarraCategorica({
  datos,
  base,
  unidad = "registros",
  destacarResiduales = true,
  alturaPorBarra = 44,
}: Props) {
  const { ref, compacto } = useAncho();

  const filas: Fila[] = datos.map((d) => {
    const residual = destacarResiduales && esResidual(d.nombre);
    return {
      ...d,
      normal: residual ? null : d.valor,
      residual: residual ? d.valor : null,
      etiquetaEje: compacto ? recortar(d.nombre, 20) : d.nombre,
    };
  });

  const altura = Math.max(filas.length * alturaPorBarra + 24, 140);
  const maximo = Math.max(...datos.map((d) => d.valor));

  // En compacto la etiqueta solo lleva el %: el conteo va en el tooltip y en la
  // tabla de datos, y el texto completo no cabe junto a la barra.
  const etiqueta = (v: unknown) => {
    const pct = Math.round((1000 * Number(v)) / base) / 10;
    return compacto ? `${pct}%` : `${v} (${pct}%)`;
  };

  return (
    <div ref={ref} className="min-w-0">
      <ResponsiveContainer width="100%" height={altura}>
        <BarChart
          data={filas}
          layout="vertical"
          margin={{ top: 4, right: compacto ? 46 : 84, bottom: 4, left: 0 }}
        >
          {/* Sin eje X ni grid: la etiqueta directa en cada barra ya da el valor,
            así que el eje sería ruido redundante. */}
          <XAxis type="number" domain={[0, maximo * 1.2]} hide />
          <YAxis
            type="category"
            dataKey="etiquetaEje"
            width={compacto ? 116 : 190}
            tickLine={false}
            axisLine={false}
            interval={0}
          />
          <Tooltip
            content={<TooltipBarra base={base} unidad={unidad} />}
            cursor={{ fill: "rgba(255,255,255,0.06)" }}
          />
          <Bar
            isAnimationActive={false}
            dataKey="normal"
            stackId="barra"
            fill={AQUA}
            barSize={20}
            radius={[0, 4, 4, 0]}
          >
            <LabelList
              dataKey="normal"
              position="right"
              formatter={etiqueta}
              className="fill-white/85 text-xs"
            />
          </Bar>
          <Bar
            isAnimationActive={false}
            dataKey="residual"
            stackId="barra"
            fill={PINK}
            barSize={20}
            radius={[0, 4, 4, 0]}
          >
            <LabelList
              dataKey="residual"
              position="right"
              formatter={etiqueta}
              className="fill-white/85 text-xs"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
