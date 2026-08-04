import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router";
import '@/styles/index.css'
import Navbar from '@/components/navbar.tsx'
import { ThemeProvider } from '@/components/theme-provider'
import App from '@/App'
import Home from './pages/Home';
import Tutorial from '@/pages/Tutorial'
import Playground from './pages/Playground';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HashRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="flex flex-col p-4 min-h-screen bg-white text-black dark:bg-black dark:text-white">
            <Navbar />
            <Routes>
              <Route path="/" element={<App/>}>
                  <Route index element={<Home />} />
                  <Route path="tutorial" element={<Tutorial />} />
                  <Route path="playground" element={<Playground />} />
              </Route>
            </Routes>
          </div>
        </ThemeProvider>
      </HashRouter>
  </StrictMode>,
)
