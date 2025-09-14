console.log('Happy developing ✨')

 const choices = document.querySelectorAll(".choices a");
  const items = document.querySelectorAll(".item-box");

  choices.forEach(choice => {
    choice.addEventListener("click", function(e) {
      e.preventDefault();

      choices.forEach(c => c.style.color = "#b7a78d");

      this.style.color = "#6B4F1C";

      const category = this.dataset.category;
      items.forEach(item => {
        if (item.classList.contains(category)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });