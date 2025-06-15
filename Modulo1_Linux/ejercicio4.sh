#!/bin/bash

URL="https://www.botanical-online.com/"

if [ -z "$1" ]; then
    echo "Uso del script $0 Debes especificar una palabra como argumento"
    exit 1
fi

PALABRA="$1"
FICHERO="web.txt"

curl -s "$URL" -o "$FICHERO"

if [ $? -ne 0 ] || [ ! -f "$FICHERO" ]; then
    echo "Error: No se pudo descargar la página web."
    exit 1
fi

NUM_APARICIONES=$(grep -o -i "$PALABRA" "$FICHERO" | wc -l)

if [ "$NUM_APARICIONES" -eq 0 ]; then
    echo "No se ha encontrado la palabra \"$PALABRA\""
else
    PRIMERA_LINEA=$(grep -n -i "$PALABRA" "$FICHERO" | head -n 1 | cut -d: -f1)
    echo "La palabra \"$PALABRA\" aparece $NUM_APARICIONES veces"
    echo "Aparece por primera vez en la línea $PRIMERA_LINEA"
fi

rm web.txt