document.addEventListener('DOMContentLoaded', function() {
    const moneyBoxes = document.querySelectorAll('.moneyBox');

    moneyBoxes.forEach(box => {
        box.addEventListener('click', function() {
            moneyBoxes.forEach(box => box.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});