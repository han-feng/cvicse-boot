@echo off

mvn -s .\settings-online.xml -f ..\pom.xml clean install dependency:go-offline assembly:single
