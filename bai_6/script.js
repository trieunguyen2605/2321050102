const danhMuc = document.querySelector(".danhmuc");
const danhMuc_danhSach = document.querySelector(".danhmuc-danhsach");
const chucNang = document.querySelector(".chucnang");
const navButton = document.querySelector("#navButton");

navButton.addEventListener("click",()=>{
    danhMuc.classList.toggle("hide");
    danhMuc_danhSach.classList.toggle("hide");
    chucNang.classList.toggle("hide");
})