import { Link } from "react-router-dom";
import ButtonFatec from "../../components/buttonfatec/ButtonFatec";
import InputFatec from "../../components/inputFatec";

export default function Contato(){
    return(
        <>
        <div>
        <h2>Entre em Contato</h2>
        <hr />
      <InputFatec
        placeHolder="Digite seu nome"
        defaultValue="" type="text" /><br />
        <InputFatec
        placeHolder="Digite seu nome"
        defaultValue="" type="text" /><br />
        <InputFatec
        placeHolder="Digite seu nome"
        defaultValue="" type="text" />
        <hr />
        <ButtonFatec label="Botão 2" type="button" />
        </div>
        <hr />


      <Link to="/"><button>Back Home</button></Link>
      <hr />
        </>
    )
}