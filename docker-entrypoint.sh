#!/bin/sh

echo '== Instalando Dependencias =='
yarn install

echo '== Iniciando Client na porta 8080 =='
PORT=8080 yarn start
