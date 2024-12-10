import "./MyForm.css"
import { useState } from 'react'

function MyForm() {
    // 3 - gerenciamento de dados input
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const handleName = (e) => {
        // console.log(e.target.value)
        setName(e.target.value)
    }
    // console.log(name)
    // console.log(email)
    
    const handleSubmit = (event) => {
        event.preventDefault(); // Evita o page reload
        console.log("Enviando o formulário")
        console.log(name, email);
    };

  return (
    <div>
        {/* 5 - envio de form */}
        {/* 1 - criacao de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleName} />
            </div>
            <input type="submit" value="enviar" />
            {/* 2 - label envolvendo input */}
            <label>
                <span>E-mail:</span>
                {/* 4 - simplificação de manipulação de state */}
                <input type='email' name='email' placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)}/>
            </label>
        </form>
    </div>
  )
}

export default MyForm