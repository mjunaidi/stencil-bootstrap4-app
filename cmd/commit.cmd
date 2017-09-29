@echo off
cd ..
git status
git add --all
set /p msg="Enter commit message: "
git commit -m "%msg%"
git status
git push
cd cmd
