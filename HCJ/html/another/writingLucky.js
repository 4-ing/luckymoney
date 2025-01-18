const luckeyLetterInput = document.getElementById('luckeyLetterInput');
const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', function() {
    const textareaContent = luckeyLetterInput.value;
    console.log(textareaContent);
});