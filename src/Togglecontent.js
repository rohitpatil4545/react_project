import { useState } from "react";

const ToggleContent = () => {
    const [first, setFirst] = useState(true);

    const handleToggle = () => {
        setFirst(!first); 
    };

    return (
        <div>
            <button onClick={handleToggle}>Toggle content</button>
            {first ? <p>First click !!!!!</p> : <p>Second click!!!!!!!</p>}
        </div>
    );
};

export default ToggleContent;
