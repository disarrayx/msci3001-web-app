import { useState, useEffect } from "react";
import type { PlaygroundContent } from "@/pages/Playground";
import { Slider } from "@/components/ui/slider";
import GraphVisualiser, { Odes, type OdeKey } from "@/components/modelling/graph-visualiser";
import { getDefaultValues, type Equations, LvVariants } from "@/components/modelling/main-equations";

interface PlaygroundContainerProps {
    content: PlaygroundContent;
    equations: Equations
}

// Equation text shown above the sliders, keyed by graph type
const EquationText: Record<OdeKey, { dx: string; dy: string }> = {
    basic: {
        dx: "dx/dt = x",
        dy: "dy/dt = y",
    },
    "lotka-volterra": {
        dx: "dx/dt = \u03B1x - \u03B2xy",
        dy: "dy/dt = -\u03B3y + \u03B4xy",
    },
    lv1: {
        dx: "dx/dt = x",
        dy: "dy/dt = -\u03B3y + \u03B4xy",
    },
    lv2: {
        dx: "dx/dt = \u03B1x - \u03B2xy",
        dy: "dy/dt = y",
    },
    lv3: {
        dx: "dx/dt = \u03B1x - \u03B2xy",
        dy: "dy/dt = -\u03B3y + \u03B4xy",
    },
}

function PlaygroundContainer({ content, equations }: PlaygroundContainerProps) {
    const getInitialGraph = (): OdeKey => {
        if (!equations.simple) return 'basic'
        switch (equations.lv) {
            case LvVariants.NONE:
                return 'basic'
            case LvVariants.LV1:
                return 'lv1'
            case LvVariants.LV2:
                return 'lv2'
            case LvVariants.LV3:
                return 'lv3'
            case LvVariants.FULL:
            default:
                return 'lotka-volterra'
        }
    }

    const initialGraph: OdeKey = getInitialGraph()

    // graph type
    // get & set the starting values of the selected graph
    const [graph, setGraph] = useState<OdeKey>(initialGraph)
    const [values, setValues] = useState<Record<string, number>>(
        getDefaultValues(Odes[initialGraph].sliders)
    )
    
    function handleGraphChange(next: OdeKey) {
        setGraph(next)
        setValues(getDefaultValues(Odes[next].sliders))
    }

    useEffect(() => {
        const nextGraph = getInitialGraph()
        setGraph(nextGraph)
        setValues(getDefaultValues(Odes[nextGraph].sliders))
    }, [equations.simple, equations.lv])

    const radioButtons = (equations.simple && equations.lv === LvVariants.FULL)
        ? Object.entries(Odes)
            .filter(([key]) => (key == 'basic' || key == 'lotka-volterra' ))
            .map(([key, ode]) => (
                <label key={key} className="cursor-pointer">
                    <input
                        type="radio"
                        name="graph-type"
                        value={key}
                        checked={graph === key}
                        onChange={() => handleGraphChange(key as OdeKey)}
                        className="peer sr-only"
                    />
                    <span
                        className="
                            flex items-center justify-center
                            border-2 border-black dark:border-white
                            px-3 py-1
                            text-black dark:text-white
                            peer-checked:bg-black peer-checked:text-white
                            dark:peer-checked:bg-white dark:peer-checked:text-black
                            transition-colors"
                    >
                        {ode.label}
                    </span>
                </label>
            ))
        : []

    const currentEquations = EquationText[graph]

    return (
        <div className="flex grow min-h-full min-w-full gap-x-4">
            <div className="max-w-[65%] min-w-[65%] flex flex-col border-3 border-black dark:border-white p-8 pl-0">
                <GraphVisualiser graph={graph} values={values} />
            </div>
            <div className="max-w-[35%] min-w-[35%] py-2 flex flex-col gap-y-4 items-center border-3 border-black dark:border-white">
                
                {content}
                {/* radio buttons */}
                <div className="flex gap-x-2">
                    {radioButtons}
                </div>
                {/* equations */}
                <div className="flex flex-col items-center gap-y-1">
                    <h3 className="text-blue">{currentEquations.dx}</h3>
                    <h3 className="text-red">{currentEquations.dy}</h3>
                </div>
                {/* sliders */}
                <div className="flex flex-col gap-y-0.5 w-[80%]">
                    {Odes[graph].sliders.map(s => (
                        <div key={s.key} className={s.className}>
                            {s.label}: {values[s.key]}
                            <Slider
                                id={`slider-${s.key}`}
                                value={[values[s.key]]}
                                onValueChange={(v) => setValues(prev => ({ ...prev, [s.key]: Array.isArray(v) ? v[0] : v }))}
                                min={s.min}
                                max={s.max}
                                step={s.step}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PlaygroundContainer