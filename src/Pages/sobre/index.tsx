import { Link } from "react-router-dom";

export default function Sobre(){
    return(
        <>
        <h1>Sobre</h1>
        <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt eum quasi suscipit, nam commodi asperiores voluptas repellendus fuga perferendis magni optio eveniet dolores, quidem illum fugit officiis voluptatem possimus ratione?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, similique asperiores. Aliquam, totam maiores placeat, nostrum nihil eos quis aspernatur corporis veritatis praesentium beatae quaerat incidunt. Sunt architecto fugiat veritatis!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id consequatur autem, doloribus vitae et iure facere labore temporibus magni ab eos aperiam expedita harum libero quaerat ipsam laudantium soluta necessitatibus.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt illo perspiciatis odit laboriosam deleniti unde placeat doloribus inventore maxime reiciendis, quasi repudiandae ipsam explicabo aspernatur illum aliquam dicta consequuntur suscipit!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolorem distinctio quo incidunt velit deserunt, in, nihil, soluta doloribus maiores odio iste obcaecati! Eligendi odit vitae modi, quod a reiciendis!</p>
            
            <h2>Criado por: "Fernando Ricardo Vieira de Melo"</h2>
        </div>
        <button ><Link to="/">Back To Home</Link></button>
        <Link to="/"><button >Back to Home</button></Link> 
        </>

    )

}