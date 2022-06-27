import {useState} from 'react'
import api from '../pages/api/api'
import {useRouter} from 'next/router'
import styles from '../styles/Home.module.css'

export default function CadastroAutor() {
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
      nome: form.nome,
      sobrenome: form.sobrenome,
      data_nascimento: form.data_nascimento,
    }
    console.log(data)
    const resultado = await api.post ('https://livrariacrud-api.lucasgodoy04.repl.co/autores', data)
    console.log(resultado);
    router.push('/autores')
  }
  
  return (    
    <div id="cadastro">
       <form className="card" onSubmit={handleSubmit} action="/send-data-here" method="post">
         <div className="card-header">
           <h2 className="card-h1">Bem Vindo(a)!</h2> Faça o cadastro de um autor.
         </div>
         
         <div className="card-content">
           <div className="card-content-area">
             <label for="usuario"><br/>Nome<br/></label>
             <input type="text" id="nome" onChange= {handleInputChange} value = {form.nome}/>
             
             <label for="usuario"><br/>Sobrenome<br/></label>
             <input type="text" id="sobrenome" onChange= {handleInputChange} value = {form.sobrenome}/>
          </div>
           
         <div className="card-content-area">
           <label for="date"><br/>Data de Nascimento:<br/></label>
           <input type="date" id="data" onChange= {handleInputChange} value = {form.data_nascimento}/>
         </div>
         </div>
         
         <div className="card-footer">
           <button class="submit" type="submit" ><br/>CADASTRAR</button>
        </div>
       </form>
    </div>
  )
}