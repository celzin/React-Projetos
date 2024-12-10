import "./MyForm.css"
import { useState } from 'react'

const MyForm = ({user}) => {
    // 6 - ocntrolled inputs
    // 3 - gerenciamento de dados input
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")
    const handleName = (e) => {
        // console.log(e.target.value)
        setName(e.target.value)
    }
    // console.log(name)
    // console.log(email)

    const [bio, setBio] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault(); // Evita o page reload
        console.log("Enviando o formulário")
        console.log(name, email, bio);
        
        // Validacao => Envio =>

        // 7 - limpar forms
        setName("")
        setEmail("")
        setBio("")
    };

  return (
    <div>
        {/* 5 - envio de form */}
        {/* 1 - criacao de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input 
                    type="text" 
                    name='name' 
                    placeholder='Digite o seu nome' 
                    onChange={handleName} 
                    value={name}
                />
            </div>
            {/* 2 - label envolvendo input */}
            <label>
                <span>E-mail:</span>
                {/* 4 - simplificação de manipulação de state */}
                <input 
                    type='email' 
                    name='email' 
                    placeholder="Digite o seu e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            {/* 8 - textarea */}
            <label>
                <span>Bio:</span>
                <textarea 
                    name="bio" 
                    placeholder="Descrição do usuário" 
                    onChange={(e) => setBio(e.target.value)} 
                    value={bio}>
                </textarea>
            </label>
            <input type="submit" value="enviar" />
        </form>
    </div>
  )
}

export default MyForm