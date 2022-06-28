import api from '../pages/api/api'
import styles from '../styles/CardAutor.module.css'

export default function ListagemAutor (props) {
    async function DeletarLivro() {
    let excluir = confirm("Você tem certeza?")
      if (excluir == true) {
            const response = await api.delete("/livros/" + props.id)
            console.log(response);
            alert("Excluído com sucesso.")       
      }
    }

    async function AlterarLivro() {
    let alterar = confirm("Você tem certeza?")
      if (alterar == true) {
            const response = await api.update("/livros/" + props.id)
            console.log(response);
            alert("Alterado com sucesso.")       
      }
    }
  return(
    <div className={styles.card}>
    <b>  <div className={styles.livros}><h3> {props.titulo} </h3><br/>Editora: {props.editora} <br/> Preço: {props.preco} <br/> Autor: {props.autorId} <br/> Data de Publicação: {props.data_publicacao}</div> </b>
      <button className={styles.deletar} onClick={DeletarLivro}>Deletar</button>
      <button className={styles.deletar} onClick={DeletarLivro}>Alterar</button>
    </div>
  )
}