#!/bin/bash

if [ "$#" -ne 2 ]; then
  echo "Se necesitan únicamente dos parámetros para ejecutar este script"
  exit 1
fi

URL=$1
PALABRA=$2
FICHERO="web.txt"

curl -s "$URL" -o "$FICHERO"

if [ $? -ne 0 ] || [ ! -f "$FICHERO" ]; then
  echo "Error: No se pudo descargar la página web."
  exit 1
fi

NUM_APARICIONES=$(grep -o -i "$PALABRA" "$FICHERO" | wc -l)

if [ "$NUM_APARICIONES" -eq 0 ]; then
  echo "No se ha encontrado la palabra \"$PALABRA\""
elif [ "$NUM_APARICIONES" -eq 1 ]; then
  LINEA=$(grep -i -n "$PALABRA" "$FICHERO" | cut -d: -f1)
  echo "La palabra \"$PALABRA\" aparece 1 vez"
  echo "Aparece únicamente en la línea $LINEA"
else
  PRIMERA_LINEA=$(grep -i -n "$PALABRA" "$FICHERO" | head -n 1 | cut -d: -f1)
  echo "La palabra \"$PALABRA\" aparece $NUM_APARICIONES veces"
  echo "Aparece por primera vez en la línea $PRIMERA_LINEA"
fi

rm web.txt