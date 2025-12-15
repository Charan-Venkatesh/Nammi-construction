#!/bin/bash

echo "================================"
echo "NAMMI Constructions Setup"
echo "================================"
echo ""

echo "[1/3] Installing root dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to install root dependencies"
    exit 1
fi

echo ""
echo "[2/3] Installing client dependencies..."
cd client
npm install
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to install client dependencies"
    cd ..
    exit 1
fi
cd ..

echo ""
echo "[3/3] Creating environment file..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "Created .env file from template"
else
    echo ".env file already exists"
fi

echo ""
echo "================================"
echo "Setup Complete!"
echo "================================"
echo ""
echo "To start development:"
echo "  npm run dev"
echo ""
echo "To build for production:"
echo "  npm run build"
echo "  npm start"
echo ""
