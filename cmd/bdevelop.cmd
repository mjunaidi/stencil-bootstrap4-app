@echo off
cd ..
git pull
git checkout develop
git pull
git merge master
git status
git push
cd cmd
