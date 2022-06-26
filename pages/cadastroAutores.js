import CadastroAutor from '../components/CadastroAutor.js'
import MenuHorizontal from '../components/MenuHorizontal.js'
import styles from '../styles/Home.module.css'

export default function Autor () {
  return (
    <><div className={styles.card}>
      <MenuHorizontal/>
      <CadastroAutor/>
      </div>
    </>
  )
}