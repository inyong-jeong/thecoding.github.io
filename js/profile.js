window.addEventListener("DOMContentLoaded", () => {
  const postsImg = [
    "https://i.pravatar.cc/500?img=41",
    "https://i.pravatar.cc/500?img=42",
    "https://i.pravatar.cc/500?img=43",
    "https://i.pravatar.cc/500?img=37",
    "https://i.pravatar.cc/500?img=38",
  ];

  const savedImg = [
    "https://i.pravatar.cc/500?img=40",
    "https://i.pravatar.cc/500?img=44",
  ];

  const tagedImg = [
    "https://i.pravatar.cc/500?img=45",
    "https://i.pravatar.cc/500?img=46",
  ];

  function removeChild() {
    while (profileContainer.firstChild) {
      profileContainer.removeChild(profileContainer.firstChild);
    }
  }

  function renderImgs(imgArray) {
    imgArray.forEach((imgUrl) => {
      const profileContainerItem = document.createElement("div");
      profileContainerItem.classList.add("profileContainer__item");
      const profileContainerImg = document.createElement("img");
      profileContainerImg.src = imgUrl;
      profileContainerItem.appendChild(profileContainerImg);
      profileContainer.appendChild(profileContainerItem);
    });
  }

  const profileContainer = document.querySelector(".profileContainer__posts");
  const tabLists = document.querySelectorAll(".profileContainer__profile__li");
  const tabButtons = document.querySelectorAll(
    ".profileContainer__profile__button"
  );

  tabLists.forEach((item) => {
    item.addEventListener("click", () => {
      tabButtons.forEach((button) => {
        button.classList.remove("active");
      });

      if (item.getAttribute("data-target") === "posts") {
        item.children[0].classList.add("active");
        removeChild();
        renderImgs(postsImg);
      } else if (item.getAttribute("data-target") === "saved") {
        item.children[0].classList.add("active");
        removeChild();
        renderImgs(savedImg);
      } else if (item.getAttribute("data-target") === "tags") {
        item.children[0].classList.add("active");
        removeChild();
        renderImgs(tagedImg);
      }
    });
  });
});
