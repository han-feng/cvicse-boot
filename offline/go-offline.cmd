@echo off

mvn --settings .\settings.xml -f ..\pom.xml clean install dependency:go-offline

pause
