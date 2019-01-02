@echo off

mkdir %USERPROFILE%\.m2\offline\repository
if exist %USERPROFILE%\.m2\settings.xml (
  copy /Y /V %USERPROFILE%\.m2\settings.xml %USERPROFILE%\.m2\settings.xml.bak
)

copy /Y /V settings.xml %USERPROFILE%\.m2\
xcopy /Y /V /E repository %USERPROFILE%\.m2\offline\repository
