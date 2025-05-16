import { Link } from "react-router-dom";

export function Home(){
   return (
    <>
    <h1 className='title bold'>Bienvenue au BookStore !</h1>
    <h2 className="subtitle">Votre appétit aura-t-il raison de notre bibliothèque ?</h2>

    <Link to="collection" className="btn link-button">Découvrir</Link>
    </>
   )
}