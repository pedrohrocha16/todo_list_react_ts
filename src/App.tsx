import Footer from './components/Footer'
import Form from './components/Form'
import ListaDeTarefas from './components/ListaDeTarefas'
import Modal from './components/Modal'
import NavBar from './components/NavBar'
import { ITarefas } from './components/interfaces/Tarefas'
import { useState } from 'react'

function App() {


  const [listaDeTarefas, setListaDeTarefas] = useState<ITarefas[]>([])

  const deletarTarefa = (id: number) => {
    setListaDeTarefas(
      listaDeTarefas.filter((tarefa) => {
        return tarefa.id !== id
      })
    )
  }

  return (
    <>
      <Modal children={<Form btnText='Editar Tarefa' setListaDeTarefas={setListaDeTarefas} listaDeTarefas={listaDeTarefas}/>} />
      <NavBar />
      <div className='container'>
        <Form btnText='Criar Tarefa' listaDeTarefas={listaDeTarefas} setListaDeTarefas={setListaDeTarefas} />
        <h2>Lista de Tarefas:</h2>
        <ListaDeTarefas listaDeTarefas={listaDeTarefas} deletarTarefas={deletarTarefa} />
      </div>
      <Footer />
    </>
  )
}

export default App
