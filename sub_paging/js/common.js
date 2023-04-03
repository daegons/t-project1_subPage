const body = document.getElementsByTagName('body')[0];
const container = document.querySelector('.header');
const header = document.createElement('header');
const homeDiv = document.createElement('div');
const cancelDiv = document.createElement('div');
header.className = 'header';
homeDiv.className = 'home';
cancelDiv.className = 'homeCancel';
body.prepend(header);
header.after(homeDiv);
header.after(cancelDiv);

const headerStyle = `<a class="logo" href="index.html"
><img src="./img/logo.svg" alt="#"
/></a>
<a class="logo2" href="index.html"
><img src="./img/logoMobile.svg" alt="#"
/></a>
<div class="login">
<i class="fa-solid fa-user"></i>
<span>로그인</span>
</div> 
`;
const headerHome = `
<ul class="homewrap">
    <li>여행정보</li>
    <li><i class="fa-solid fa-house"></i></li>
    <li><a href="board.html">게시판</a></li>
</ul>
`;
const homeCancel = `
    <i class="fa-solid fa-xmark"></i>
`;

$('.header').html(headerStyle);
$('.home').html(headerHome);
$('.homeCancel').html(homeCancel);

let home = document.querySelector('.home');
let homewrap = document.querySelectorAll('.homewrap > li');
let homeCancel2 = document.querySelector('.homeCancel');
let link = 'index.html';
let flag = false;

if (window.innerWidth > 1100) {
  home.addEventListener('mouseover', function () {
    home.classList.add('on');
    homewrap[1].innerHTML = `홈`;
    flag = true;
  });

  home.addEventListener('mouseout', function () {
    home.classList.remove('on');
    homewrap[1].innerHTML = `<i class="fa-solid fa-house"></i>`;
    flag = false;
  });

  home.addEventListener('click', function () {
    if (flag) {
      home.classList.add('on');
      homewrap[1].innerHTML = `홈`;
    }
  });

  homewrap[1].addEventListener('click', function () {
    if (flag) {
      location.href = link;
    }
  });
}

if (window.innerWidth <= 1100) {
  home.addEventListener('click', function () {
    if (!flag) {
      home.classList.add('on');
      homewrap[1].innerHTML = `홈`;
      homeCancel2.classList.add('on');
      flag = true;
    }
  });

  homewrap[1].addEventListener('click', function () {
    if (flag) {
      location.href = link;
    }
  });

  homeCancel2.addEventListener('click', function () {
    home.classList.remove('on');
    homewrap[1].innerHTML = `<i class="fa-solid fa-house"></i>`;
    homeCancel2.classList.remove('on');
    flag = false;
  });
}
