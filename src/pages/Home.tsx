import { Button } from '@/components/shadcn/button'
import '@/styles/index.css'
import { Link } from 'react-router'
import { Box, Play } from '@/assets/svg.tsx'

function Home() {
  return (
    <div className="flex flex-col grow justify-center items-center min-h-full min-w-full gap-12">
      <div className="flex flex-col min-h-full min-w-full items-center gap-2">
        <h1><b>Predatory-Prey Dynamics</b></h1>
        <h2>Constructing differential equations & understanding Lotka-Volterra</h2>
      </div>

    <div className="flex flex-col min-h-full min-w-full items-center gap-2">
      <Button variant="outline" className="w-50 flex gap-2" asChild>
        <Link to="/tutorial">
          <Play className="stroke-black dark:stroke-white stroke-2 size-8" />
          <p className="text-xl">Begin tutorial</p>
        </Link>
      </Button>
      <Button variant="outline" className="w-50 flex gap-2" asChild>
        <Link to="/playground">
          <Box className="stroke-black dark:stroke-white stroke-2 size-8" />
          <p className="text-xl">Playground</p>
        </Link>
      </Button>
    </div>
    </div>
  )
}

export default Home
