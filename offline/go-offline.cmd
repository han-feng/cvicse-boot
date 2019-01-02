@echo off

mvn --settings .\settings-online.xml -f ..\pom.xml clean install dependency:go-offline
