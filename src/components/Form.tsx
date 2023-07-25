import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import styles from './Form.module.css'
import { ITarefas } from './interfaces/Tarefas'

type Props = {
   btnText: string
   listaDeTarefas: ITarefas[]
   setListaDeTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
   tarefa?: ITarefas | null
   handleUpdate?(id: number, title: string, priority: string): void
}

const Form = ({ btnText, listaDeTarefas, setListaDeTarefas, tarefa, handleUpdate }: Props) => {

   const [id, setId] = useState<number>(0)
   const [title, setTitle] = useState<string>("")
   const [priority, setPriority] = useState<string>("baixa")

   useEffect(() => {
      if (tarefa) {
         setId(tarefa.id)
         setTitle(tarefa.title)
         setPriority(tarefa.priority)
      }
   }, [tarefa])

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value)
   }
   const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
      setPriority(e.target.value)
   }


   const addTarefa = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (handleUpdate) {

         handleUpdate(id, title, priority)

      } else if (title.length > 0) {
         const id = Math.floor(Math.random() * 30000)

         const newListaTarefas = { id, title, priority }
         setListaDeTarefas([...listaDeTarefas, newListaTarefas])
         setTitle("")
      }
   }


   return (
      <form className={styles.form} onSubmit={addTarefa}>
         <label>Título:
            <input type="text" placeholder='nome da tarefa' value={title} name='title' onChange={handleChange} maxLength={15} />
         </label>
         <label>Prioridade:
            <select name="select" id="select" value={priority} onChange={handleSelect}>
               <option value="baixa">Baixa</option>
               <option value="media">Média</option>
               <option value="alta">Alta</option>
            </select>
         </label>
         <button type="submit">{btnText}</button>
      </form>
   )

}
export default Form