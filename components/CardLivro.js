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

export default function AlterarLivro (props) {
  const [autores, setAutores]= useState([])
  useEffect( async ()=>{
    api.get('/autors')
      .then(response =>{ setAutores(response.data) })
      .catch(err => { console.log("Erro", err) })
  }, [])
  console.log(autores);
  
const [livros, setLivros] = useState({
    titulo: props.titulo,
    editora: props.editora,
    autorId: props.autorId,
    data_publicacao: props.data_publicacao,
    preco: props.preco
  });
  let router = useRouter();

const handleInputChange = (e) => {
    const { id, value } = e.target;
    setLivros({ ...livros, [id]: value });
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
    titulo: livros.titulo,
    editora: livros.editora,
    autorId: livros.autorId,
    data_publicacao: livros.data_publicacao,
    preco: livros.preco
    }
    console.log(data);
    const response = await axios.put(`https://livrariacrud-api.lucasgodoy04.repl.co/livros/${props.id}`, data)
   if (!response.statusText === "OK") {
      alert("Erro");
    } else {
      router.push('/pages/listaLivros')
    }
    console.log(response);
  }  
  
  return(
    <div className={styles.card}>
    <b>
      <div className={styles.livros}>
        <h3> {props.titulo} </h3>
        <br/> Editora: {props.editora} 
        <br/> Preço: {props.preco} 
        <br/> Autor: {props.autorId} 
        <br/> Data de Publicação: {props.data_publicacao}
      </div> 
    </b>
      <button className={styles.deletar} onClick={DeletarLivro}>Deletar</button>
      <button className={styles.deletar} onClick={AlterarLivro}>Alterar</button>
    </div>
  )
}