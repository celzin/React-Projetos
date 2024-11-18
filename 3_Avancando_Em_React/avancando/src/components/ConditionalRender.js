import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false)
    
    return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Se x for falso, não!</p>}
    </div>
  )
}

export default ConditionalRender