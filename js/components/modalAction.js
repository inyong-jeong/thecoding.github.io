window.addEventListener("DOMContentLoaded", () => {
  const chatBtn = document.querySelectorAll(".secondContainer__chat__img");
  const addmodalContainer = document.querySelector(".addModalContainer");
  const addModalClose = document.getElementById("addModalClose");
  const dim = document.querySelector(".dim");
  chatBtn.forEach((icon) => {
    icon.addEventListener("click", () => {
      addmodalContainer.classList.toggle("modalOpen");
      dim.classList.toggle("show");
    });
  });

  addModalClose?.addEventListener("click", () => {
    addmodalContainer.classList.remove("modalOpen");
    dim.classList.remove("show");
  });

  const commentMore = document.querySelector(".addModalContainer__show_c");
  const modalResponse = document.querySelector(".addModalContainer__response");
  const modalResponseLeft = document.querySelector(
    ".addModalContainer__response__left"
  );
  const modalResponseRight = document.querySelector(
    ".addModalContainer__response__right"
  );
  commentMore?.addEventListener("click", () => {
    console.log("commentMore", commentMore.textContent);
    if (commentMore.textContent === "댓글 더보기") {
      commentMore.textContent = "댓글 숨기기";
      modalResponseLeft.style.display = "block";
      modalResponseRight.style.display = "block";
    } else if (commentMore.textContent === "댓글 숨기기") {
      commentMore.textContent = "댓글 더보기";
      modalResponseLeft.style.display = "none";
      modalResponseRight.style.display = "none";
    }
  });

  // 공유 모달 띄우기
  const shareIcon = document.querySelectorAll(".secondContainer__send__img");
  const sendModal = document.querySelector(".sendModalContainer");
  const sendClose = document.getElementById("sendModalClose");
  shareIcon.forEach((icon) => {
    icon.addEventListener("click", () => {
      sendModal.classList.toggle("show");
      dim.classList.toggle("show");
    });
  });

  sendClose?.addEventListener("click", () => {
    sendModal.classList.remove("show");
    dim.classList.remove("show");
  });

  dim.addEventListener("click", () => {
    addmodalContainer?.classList.remove("modalOpen");
    sendModal?.classList.remove("show");
    dim.classList.remove("show");
    createModalContainer.classList.remove("show");
  });

  // 글쓰기 모달

  const createModalMobile = document.getElementById("createModalMobile");
  const createModalButton = document.getElementById("nav__menu__modal");
  const createModalContainer = document.querySelector(".createModalContainer");
  const createModalCloseButton = document.getElementById("createModalClose");

  createModalMobile.addEventListener("click", () => {
    dim.classList.toggle("show");
    createModalContainer.classList.toggle("show");
  });
  createModalButton.addEventListener("click", () => {
    dim.classList.toggle("show");
    createModalContainer.classList.toggle("show");
  });

  createModalCloseButton.addEventListener("click", () => {
    createModalContainer.classList.remove("show");
    dim.classList.remove("show");
  });

  const createModalSecondStage = document.querySelector(
    ".createModalContainer__imgContainer"
  );

  const createModalH1 = document.querySelector(
    ".createModalContainer__modalHeader__h1"
  );

  const createModalHeaderBtn = document.querySelector(
    ".createModalContainer__modalHeader__btn"
  );

  const form = document.querySelector(".createModalContainer__btnUpload__form");
  const imgInput = document.querySelector(
    ".createModalContainer__btnUpload__input"
  );

  const createModalDesc = document.querySelector(
    ".createModalContainer__description"
  );

  let imgUrl;
  form.addEventListener("change", (e) => {
    e.preventDefault();
    createModalSecondStage.style.display = "block";
    const imgFile = imgInput.files[0];
    const imgURL = URL.createObjectURL(imgFile);
    const uploadImg = document.querySelector(
      ".createModalContainer__imgContainer__img"
    );
    uploadImg.src = imgURL;
    imgUrl = imgURL;
    createModalH1.textContent = "자르기";
    createModalHeaderBtn.textContent = "다음";
  });

  createModalHeaderBtn.addEventListener("click", () => {
    if (createModalHeaderBtn.textContent == "다음") {
      createModalH1.textContent = "게시물 생성하기";
      createModalHeaderBtn.textContent = "공유";
      createModalSecondStage.style.display = "none";

      createModalDesc.style.display = "grid";
      const lastImg = document.querySelector(
        ".createModalContainer__description__img"
      );
      lastImg.src = imgUrl;
    } else if (createModalHeaderBtn.textContent == "공유") {
      createModalHeaderBtn.textContent = "";
      createModalDesc.style.display = "none";
      const lastShare = document.querySelector(".createModalContainer__share");
      lastShare.textContent = "공유 되었습니다.";
      lastShare.style.display = "flex";
    }
  });
});
