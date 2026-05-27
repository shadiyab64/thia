  const options = {
    restaurant: [
      "Kitchen + Kocktails",
      "Mamajuana",
      "I cook",
      "You pick",
      "South",
      "Brazilian Steakhouse"
    ],

    fun: [
      "Mini golf",
      "Arcade",
      "Bowling",
      "Photo walk",
      "Museum",
      "Random adventure"
    ],

    chill: [
      "Movie night",
      "Bake a cake",
      "Board games",
      "Make a Vision Board",
      "Walk and talk"
    ],

    gift: [
      "Anklet",
      "Necklace",
      "Bracelet",
      "Spa / Facial"
    ]
  };

  let currentCategory = null;
  let rolling = false;

  function startGame(category) {
    currentCategory = category;
    roll();
  }

  function roll() {
    if (!currentCategory || rolling) return;

    rolling = true;
    const list = options[currentCategory];
    let i = 0;

    const randomizer = document.getElementById("randomizer");

    const interval = setInterval(() => {
      randomizer.textContent = list[i];
      i = (i + 1) % list.length;
    }, 120);

    setTimeout(() => {
      clearInterval(interval);
      const final = list[Math.floor(Math.random() * list.length)];
      randomizer.textContent = final;
      rolling = false;
    }, 1500);
  }

  function reroll() {
    if (currentCategory) roll();
  }


  document.addEventListener("click", function () {
  const audio = document.getElementById("bgm");
  if (audio && audio.paused) {
    audio.volume = 0.4;
    audio.play().catch(() => {});
  }
}, { once: true });
