@echo off

mvn -s .\settings-online.xml -f ..\pom.xml clean install dependency:go-offline
mvn -s .\settings-online.xml -f ..\pom.xml assembly:single
