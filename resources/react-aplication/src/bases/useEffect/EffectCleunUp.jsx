import { useState } from "react";

export const EffectCleaunUp = () => {
    const [showComponent, setshowComponent] = useState(false);

    const hanldeChangeFlag = () => {
        setshowComponent(prev => !prev);
    };

    return (
        <>
            <h1>Effect Cleun Up</h1>
            <hr />
            <h3>
                Componente: {' '}
                {showComponent === false
                    ? 'Componente desmontado'
                    : 'Componente Montado'}
            </h3>
            <button onClick={hanldeChangeFlag}>
                {!showComponent ? 'Montar' : 'Desmontar'}
            </button>
        </>
    )
}