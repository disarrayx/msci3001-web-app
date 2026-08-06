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
      <br/><p>This is an example of a differential equation. We will define our variables as:</p>
      <ul>
        <li>x = the population of species A</li>
        <li>t = time in days</li>
      </ul>
      <br/><p>To translate our equation:</p>
      <ul>
        <li>dx/dt → how fast species A's population increasing/decreasing each day</li>
        <li>dx/dt = x → the population grows by exactly as many individuals as currently exist each day</li>
        <ul><li>E.g. If there were 5 individuals on day 2, then on day 3 there will be 10 (5 + 5)</li></ul>
      </ul>
      <br/><p>For this equation: the more individuals there are, the faster a population. Let's visualise this.</p>
    </>,
    <>
    </>
  ]
  

  return (
    <>
      <TutorialContainer content={tutorialContent}/>
    </>
  )
}

export default Tutorial
