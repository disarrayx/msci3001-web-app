import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { House, Box, Book, Sun, Moon } from '@/assets/svg.tsx'
import { useTheme } from "@/components/ui/theme-provider"

function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex justify-end w-full gap-8">
      <Button variant="default" className="flex gap-2" asChild>
        <Link to="/">
          <House className="stroke-black dark:stroke-white stroke-2 size-8" />
          <p className="text-xl">Home</p>
        </Link>
      </Button>
      <Button variant="default" className="flex gap-2" asChild>
        <Link to="/tutorial">
          <Book className="stroke-black dark:stroke-white stroke-2 size-8" />
          <p className="text-xl">Tutorial</p>
        </Link>
      </Button>
      <Button variant="default" className="flex gap-2" asChild>
        <Link to="/playground">
          <Box className="stroke-black dark:stroke-white stroke-2 size-8" />
          <p className="text-xl">Playground</p>
        </Link>
      </Button>

      {/* light/dark mode */}
      <Button variant="default" className="flex gap-2" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <Sun className="stroke-black dark:stroke-white stroke-2 size-8 hidden dark:inline"/>
        <Moon className="stroke-black dark:stroke-white stroke-2 size-8 dark:hidden" />
      </Button>
    </div>
  )
}

export default Navbar