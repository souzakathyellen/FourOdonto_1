import './Banner.css'

function Banner() {
    return (
        
        <header className = 'banner'>
        <h1 class="text-title">
                 Four Odonto, Sua Clínica Odontológica</h1>

            <nav class="linklobby">
            <a href="">Home</a>
            <a href="">Sobre</a>
            <a href="">Cadastro</a>
            <a href="">Admin</a>
            </nav>
                <div class="beneficios">
                <div class="beneficios-titulo">
                    <h2>Benefícios dos Tratamentos Odontológicos</h2>
                </div>

                <img src="./imagens/Sorriso-perfeito.jpg"
                    alt="sorriso 1 "/>

                <h3>Reabilita</h3>
                <p class="text-paragraph"> Melhora a funcionalidade mastigatória e oral através de tratamentos corretos
                    para corrigir certas disfunções.</p>

                <img src="./imagens/sorriso-perfeito2.jpg" alt="sorriso 2"/>
                <h3>Previne</h3>
                <p class="text-paragraph">Sorrisos saudáveis e bem-cuidados são capazes de prevenir de doenças futuras e
                    depressão.</p>

                 <img src="./imagens/imgsorriso.jpg" alt="sorriso 3"/>
                <h3>Estética</h3>
                <p class="text-paragraph">Corrige imperfeições dentárias, promovendo a melhora da     autoestima utilizando
                    tratamentos modernos e discretos.</p>


                </div>
        
              

   
        </header>
) 
}

export default Banner