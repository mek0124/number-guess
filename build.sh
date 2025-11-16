#!/bin/bash

rm -rf dist
rm -rf number_guess.egg-info

clear

python3 -m build

clear

bash run.sh