const form = document.getElementById('formVeiculo');
const tabela = document.getElementById('tabelaVeiculos');
const filtro = document.getElementById('campoFiltro');

// Função para buscar dados simulados no LocalStorage
function buscarDados() {
    return JSON.parse(localStorage.getItem('veiculos_db')) || [];
}

// Lógica para a página de cadastro
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const lista = buscarDados();
        lista.push({
            placa: document.getElementById('placa').value,
            modelo: document.getElementById('modelo').value,
            cliente: document.getElementById('cliente').value
        });
        localStorage.setItem('veiculos_db', JSON.stringify(lista));
        document.getElementById('msgSucesso').textContent = "Veículo cadastrado com sucesso!";
        form.reset();
    });
}

// Lógica para a página de listagem
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
    mostrarTabela(); // Inicializa a tabela
}