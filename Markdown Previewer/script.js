const markdownInput = document.getElementById('markdownInput');
const preview = document.getElementById('preview');

markdownInput.addEventListener('input', () => {
    const markdownText = markdownInput.value;
    preview.innerHTML = marked(markdownText);
});
