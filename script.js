document.addEventListener('DOMContentLoaded', () => {
    
    // Selecionando os elementos do DOM
    const btnAnalisar = document.getElementById('btnAnalisar');
    const inputUmidade = document.getElementById('umidade');
    const painelResultado = document.getElementById('painelResultado');
    const mensagemStatus = document.getElementById('mensagemStatus');

    // Evento de clique para disparar o simulador
    btnAnalisar.addEventListener('click', () => {
        
        // Coleta o valor do input e converte para float (decimal)
        const umidade = parseFloat(inputUmidade.value);

        // Remove a classe 'escondido' para exibir o painel de resultados
        painelResultado.classList.remove('escondido');

        // Validação de erro
        if (isNaN(umidade) || umidade < 0 || umidade > 100) {
            mensagemStatus.innerHTML = "❌ <strong>Erro no Sensor:</strong> Por favor, insira um valor válido de umidade entre 0 e 100%.";
            painelResultado.style.borderLeft = "5px solid #ef4e4e"; // Vermelho
            return; // Encerra a função aqui
        }

        // Lógica de Programação para Irrigação Inteligente
        if (umidade >= 70) {
            mensagemStatus.innerHTML = "✅ <strong>Nível de Água Excelente.</strong><br>O solo possui umidade suficiente (" + umidade + "%). As bombas de irrigação permanecerão DESLIGADAS hoje. A tecnologia evitou o desperdício de água e o desgaste do solo, mantendo o equilíbrio produtivo.";
            painelResultado.style.borderLeft = "5px solid #10cb82"; // Verde
        } 
        else if (umidade >= 30 && umidade < 70) {
            mensagemStatus.innerHTML = "⚠️ <strong>Nível de Água Moderado.</strong><br>A umidade está em " + umidade + "%. O sistema de irrigação por gotejamento foi ATIVADO apenas nas áreas que precisam. Essa precisão garante alta produtividade gastando o mínimo possível de recursos hídricos.";
            painelResultado.style.borderLeft = "5px solid #f59f00"; // Laranja/Amarelo
        } 
        else {
            mensagemStatus.innerHTML = "🚨 <strong>Alerta de Seca.</strong><br>A umidade está crítica (" + umidade + "%). O sistema de irrigação automatizado de emergência foi LIGADO para salvar a lavoura e garantir a produção de alimentos da safra. O monitoramento contínuo protegerá a planta até a recuperação.";
            painelResultado.style.borderLeft = "5px solid #ef4e4e"; // Vermelho
        }
        
        // Limpa o campo para uma nova simulação
        inputUmidade.value = "";
    });
});