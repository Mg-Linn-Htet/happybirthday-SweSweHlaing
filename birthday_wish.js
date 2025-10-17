const cakeBtn = document.getElementById('cakeBtn');
const heartBtn = document.getElementById('heartBtn');
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createConfetti() {
  const confetti = [];
  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
      speed: Math.random() * 3 + 2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();
      c.y += c.speed;
      if (c.y > canvas.height) c.y = 0;
    });
    requestAnimationFrame(draw);
  }

  draw();
}

cakeBtn.addEventListener('click', () => {
  createConfetti();
  alert("🎉 Candles blown! Happy Birthday!");
});

heartBtn.addEventListener('click', () => {
  const heart = document.createElement('div');
  heart.textContent = '💖';
  heart.style.position = 'absolute';
  heart.style.left = `${Math.random() * window.innerWidth}px`;
  heart.style.top = `${Math.random() * window.innerHeight}px`;
  heart.style.fontSize = '2rem';
  heart.style.animation = 'floatUp 3s ease-out forwards';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 3000);
});

const style = document.createElement('style');
style.innerHTML = `
@keyframes floatUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100px); opacity: 0; }
}`;
document.head.appendChild(style);
