import { useEffect } from "react";

export const Message = () => {
    useEffect(() => {
        const hanldeMouseMove = () => {
            console.log(':)');
            };
            window.addEventListener( 'mousemove', hanldeMouseMove);

        return () => {
            window.removeEventListener('mousemove', hanldeMouseMove);
        }
    },[])

    return (
        <>
        <h1>Me renderice</h1>
        </>
    );
}