document.addEventListener('DOMContentLoaded', () => {
  const noBtn = document.getElementById('no-btn');
  const yesBtn = document.getElementById('yes-btn');
  const responseDiv = document.getElementById('response');
  const buttonsDiv = document.querySelector('.buttons');

  function moveNoButton() {
    const margin = 20;

    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = viewportWidth - btnWidth - margin;
    const maxY = viewportHeight - btnHeight - margin;

    const minX = margin;
    const minY = margin;

    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;

    // FIXED positioning = relative to screen, not parent
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${Math.max(minX, Math.min(randomX, maxX))}px`;
    noBtn.style.top = `${Math.max(minY, Math.min(randomY, maxY))}px`;
    noBtn.style.zIndex = 9999; // ensure it's always visible
  }

  // Desktop + Mobile
  noBtn.addEventListener('mouseenter', moveNoButton);
  noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // prevents click
    moveNoButton();
  });

  yesBtn.addEventListener('click', () => {
    buttonsDiv.style.display = 'none';
    responseDiv.classList.remove('hidden');
    responseDiv.innerHTML = 'Yay! I love you! Happy Valentine\'s Day! my Pumkin 💖🎉';

    launchHearts();
  });


  noBtn.addEventListener('click', () => {
    responseDiv.classList.remove('hidden');
    responseDiv.innerHTML = 'Are you sure? Try again! 😘';
    moveNoButton();
  });
});

function launchHearts() {
  const hearts = ["💖", "💕", "💘", "💝", "❤️"];

  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";
    heart.style.fontSize = (16 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}
