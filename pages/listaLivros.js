import api from './api/api'
import ListagemLivro from '/components/CardLivro.js'
import MenuHorizontal from '../components/MenuHorizontal.js'

export async function getServerSideProps() {
  const response = await api.get ('/livros')
    console.log(response.data);
  const livro = response.data;
  return {
    props: {
      livro
    }
  }
}

 export default function listaLivro({livro}) {
   return (
      <div>
       <MenuHorizontal/>
        <h1>Lista de livros</h1>
       {
         livro.map(lista => {
           return(
             <div key={lista.id}>
               <ListagemLivro  
                 titulo={lista.titulo} 
                 editora={lista.editora} 
                 data_publicacao={lista.data_publicacao} 
                 preco={lista.preco} 
                 autorId={lista.autorId} 
                 id={lista.id}/> 
               </div>
           )
         })
       }
     </div>
   )
 }