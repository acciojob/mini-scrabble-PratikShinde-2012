const letterCount = document.getElementById('letterCount')

function renderCount() {
    const textArea = document.getElementById('evaluatedText').value
    text = document.createTextNode(textArea.length)
    letterCount.textContent = ""
    letterCount.appendChild(text)
}