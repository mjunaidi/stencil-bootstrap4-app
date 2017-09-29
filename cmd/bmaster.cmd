@echo off
cd ..
git pull
git checkout master
git pull
git merge develop
git status
git push
cd cmd
