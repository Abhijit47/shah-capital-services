import { RechartsDevtools } from '@recharts/devtools'
import {
  Area,
  AreaChart,
  CartesianGrid,
  // ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

interface Series {
  data: Array<Record<string, number>>
  keys: { key: string; label: string; color: string }[]
  xKey?: string
}

export function GrowthChart({ data, keys, xKey = 'year' }: Series) {
  return (
    <div className="w-100 h-100 overflow-hidden">
      {/* <ResponsiveContainer className={'w-100 h-100'}> */}
      <AreaChart
        style={{
          width: '100%',
          maxWidth: '100%',
          maxHeight: '70vh',
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
        onContextMenu={(_, e) => e.preventDefault()}
      >
        <defs>
          {keys.map((k) => (
            <linearGradient
              id={`g-${k.key}`}
              key={k.key}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor={k.color} stopOpacity={0.45} />
              <stop offset="100%" stopColor={k.color} stopOpacity={0.02} />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid
          strokeDasharray="3 3"
          // stroke="var(--fixpro-gray-rgb)"
        />
        <XAxis
          dataKey={xKey}
          stroke="var(--fixpro-black)"
          fontSize={11}
          tickLine={false}
        />
        <YAxis
          stroke="var(--fixpro-black)"
          fontSize={11}
          tickLine={false}
          tickFormatter={(v) =>
            v >= 1e7
              ? `${(v / 1e7).toFixed(1)}Cr`
              : v >= 1e5
                ? `${(v / 1e5).toFixed(1)}L`
                : `${v}`
          }
        />
        <Tooltip
          contentStyle={{
            background: 'var(--fixpro-white)',
            border: '1px solid var(--fixpro-gray)',
            borderRadius: 8,
            fontSize: 12,
          }}
          formatter={(v) =>
            new Intl.NumberFormat('en-IN', {
              maximumFractionDigits: 0,
            }).format(Math.round(Number(v)))
          }
          labelFormatter={(l) => `Year ${l}`}
        />
        {keys.map((k) => (
          <Area
            key={k.key}
            type="monotone"
            dataKey={k.key}
            name={k.label}
            stroke={k.color}
            strokeWidth={2}
            fill={`url(#g-${k.key})`}
          />
        ))}
        <RechartsDevtools />
      </AreaChart>
      {/* </ResponsiveContainer> */}
    </div>
  )
}
