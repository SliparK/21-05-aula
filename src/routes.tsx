import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/home'
import Sobre from './Pages/sobre'
import NotFound from './Pages/404'
import Contato from './Pages/contato'
import Tarefa from './Pages/tarefas'

const router = createBrowserRouter([
  {path: '/', element:<Home />, errorElement:<NotFound />},
  {path: '/sobre', element:<Sobre />},
  {path: '/contato', element:<Contato />},
  {path: '/tarefa', element:<Tarefa />}


])

export default router