import api from './api/api'
import ListagemAutor from '/components/CardAutor.js'
import MenuHorizontal from '../components/MenuHorizontal.js'

export async function getServerSideProps() {
  const response = await api.get ('/autores')
    console.log(response.data);
  const autor = response.data;
  return {
    props: {
      autor
    }
  }
}

 export default function listaAutor({autor}) {
   return (
     <>
       <MenuHorizontal/>
       <h1>Lista de autores</h1>
      <div>
       {
         autor.map(listar => {
           return(
             <div key={listar.id}>
               <ListagemAutor
                 id={listar.id} 
                 nome={listar.nome}  
                 sobrenome={listar.sobrenome} 
                 data_nascimento={listar.data_nascimento} /> 
               </div>
           )
         })
       }
        </div>
     </>     
   )
 }