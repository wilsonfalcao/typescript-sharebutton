# TypeScript CSS Selector DOM

Este projeto tem objetivo de demonstrar o uso do superset TypeScript com elementos HTML recuperados através DOM. Com uso do conceito de tipificação de variável e obedecendo conceito de responsabilidade isolada, inversão de dependência e abstração de classes, esse projeto manipula document.querySelectorAll() como um objeto de classe, recuperando valores ou criando eventos isoladamente. Um exemplo da introdução deste conceito pode ser visto na classe ShareButtonFacebook que herda de uma classe abstract ShareButton e recebe no construtor um objeto DOMProviders que implementa o contrato IDOMProviders.

É pretendido neste projeto manipular elementos HTML que correspondam interações do client-side. 

### Execução do projeto

Baixe esse repositório para seu ambiente e execute o comando abaixo:
```sh
npm install
```

*** Será instalado o typescript como dependência de desenvolvimento