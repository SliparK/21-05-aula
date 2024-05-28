import ButtonFatec from "../buttonfatec/ButtonFatec"


function N2Comp(){
    return(
        <form>
            <h2>Entre em contato</h2>
            <hr />
            <input defaultValue='Teste' type="text" placeholder='Digite seu nome' />
            <input defaultValue='Teste' type="text" placeholder='Digite seu nome' />
            <input defaultValue='Teste' type="text" placeholder='Digite seu nome' />
            <hr />
            <ButtonFatec label= "Fatec: Enviar mensagem" type="button" />
        </form>

    )
}

export default N2Comp