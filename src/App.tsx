import Footer from './components/Footer'
import Form from './components/Form'
import ListaDeTarefas from './components/ListaDeTarefas'
import NavBar from './components/NavBar'
import { ITarefas } from './components/interfaces/Tarefas'
import {useState} from 'react'

function App() {


  const [listaDeTarefas, setListaDeTarefas] = useState<ITarefas[]>([])

  return (
    <>
      <NavBar />
      <div className='container'>
        <Form btnText='Criar Tarefa' listaDeTarefas={listaDeTarefas} setListaDeTarefas={setListaDeTarefas} />
        <h2>Lista de Tarefas:</h2>
        <ListaDeTarefas listaDeTarefas={listaDeTarefas} />
      </div>
      <Footer />
    </>
  )
}

export default App
