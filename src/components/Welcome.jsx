import {useState} from 'react';
import { useEffect } from 'react';
// USESTATE TE PERMITE GUARDAR ESTADOS DE LOS COMPONENTES DE FORMA DINAMICA

//USEEFECT se usa para hacer efectos secundarios en componentes funcionales

// REACT ROUTER DOOM ES UNA FUNCION DE COMPONENTES, VAMOS A OBTENER UN ENRUTAMIENTO DINAMICO, VAMOS A CARGAR COMPONENTES U OTROS SIN RECARGAR LA PAGINA
export default function Welcome(props){
    const [semaforo, setearSemaforo] = useState(false);
    const contar = () => {
        // console.log("Entrando en la funcion de contar e invocando el UseState");
        setearContador(contador + 1);
        setearSemaforo(!semaforo);
    }
    
useEffect(() => {
    // cada vez que semaforo se ejecute, se activa el UseEfect
    console.log("Componente montado", semaforo.toString());
},[semaforo])

    const [contador, setearContador] = useState(0);
    const { message, name } = props; //se crean las const de los props y se invoca luego
    return(
        <div>
            <h1>Bienvenido a React {message}!</h1>
            <p>Espero que lo disfrutes {name}!</p>
            <h2>Contador de React con Hook</h2>
            <button type='submit' onClick={contar}>Contar</button>
            <p>Contador: {contador}</p>
            <p>El Semaforo esta en color: {semaforo ? "Verde" : "Rojo"}</p>
        </div>
    )
}