![Version](https://img.shields.io/badge/version-1.4.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)

# 💜 Nubank Clone

Landing page educacional inspirada na interface do Nubank, desenvolvida com **HTML5**, **Tailwind CSS**, **JavaScript** e **Vite**, com foco em layout responsivo, validação de formulário, carrossel interativo, menu mobile acessível, SEO básico e boas práticas de organização front-end.

O projeto evoluiu de uma página estática para uma interface com interações reais em JavaScript, incluindo validação de CPF, carrossel de produtos com autoplay, controle de pause/play e navegação mobile funcional.

---

## 🌐 Acesse o Projeto

**Repositório:** [github.com/felipe-frc/nubank-clone](https://github.com/felipe-frc/nubank-clone)

Atualmente, este projeto é executado localmente. Para visualizá-lo, siga as instruções da seção **Como Executar o Projeto**.

---

## 📌 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de praticar e demonstrar conhecimentos em:

- Desenvolvimento de landing pages modernas;
- Estruturação semântica com HTML5;
- Estilização responsiva com Tailwind CSS;
- Criação de interfaces inspiradas em produtos reais;
- Manipulação do DOM com JavaScript puro;
- Validação de formulário no front-end;
- Criação de carrossel interativo;
- Implementação de menu mobile acessível;
- Aplicação de metatags de SEO e compartilhamento social;
- Organização de arquivos em um projeto front-end com Vite;
- Documentação técnica para portfólio profissional.

---

## 🚀 Funcionalidades Implementadas

- **Header Fixo e Responsivo:** navegação principal com logo, links internos, botão de ação e menu mobile.
- **Menu Mobile:** botão hamburger funcional, fechamento por link interno e fechamento com tecla `Esc`.
- **Hero Section:** seção principal com imagem de fundo, overlay, CTAs e formulário de simulação.
- **Formulário de CPF:** máscara automática, validação de preenchimento e feedback visual.
- **Carrossel de Produtos:** cards de produtos com indicadores clicáveis, rotação visual, autoplay e controle de pause/play.
- **Seção de Cartão:** representação visual de cartão com identidade roxa e dados fictícios.
- **Seção do App:** mockup mobile com saldo, fatura, atalhos e recursos financeiros.
- **Seção de Segurança:** cards informativos sobre segurança e canais de suporte.
- **Chamada Final:** CTA para simulação de abertura de conta.
- **Footer Completo:** links, contatos, redes sociais e aviso educacional.
- **SEO e Compartilhamento Social:** metatags de SEO, Open Graph e Twitter Card.

---

## ⭐ Destaques Técnicos

- Interface inspirada visualmente no site oficial do Nubank;
- Layout responsivo para desktop, tablet e mobile;
- Máscara de CPF feita com JavaScript puro;
- Estados visuais de erro, neutro e sucesso no formulário;
- Carrossel implementado sem bibliotecas externas;
- Controle próprio de estado para produto ativo do carrossel;
- Autoplay com `setInterval`;
- Controle de pause/play com atualização de ícone;
- Menu mobile com manipulação de classes e acessibilidade;
- Uso de atributos `aria-label`, `aria-current`, `aria-expanded`, `aria-hidden` e `aria-pressed`;
- Metadados de SEO e compartilhamento social;
- Organização simples e adequada para portfólio.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia     | Uso no projeto                                      |
| -------------- | --------------------------------------------------- |
| HTML5          | Estrutura semântica da landing page                 |
| CSS3           | Variáveis globais, tokens visuais e ajustes base    |
| Tailwind CSS 4 | Estilização utilitária e responsividade             |
| JavaScript     | Interatividade, formulário, carrossel e menu mobile |
| Vite           | Ambiente de desenvolvimento e build                 |
| Font Awesome   | Ícones da interface                                 |
| Google Fonts   | Fonte Inter                                         |
| Git/GitHub     | Versionamento, commits e releases                   |

---

## 🏗️ Estrutura do Projeto

```txt
nubank-clone/
│
├── public/
│   ├── favicon/
│   │   └── favicon-nubank.png
│   │
│   └── images/
│       ├── bannerhome-nubank.png
│       ├── chip-cartao.png
│       ├── logo-nubank-branco.png
│       ├── logo-nubank.png
│       ├── modelo-seguranca.png
│       │
│       └── cards/
│           ├── nubank-empresa.png
│           ├── nubank-ultravioleta.png
│           └── nubank.png
│
├── src/
│   ├── scripts/
│   │   └── main.js
│   │
│   └── styles/
│       └── main.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── LICENSE
└── README.md
```

---

## ⚙️ Organização da Aplicação

A aplicação segue uma organização simples, separando estrutura, estilo e comportamento.

### `index.html`

Responsável pela estrutura principal da página, incluindo:

- Header;
- Menu desktop;
- Menu mobile;
- Hero section;
- Formulário de CPF;
- Seção de produtos;
- Seção do cartão;
- Seção do app;
- Seção de segurança;
- Chamada final;
- Footer;
- Metatags de SEO e compartilhamento social.

### `src/styles/main.css`

Responsável por:

- Importação do Tailwind CSS;
- Definição de variáveis globais;
- Paleta de cores;
- Fonte principal;
- Imagem de fundo do hero.

### `src/scripts/main.js`

Responsável pelas interações da interface:

- Máscara de CPF;
- Validação do formulário;
- Feedback visual do CPF;
- Carrossel de produtos;
- Indicadores clicáveis;
- Rotação dos cards;
- Autoplay;
- Controle de pause/play;
- Menu mobile;
- Fechamento do menu por link e tecla `Esc`;
- Controle de acessibilidade via atributos `aria`.

### `public/`

Responsável por armazenar os assets estáticos:

- Imagens;
- Cards;
- Logos;
- Favicon;
- Imagem principal usada no hero e nas metatags sociais.

---

## 🧩 Principais Implementações em JavaScript

O arquivo `main.js` concentra as principais funcionalidades dinâmicas do projeto.

### Validação de CPF

- Remove caracteres não numéricos;
- Limita a entrada em 11 dígitos;
- Aplica máscara no formato `000.000.000-00`;
- Exibe mensagem inicial, erro e sucesso;
- Atualiza estilos do input conforme o estado;
- Impede envio do formulário quando o CPF está vazio ou incompleto.

### Carrossel de Produtos

- Controla o produto ativo por índice;
- Atualiza o subtítulo do produto ativo;
- Atualiza os indicadores;
- Altera visualmente a posição dos cards;
- Mantém um card ativo no centro;
- Mantém cards laterais com menor destaque;
- Alterna automaticamente os produtos com autoplay;
- Permite pausar e retomar a animação.

### Menu Mobile

- Abre e fecha o menu pelo botão hamburger;
- Alterna o ícone entre menu e fechar;
- Atualiza `aria-expanded`;
- Atualiza `aria-hidden`;
- Fecha o menu ao clicar em links internos;
- Fecha o menu ao pressionar `Esc`;
- Restaura o foco para o botão ao fechar com teclado.

---

## 🎨 Identidade Visual

O projeto mantém inspiração visual no Nubank, mas com ajustes próprios para portfólio:

- Paleta baseada em tons de roxo;
- Tipografia Inter;
- Cards arredondados;
- Sombras suaves;
- Layout limpo e moderno;
- Hero com CTA forte;
- Mockup visual de app;
- Cartão fictício personalizado;
- Ícones para reforçar a comunicação visual.

---

## 🔎 SEO e Compartilhamento Social

A página possui metadados para melhorar a apresentação do projeto em buscadores e redes sociais:

- `title` descritivo;
- `meta description`;
- `meta keywords`;
- `meta author`;
- `meta robots`;
- `theme-color`;
- `color-scheme`;
- Open Graph;
- Twitter Card;
- Imagem de preview social usando a imagem principal do projeto.

---

## ▶️ Como Executar o Projeto

### Pré-requisitos

Antes de começar, é necessário ter instalado:

- [Node.js](https://nodejs.org/) 20 ou superior;
- npm;
- Git.

---

### 1. Clone o repositório

```bash
git clone https://github.com/felipe-frc/nubank-clone.git
```

---

### 2. Acesse a pasta do projeto

```bash
cd nubank-clone
```

---

### 3. Instale as dependências

```bash
npm install
```

---

### 4. Execute o projeto em modo de desenvolvimento

```bash
npm run dev
```

Após iniciar, o Vite exibirá uma URL semelhante a:

```txt
http://localhost:5173
```

Abra essa URL no navegador.

---

### 5. Gere o build de produção

```bash
npm run build
```

---

### 6. Visualize o build localmente

```bash
npm run preview
```

---

## 🧪 Testes Manuais Recomendados

Como o projeto ainda não possui testes automatizados, recomenda-se validar manualmente:

- Responsividade em desktop, tablet e mobile;
- Funcionamento do menu mobile;
- Abertura e fechamento do menu via hamburger;
- Fechamento do menu ao clicar em links;
- Fechamento do menu com `Esc`;
- Validação do campo de CPF;
- Máscara de CPF durante a digitação;
- Feedback visual de erro e sucesso;
- Cliques nos indicadores do carrossel;
- Rotação visual dos cards;
- Autoplay do carrossel;
- Botão de pause/play;
- Build de produção com `npm run build`.

---

## ⚠️ Observações

- Este projeto é uma recriação educacional inspirada na interface do Nubank.
- Não possui vínculo oficial com o Nubank.
- Não possui backend.
- Não coleta, envia ou armazena dados reais.
- O CPF digitado no formulário é usado apenas para simular uma interação visual.
- Os links institucionais e de redes sociais são demonstrativos.
- Algumas informações visuais, como saldo, fatura e número de cartão, são fictícias.
- O objetivo principal é estudo, prática e apresentação em portfólio.

---

## 🧠 Decisões de Desenvolvimento

### HTML semântico

A estrutura da página foi organizada com `header`, `main`, `section`, `form`, `nav` e `footer`, facilitando leitura, manutenção e acessibilidade.

### Tailwind CSS

O Tailwind CSS foi utilizado para acelerar a construção da interface, mantendo consistência visual, responsividade e facilidade de ajuste direto na marcação.

### CSS com variáveis

O projeto utiliza variáveis CSS para cores principais, fonte e imagem de fundo, deixando a identidade visual mais fácil de manter.

### JavaScript puro

A interatividade foi construída com JavaScript puro para reforçar conceitos fundamentais de DOM, eventos, estado e manipulação de classes.

### Carrossel manual

O carrossel foi implementado sem bibliotecas externas, com controle próprio de estado, indicadores, autoplay e pause/play.

### Acessibilidade

Foram adicionados atributos como `aria-label`, `aria-current`, `aria-expanded`, `aria-hidden` e `aria-pressed`, melhorando a experiência para navegação assistiva.

### SEO básico

As metatags foram adicionadas para melhorar a apresentação do projeto em buscadores e compartilhamentos sociais.

---

## 📦 Releases

### v1.4.0 — SEO, Metatags e Compartilhamento Social **Latest**

Versão focada na melhoria da apresentação técnica do projeto, adicionando metatags de SEO, compartilhamento social e refinamento dos metadados principais da página.

Principais entregas:

- Adicionada meta description;
- Adicionadas metatags de author, keywords, robots, theme-color e color-scheme;
- Adicionadas metatags Open Graph para compartilhamento em redes sociais;
- Adicionadas metatags Twitter Card;
- Configurada imagem de preview social usando a imagem principal do projeto;
- Refinado o título da página;
- Padronizadas as descrições usadas em SEO, Open Graph e Twitter Card.

---

### v1.3.0 — Menu Mobile e Navegação Responsiva

Versão focada na experiência mobile da landing page, adicionando um menu de navegação responsivo com comportamento interativo e melhorias de acessibilidade.

Principais entregas:

- Adicionado botão hamburger no header para telas mobile;
- Criado menu mobile com links de navegação interna;
- Implementada abertura e fechamento do menu via JavaScript;
- Adicionada troca dinâmica do ícone entre menu e fechar;
- Adicionado fechamento automático ao clicar em links do menu;
- Adicionado fechamento do menu ao pressionar a tecla `Esc`;
- Melhorado o controle de foco ao abrir e fechar o menu;
- Adicionados atributos de acessibilidade como `aria-expanded`, `aria-hidden`, `aria-controls` e `aria-label`;
- Mantido o comportamento responsivo sem impactar a navegação desktop.

---

### v1.2.0 — Carrossel de Produtos Interativo

Versão focada na transformação da seção de produtos em um carrossel funcional, com interação por indicadores, rotação visual dos cards, autoplay e controle de pausa/continuação.

Principais entregas:

- Preparada a marcação HTML do carrossel para controle via JavaScript;
- Criada estrutura de dados dos produtos exibidos no carrossel;
- Adicionados indicadores clicáveis para alternar entre os produtos;
- Implementada troca dinâmica do subtítulo conforme o produto ativo;
- Implementada rotação visual dos cards;
- Adicionado autoplay para alternância automática dos produtos;
- Adicionado controle de pausar e continuar a animação;
- Atualizado o ícone do botão entre pause e play;
- Atualizados atributos de acessibilidade como `aria-current`, `aria-label` e `aria-pressed`.

---

### v1.1.0 — Melhorias no Hero e Formulário de CPF

Versão focada na melhoria da primeira dobra da landing page, deixando a experiência inicial mais próxima de uma interface moderna de produto financeiro digital.

Principais entregas:

- Adicionada máscara automática no campo de CPF;
- Adicionada validação do formulário do hero;
- Criado feedback visual para CPF vazio, incompleto e preenchido corretamente;
- Melhorado o texto principal do hero com uma proposta mais clara para o projeto;
- Adicionados CTAs para simulação de abertura de conta e navegação pelos produtos;
- Melhorada a navegação interna da página;
- Adicionados atributos de acessibilidade nos principais links do hero;
- Melhorado o visual do card de CPF com borda, sombra, ícones e mensagens auxiliares;
- Adicionado aviso de que a simulação é demonstrativa e não coleta dados reais.

---

### v1.0.0 — Primeira versão visual completa

Versão responsável por consolidar a primeira landing page visual completa.

Principais entregas:

- Header fixo com logo, navegação principal e botão de ação;
- Hero section com imagem de fundo, overlay e formulário de CPF;
- Seção de produtos com cards visuais para Nubank, Nubank Ultravioleta e Nu Empresas;
- Estrutura visual preparada para futuro carrossel com JavaScript;
- Seção de cartão de crédito com representação visual do cartão;
- Seção do aplicativo com mockup mobile;
- Seção de segurança com cards informativos;
- Chamada final para abertura de conta;
- Footer completo com links, contatos, redes sociais e aviso educacional;
- Favicon personalizado com identidade visual do projeto;
- README atualizado com descrição, tecnologias, estrutura e instruções de execução;
- Organização de imagens e arquivos estáticos na pasta `public`.

---

### v0.2.0 — Estrutura HTML inicial

Versão focada na criação da estrutura HTML inicial do projeto.

Principais entregas:

- Estrutura semântica inicial com `header`, `main` e `footer`;
- Menu principal de navegação;
- Seções base da landing page;
- Integração inicial com Font Awesome;
- Preparação para estilização com Tailwind CSS.

---

### v0.1.0 — Configuração inicial do projeto

Versão inicial do projeto.

Principais entregas:

- Criação do projeto com Vite;
- Configuração inicial do Tailwind CSS;
- Organização base de pastas;
- Arquivos iniciais do projeto;
- Configuração inicial do Git e GitHub.

---

## 📈 Melhorias Futuras

- Adicionar deploy público na Vercel;
- Adicionar link do deploy na seção **Acesse o Projeto**;
- Adicionar screenshots atualizados no README;
- Criar imagem própria de preview social em 1200x630px;
- Adicionar testes automatizados com Vitest;
- Adicionar validação real de CPF com algoritmo oficial;
- Melhorar performance das imagens;
- Adicionar lazy loading em imagens não críticas;
- Melhorar animações de entrada das seções;
- Criar botão de voltar ao topo;
- Separar dados repetitivos em arquivos JavaScript próprios;
- Avaliar migração futura para React ou outro framework de componentes.

---

## ⚠️ Aviso Legal

Este projeto é uma recriação educacional inspirada na interface do Nubank.

Não é um projeto oficial, não possui fins comerciais e não possui vínculo com o Nubank ou suas empresas relacionadas.

Todas as informações exibidas são fictícias e utilizadas apenas para fins de estudo e portfólio.

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 👨🏻‍💻 Autor

**Marcos Felipe França**

[LinkedIn](https://www.linkedin.com/in/marcosfelipefrc) · [GitHub](https://github.com/felipe-frc)
