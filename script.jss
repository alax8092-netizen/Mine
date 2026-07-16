// Typewriter Effect
const message = `Dear Babu ❤️, ... I Love You So Much Babu ❤️ Forever Yours, Anurag ❤️`;
let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typewriter").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Open Envelope
document.getElementById('envelope').addEventListener('click', () => {
    document.getElementById('main-card').style.display = 'none';
    document.getElementById('hidden-content').style.display = 'block';
    typeWriter();
    document.getElementById('bg-music').play();
});

// Timer Logic
function updateTimer() {
    const start = new Date("2026-02-22T01:32:00");
    const now = new Date();
    const diff = now - start;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('timer').innerHTML = `${days} Days and counting...`;
}
setInterval(updateTimer, 1000);

// Music Toggle
document.getElementById('music-btn').addEventListener('click', () => {
    const audio = document.getElementById('bg-music');
    audio.paused ? audio.play() : audio.pause();
});
