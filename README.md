# Dojo DevMT S01E03 
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Code Climate][climate-image]][climate-url]  [![Test Coverage][coverage-image]][coverage-url] 

> [Versão Original](https://github.com/devmatogrosso/dojo-s01e03-nuvem-cinza.php)
> Versão NodeJS

## Data e Local
Data: 01/08/2015
Local: Nuvem Tecnologia

## Problema
Um vulcão acaba de entrar em erupção, provocando uma nuvem de cinzas que se alastra impedindo a circulação aérea. O governo está muito preocupado e deseja saber quando que a nuvem de cinzas irá atingir todos os aeroportos do país.

Está disponível um mapa detalhando a situação atual. O mapa é retangular, dividido em pequenos quadrados. Neste mapa existem três tipos de quadrados: nuvem (indicando que esta região do mapa já está coberto por nuvens), aeroportos (indicando a localização de um aeroporto) e todas as outras (indicando locais onde a nuvem ainda não chegou).

A cada dia, a nuvem expande-se um quadrado na horizontal e um quadrado na vertical. Ou seja, ao fim de cada dia, todos os quadrados adjacentes (vertical ou horizontalmente) a uma nuvem, também passam a conter nuvens. Por exemplo:
```
. . * . . . * *      . * * * . * * *     * * * * * * * *
. * * . . . . .      * * * * . . * *     * * * * * * * *
* * * . A . . A      * * * * A . . A     * * * * * . * *
. * . . . . . .  ->  * * * . . . . .  -> * * * * . . . .
. * . . . . A .      * * * . . . A .     * * * * . . A .
. . . A . . . .      . * . A . . . .     * * * A . . . .
. . . . . . . .      . . . . . . . .     . * . . . . . .
     Dia 1                Dia 2               Dia 3
```
Para preparar os planos de contingência, o governo necessita saber: quantos dias demorará para ao menos um aeroporto ficar coberto pelas nuvens e daqui quantos dias todos os aeroportos estarão cobertos pelas nuvens.

Dados um quadriculado com L linhas e C colunas, além da indicação inicial das nuvens e dos aeroportos, desenvolva uma programa que informe o número de dias até um primeiro aeroporto ficar debaixo da nuvem de cinzas e o número de dias até que todos os aeroportos ficarem cobertos pelas cinzas.

[Link do problema](http://dojopuzzles.com/problemas/exibe/nuvem-de-cinzas/)

## Participantes 

 * [Luan Castro](https://github.com/castrolol)
 * [Alvaro Viebrantz](https://github.com/alvarowolfx)
 * [Gabriel Pedro](https://github.com/gpedro)
 * [Kenny Johnson](https://github.com/kennyjsa)
 * [Leonardo Gregianin](https://github.com/leogregianin/)

## Prós 

 * Cookie
 * Problema diferente
 * Testes com PHP \o/
 * Problema não foi resolvido

## Contras
 
 * Poucas Pessoas
 * Teclado do Mac


### Como rodar
```shell
npm install
npm test
```

## License

MIT © [Gabriel Pedro](https://gpedro.net)


[npm-image]: https://badge.fury.io/js/dojo-s01e03-nuvem-cinzajs.svg
[npm-url]: https://npmjs.org/package/dojo-s01e03-nuvem-cinzajs
[travis-image]: https://travis-ci.org/gpedro/dojo-s01e03-nuvem-cinzajs.svg?branch=master
[travis-url]: https://travis-ci.org/gpedro/dojo-s01e03-nuvem-cinzajs
[daviddm-image]: https://david-dm.org/gpedro/dojo-s01e03-nuvem-cinzajs.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/gpedro/dojo-s01e03-nuvem-cinzajs
[climate-image]: https://codeclimate.com/github/devmatogrosso/dojo-s01e03-nuvem-cinza.js/badges/gpa.svg
[climate-url]: https://codeclimate.com/github/devmatogrosso/dojo-s01e03-nuvem-cinza.js
[coverage-image]: https://codeclimate.com/github/devmatogrosso/dojo-s01e03-nuvem-cinza.js/badges/coverage.svg
[coverage-url]: https://codeclimate.com/github/devmatogrosso/dojo-s01e03-nuvem-cinza.js/coverage
