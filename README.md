<h3 align="center">Poke Trader</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">Abrir Front-end</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Abrir Back-end</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Repositório Back-End</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Sobre o projeto</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre o projeto</a>
      <ul>
        <li><a href="#built-with">Tecnologias</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started:
**To avoid retyping too much info. Do a search and replace with your text editor for the following:**
`github_username`, `repo_name`, `twitter_handle`, `email`, `project_title`, `project_description`


### Tecnologias

* []() Python + Django + Django Rest Framework
* []() Html + CSS + JS + VueJS
* []() GitHub + Postgresql + Heroku



<!-- GETTING STARTED -->
## Getting Started

Caso queira uma cópia dessa aplicação, siga os seguintes passos:

### Instalação back-end

1. Clone o repô
   ```sh
   git clone https://github.com/lldenisll/poke_trader_bx
   ```
2. Crie um ambiente virtual
   ```sh
   python3 -m venv /caminho/nova/virtual/env
   ```
   3. Ative a virtual env
   ```sh
   source/caminho/virtual/env/bin/activate
   ```
3. Instale os requerimentos
   ```sh
   pip install requirements.txt
   ```
3. Faça as migrações para o db
   ```sh
   python manage.py makemigrations
   python manage.py migrate
   ```
3. Run server!
   ```sh
   python manage.py runserver
   ```
### Instalação front-end

1. Clone o repô
   ```sh
   git clone https://github.com/lldenisll/poke_bx_front
   ```
2. Abra o index.html
   ```sh
   seja feliz :)
   ```
### Integração com banco de dados
Caso deseje rodar o projeto em um banco de dados próprio


## Metodologia utilizada

O critério foi adotado após uma analise de dados em um jupyter nootbook
Para essa analise, afim de não consumir muito a API que é gratuita, a pedido deles (fair use) foi utilizado um dataset do kaggle.

Através desse dataset foram criados 20 Klusters, e observou-se que o kluser 3 incluia os pokemons mais poderosos, e que as features mais importantes são: is_legendary e special_atack

A fim de confirmar a informação, um mestre pokemon foi consultado, e elucidou que alguns pokemons utilizam o ataque especial (special atack), enquanto outros utilizam apenas o ataque normal (atack). Por exemplo o Charmander tem maior pontuação em special atack pois usa ataques como lança chamas, enquanto o machop, usa o ataque comum, como em investida por exemplo.

Com isso a pontuação atribuida a cada pokemon seguiu considerou a experiência base do pokemon com peso 2 + o ataque + o ataque especial, o total é multiplicado por 10 caso o pokemon seja lendário ou mítico `((base_exp*2) + ataque + ataque_especial)*10(se lendário)`


_Para saber mais consulte a [Documentação](https://example.com)_


## Meu contato

Dênis Gonçalves dos Santos 
[![LinkedIn][linkedin-shield]][linkedin-url]



[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/denis142/
