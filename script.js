// Banco de dados com as informações completas, detalhadas e imagens virtuais
const dadosTemas = {
    reciclagem: {
        conteudo: `
            <h2>♻️ Reciclagem e Economia Circular</h2>
            <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80" alt="Contentores de reciclagem seletiva" class="imagem-tema">
            <p>A reciclagem vai muito além de separar o lixo; ela é a base da <strong>Economia Circular</strong>, um modelo que elimina o conceito de "desperdício" ao reinserir materiais na cadeia produtiva. No ecossistema humano, a extração de recursos naturais gera impactos severos, enquanto a reciclagem reduz drasticamente o consumo de água e energia elétrica.</p>
            
            <h3>Pontos Chave:</h3>
            <ul>
                <li><strong>O Impacto do Alumínio:</strong> Reciclar o alumínio economiza <strong>95% da energia</strong> necessária para produzir metal primário a partir da bauxita. O Brasil é líder mundial nessa prática, reaproveitando quase 100% das latas comercializadas.</li>
                <li><strong>O Desafio do Plástico:</strong> Ao contrário do vidro e do metal, que podem ser reciclados infinitamente, o plástico perde qualidade a cada ciclo. A reciclagem impede que toneladas de microplásticos contaminem os oceanos.</li>
                <li><strong>Logística Reversa:</strong> É o processo que obriga as indústrias a recolherem produtos pós-consumo (como pilhas, pneus e eletrônicos) para que não poluam o solo com metais pesados.</li>
            </ul>
        `
    },
    agua: {
        conteudo: `
            <h2>💧 Água: Ciclo Natural e Reuso Artificial</h2>
            <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80" alt="Rio límpido correndo pela natureza" class="imagem-tema">
            <p>A água é um recurso finito em termos de disponibilidade potável. Embora a Terra seja coberta por água, <strong>menos de 1%</strong> está totalmente acessível para o consumo humano direto. A reciclagem da água ocorre tanto de forma natural quanto tecnológica.</p>
            
            <h3>Pontos Chave:</h3>
            <ul>
                <li><strong>O Ciclo Hidrológico e as Florestas:</strong> As florestas atuam como reguladoras do clima. Através da evapotranspiração, as árvores lançam umidade na atmosfera, criando os "rios voadores" que transportam chuvas por continentes.</li>
                <li><strong>Água de Reuso (Tratamento Avançado):</strong> Esgotos domésticos e industriais passam por processos físicos, químicos e biológicos em Estações de Tratamento (ETE). Essa água reciclada serve para resfriar indústrias e irrigar plantações, poupando a água potável.</li>
                <li><strong>Pegada Hídrica:</strong> Este indicador mede o volume de água doce utilizado para produzir bens. Por exemplo, são necessários cerca de 15 mil litros de água para produzir apenas 1 kg de carne bovina.</li>
            </ul>
        `
    },
    florestas: {
        conteudo: `
            <h2>🌳 Florestas e Ciclagem de Nutrientes</h2>
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80" alt="Raios de sol passando pelas árvores de uma floresta densa" class="imagem-tema">
            <p>As florestas são os ecossistemas mais eficientes do planeta porque operam em um sistema de <strong>desperdício zero</strong>. Elas regulam o clima global, protegem o solo contra a erosão e abrigam mais de 80% da biodiversidade terrestre.</p>
            
            <h3>Pontos Chave:</h3>
            <ul>
                <li><strong>Ciclagem de Nutrientes:</strong> No chão da floresta, folhas e galhos caídos formam a <em>serapilheira</em>. Fungos e bactérias decompõem essa matéria orgânica, transformando-a em húmus rico que nutre as árvores e fecha um ciclo perfeito.</li>
                <li><strong>Sequestro de Carbono:</strong> Através da fotossíntese, as árvores absorvem o gás carbônico da atmosfera — o principal gás do efeito estufa — e o transformam em madeira, ajudando a frear o aquecimento global.</li>
                <li><strong>Manejo Sustentável:</strong> É a prática de extrair recursos da floresta (como madeira e óleos) de forma controlada, garantindo que a natureza consiga se regenerar sozinha e continuar existindo.</li>
            </ul>
        `
    },
    energia: {
        conteudo: `
            <h2>⚡ Energia, Matriz Limpa e Eficiência</h2>
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80" alt="Painéis solares fotovoltaicos sob o sol" class="imagem-tema">
            <p>A energia move a sociedade moderna, mas a queima de combustíveis fósseis (carvão, petróleo e gás) é a maior responsável pelas mudanças climáticas. A reciclagem energética e a transição para fontes limpas são caminhos obrigatórios.</p>
            
            <h3>Pontos Chave:</h3>
            <ul>
                <li><strong>Fontes Renováveis:</strong> Ao contrário dos combustíveis fósseis, fontes como a solar (fotovoltaica), eólica (ventos) e biomassa são inesgotáveis e possuem uma pegada de carbono quase nula.</li>
                <li><strong>Reciclagem Energética (Biomassa e Biogás):</strong> Resíduos orgânicos urbanos e restos de madeira podem ser reaproveitados. A decomposição de lixo em aterros gera o gás metano, que pode ser capturado e transformado em eletricidade.</li>
                <li><strong>Eficiência Energética:</strong> Significa fazer a mesma atividade gastando menos recursos. Quando a indústria recicla materiais, ela reduz a demanda por geração de energia nas usinas elétricas.</li>
            </ul>
        `
    }
};

// Lista de dicas rápidas para o botão inferior
const dicas = [
    "Evite sacolas plásticas: use ecobags!",
    "Desligue a torneira enquanto escova os dentes e economize até 12 litros de água.",
    "Separe o lixo orgânico do lixo reciclável na sua casa.",
    "Apague as luzes ao sair de um cômodo.",
    "Prefira produtos de marcas que ao fazem manejo florestal sustentável."
];

function mostrarInfo(tema) {
    const container = document.getElementById('informacoes');
    if (dadosTemas[tema]) {
        container.innerHTML = dadosTemas[tema].conteudo;
        container.scrollIntoView({ behavior: 'smooth' });
    }
}

function mostrarDica() {
    const elementoDica = document.getElementById('dica');
    const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
    elementoDica.textContent = dicaAleatoria;
}

let tamanhoFonte = 16;
function aumentarFonte() {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + 'px';
}
function diminuirFonte() {
    if (tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + 'px';
    }
}
function modoEscuro() {
    document.body.classList.toggle('dark-mode');
}
