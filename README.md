sampleng-frontend
=================

Projeto frontend de exemplo com angular.

## O que é

Trata-se de um projeto para experimentar tecnologias e auxiliar na definição de um stack para desenvolvimento de aplicações com tecnologias 'client side', tal como o AngularJS.

##Pré-requisitos

- Configuração do sampleng-backend com base neste repositório (https://github.com/UNGPublic/sampleng-backend)
- Instalação do Node.js (http://nodejs.org/download).
- Instalação do git (http://git-scm.com/downloads).  

##Instruções
- Realize o clone, ou checkout se contribuidor, deste projeto e importe na IDE de sua preferência.
-  Instalar o grunt e o bower através dos comandos:  
<pre><code>npm install -g grunt  
npm install -g grunt-cli   
npm install -g bower</code></pre>
- Instalar as dependências da aplicação pelo Bower:
<pre><code>bower install bootstrap --save-dev
bower install angular --save-dev
bower install angular-mocks --save-dev</code></pre>
- Executar ``grunt-plugins.bat`` para instalar os plugins necessários

##Testando a aplicação
- Através do terminal, navegue até a pasta do projeto e digite:  
<pre>grunt serve</pre>