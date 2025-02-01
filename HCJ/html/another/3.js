document.addEventListener('DOMContentLoaded', function() {
    const characters = document.querySelectorAll('.character');

    characters.forEach(character => {
        character.addEventListener('click', function() {
            characters.forEach(character => character.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});