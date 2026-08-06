import PlaygroundContainer from '@/components/playground-container'
import '@/styles/index.css'

export type PlaygroundContent = Array<React.ReactNode>

// equation selector: simple, lv, all

function Playground() {
  const content = [
    <>
      <h3><b>Equation Selector</b></h3>
    </>,
    <p>second</p>
  ]
  return (
    <>
      <PlaygroundContainer content={content}/>
    </>
  )
}

export default Playground
