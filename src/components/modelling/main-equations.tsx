import { Solver, type Derivative } from '@/lib/odex'

// === types ===
export const LvVariants = {
  NONE: 0,
  LV1: 1,
  LV2: 2,
  LV3: 3,
  FULL: 4
} as const;

type LvVariants = (typeof LvVariants)[keyof typeof LvVariants];

export type Equations = {
  simple: boolean;
  lv: LvVariants;
};

export type SliderConfig = {
  key: string
  label: React.ReactNode
  defaultValue: number
  min: number
  max: number
  step: number
  className?: string
}

export type LotkaVolterraReturn = {
  t: number
  prey: number
  predator: number
}[]

// === ode functions ===
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

// === slider defs ===
export const lvSliders: SliderConfig[] = [
  { key: 'alpha', label: <span className="text-center">α (prey growth)</span>, defaultValue: 1.1, min: 0, max: 2, step: 0.01 },
  { key: 'gamma', label: <span className="text-center">γ (predator death)</span>, defaultValue: 0.4, min: 0, max: 2, step: 0.01 },
  { key: 'beta', label: <span className="text-center">β (predation rate)</span>, defaultValue: 0.4, min: 0, max: 2, step: 0.01 },
  { key: 'delta', label: <span className="text-center">δ (predator growth)</span>, defaultValue: 0.1, min: 0, max: 2, step: 0.01 },
  { key: 'x0', label: <span className="text-center">x₀ (initial num. prey)</span>, defaultValue: 10, min: 0, max: 50, step: 1 },
  { key: 'y0', label: <span className="text-center">y₀ (initial num. predators)</span>, defaultValue: 5, min: 0, max: 50, step: 1 },
  { key: 'tEnd', label: <span className="text-center">time end</span>, defaultValue: 100, min: 0, max: 300, step: 10 },
]

export const basicSliders: SliderConfig[] = [
  { key: 'x0', label: <span className="text-center">x₀ (initial num. prey)</span>, defaultValue: 10, min: 0, max: 50, step: 1 },
  { key: 'y0', label: <span className="text-center">y₀ (initial num. predators)</span>, defaultValue: 5, min: 0, max: 50, step: 1 },
  { key: 'tEnd', label: <span className="text-center">time end</span>, defaultValue: 2, min: 0, max: 25, step: 1 },
]

export function getDefaultValues(sliders: SliderConfig[]): Record<string, number> {
  return Object.fromEntries(sliders.map(s => [s.key, s.defaultValue]))
}

export { LotkaVolterra, basicOde }