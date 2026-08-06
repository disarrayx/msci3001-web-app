import PlaygroundContainer from '@/components/containers/playground-container'
import TutorialContainer from '@/components/containers/tutorial-container'
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
    // playground things
    <>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-center">Constructing the Lotka-Volterra Equation</h2>
        <p>We will start with the basic graph. Notice how the population numbers <b>grow exponentially.</b></p>
      </div>
      <div className="px-16 p-8">
        <PlaygroundContainer 
          content={
          <>
            <div className="flex flex-col items-center gap-2 px-4">
              <h3><b>Differential Equations</b></h3>
              <h3 className="text-blue">dx/dt = x</h3>
              <p className="text-light-mode-gray dark:text-dark-mode-gray">Prey numbers grow in proportion to the existing number of prey.</p>
              <h3 className="text-red">dy/dt = y</h3>
              <p className="text-light-mode-gray dark:text-dark-mode-gray">Predator numbers decline in proportion to the existing number of predators.</p>
            </div>
          </>
          }
          equations={{simple: true, lv: false}}
        /> 
      </div>
    </>,
    // extra things to note
    <>
      <h2 className="text-center">Some extra things to note</h2>
      <br/><p>Lotka-Volterra is just one of many examples that demonstrates how we use math equations to model the real world.</p>
      <br/><p>One thing to note is that most models we use are a <b>simplification of reality</b>. 
        We need to accept when things are “good enough” for our purposes - the more parameters, 
        the harder equations are to compute and the more complex our system becomes.</p>
    </>
  ]
  

  return (
    <>
      <TutorialContainer content={tutorialContent}/>
    </>
  )
}

export default Tutorial
