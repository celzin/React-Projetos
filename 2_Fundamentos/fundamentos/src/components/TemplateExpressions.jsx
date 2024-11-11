const TemplateExpressions = () => {

    const name = "Teste"
    const data = {age:22, job:"Programmer"}

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como {data.job} e possui {data.age} anos.</p>
            <p>{4+4}</p>
        </div>
    )

}

export default TemplateExpressions