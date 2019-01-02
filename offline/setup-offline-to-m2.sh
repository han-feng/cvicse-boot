#!/bin/sh
mkdir -p ~/.m2/offline/repository
cp -f ~/.m2/settings.xml ~/.m2/settings.xml.bak
cp -f settings.xml ~/.m2/
cp -rf repository ~/.m2/offline/
