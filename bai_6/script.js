const danhMuc = document.querySelector(".danhmuc");
const danhMuc_danhSach = document.querySelector(".danhmuc-danhsach");
const chucNang = document.querySelector(".chucnang");
const navButton = document.querySelector("#navButton");

navButton.addEventListener("click",()=>{
    danhMuc.classList.toggle("hide");
    danhMuc_danhSach.classList.toggle("hide");
    chucNang.classList.toggle("hide");
})
// 
let button_img = document.querySelector("#img-btn");
let banner = document.querySelector(".banner");
let wrap_img = document.querySelector(".wrap-banner");
let iframe_banner = document.querySelector(".iframe_banner");
function xemPhim(){
    iframe_banner.src ="https://www.youtube.com/embed/oF6ln4fW834?si=DLXZGxCl91GiBDQf" ;
    banner.style = "display:none";
}

// 
let listFilm = [
    {
        id:1,
        name : "Vây hãm trên không ",
        type : "phim chiếu rạp",
        banner : "https://thantuong.info/custom/domain_1/2024/07/23/image-193-1721709818.jpg",
        trailer : "https://www.youtube.com/embed/BiRbSHpqCEU?si=pxv0RO4cReI6i5N-",
        year:"2024",
        old:"T4",
        country:"Nhật"
        
    },
    {
        id: 2,
        name:"Đêm thứ 7 ",
        type : "phim chiếu rạp ",
        banner:"https://www.theweek.in/content/dam/week/review/movies/images/2022/11/4/saturday-night.jpg",
        trailer: "https://www.youtube.com/embed/iZ9O_tl5Npk?si=GqevltnnJpbDxS6I",
        year:"2023",
        old:"T2",
        country:"Mỹ"

    },
    {
        id:3,
        name : "Kinh hãi ",
        type : "phim chiếu rạp",
        banner : "https://assets.glxplay.io/images/w400/title/afraid_web_posterLandscape_746bb3d9b303bc985563015e371d7d13.jpg",
        trailer : "https://www.youtube.com/embed/pOI_l-XQN8M?si=03wTuhTe3dzrL-Zw",
        year:"2025",
        old:"T6",
        country:"Mỹ"
    },
    {
        id: 4,
        name:"Thành phố bóng đêm  ",
        type : "phim chiếu rạp ",
        banner:"https://www.studyphim.vn/system/movies/776/thumbnails/original/1.jpg",
        trailer: "https://www.youtube.com/embed/1bhr3ijn-Mo?si=N0heJqyN-hiuf-4j",
        year:"2024",
        old:"T1",
        country:"Mỹ"
    },
    {
        id:5,
        name : "Mưa đỏ ",
        type : "phim chiếu rạp",
        banner : "/bai_6/img/muado.webp",
        trailer : "https://www.youtube.com/embed/oF6ln4fW834?si=ctkznoecU_y8Yvky",
        year:"2025",
        old:"T1",
        country:"Việt Nam"
    },
]

let bannerElement = document.getElementsByClassName("banner")[0];
let trailerElement = document.getElementsByClassName("trailer")[0];
let img_btn = document.getElementById("img-btn");
console.log(img_btn);

// info 
let info_film = document.getElementsByClassName("info__film")[0];
let info_year = document.getElementsByClassName("info__year")[0];
let info_old = document.getElementsByClassName("info__old")[0];
let info_country = document.getElementsByClassName("info__country")[0];
// hình trái tim 
let icon_heart = document.getElementsByClassName("icon__heart")[0];
// console.log(bannerElement)   

function viewTrailer(){
    bannerElement.style.display = "none";
    trailerElement.style.display = "block";
    img_btn.style.display = "none";
    info_film.style.display = "none";
    
  }
  
  function chooseFile(filmId){
    let selectedFilm = listFilm.find((film)=>film.id === filmId );

    bannerElement.src = selectedFilm.banner;
    trailerElement.src = selectedFilm.trailer;
    bannerElement.style.display = "block";
    trailerElement.style.display = "none";
    img_btn.style.display = "block";
    // thay đổi info 
    info_year.innerHTML = selectedFilm.year;
    info_old.innerHTML = selectedFilm.old;
    info_country.innerHTML = selectedFilm.country;
    // hình trái tim 
    icon_heart.style.color = "white";
    status_heart = false;
}

// hình trái tim 
var status_heart = false;
function heart(){
  if(status_heart=== false){
    icon_heart.style.color = "red";
    status_heart = true;
  }else{
    icon_heart.style.color = "white";
    status_heart = false;
  }
}

