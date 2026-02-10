# Text to Speech Web App

A simple web application that converts text to speech using OpenAI's API.

## Features

- Convert any text to speech using OpenAI's TTS model
- Choose from multiple voice options (Alloy, Echo, Fable, Onyx, Nova, Shimmer)
- Play audio directly in the browser
- Download generated audio as MP3 file
- Clean, responsive UI

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create a `.env` file:**
   Copy `.env.example` to `.env` and add your OpenAI API key:
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and add your API key:
   ```
   OPENAI_API_KEY=your_actual_openai_api_key_here
   PORT=3000
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## Usage

1. Enter the text you want to convert to speech
2. Select a voice from the dropdown menu
3. Click "Generate Speech"
4. The audio will play automatically and you can download it

## Available Voices

- **Alloy** - Balanced male/female voice
- **Echo** - Male voice
- **Fable** - British male voice
- **Onyx** - Deep male voice
- **Nova** - Female voice
- **Shimmer** - Bright female voice

## Technologies Used

- Node.js & Express
- OpenAI API
- Vanilla JavaScript
- HTML5 & CSS3
