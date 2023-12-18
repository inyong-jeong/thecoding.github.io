const image_profile = [
  ["https://i.pravatar.cc/150?img=6", "1"],
  ["https://i.pravatar.cc/150?img=7", "2"],
  ["https://i.pravatar.cc/150?img=8", "3"],
  ["https://i.pravatar.cc/150?img=9", "4"],
  ["https://i.pravatar.cc/150?img=10", "5"],
  ["https://i.pravatar.cc/150?img=11", "6"],
  ["https://i.pravatar.cc/150?img=12", "7"],
  ["https://i.pravatar.cc/150?img=13", "8"],
  ["https://i.pravatar.cc/150?img=14", "9"],
  ["https://i.pravatar.cc/150?img=15", "10"],
  ["https://i.pravatar.cc/150?img=16", "11"],
  ["https://i.pravatar.cc/150?img=17", "12"],
  ["https://i.pravatar.cc/150?img=18", "13"],
  ["https://i.pravatar.cc/150?img=19", "14"],
  ["https://i.pravatar.cc/150?img=20", "15"],
];

const story_container = document.querySelector(".owlCarousel.items");
const owlCarousel = document.querySelector(".owlCarousel");

image_profile.forEach((profile) => {
  const parentDiv = document.createElement("div");
  const childImg = document.createElement("img");
  const childP = document.createElement("p");

  parentDiv.appendChild(childImg);
  parentDiv.appendChild(childP);

  childImg.src = profile[0];
  childP.textContent = profile[1];
  parentDiv.classList.add("item_s");
  story_container.appendChild(parentDiv);
});

const items = document.querySelectorAll(".owlCarousel.items .item_s");

let isDragging = false;
let startPosition = 0;
let accumulateDeltaX = 0;

function updateCarousel(deltaX) {
  const lastItemRightEdge = owlCarousel.offsetWidth + accumulateDeltaX;
  accumulateDeltaX = accumulateDeltaX + deltaX;
  const toalWidth = items.length * items[0].offsetWidth;
  if (lastItemRightEdge >= toalWidth && deltaX > 0) {
    accumulateDeltaX = toalWidth - owlCarousel.offsetWidth;
  }

  if (lastItemRightEdge < owlCarousel.offsetWidth && deltaX <= 0) {
    accumulateDeltaX = 0;
  }
  owlCarousel.style.transform = `translateX(${-accumulateDeltaX}px)`;
}

function handleMouseStart(e) {
  isDragging = true;
  startPosition = e.clientX;
}

function handleMouseMove(e) {
  if (!isDragging) return;
  const currentPosition = e.clientX;
  const deltaX = startPosition - currentPosition;
  startPosition = e.clientX;

  if (deltaX > 0) {
    //캐러셀을 오른쪽으로 이동
    updateCarousel(deltaX);
  } else if (deltaX < 0) {
    updateCarousel(deltaX);

    // 캐러셀을 왼쪽으로 이동
  }
}

function handleMouseEnd() {
  isDragging = false;
}

function handleTouchStart(e) {
  console.log(e);
  isDragging = true;
  startPosition = e.touches[0].clientX;
}

function handleTouchMove(e) {
  if (!isDragging) return;
  const currentPosition = e.touches[0].clientX;
  const deltaX = startPosition - currentPosition;
  startPosition = e.touches[0].clientX;

  if (deltaX > 0) {
    //캐러셀을 오른쪽으로 이동
    updateCarousel(deltaX);
  } else if (deltaX < 0) {
    updateCarousel(deltaX);

    // 캐러셀을 왼쪽으로 이동
  }
}

function handleTouchEnd() {
  isDragging = false;
}

owlCarousel.addEventListener("mousedown", handleMouseStart);
document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseEnd);

owlCarousel.addEventListener("touchstart", handleTouchStart);
owlCarousel.addEventListener("touchmove", handleTouchMove);
owlCarousel.addEventListener("touchend", handleTouchEnd);
