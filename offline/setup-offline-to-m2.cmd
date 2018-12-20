@echo off

copy /Y /V settings.xml %USERPROFILE%\.m2\
mkdir %USERPROFILE%\.m2\offline\repository
xcopy /Y /V /E repository %USERPROFILE%\.m2\offline\repository

pause
