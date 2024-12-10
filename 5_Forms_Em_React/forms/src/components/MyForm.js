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
        </form>
    </div>
  )
}

export default MyForm