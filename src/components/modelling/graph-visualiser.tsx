import { useMemo } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { LotkaVolterra, basicOde, lvSliders, basicSliders } from './equations'

export const Odes = {
  'lotka-volterra': {
    label: 'Lotka-Volterra',
    sliders: lvSliders,
    lines: [
      { dataKey: 'prey', stroke: '#004FCD' },
      { dataKey: 'predator', stroke: '#CD0000' },
    ],
    compute: (v: Record<string, number>) =>
      LotkaVolterra(v.alpha, v.beta, v.gamma, v.delta, v.x0, v.y0, v.tEnd),
  },
  'basic': {
    label: 'Basic',
    sliders: basicSliders,
    lines: [
      { dataKey: 'x', stroke: '#004FCD' },
      { dataKey: 'y', stroke: '#CD0000' },
    ],
    compute: (v: Record<string, number>) =>
      basicOde(v.x0, v.y0, v.tEnd),
  },
} as const

export type OdeKey = keyof typeof Odes

interface GraphVisualiserProps {
  graph: OdeKey
  values: Record<string, number>
}

export default function GraphVisualiser({ graph, values }: GraphVisualiserProps) {
  const ode = Odes[graph]
  const data = useMemo(() => ode.compute(values), [graph, values, ode]) as Record<string, number>[]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data} responsive>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="t" label={{ value: 'time', position: 'insideBottom', offset: -5 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        {ode.lines.map(line => (
          <Line
            key={line.dataKey}
            type="monotone"
            dataKey={line.dataKey}
            stroke={line.stroke}
            dot={false}
            isAnimationActive={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}