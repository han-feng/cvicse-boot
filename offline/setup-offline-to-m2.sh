#!/bin/sh

mkdir -p ~/.m2/offline/repository

if [ -f "~/.m2/settings.xml" ];then
cp -f ~/.m2/settings.xml ~/.m2/settings.xml.bak
fi

cp -f settings.xml ~/.m2/
cp -rf repository ~/.m2/offline/
