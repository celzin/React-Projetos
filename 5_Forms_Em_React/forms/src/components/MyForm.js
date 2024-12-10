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
    console.log(name)
    

  return (
    <div>
        {/* 1 - criacao de form */}
        <form action="">
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleName} />
            </div>
            <input type="submit" value="enviar" />
            {/* 2 - label envolvendo input */}
            <label>
                <span>E-mail:</span>
                <input type='email' name='email' placeholder="Digite o seu e-mail" />
            </label>
        </form>
    </div>
  )
}

export default MyForm