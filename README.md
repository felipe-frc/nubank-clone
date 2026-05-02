# 💜 Nubank Clone

Este projeto é um clone educacional da interface do Nubank, desenvolvido com foco em HTML, CSS e Tailwind CSS para replicar o design e a experiência do usuário de forma responsiva e moderna.

## 🌐 Acesse o Projeto

Atualmente, este projeto é local. Para visualizá-lo, siga as instruções de execução abaixo.

## 📌 Objetivo do Projeto

O principal objetivo deste projeto é aprofundar o conhecimento e a prática em desenvolvimento front-end, com ênfase em:

- **Estruturação HTML:** Criação de uma semântica HTML clara e acessível.
- **Estilização com Tailwind CSS:** Utilização de um framework CSS utilitário para construção rápida e consistente de layouts responsivos.
- **Design Responsivo:** Garantir que a interface se adapte e funcione perfeitamente em diferentes tamanhos de tela (desktop, tablet e mobile).
- **Replicar UI/UX:** Reproduzir elementos visuais e interações da interface original do Nubank.
- **Organização de Código:** Manter uma estrutura de arquivos limpa e organizada.

## 🚀 Funcionalidades Implementadas

- **Header Fixo e Responsivo:** Navegação principal com logo e botões de ação.
- **Hero Section:** Seção de destaque com imagem de fundo, overlay e formulário de cadastro de CPF.
- **Seção de Produtos:** Área visual preparada para receber um carrossel de produtos Nubank, como Ultravioleta, Empresas e Conta.
- **Detalhes do Cartão:** Simulação da interface do aplicativo com informações de fatura, limite e atalhos para Pix, Pagar e Transferir.
- **Seção de Segurança:** Destaque para a segurança com informações e links para canais de suporte.
- **Chamada para Ação Final:** Convite para abrir uma conta com botão de destaque.
- **Footer Completo:** Links de navegação, informações de contato e redes sociais.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica do conteúdo.
- **CSS3:** Estilização básica e variáveis CSS.
- **Tailwind CSS 4:** Framework CSS para utilitários e responsividade.
- **Vite:** Ferramenta de build para desenvolvimento front-end rápido.
- **Font Awesome:** Biblioteca de ícones.
- **Google Fonts (Inter):** Tipografia moderna e legível.

## 🏗️ Estrutura do Projeto

```
nubank-clone/
├── public/                    # Arquivos estáticos (imagens, favicons)
│   ├── favicon/
│   │   └── favicon-nubank.png
│   └── images/
│       ├── bannerhome-nubank.png
│       ├── cards/
│       │   ├── nubank-empresa.png
│       │   ├── nubank-ultravioleta.png
│       │   └── nubank.png
│       ├── chip-cartao.png
│       ├── logo-nubank-branco.png
│       ├── logo-nubank.png
│       └── modelo-seguranca.png
├── src/
│   ├── scripts/
│   │   └── main.js            # Lógica JavaScript (a ser implementada)
│   └── styles/
│       └── main.css           # Estilos globais e importação do Tailwind
├── index.html                 # Página principal da aplicação
├── package.json               # Dependências e scripts do projeto
├── package-lock.json          # Bloqueio de dependências
├── vite.config.js             # Configuração do Vite
└── README.md                  # Este arquivo
```

## ⚙️ Organização da Aplicação

A aplicação segue uma organização modular, com separação clara de responsabilidades:

- **HTML:** Estrutura o conteúdo e incorpora as classes do Tailwind CSS.
- **CSS:** Define variáveis de cores e fontes, além de importar o Tailwind.
- **Tailwind CSS:** Responsável pela maior parte da estilização e responsividade, utilizando classes utilitárias diretamente no HTML.
- **JavaScript (main.js):** Atualmente vazio, mas preparado para futuras implementações de interatividade e lógica de front-end.

## ⭐ Diferenciais Técnicos

- **Design System Básico:** Utilização de variáveis CSS para cores e fontes, facilitando a manutenção e consistência visual.
- **Responsividade:** Layout adaptável a diferentes dispositivos, com breakpoints definidos pelo Tailwind CSS.
- **Componentização Implícita:** Embora não utilize um framework de componentes (como React), a estrutura HTML é modular, facilitando a identificação e manutenção de seções.
- **Otimização de Imagens:** As imagens estão organizadas e prontas para serem otimizadas para web.
- **Acessibilidade:** Uso de atributos `aria-label` para melhorar a acessibilidade.

## ▶️ Como Executar o Projeto

### 1. Clonar o repositório

```shell
git clone https://github.com/felipe-frc/nubank-clone.git
```

### 2. Acessar a pasta do projeto

```shell
cd nubank-clone
```

### 3. Instalar dependências

```shell
npm install
```

### 4. Executar o projeto

```shell
npm run dev
```

## ⚠️ Observações

- Este projeto é um clone da interface e não possui funcionalidades de backend ou integração real com a API do Nubank.
- O arquivo `src/scripts/main.js` está vazio e pronto para a implementação de lógica JavaScript, como a interatividade do carrossel de produtos e a validação do formulário de CPF.

## 📈 Melhorias Futuras

- **Implementação JavaScript:** Adicionar interatividade ao carrossel de produtos, validação de formulário e outras funcionalidades dinâmicas.
- **Animações:** Incorporar animações mais sofisticadas usando CSS ou bibliotecas JS.
- **Testes:** Adicionar testes unitários e de integração para garantir a robustez do código.
- **Otimização de Performance:** Implementar lazy loading para imagens e outras otimizações de carregamento.
- **Refatoração:** Avaliar a possibilidade de migrar para um framework de componentes (React, Vue, Angular) para uma maior escalabilidade.

## ⚠️ Aviso Legal

Este projeto é uma recriação educacional inspirada na interface do Nubank.

Não é um projeto oficial, não possui fins comerciais e não possui vínculo com o Nubank ou suas empresas relacionadas.

## 📄 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

**Felipe França**
