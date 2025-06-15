#!/bin/bash
TEXTO_DEFECTO="Que me gusta la bash!!!!"
TEXTO="${1:-$TEXTO_DEFECTO}"

#ejercicio1
mkdir -p foo/dummy foo/empty
echo "$TEXTO" > foo/dummy/file1.txt
touch foo/dummy/file2.txt

#ejercicio2
cp foo/dummy/file1.txt foo/dummy/file2.txt
mv foo/dummy/file2.txt foo/empty/