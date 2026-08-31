import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { Comparativo } from "../../data/types";
import { recortar, useAncho } from "./useAncho";

const AQUA = "#41DEF4"; // 2026
const PINK = "#BE357F"; // 2025

interface Props {
  comparativo: Comparativo;
  base2025: number;
  base2026: number;
  /** Texto que explica una categoría ausente en 2025 (el formulario no la ofrecía). */
  notaAusente?: string;
}

/** Las claves son n2025/n2026, no "2025"/"2026": un dataKey que parece número
 *  es ambiguo para Recharts, que acepta índices numéricos además de nombres. */
interface Fila {
  nombre: string;
  n2025: number | null;
  n2026: number | null;
  pct2025: number | null;
  pct2026: number | null;
}

interface TooltipProps {
  active?: boolean;
  label?: string;
  payload?: {
    name?: string;
    dataKey?: string | number;
    value?: number | null;
    color?: string;
    payload: Fila;
  }[];
}

function TooltipComparativo({ active, payload, label }: TooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-purple/95 rounded-lg border border-white/20 px-3 py-2 text-sm shadow-lg">
      <p className="mb-1 font-bold">{label}</p>
      {payload.map((s) => {
        const es2025 = s.dataKey === "n2025";
        const pct = es2025 ? s.payload.pct2025 : s.payload.pct2026;
        return (
          <p key={String(s.dataKey)} className="text-white/80">
            <span
              className="mr-2 inline-block size-2 rounded-full align-middle"
              style={{ backgroundColor: s.color }}
            />
            {es2025 ? "2025" : "2026"}:{" "}
            {s.value == null ? "no se preguntó" : `${s.value} (${pct}%)`}
          </p>
        );
      })}
    </div>
  );
}

export default function BarraComparativa({
  comparativo,
  base2025,
  base2026,
  notaAusente,
}: Props) {
  const { ref, compacto } = useAncho();

  const datos: Fila[] = comparativo.orden.map((nombre) => {
    const v25 = comparativo["2025"][nombre];
    const v26 = comparativo["2026"][nombre];
    return {
      nombre: compacto ? recortar(nombre, 18) : nombre,
      n2025: v25,
      n2026: v26,
      pct2025: v25 == null ? null : Math.round((1000 * v25) / base2025) / 10,
      pct2026: v26 == null ? null : Math.round((1000 * v26) / base2026) / 10,
    };
  });

  const ausentes = datos.filter((d) => d.n2025 == null).map((d) => d.nombre);

  return (
    <div ref={ref} className="min-w-0">
      <ResponsiveContainer width="100%" height={datos.length * 64 + 64}>
        <BarChart
          data={datos}
          layout="vertical"
          margin={{ top: 4, right: compacto ? 20 : 48, bottom: 4, left: 0 }}
          barGap={2}
        >
          <CartesianGrid horizontal={false} />
          <XAxis type="number" />
          <YAxis
            type="category"
            dataKey="nombre"
            width={compacto ? 112 : 150}
            tickLine={false}
            axisLine={false}
            interval={0}
          />
          <Tooltip
            content={<TooltipComparativo />}
            cursor={{ fill: "rgba(255,255,255,0.06)" }}
          />
          <Legend
            wrapperStyle={{ paddingTop: 12, fontSize: 13 }}
            formatter={(v) => <span className="text-white/80">{v}</span>}
          />
          {/* 2025 primero para que la lectura vaya de pasado a presente. */}
          <Bar
            isAnimationActive={false}
            dataKey="n2025"
            name="2025"
            fill={PINK}
            radius={[0, 3, 3, 0]}
            barSize={16}
          />
          <Bar
            isAnimationActive={false}
            dataKey="n2026"
            name="2026"
            fill={AQUA}
            radius={[0, 3, 3, 0]}
            barSize={16}
          />
        </BarChart>
      </ResponsiveContainer>

      {ausentes.length > 0 && notaAusente && (
        <p className="text-warm mt-2 text-sm">
          ⚠ {notaAusente} ({ausentes.join(", ")})
        </p>
      )}
    </div>
  );
}
