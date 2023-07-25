import styles from './ListaDeTarefas.module.css'
import { ITarefas } from './interfaces/Tarefas'

type Props = {
  listaDeTarefas: ITarefas[]
}

const ListaDeTarefas = ({ listaDeTarefas }: Props) => {
  return (
    <div className={styles.container_list}>
      {listaDeTarefas.length > 0 && listaDeTarefas.map((item) => (
        <div className={styles.list_itens}>
          <h4>{item.title}</h4>
          {item.priority === "baixa" ? (<p className={styles.baixa}>Prioridade: Baixa</p>) : item.priority === "media" ? (<p className={styles.media}>Prioridade: Média</p>) : (<p className={styles.alta}>Prioridade: Alta</p>)}
        </div>
      ))}

      {listaDeTarefas.length <= 0 && <p>Não há tarefas cadastradas!</p>}
    </div>
  )
}

export default ListaDeTarefas