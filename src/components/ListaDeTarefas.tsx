import styles from './ListaDeTarefas.module.css'
import { ITarefas } from './interfaces/Tarefas'
import { BiEditAlt, BiSolidTrash } from "react-icons/bi"

type Props = {
  listaDeTarefas: ITarefas[]
}

const ListaDeTarefas = ({ listaDeTarefas }: Props) => {
  return (
    <div className={styles.container_list}>
      {listaDeTarefas.length > 0 && listaDeTarefas.map((item) => (
        <div key={item.id} className={styles.list_itens}>
          <h4>{item.title}</h4>
            {item.priority === "baixa" ? (<p className={styles.baixa}>Baixa</p>) : item.priority === "media" ? (<p className={styles.media}>Média</p>) : (<p className={styles.alta}>Alta</p>)}
          <div className={styles.icons}>
            <i><BiEditAlt /></i>
            <i><BiSolidTrash /></i>
          </div>
        </div>
      ))}

      {listaDeTarefas.length <= 0 && <p>Não há tarefas cadastradas!</p>}
    </div>
  )
}

export default ListaDeTarefas