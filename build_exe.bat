@echo off
REM Clean previous builds
rmdir /s /q build 2>nul
rmdir /s /q dist 2>nul
del NumberGuess.spec 2>nul

REM Build the executable
pyinstaller --onefile ^
    --windowed ^
    --name "NumberGuess" ^
    --add-data "main_window.ui;." ^
    --hidden-import PySide6.QtCore ^
    --hidden-import PySide6.QtGui ^
    --hidden-import PySide6.QtWidgets ^
    --clean ^
    main.py

echo Build complete! Executable is in the 'dist' folder.
pause