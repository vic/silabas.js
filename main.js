#!/usr/bin/env node

var silabas = require('./silabas');

process.argv.slice(2).forEach(function (word){
  console.log(silabas(word).syllables().join(' '));
});