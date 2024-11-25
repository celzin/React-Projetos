import React from 'react'

const UserDetails = ( {name, age, carrer} ) => {
  return (
    <div>
        <h2>Usuário: {name}</h2>
        <ul>
            <li>Idade: {age}</li>
            <li>Profissão: {carrer}</li>
            <li> {age >= 18 ? (
                <p>O usuário pode tirar carteira!</p>
                ) : (
                <p>Não é maior de idade</p>
                )}
            </li>
        </ul>
    </div>
  )
}

export default UserDetails