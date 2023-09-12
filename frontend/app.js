document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const keywordInput = document.getElementById('keyword');
    const shayariResult = document.getElementById('shayari-result');

    generateBtn.addEventListener('click', async () => {
        const keyword = keywordInput.value.trim();
        if (keyword) {
            try {
                const response = await fetch('http://localhost:3000/shayari', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ keyword })
                });

                if (response.ok) {
                    const data = await response.json();
                    shayariResult.textContent = data.shayari;
                } else {
                    shayariResult.textContent = 'Error generating Shayari.';
                }
            } catch (error) {
                shayariResult.textContent = 'An error occurred while connecting to the server.';
                console.error(error);
            }
        } else {
            shayariResult.textContent = 'Please enter a keyword.';
        }
    });
});
