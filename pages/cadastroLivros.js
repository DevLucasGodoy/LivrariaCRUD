import CadastroLivro from '../components/CadastroLivro.js'
import MenuHorizontal from '../components/MenuHorizontal.js'
import styles from '../styles/Home.module.css'

export default function Livro () {
  return (
    <>
      <MenuHorizontal/>
      <div className={styles.card}>
      <CadastroLivro/>
      </div>
    </>
  )
}