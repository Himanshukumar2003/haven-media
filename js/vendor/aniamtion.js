
// Wrap every letter in a span
document.querySelectorAll('.ml9 .letters').forEach((element) => {
    element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});

// Animate text
anime.timeline({ loop: false })
    .add({
        targets: '.ml9 .letter:not(.highlighter)', // Exclude highlighter letters
        scale: [0, 1],
        duration: 2000,
        elasticity: 600,
        delay: (el, i) => 60 * (i + 1),
    })
    .add({
        targets: '.ml9',
        opacity: 1,
        duration: 1000,
        easing: 'easeOutExpo',
    });




// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

