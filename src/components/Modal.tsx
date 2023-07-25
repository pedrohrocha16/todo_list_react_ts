import styles from './Modal.module.css'
import { CgCloseO } from 'react-icons/cg'

type Props = {
  children: React.ReactNode
}

const Modal = ({ children }: Props) => {

  const fecharModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal")
    modal!.classList.add("hide")
    console.log(e)
  }


  return (
    <div id='modal'>
      <div className={styles.fade} onClick={fecharModal}></div>
      <div className={styles.modal}>
        <div className={styles.button}>
          <i><CgCloseO onClick={fecharModal} /></i>
        </div>
        <h2>Texto Modal</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal