import PlaygroundContainer from '@/components/containers/playground-container'
import { LvVariants } from '@/components/modelling/main-equations'
import '@/styles/index.css'

export type PlaygroundContent = React.ReactNode

// equation selector: simple, lv, all

function Playground() {
  const content = 
    <>
      <h3><b>Equation Selector</b></h3>
    </>
  
  return (
    <div className="flex p-16 grow min-h-full">
      <PlaygroundContainer content={content} equations={{simple: true, lv: LvVariants.FULL}}/>
    </div>
  )
}

export default Playground
