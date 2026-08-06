import { Box, House } from '@/assets/svg'
import TutorialContainer from '@/components/containers/tutorial-container'
import TutorialPlaygroundWrapper from '@/components/containers/tutorial-playground-wrapper'
import TutorialTextWrapper from '@/components/containers/tutorial-text-wrapper'
import { LvVariants } from '@/components/modelling/main-equations'
import { Button } from '@/components/ui/button'
import '@/styles/index.css'
import { Link } from 'react-router'

export type TutorialContent = Array<React.ReactNode>


function Tutorial() {
  const tutorialContent: TutorialContent = [
    TutorialTextWrapper({
      header: <h2 className="text-center">What are differential equations?</h2>,
      text: <><br/><br/><p>Things in our world change all the time. In biology <b>we often want to answer questions</b> like, how fast does a population grow, how fast is the climate changing? So how do we do this?</p>
      <br/><p>Variables are how we describe unknown things (like a population of a species). Derivatives help us describe rates of change (how fast is the population growing?).</p>
      <br/><p>Differential equations link together variables and derivatives to give us <b>models</b> that can answer these questions.</p>
      <br/><p>Note that you can use the arrow keys to navigate between the tutorial pages.</p>
    </>
    }),
    TutorialTextWrapper({
      header: <h2 className="text-center">What are differential equations?</h2>,
      text: <>
      <br/><br/><h2 className="text-center">dx/dt = x</h2>
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
    </>
    }),
    // playground things
    TutorialPlaygroundWrapper({
      header: <h2 className="text-center">Constructing the Lotka-Volterra Equation</h2>,
      headerSubtitle: <p>We will start with the basic graph. Notice how the population numbers <b>grow exponentially.</b></p>,
      dxdtEquation: <h3 className="text-blue">dx/dt = x</h3>,
      dxdtDescription: <p className="text-light-mode-gray dark:text-dark-mode-gray">Prey numbers grow in proportion to the existing number of prey</p>,
      dydtEquation: <h3 className="text-red">dy/dt = -y</h3>,  
      dydtDescription: <p className="text-light-mode-gray dark:text-dark-mode-gray">Predator numbers decline in proportion to the existing number of predators</p>,
      equations: {simple: true, lv: LvVariants.NONE}
    }),
      TutorialPlaygroundWrapper({
      header: <h2 className="text-center">Constructing the Lotka-Volterra Equation</h2>,
      headerSubtitle: <p>If we <b>adjust the time slider</b> we can see the prey population growing infinitely, whilst predators eventually reach 0.</p>,
      dxdtEquation: <h3>dx/dt = <span className="text-blue">α</span>x</h3>,
      dxdtDescription: <p className="text-light-mode-gray dark:text-dark-mode-gray">Prey numbers grow in proportion to the <span className="text-blue">prey growth rate</span></p>,
      dydtEquation: <h3>dy/dt = -<span className="text-red">γ</span>y</h3>,  
      dydtDescription: <p className="text-light-mode-gray dark:text-dark-mode-gray">Predator numbers decline in proportion to <span className="text-red">predator death rate</span></p>,
      equations: {simple: true, lv: LvVariants.LV1}
    }),
    TutorialPlaygroundWrapper({
      header: <h2 className="text-center">Constructing the Lotka-Volterra Equation</h2>,
      headerSubtitle: <p>The graph is now fluctuating! Our predator & prey populations are <b>interacting</b> with one another.</p>,
      dxdtEquation: <h3>dx/dt = αx<span className="text-blue"> - xy</span></h3>,
      dxdtDescription: <p className="text-light-mode-gray dark:text-dark-mode-gray">Prey numbers grow in proportion to the prey growth rate, <span className="text-blue">and declines in proportion to predator encounters</span></p>,
      dydtEquation: <h3>dy/dt = -γy<span className="text-red"> + xy</span></h3>,  
      dydtDescription: <p className="text-light-mode-gray dark:text-dark-mode-gray">Predator numbers decline in proportion to predator death rate, <span className="text-red">and grows in proportion to prey encounters</span></p>,
      equations: {simple: true, lv: LvVariants.LV2}
    }),
    TutorialPlaygroundWrapper({
      header: <h2 className="text-center">Constructing the Lotka-Volterra Equation</h2>,
      headerSubtitle: <p>We can adjust how much our predator & prey populations interact with one another through these parameters. This is the final Lotka-Volterra predator-prey model.</p>,
      dxdtEquation: <h3>dx/dt = αx - <span className="text-blue">β</span>xy</h3>,
      dxdtDescription: <p className="text-light-mode-gray dark:text-dark-mode-gray">Prey numbers grow in proportion to the prey growth rate, and declines in proportion to predator encounters</p>,
      dydtEquation: <h3>dy/dt = -γy + <span className="text-red">δ</span>xy</h3>,  
      dydtDescription: <p className="text-light-mode-gray dark:text-dark-mode-gray">Predator numbers decline in proportion to predator death rate, and grows in proportion to prey encounters</p>,
      equations: {simple: true, lv: LvVariants.LV3}
    }),
    // extra things to note
    TutorialTextWrapper({
      header: <h2 className="text-center">Some extra things to note</h2>,
      text: <>
        <br/><p>Lotka-Volterra is just one of many examples that demonstrates how we use math equations to model the real world.</p>
        <br/><p>One thing to note is that most models we use are a <b>simplification of reality</b>. 
        We need to accept when things are “good enough” for our purposes - the more parameters, 
        the harder equations are to compute and the more complex our system becomes.</p>
      </>
    }),
    TutorialTextWrapper({
      header: <h2 className="text-center">Model assumptions</h2>,
      text: <>
        <br/><p>Models also make multiple <b>assumptions</b> due to simplifying things, which <b>aren't always very realistic</b>. For example, Lotka-Volterra assumes:</p>
        <ul>
          <li>The prey population finds ample food at all times</li>
          <li>The food supply of the predator population depends entirely on the size of the prey population</li>
          <li>The rate of change of population is proportional to its size</li>
          <li>That the environment does not change in favour of one species, and there is no adaptation</li>
          <li>Predators have limitless appetite</li>
          <li>That both populations can be described by a single variable - there could be other contributing variables like age or space distribution, etc.</li>
        </ul>
        <br/><p><b>These assumptions don't mean the model is invalid though!</b> We know that predator and prey populations fluctuate with relevance to one another and Lotka-Volterra models that.</p>
      </>
    }),
    TutorialTextWrapper({
      header: <h2 className="text-center">Tutorial complete!</h2>,
      text: <div className="flex flex-col gap-4 items-center">
        <p>Feel free to go to the playground to experiment with the Lotka-Volterra equation or replay the tutorial if you need.</p>
        <div className="flex flex-col gap-2">
          <Button variant="outline" className="flex gap-2 w-56" asChild>
            <Link to="/">
              <House className="z-1 size-8" />
              <p className="z-1 text-xl">Go home</p>
            </Link>
         </Button>
         <Button variant="outline" className="flex gap-2 w-56" asChild>
            <Link to="/playground">
              <Box className="z-1 size-8" />
              <p className="z-1 text-xl">Playground</p>
            </Link>
         </Button>
        </div>
      </div>
    })
  ]
  

  return (
    <>
      <TutorialContainer content={tutorialContent}/>
    </>
  )
}

export default Tutorial
