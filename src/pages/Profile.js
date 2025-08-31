import { useParams } from "react-router-dom";
export default function Profile(){
    const { name } = useParams(); // Obtener el parámetro "name" de la URL
    return(
        <div>
            <h1>Perfil de Usuario: {name}</h1>
            <p>Esta es la página de perfil</p>
        </div>
    )
}