import { Solver, type Derivative } from '@/lib/odex'
import { type LotkaVolterraReturn, type SliderConfig } from '@/components/modelling/main-equations'

// used for the tutorial

// === ode functions ===
// dx/dt = αx & dx/dt = αx
function LotkaVolterra1(
  alpha: number, gamma: number,
  x0: number, y0: number, tEnd: number
): LotkaVolterraReturn {
  const solver = new Solver(2)
  solver.denseOutput = true

  const f: Derivative = (_t: number, [x, y]: Array<number>) => [
    alpha * x,
    -1 * gamma * y,
  ]

  const points: LotkaVolterraReturn = []
  const grid = solver.grid(0.5, (t, [x, y]) => {
    points.push({ t, prey: x, predator: y })
  })

  solver.solve(f, 0, [x0, y0], tEnd, grid)
  return points
}

// dx/dt = αx - xy & dx/dt = αx + xy
function LotkaVolterra2(
  alpha: number, gamma: number,
  x0: number, y0: number, tEnd: number
): LotkaVolterraReturn {
  const solver = new Solver(2)
  solver.denseOutput = true

  const f: Derivative = (_t: number, [x, y]: Array<number>) => [
    (alpha * x) - (x * y),
    -1 * (gamma * y) + (x * y),
  ]

  const points: LotkaVolterraReturn = []
  const grid = solver.grid(0.5, (t, [x, y]) => {
    points.push({ t, prey: x, predator: y })
  })

  solver.solve(f, 0, [x0, y0], tEnd, grid)
  return points
}

// === slider defs ===
export const lv1Sliders: SliderConfig[] = [
  { key: 'alpha', label: <span className="text-center text-blue">α (prey growth)</span>, defaultValue: 0.05, min: 0, max: 2, step: 0.01 },
  { key: 'gamma', label: <span className="text-center text-red">γ (predator death)</span>, defaultValue: 0.2, min: 0, max: 2, step: 0.01 },
  { key: 'x0', label: <span className="text-center">x₀ (initial num. prey)</span>, defaultValue: 10, min: 0, max: 50, step: 1 },
  { key: 'y0', label: <span className="text-center">y₀ (initial num. predators)</span>, defaultValue: 5, min: 0, max: 50, step: 1 },
  { key: 'tEnd', label: <span className="text-center">time end</span>, defaultValue: 10, min: 0, max: 100, step: 5 },
]

export const lv2Sliders: SliderConfig[] = [
  { key: 'alpha', label: <span className="text-center">α (prey growth)</span>, defaultValue: 1.1, min: 0, max: 2, step: 0.01 },
  { key: 'gamma', label: <span className="text-center">γ (predator death)</span>, defaultValue: 0.4, min: 0, max: 2, step: 0.01 },
  { key: 'x0', label: <span className="text-center">x₀ (initial num. prey)</span>, defaultValue: 10, min: 0, max: 50, step: 1 },
  { key: 'y0', label: <span className="text-center">y₀ (initial num. predators)</span>, defaultValue: 5, min: 0, max: 50, step: 1 },
  { key: 'tEnd', label: <span className="text-center">time end</span>, defaultValue: 90, min: 0, max: 100, step: 5 },
]

export const lv3Sliders: SliderConfig[] = [
  { key: 'alpha', label: <span className="text-center">α (prey growth)</span>, defaultValue: 1.1, min: 0, max: 2, step: 0.01 },
  { key: 'gamma', label: <span className="text-center">γ (predator death)</span>, defaultValue: 0.4, min: 0, max: 2, step: 0.01 },
  { key: 'beta', label: <span className="text-center text-blue">β (predation rate)</span>, defaultValue: 0.4, min: 0, max: 2, step: 0.01 },
  { key: 'delta', label: <span className="text-center text-red">δ (predator growth)</span>, defaultValue: 0.1, min: 0, max: 2, step: 0.01 },
  { key: 'x0', label: <span className="text-center">x₀ (initial num. prey)</span>, defaultValue: 10, min: 0, max: 50, step: 1 },
  { key: 'y0', label: <span className="text-center">y₀ (initial num. predators)</span>, defaultValue: 5, min: 0, max: 50, step: 1 },
  { key: 'tEnd', label: <span className="text-center">time end</span>, defaultValue: 100, min: 0, max: 300, step: 10 },
]

export { LotkaVolterra1, LotkaVolterra2 }