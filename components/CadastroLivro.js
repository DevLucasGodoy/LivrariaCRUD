import {useState} from 'react'
import api from '../pages/api/api'
import {useRouter} from 'next/router'
import styles from '../styles/Home.module.css'

export default function Cadastrol() {
  const [form , setForm] = useState ({});
  function handleInputChange(e) {
    const {id, value} = e.target
    setForm({ ...form, [id]: value });
  }
  console.log(form);
  const router = useRouter()
  async function handleSubmit (e) {
    e.preventDefault()
    const data = {
      titulo: form.titulo,
      autorId: form.autor,
      editora: form.editora,
      data_publicacao: form.data,
      preco: form.preco,
    }
    console.log(data)
    const autor_response = await api.post ('https://livrariacrud-api.lucasgodoy04.repl.co/livros', data)
    console.log(autor_response);
    router.push('/livros')
  }
  return (
    <div id="cadastro">
      <form class="card" onSubmit={handleSubmit}>
        <div class="card-header">
          <h2>Bem Vindo(a)!</h2> Faça o cadastro de um livro.
        </div>
        
        <div class="card-content">
          <div class="card-content-area">
            <label for="usuario"><br/>Nome<br/></label>
            <input type="text" id="titulo" onChange= {handleInputChange} value = {form.titulo}/>

            <label for="usuario"><br/>Autor<br/></label>
            <input type="text" id="autor" onChange= {handleInputChange} value = {form.autor}/>
                       
            <label for="usuario"><br/>Editora<br/></label>
            <input type="text" id="editora" onChange= {handleInputChange} value = {form.editora}/>
           
            <label for="usuario"><br/>Preço<br/></label>
            <input type="number" id="preço" onChange= {handleInputChange} value = {form.preco}/>
        </div>
          
          <div class="card-content-area">
            <label for="date"><br/>Data de Publicação:<br/></label>
            <input type="date" onChange= {handleInputChange} value = {form.data}/>
          </div>
        </div>
        
        <div class="card-footer">
          <button class="submit" type="submit"><br/>CADASTRAR</button>
        </div>
      </form>
    </div>
  )
}