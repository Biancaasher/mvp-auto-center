# MVP Auto Center - Gestão de Veículos

Sistema de controle de entrada e manutenção de veículos desenvolvido como projeto prático para a unidade curricular de Desenvolvimento de Sistemas.

Melhorias Aplicadas (Refatoração SA03)
Em conformidade com as diretrizes de boas práticas, depuração e rastreabilidade, o projeto passou por uma rodada de otimizações estruturais:

1. **Organização de Diretórios:** Separação física dos arquivos de estilo e lógica em pastas dedicadas (`/css` e `/js`), eliminando arquivos soltos na raiz.
2. **Correção de Caracteres (Encoding):** O arquivo `index.html` foi totalmente corrigido e convertido para o padrão UTF-8, eliminando falhas de leitura no GitHub.
3. **Depuração de Links:** Correção manual de todas as tags `<link>` e `<script>` para garantir o perfeito funcionamento da navegação e das funcionalidades do sistema após a migração de pastas.
4. **Documentação Técnica:** Inclusão do arquivo `checklist.md` detalhando as boas práticas aplicadas no ecossistema front-end.

Tecnologias Utilizadas
* HTML5 Semântico
* CSS3 Estilizado
* JavaScript Dinâmico (Manipulação do DOM e LocalStorage)

 Como Executar o Projeto
1. Faça o download ou clone deste repositório.
2. Abra o arquivo `index.html` em qualquer navegador web moderno.
3. Utilize o menu superior para alternar entre as telas de Cadastro e Listagem de veículos.
