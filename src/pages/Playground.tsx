import PlaygroundContainer from '@/components/playground-container'
import '@/styles/index.css'

export type PlaygroundContent = Array<React.ReactNode>

// props passed into lotka volterra 
// = starting prey, starting pred
// = prey growth, pred growth, pred rate, pred

function Playground() {
  const content = [
    <>
      <h3><b>Differential Equations</b></h3>
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
