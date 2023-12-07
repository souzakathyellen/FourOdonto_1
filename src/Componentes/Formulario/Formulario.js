import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css';

const Formulario = () => {
    const procedimento=[
        'Aparelho Dentário',
        'Clareamento Dental',
        'Limpeza Dental'
    ]

    return (
        <section className='formulario'>
        <form id="form">
            <CampoTexto label="Nome" placeholder="Digite seu nome completo"/>
            <CampoTexto label="Email" placeholder="Digite seu Email"/>
            <CampoTexto label="Telefone" placeholder="Digite seu Telefone"/>
            <p>Selecione um procedimento</p>
            <ListaSuspensa itens={procedimento}/>
            <input class="btn-login" type="button" value="Entrar"/>
            
        </form>
        </section>
    );
}

export default Formulario;