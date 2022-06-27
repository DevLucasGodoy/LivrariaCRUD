import styles from '../styles/MenuHorizontal.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function MenuHorizontal() {
  return (
    <>
      <nav className={styles.menu}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><Link href="/cadastroAutores"><a>Cadastrar Autor</a></Link></li>
          <li><Link href="/cadastroLivros"><a>Cadastrar Livro</a></Link></li>
          <li><Link href="/listaAutores"><a>Autores</a></Link></li>
          <li><Link href="/listaLivros"><a>Livros</a></Link></li>
        </ul>
      </nav>
    </>
  )
}
