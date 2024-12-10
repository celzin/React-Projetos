import "./MyForm.css"

function MyForm() {
  return (
    <div>
        {/* 1 - criacao de form */}
        <form action="">
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name='name' placeholder='Digite o seu nome' />
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