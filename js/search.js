window.addEventListener("DOMContentLoaded", () => {
  // search 로직
  const searchIcon = document.getElementById("search_icon");
  const search = document.querySelector(".searchSection");
  searchIcon.addEventListener("click", () => {
    console.log("console");
    search.classList.toggle("show");
  });
});
