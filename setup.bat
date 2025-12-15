@echo off
echo ================================
echo NAMMI Constructions Setup
echo ================================
echo.

echo [1/3] Installing root dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install root dependencies
    pause
    exit /b 1
)

echo.
echo [2/3] Installing client dependencies...
cd client
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install client dependencies
    cd ..
    pause
    exit /b 1
)
cd ..

echo.
echo [3/3] Creating environment file...
if not exist .env (
    copy .env.example .env
    echo Created .env file from template
) else (
    echo .env file already exists
)

echo.
echo ================================
echo Setup Complete! 
echo ================================
echo.
echo To start development:
echo   npm run dev
echo.
echo To build for production:
echo   npm run build
echo   npm start
echo.
pause
