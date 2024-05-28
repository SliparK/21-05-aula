import { Link } from "react-router-dom";


export default function Home(){
    return(
        <>
        <h3>My Pages LparII</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime pariatur quas autem tenetur provident ad magni libero incidunt, animi nobis ullam adipisci dolores architecto quibusdam nisi? Nihil, quo earum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi adipisci ipsam optio consequatur beatae officiis culpa exercitationem vero ipsa repellat atque neque, possimus recusandae fugit vel? Molestiae ratione dolorum pariatur.</p>
        <hr />
        <Link to="/sobre"><button >Sobre</button></Link><br />
        <Link to="/contato"><button >Contato</button></Link><br />
        <Link to="/tarefa"><button >Tarefas</button></Link><br />
        <hr />
        
        
        </>
    )
}