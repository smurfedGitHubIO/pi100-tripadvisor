import Home from './pages/Home.svelte'
import Infrastructure from './pages/Infrastructure.svelte'
import About from './pages/About.svelte'
import NotFound from './pages/NotFound.svelte'

export const routes = {
  '/': Home,
  '/infrastructure/:id': Infrastructure,
  '/about': About,
  '*': NotFound
}