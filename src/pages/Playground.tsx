import PlaygroundContainer from '@/components/containers/playground-container'
import '@/styles/index.css'

export type PlaygroundContent = React.ReactNode

// equation selector: simple, lv, all

function Playground() {
  const content = 
    <>
      <h3><b>Equation Selector</b></h3>
    </>
  
  return (
    <div className="p-16">
      <PlaygroundContainer content={content} equations={{simple: true, lv: true}}/>
    </div>
  )
}

export default Playground
