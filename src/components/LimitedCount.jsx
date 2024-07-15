import { useState } from 'react';

function LimitedCount() {

    const [count, setCount] = useState(0);
    const limit = 10;

    const increment = () => {
        if (count < limit) {
            setCount(count + 1);
        }
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={increment}>Incrementar</button>
            {count >= limit && <p>Você atingiu o limite!</p>}
        </div>
    )
}

export default LimitedCount;