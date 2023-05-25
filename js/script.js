// -----------------------------------
// Creating a Portfolio Tabbed Component
// -----------------------------------

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_el = document.querySelectorAll(".image-overlay");
const portfolio_img_El = document.querySelector(".portfolio-images");

p_btns.addEventListener("click", (event) => {
  const p_btn_clicked = event.target;
  console.log(p_btn_clicked);

  p_btn.forEach((btn) => btn.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
  p_img_el.forEach((cur) => cur.classList.add("p-image-not-active"));
  img_active.forEach((cur) => cur.classList.remove("p-image-not-active"));
});
