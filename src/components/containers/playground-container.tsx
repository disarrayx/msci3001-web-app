import { useState, useEffect } from "react";
import type { PlaygroundContent } from "@/pages/Playground";
import { Slider } from "@/components/ui/slider";
import GraphVisualiser, { Odes, type OdeKey } from "@/components/modelling/graph-visualiser";
import { getDefaultValues, type Equations } from "@/components/modelling/equations";

interface PlaygroundContainerProps {
    content: PlaygroundContent;
    equations: Equations
}

function PlaygroundContainer({ content, equations }: PlaygroundContainerProps) {
    const initialGraph: OdeKey = equations.simple && !equations.lv ? 'basic' : 'lotka-volterra'

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
        if (equations.simple && !equations.lv) {
            setGraph('basic')
            setValues(getDefaultValues(Odes['basic'].sliders))
        }
    }, [equations.simple, equations.lv])

    // only show sliders if both are true. 
    // i should make a method for this but lowk not bothered
    const radioButtons = []
    if (equations.simple && equations.lv) {
        Object.entries(Odes).map(([key, ode]) => (
        radioButtons.push(<label key={key} className="cursor-pointer">
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
    )))} else {
        radioButtons.push(<></>)
    }


    return (
        <div className="flex grow min-h-full min-w-full gap-x-4">
            <div className="max-w-[65%] min-w-[65%] flex flex-col border-3 border-black dark:border-white p-8 pl-0">
                <GraphVisualiser graph={graph} values={values} />
            </div>
            <div className="max-w-[35%] min-w-[35%] py-4 flex flex-col gap-y-4 items-center border-3 border-black dark:border-white">
                
                {content}
                {/* radio buttons */}
                <div className="flex gap-x-2">
                    {radioButtons}
                </div>
                {/* sliders */}
                <div className="flex flex-col gap-y-0.5 w-[80%]">
                    {Odes[graph].sliders.map(s => (
                        <div key={s.key} className={s.className}>
                            <p className="text-center">{s.label}: {values[s.key]}</p>
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