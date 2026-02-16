const textInput = document.getElementById('textInput');
const voiceSelect = document.getElementById('voice');
const generateBtn = document.getElementById('generateBtn');
const btnText = document.getElementById('btnText');
const loading = document.getElementById('loading');
const audioContainer = document.getElementById('audioContainer');
const audioPlayer = document.getElementById('audioPlayer');
const downloadLink = document.getElementById('downloadLink');
const errorDiv = document.getElementById('error');

generateBtn.addEventListener('click', async () => {
    const text = textInput.value.trim();
    const voice = voiceSelect.value;
    
    if (!text) {
        showError('Please enter some text to convert to speech.');
        return;
    }
    
    hideError();
    setLoading(true);
    audioContainer.classList.add('hidden');
    
    try {
        const response = await fetch('/api/text-to-speech', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text, voice }),
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to generate speech');
        }
        
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        
        audioPlayer.src = audioUrl;
        downloadLink.href = audioUrl;
        
        audioContainer.classList.remove('hidden');
        audioPlayer.play();
        
    } catch (error) {
        showError(error.message);
    } finally {
        setLoading(false);
    }
});

function setLoading(isLoading) {
    generateBtn.disabled = isLoading;
    if (isLoading) {
        generateBtn.classList.add('loading');
    } else {
        generateBtn.classList.remove('loading');
    }
}

function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
}

function hideError() {
    errorDiv.classList.add('hidden');
}
