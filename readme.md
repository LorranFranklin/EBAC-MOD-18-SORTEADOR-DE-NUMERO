## Desafio
Neste exercício você deverá:
1) Criar um arquivo Gruntfile;
2) Executar a compilação do LESS;
3) Executar a compressão de código JavaScript;
4) Criar um branch chamada "exercicio_grunt";
5) Armazenar o arquivo Gruntfile nesta branch;
6) Enviar o link do repositório através da plataforma.

## Durante o processo será feito um sorteador de números

## Iniciaremos o git e desde o começo teremos nosso projeto já hospedado no GitHub

## Criando projeto com ```npm init```
click em ```enter``` durante todas as perguntas que aparecerem.

## Instalando ```gunt``` localmente no projeto ```npm install --save-dev grunt```

## em ```package.json``` Vamos criar novo script:
```
 "scripts": {
    "grunt": "grunt",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
## Criando arquivo ```Gruntfile.js```
Para iniciar o grunt usamos :
```
module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });
}
```

## Criando arquivo .gitignore e add pastas que não serão levadas ao git/repositorio

## Instalando plugin do less ```npm install --save-dev grunt-contrib-less```
Fazendo a configuração da tarefa, antes preisamos carregar o plugin no arquivo Gruntfile e depois a configuração da tarefa.
```
// Load the plugins
  grunt.loadNpmTasks('grunt-contrib-less');  // For compiling LESS files
```

```

```