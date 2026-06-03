

document.addEventListener("DOMContentLoaded", () => {
    const formCadastro = document.getElementById("formCadastro");
    const campoFiltro = document.getElementById("campoFiltro");

    // 1. Fluxo de Validação do Formulário de Cadastro
    if (formCadastro) {
        formCadastro.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Seleção dos inputs
            const modelo = document.getElementById("modelo");
            const placa = document.getElementById("placa");
            let formularioValido = true;

            // Limpa estados de erro anteriores
            [modelo, placa].forEach(input => {
                if (input) {
                    input.style.border = "1px solid #ccc";
                }
            });

            const msgSucesso = document.getElementById("msgSucesso");
            if (msgSucesso) msgSucesso.textContent = "";

            // Validação do campo Modelo
            if (modelo && modelo.value.trim() === "") {
                modelo.style.border = "2px solid red";
                alert("Preencha este campo de preenchimento obrigatório: Modelo.");
                formularioValido = false;
            }

            // Validação do campo Placa
            if (formularioValido && placa && placa.value.trim() === "") {
                placa.style.border = "2px solid red";
                alert("Preencha este campo de preenchimento obrigatório: Placa.");
                formularioValido = false;
            }

            // Se tudo estiver correto, simula o sucesso
            if (formularioValido) {
                if (msgSucesso) {
                    msgSucesso.style.color = "green";
                    msgSucesso.textContent = "Operação realizada com sucesso!";
                }
                formCadastro.reset();
            }
        });
    }

    // 2. Interação Principal: Filtrar/Buscar itens localmente na tabela
    if (campoFiltro) {
        campoFiltro.addEventListener("input", () => {
            const termoBusca = campoFiltro.value.toLowerCase();
            const linhasTabela = document.querySelectorAll("table tbody tr");

            linhasTabela.forEach(linha => {
                const textoLinha = linha.textContent.toLowerCase();
                if (textoLinha.includes(termoBusca)) {
                    linha.style.display = "";
                } else {
                    linha.style.display = "none";
                }
            });
        });
    }
});
