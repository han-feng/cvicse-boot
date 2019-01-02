#!/bin/sh
mkdir -p ~/.m2/offline/repository
cp -f settings.xml ~/.m2/
cp -rf repository ~/.m2/offline/
