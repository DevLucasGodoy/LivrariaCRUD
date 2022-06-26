import api from '../pages/api/api'
import styles from '../styles/CardAutor.module.css'
import Link from 'next/link'

export default function ListagemAutor (props) {
  async function DeletarAutor() {
        
        let excluir = confirm("Você tem certeza ?")
    
        
      if (excluir == true) {
            const response = await api.delete("/autores/" + props.id)
            console.log(response);
            alert("Excluído com sucesso.")       
      } else {
            alert("Não foi possível excluir, tente novamente.")
        }
    }
  return(
    <div className={styles.card}>
     <b> <div className={styles.autores}><h3> <Link href={`/autor/${props.id}`}><a>{props.nome} {props.sobrenome}</a></Link></h3> Id: {props.id} <br/> Data de nascimento: {props.data_nascimento} </div> </b>
     
      <button className={styles.deletar} onClick={DeletarAutor}>Deletar</button>
    </div>
  )
}