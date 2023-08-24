document.addEventListener("DOMContentLoaded", function () {
    const makeSelect = document.getElementById("make");
    const listingCards = document.querySelectorAll(".listing-card");
  
    makeSelect.addEventListener("change", function () {
      const selectedMake = makeSelect.value;
  
      if (selectedMake === "all") {
        listingCards.forEach((card) => {
          card.style.display = "block";
        });
      } else {
        listingCards.forEach((card) => {
          const cardMake = card.querySelector(".make").textContent.toLowerCase();
          if (cardMake === selectedMake) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      }
    });
  });
  const searchInput = document.getElementById("search");

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
  
    listingCards.forEach((card) => {
      const cardText = card.textContent.toLowerCase();
      if (cardText.includes(searchTerm)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
    