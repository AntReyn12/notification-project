const notify = document.querySelector(".notifications");
const movies = document.querySelectorAll(".movie");
const itemsTotal = document.querySelector(".items-total");
const saveBtn = document.querySelector(".button");
let moviesSelected = [];

for (i = 0; i < movies.length; i++) {
  movies[i].onclick = function (e) {
    const movieTitle = this.querySelector(".title").textContent;
    if (this.classList.contains("selected") == true) {
      this.classList.remove("selected");
      moviesSelected = moviesSelected.filter(function (item) {
        return item !== movieTitle;
      });
      console.log(moviesSelected);
    } else {
      this.classList.add("selected");
      moviesSelected.push(movieTitle);
      console.log(moviesSelected);
    }
  };
}

saveBtn.addEventListener("click", function () {
  itemsTotal.textContent = moviesSelected.length + " items saved";
  notify.classList.remove("hide");
  scroll(0, 0);
  setTimeout(function () {
    notify.classList.add("hide");
  }, 5000);
});
