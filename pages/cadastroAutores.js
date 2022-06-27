import CadastroAutor from '../components/CadastroAutor.js'
import MenuHorizontal from '../components/MenuHorizontal.js'
import styles from '../styles/Home.module.css'

export default function Autor () {
  return (
    <> 
      <MenuHorizontal/>
      <div className={styles.card}>
      <CadastroAutor/>
      </div>
    </>
  )
}