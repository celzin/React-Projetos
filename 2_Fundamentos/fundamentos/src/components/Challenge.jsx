const Challenge = () => {
    const a = 10
    const b = 3
    return (
        <div>
            Valores A = {a} e B = {b}.
            <div>
                <button onClick={()=>console.log(a+b)}>Somando {a} e {b}</button>
            </div>
        </div>
    )
}

export default Challenge