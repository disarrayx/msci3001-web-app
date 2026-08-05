import TutorialContainer from '@/components/tutorial-container'
import '@/styles/index.css'

export type TutorialContent = Array<React.ReactNode>

function Tutorial() {
  const tutorialContent: TutorialContent = [
    <>
      <h2 className="text-center">What are differential equations?</h2>
      <br/><br/><p>Things in our world change all the time. In biology <b>we often want to answer questions</b> like, how fast does a population grow, how fast is the climate changing? So how do we do this?</p>
      <br/><p>Variables are how we describe unknown things (like a population of a species). Derivatives help us describe rates of change (how fast is the population growing?).</p>
      <br/><p>Differential equations link together variables and derivatives to give us <b>models</b> that can answer these questions.</p>
    </>,
    <>
      <h2 className="text-center">What are differential equations?</h2>
      <br/><br/><h2 className="text-center">dx/dt</h2>
      <br/><br/><p>This is an example of a differential equation. We will define our variables as:</p>

    </>
  ]
  

  return (
    <>
      <TutorialContainer content={tutorialContent}/>
    </>
  )
}

export default Tutorial
