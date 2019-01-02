@echo off

mkdir %USERPROFILE%\.m2\offline\repository
copy /Y /V settings.xml %USERPROFILE%\.m2\
xcopy /Y /V /E repository %USERPROFILE%\.m2\offline\repository

pause
