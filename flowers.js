const acceptButton = document.getElementById('accept-btn');
const landingScreen = document.querySelector('.landing-screen');
const pageContent = document.querySelector('.page-content');
const music = document.getElementById('bg-music');

acceptButton.addEventListener('click', () => {
    landingScreen.classList.add('hidden');
    pageContent.classList.remove('hidden');
    if (music) {
        music.play().catch(error => {
            console.log('Audio playback requires user interaction first.', error);
        });
    }
});

// Ensure the 'no' button is visible but not clickable.
const noButton = document.getElementById('no-btn');
if (noButton) {
    noButton.addEventListener('click', event => {
        event.preventDefault();
    });
}
