<h1 align="center">🚆 VLT Metropolitano | Grande Florianópolis</h1>

<p align="center">
  <a href="https://lwallauer.github.io/vlt-metropolitano/">
    <img src="https://img.shields.io/badge/Status-Online-success?style=for-the-badge&logo=github" alt="Status Online">
  </a>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" alt="Chart.js">
</p>

<p align="center">
  <strong>Projeto cidadão, independente e baseado em dados para a mobilidade da Grande Florianópolis.</strong>
</p>

<hr>

## 🎯 Sobre o Projeto

Este portal é um microssite institucional de impacto, focado em persuadir o poder público, a indústria e a sociedade sobre a viabilidade e urgência da implantação de um Veículo Leve sobre Trilhos (VLT) na Grande Florianópolis.

Fugindo de achismos, o projeto estrutura uma **análise preditiva de dados** baseada no estudo original de engenharia (Logistel® & TLPG®), cruzando-o com dados oficiais recentes do IBGE e PNUD para comprovar o custo trágico da inércia em infraestrutura.

🔗 **Acesse o portal ao vivo:** [lwallauer.github.io/vlt-metropolitano](https://lwallauer.github.io/vlt-metropolitano/)

## ✨ Funcionalidades e Metodologia Técnica

- **Dashboard Preditivo Integrado:** Consumo e exibição de dados oficiais de Santa Catarina (PIB, População, IDHM 2024, Área) organizados em Data Cards responsivos.
- **Gráficos de Impacto (Chart.js):**
  - Comparativo do Retorno Econômico Anual original vs. atualizado (correção IPCA e frota).
  - Gráfico de linha acumulativo revelando o **Déficit Econômico de R$ 3,4 Bilhões** (O Custo da Inércia entre 2014 e 2026).
- **Calculadora de Custo Cidadão:** Algoritmo em Vanilla JS que calcula o *Custo de Oportunidade* individual do usuário. Ele cruza a renda informada pela base da carga horária da CLT (220h/mês) e multiplica pelas horas de trânsito em dias úteis (240 dias/ano), gerando impacto direto no CPF.
- **Modais de Vídeo Otimizados:** Players assíncronos via iFrame contornando bloqueios de domínio e otimizados com recálculo de tela (resize sintético) para evitar *hover* travado no mobile.
- **Integração Visual Avançada:** Carrossel automático, tooltips informativas, mapa vetorial SVG animado e botões de compartilhamento social.

## 📁 Estrutura do Projeto

O projeto foi refatorado para uma arquitetura limpa, separando responsabilidades (HTML, CSS e JS) e garantindo alta performance no deploy estático do GitHub Pages.

```text
vlt-metropolitano/
├── index.html          # Estrutura semântica e conteúdo acessível
├── css/
│   └── style.css       # Estilos globais, responsividade e animações CSS
├── js/
│   └── script.js       # Lógica da calculadora, Chart.js, modais e carrossel
└── img/                # Assets otimizados (WebP, SVG, PNG)
```

## 🚀 Como Executar Localmente

Sendo uma aplicação Front-End estática, não há necessidade de builds complexos ou instalação de dependências locais (o Chart.js é consumido via CDN).

1. Clone este repositório:

```bash
git clone https://github.com/lwallauer/vlt-metropolitano.git
```

2. Abra a pasta do projeto.

3. Execute o arquivo `index.html` em seu navegador favorito ou utilize extensões como o Live Server (VS Code).

## 👨‍💻 Autor

**Leandro Wallauer**

Engenharia Front-End & Análise de Dados

🔗 Informatico.Floripa
