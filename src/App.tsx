import Footer from './components/Footer'
import Form from './components/Form'
import ListaDeTarefas from './components/ListaDeTarefas'
import Modal from './components/Modal'
import NavBar from './components/NavBar'
import { ITarefas } from './components/interfaces/Tarefas'
import { useState } from 'react'

function App() {


  const [listaDeTarefas, setListaDeTarefas] = useState<ITarefas[]>([])
  const [tarefaUpdate, setTarefaUpdate] = useState<ITarefas | null>(null)

  const deletarTarefa = (id: number) => {
    setListaDeTarefas(
      listaDeTarefas.filter((tarefa) => {
        return tarefa.id !== id
      })
    )
  }

  const esconderOuMostrarModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if (display) {
      modal!.classList.remove("hide")
    } else {
      modal!.classList.add("hide")
    }
  }

  const editTarefa = (tarefa: ITarefas): void => {
    esconderOuMostrarModal(true)
    setTarefaUpdate(tarefa)
  }

  const updateTarefa = (id: number, title: string, priority: string) => {

    const updateTarefas: ITarefas = { id, title, priority }

    const updateItems = listaDeTarefas.map((tarefa) => {
      return tarefa.id === updateTarefas.id ? updateTarefas : tarefa
    })

    setListaDeTarefas(updateItems)
    esconderOuMostrarModal(false)
  }

  return (
    <>
      <Modal children={<Form btnText='Editar Tarefa' tarefa={tarefaUpdate} handleUpdate={updateTarefa} setListaDeTarefas={setListaDeTarefas} listaDeTarefas={listaDeTarefas} />} />
      <NavBar />
      <div className='container'>
        <Form btnText='Criar Tarefa' listaDeTarefas={listaDeTarefas} setListaDeTarefas={setListaDeTarefas} />
        <h2>Lista de Tarefas:</h2>
        <ListaDeTarefas listaDeTarefas={listaDeTarefas} deletarTarefas={deletarTarefa} handleEdit={editTarefa} />
      </div>
      <Footer />
    </>
  )
}

export default App
