// Select all `.letters` elements
var textWrappers = document.querySelectorAll('.ml6 .letters');

// Apply span wrapping for each `.letters` element
textWrappers.forEach((textWrapper) => {
    textWrapper.innerHTML = textWrapper.textContent.replace(/(\S+)/g, "<span class='letter'>$&</span>");
});

// Animation setup using anime.js
anime.timeline({ loop: false }) // No looping
    .add({
        targets: '.ml6 .letter',
        opacity: [0, 1], // Fade-in effect
        translateY: ["1.1em", 0], // Animate from below
        duration: 1000, // Increased duration (per letter animation)
        delay: (el, i) => 230 * i // Increased delay between letters
    });
