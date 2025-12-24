#!/bin/bash

# Clean previous builds
rm -rf build/
rm -rf dist/
rm -f NumberGuess.spec

# Build the executable
pyinstaller --onefile \
    --windowed \
    --name "NumberGuess" \
    --add-data "main_window.ui:." \
    --hidden-import PySide6.QtCore \
    --hidden-import PySide6.QtGui \
    --hidden-import PySide6.QtWidgets \
    --clean \
    main.py

echo "Build complete! Executable is in the 'dist' folder."