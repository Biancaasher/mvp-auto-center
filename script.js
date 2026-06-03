const form = document.getElementById('formVeiculo');
const tabela = document.getElementById('tabelaVeiculos');
const filtro = document.getElementById('campoFiltro');

function buscarDados() {
    return JSON.parse(localStorage.getItem('veiculos_db')) || [];
}

// Lógica de Validação Refinada (Melhoria SA05)
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const placa = document.getElementById('placa');
        const modelo = document.getElementById('modelo');
        const cliente = document.getElementById('cliente');
        const msgSucesso = document.getElementById('msgSucesso');
        
        let temErro = false;

        // Limpa validações anteriores
        [placa, modelo, cliente].forEach(input => {
            input.style.border = "1px solid #ccc";
        });
        msgSucesso.textContent = "";

        // Validação campo por campo com feedback visual (Borda vermelha)
        if (!placa.value.trim()) {
            placa.style.border = "2px solid red";
            msgSucesso.textContent = "Preencha este campo de preenchimento obrigatório: Placa.";
            msgSucesso.style.color = "red";
            temErro = true;
        } else if (!modelo.value.trim()) {
            modelo.style.border = "2px solid red";
            msgSucesso.textContent = "Preencha este campo de preenchimento obrigatório: Modelo.";
            msgSucesso.style.color = "red";
            temErro = true;
        } else if (!cliente.value.trim()) {
            cliente.style.border = "2px solid red";
            msgSucesso.textContent = "Preencha este campo de preenchimento obrigatório: Nome do Cliente.";
            msgSucesso.style.color = "red";
            temErro = true;
        }

        if (temErro) return; // Para a execução se houver erro

        // Salva se estiver tudo certo
        const lista = buscarDados();
        lista.push({
            placa: placa.value,
            modelo: modelo.value,
            cliente: cliente.value
        });
        localStorage.setItem('veiculos_db', JSON.stringify(lista));
        
        // Mensagem de sucesso padronizada
        msgSucesso.textContent = "Operação realizada com sucesso!";
        msgSucesso.style.color = "green";
        form.reset();
    });
}

if (tabela) {
    function mostrarTabela(termoBusca = "") {
        tabela.innerHTML = "";
        const veiculos = buscarDados();
        veiculos.forEach(v => {
            if (v.placa.toLowerCase().includes(termoBusca.toLowerCase())) {
                tabela.innerHTML += `<tr><td>${v.placa}</td><td>${v.modelo}</td><td>${v.cliente}</td></tr>`;
            }
        });
    }
    filtro.addEventListener('input', () => mostrarTabela(filtro.value));
    mostrarTabela();
}
