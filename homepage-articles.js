const viewMoreBtn = document.getElementById("view-more-btn");
const article4 = document.getElementById("article-4");
const article5 = document.getElementById("article-5");
const article6 = document.getElementById("article-6");

viewMoreBtn.addEventListener("click", function () {
  article4.style.display = "grid";
  article5.style.display = "grid";
  article6.style.display = "grid";
  viewMoreBtn.innerHTML = "";
});
