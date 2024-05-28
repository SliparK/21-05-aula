import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <>
            <h1>404 - Error Pagina não encontrada</h1>
            <hr />
            <Link to='/'>Back To Home</Link>
        </>
    )
}