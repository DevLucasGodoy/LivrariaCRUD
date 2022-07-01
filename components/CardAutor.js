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
      } 
    }

export default function AtualizaAutor (props) {
  const [autores, setAutores] = useState({
    nome: props.nome,
    sobrenome: props.sobrenome,
    data_nascimento: props.data_nascimento,
  });
  let router = useRouter();
  
const handleInputChange = (e) => {
    const { id, value } = e.target;
    setAutores({ ...autores, [id]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
    nome: autores.nome,
    sobrenome: autores.sobrenome, 
    data_nascimento: autores.data_nascimento,
    }
    console.log(data);
    console.log(props.id);
    const response = await axios.put(`https://livrariacrud-api.lucasgodoy04.repl.co/autores/${props.id}`, data)
     if (!response.statusText === "OK") {
      alert("Erro");
    } else {
      router.push('/pages/listaAutores')
    }
    console.log(response)
  }
  
  return(
    <div className={styles.card}>
     <b> 
       <div className={styles.autores}>
         <h3>
           <Link href={`/autor/${props.id}`}>
             <a>
             <br/> {props.nome} 
             <br/> {props.sobrenome}
             </a>
           </Link>
         </h3> 
             <br/> Id: {props.id} 
             <br/> Data de nascimento: {props.data_nascimento} 
       </div> 
     </b>
     
      <button className={styles.deletar} onClick={DeletarAutor}>Deletar</button>
      <button className={styles.deletar} onClick={AlterarAutor}>Alterar</button>
    </div>
  )
}
