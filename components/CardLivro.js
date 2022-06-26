import api from '../pages/api/api'
import styles from '../styles/CardAutor.module.css'

export default function ListagemAutor (props) {
    async function DeletarLivro() {
      
  let excluir = confirm("Você tem certeza?")
    
      if (excluir == true) {
            const response = await api.delete("/livros/" + props.id)
            console.log(response);
            alert("Excluído com sucesso.")       
      } else {
            alert("Não foi possível excluir, tente novamente.")
        }
    }
  return(
    <div className={styles.card}>
    <b>  <div className={styles.livros}><h3> {props.titulo} </h3><br/>Editora: {props.editora} <br/> Preço: {props.preco} <br/> Autor: {props.autorId} <br/> Data de Publicação: {props.data_publicacao}</div> </b>
      <button className={styles.deletar} onClick={DeletarLivro}>Deletar</button>
    </div>
  )
}