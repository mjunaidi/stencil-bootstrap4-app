@echo off
cd ..
git status
git add --all
git commit -m "Free update, fix or changes."
git status
git push
cd cmd
