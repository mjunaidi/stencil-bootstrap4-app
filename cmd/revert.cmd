@echo off
cd ..
git status
git checkout .
git reset
git clean -fd
git status
cd cmd
