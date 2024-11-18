import { useState } from "react"

const ListRender = () => {
  const [list] = useState(["Celso", "Pedro", "Luan", "Marcus"])
  const [users] = useState([
    {id: 1, name: "Celso", age: 22},
    {id: 2345, name: "Pedro", age: 24},
    {id: 6789, name: "Luan", age: 20},
  ])
    return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name}, {user.age}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender