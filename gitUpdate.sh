#!/bin/bash

echo -e "_________________________________________________"
echo -e " ▩▩▩▩▩▩▩▩▶ git status"
git status
echo -e "_________________________________________________"
echo -e " ▩▩▩▩▩▩▩▩▶ git add *"
git add *
echo -e "_________________________________________________"
echo -e " ▩▩▩▩▩▩▩▩▶ git commit -m $1"
git commit -m "updating index.html"
echo -e "_________________________________________________"
echo -e " ▩▩▩▩▩▩▩▩▶ git pull -u origin master"
git pull -u origin master
echo -e "_________________________________________________"
echo -e " ▩▩▩▩▩▩▩▩▶ git push"
git push
echo -e "_________________________________________________"
echo -e " ▩▩▩▩▩▩▩▩▶ git status"
git status
echo -e " ✔ Git Repository Successfully Updated  ʘ‿ʘ"

