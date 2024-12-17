import { useState } from "react";

export const States = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [age, setAge] = useState(22);

    const handleClick = () => {

        

        // setCount(count + 1);
        // setCount(count + 1);

        // setCount((count) => count + 1);
        // setCount((count) => count + 1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        var final = {name: name, age: age};
        console.log(final);

        setName("");
        setAge(22);
    }

    return (
        <>
            <h1>States component!!</h1>

            {/* <button onClick={() => handleClick()} >Click</button> : {count} */}

            <form onSubmit={(e) => handleSubmit(e)} >
                Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                Age: <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                <button>Submit</button>
            </form>
        </>
    );
};