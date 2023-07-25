import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './Form.module.css'
import { ITarefas } from './interfaces/Tarefas'

type Props = {
   btnText: string
   listaDeTarefas: ITarefas[]
   setListaDeTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}

const Form = ({ btnText, listaDeTarefas, setListaDeTarefas }: Props) => {

   const [title, setTitle] = useState<string>("")
   const [priority, setPriority] = useState<string>("baixa")

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value)
   }
   const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
      setPriority(e.target.value)
   }


   const addTarefa = (e: FormEvent<HTMLFormElement>) => {

      e.preventDefault()

      const id = Math.floor(Math.random() * 30000)

      const newListaTarefas = { id, title, priority }

      if (title.length == 0) {
         return
      } else {
         setListaDeTarefas([...listaDeTarefas, newListaTarefas])
         setTitle("")
      }
   }

   return (
      <form className={styles.form} onSubmit={addTarefa}>
         <label>Título:
            <input type="text" placeholder='nome da tarefa' value={title} name='title' onChange={handleChange} />
         </label>
         <label>Prioridade:
            <select name="select" id="select" value={priority} onChange={handleSelect}>
               <option value="baixa">Baixa</option>
               <option value="media">Média</option>
               <option value="alta">Alta</option>
            </select>
         </label>
         <button type="submit">{btnText}</button>
         <hr />
      </form>
   )
}

export default Form