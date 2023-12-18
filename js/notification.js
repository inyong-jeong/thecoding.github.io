window.addEventListener("DOMContentLoaded", () => {
  const heart = document.querySelectorAll(".secondContainer__like");
  heart.forEach((icon) => {
    icon.addEventListener("click", () => {
      const loved = icon.children[0];
      const notLoved = icon.children[1];
      icon.classList.toggle("love");
      loved.classList.toggle("display");
      notLoved.classList.toggle("hide_img");
    });
  });

  const followBtn = document.querySelector(".notificationSection__button");
  followBtn.addEventListener("click", () => {
    followBtn.classList.toggle("following");
    if (followBtn.classList.contains("following")) {
      followBtn.textContent = "Following";
      followBtn.style.backgroundColor = "grey";
      followBtn.style.color = "black";
    } else {
      followBtn.textContent = "Follow";
      followBtn.style.backgroundColor = "rgb(0, 149, 246)";
      followBtn.style.color = "white";
    }
  });

  const notificationIcon = document.getElementById("notification__icon");
  const notificationSection = document.querySelector(".notificationSection");

  notificationIcon.addEventListener("click", () => {
    notificationSection.classList.toggle("show");
  });
});
