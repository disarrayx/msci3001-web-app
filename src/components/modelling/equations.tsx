import { Solver, type Derivative } from '@/lib/odex'

export type Equations = {
  simple: boolean;
  lv: boolean;
};

export type SliderConfig = {
  key: string
  label: string
  defaultValue: number
  min: number
  max: number
  step: number
  className?: string
}

type LotkaVolterraReturn = {
  t: number
  prey: number
  predator: number
}[]

function LotkaVolterra(
  alpha: number, beta: number, gamma: number, delta: number,
  x0: number, y0: number, tEnd: number
): LotkaVolterraReturn {
  const solver = new Solver(2)
  solver.denseOutput = true

  const f: Derivative = (_t: number, [x, y]: Array<number>) => [
    alpha * x - beta * x * y,
    delta * x * y - gamma * y,
  ]

  const points: LotkaVolterraReturn = []
  const grid = solver.grid(0.5, (t, [x, y]) => {
    points.push({ t, prey: x, predator: y })
  })

  solver.solve(f, 0, [x0, y0], tEnd, grid)
  return points
}

type BasicOdeReturn = {
  t: number
  x: number
  y: number
}[]

function basicOde(x0: number, y0: number, tEnd: number): BasicOdeReturn {
  const solver = new Solver(2)
  solver.denseOutput = true

  const f: Derivative = (_t: number, [x, y]: Array<number>) => [
    x,
    y,
  ]

  const points: BasicOdeReturn = []
  const grid = solver.grid(0.5, (t, [x, y]) => {
    points.push({ t, x, y })
  })

  solver.solve(f, 0, [x0, y0], tEnd, grid)
  return points
}

export const lvSliders: SliderConfig[] = [
  { key: 'alpha', label: 'α (prey growth)', defaultValue: 1.1, min: 0, max: 2, step: 0.01 },
  { key: 'beta', label: 'β (predation rate)', defaultValue: 0.4, min: 0, max: 2, step: 0.01 },
  { key: 'gamma', label: 'γ (predator death)', defaultValue: 0.4, min: 0, max: 2, step: 0.01 },
  { key: 'delta', label: 'δ (predator growth)', defaultValue: 0.1, min: 0, max: 2, step: 0.01 },
  { key: 'x0', label: 'x₀ (initial num. prey)', defaultValue: 10, min: 0, max: 50, step: 1 },
  { key: 'y0', label: 'y₀ (initial num. predators)', defaultValue: 5, min: 0, max: 50, step: 1 },
  { key: 'tEnd', label: 'time end', defaultValue: 100, min: 0, max: 300, step: 10 },
]

export const basicSliders: SliderConfig[] = [
  { key: 'x0', label: 'x₀ (initial num. prey)', defaultValue: 10, min: 0, max: 50, step: 1 },
  { key: 'y0', label: 'y₀ (initial num. predators)', defaultValue: 5, min: 0, max: 50, step: 1 },
  { key: 'tEnd', label: 'time end', defaultValue: 2, min: 0, max: 25, step: 1 },
]

export function getDefaultValues(sliders: SliderConfig[]): Record<string, number> {
  return Object.fromEntries(sliders.map(s => [s.key, s.defaultValue]))
}

export { LotkaVolterra, basicOde }