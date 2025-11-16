# Number Guess Game

A simple and interactive number guessing game built with Python and PySide6.

## Description

Number Guess is a desktop application where players try to guess a randomly generated number between 1 and 100. The game provides feedback on whether the guessed number is higher or lower than the target number and gives players 5 attempts to guess correctly.

## Features

- Clean and intuitive graphical user interface
- Random number generation for each new game
- Real-time feedback on guesses (higher/lower)
- Attempt counter with limited tries (5 attempts per game)
- Visual feedback with color-coded messages (green for success, red for errors)
- Responsive design with proper spacing and alignment

## Requirements

- Python 3.x
- PySide6

## Installation

1. Clone or download the project files
2. Install the required dependencies:

```bash
pip install -r requirements.txt
```

## How to Run

### Option 1: Using the run script
```bash
./run.sh
```

### Option 2: Direct execution
```bash
python3 main.py
```

### Option 3: Using the build script (cleans and rebuilds)
```bash
./build.sh
```

## How to Play

1. Launch the application
2. Enter your guess (1-100) in the text field
3. Click "Guess" to submit your answer
4. The game will tell you if your guess is too high or too low
5. You have 5 attempts to guess the correct number
6. After winning or losing, click "New Game" to start over
7. Use "Exit" to close the application

## Project Structure

- `main.py` - Main application logic and game controller
- `main_window.py` - UI layout and component definitions
- `build.sh` - Build script for cleaning and rebuilding the application
- `run.sh` - Simple script to launch the application
- `requirements.txt` - Python dependencies

## Game Rules

- The target number is randomly generated between 1 and 100
- You have exactly 5 attempts to guess the number
- After each wrong guess, you'll receive a hint (higher/lower)
- The game ends when you either guess correctly or run out of attempts

Enjoy playing the Number Guess Game!