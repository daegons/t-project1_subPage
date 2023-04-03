//======================backToTop 아이콘 클릭시 상단 이동=====================
//backToTop a태그 상수 생성
const backToTop = document.getElementById("backToTop");

const checkScroll = () => {
  //세로 스크롤 값 변수 저장
  let pageYOffset = window.pageYOffset;
  console.log(pageYOffset);
  //0이 아니면 show 0이면 show삭제
  pageYOffset !== 0
    ? backToTop.classList.add("show")
    : backToTop.classList.remove("show");
};

const moveTop = () => {
  window.pageYOffset > 0 ? window.scrollTo({ top: 0, behavior: "smooth" }) : "";
};

//화면 전역에 scroll이벤트 걸기
window.addEventListener("scroll", checkScroll);
//클릭시 위로 이동 이벤트
backToTop.addEventListener("click", moveTop);

//=================================img 슬라이드======================================

//================next버튼==================
function transformNext(event) {
  const slideNext = event.target;
  const slidePrev = slideNext.previousElementSibling;

  const ulList = slideNext.parentElement.parentElement.nextElementSibling;
  let activeLi = ulList.getAttribute("data-position"); //ul태그에 있는 data_position=0값 가지고옴
  const liList = ulList.getElementsByTagName("li");

  //하나의 카드라도 왼쪼으로 이동했다면, 오르쪽으로 갈 수 있음
  if (Number(activeLi) < 0) {
    activeLi = Number(activeLi) + 260;
    //왼ㅉ고에 있던 카드가 오른쪽으로 갔다면, 다시 왼쪽으로 갈 수 있으므로 prev 버튼 활성
    slidePrev.style.color = "#2f3059";
    slidePrev.classList.add("slide_prev_hover");
    slidePrev.addEventListener("click", transformPrev);

    if (Number(activeLi) === 0) {
      slideNext.style.color = "#cfd8dc";
      slideNext.classList.remove("slide_next_hover");
      slideNext.removeEventListener("click", transformNext);
    }
  }
  ulList.style.transition = "transform 1s";
  ulList.style.transform = "translateX(" + String(activeLi) + "px)"; //ul이동
  ulList.setAttribute("data-position", activeLi); //ul이동값 저장
}

//===============prev버튼====================
function transformPrev(event) {
  const slidePrev = event.target; //slidePrevList[i]를 가져옴
  const slideNext = slidePrev.nextElementSibling; //html 오른쪽버튼
  //ul 태그 선택
  const ulList = slidePrev.parentElement.parentElement.nextElementSibling;
  let activeLi = ulList.getAttribute("data-position"); //ul태그에 있는 data_position=0값 가지고옴
  const liList = ulList.getElementsByTagName("li");

  // *ulList.clientwidth는 ul 태그의 실질적인 너비
  // *liList.length*260에서 260은 각 li요소의 실제 너비(마진 포함)
  // *activeLi는 data-position에 있는 현재 위치
  // *즉, liList.length * 260+ Number(activeLi)는 현재 위치부터 오른쪽으로 나열되야 하는 나머지 카드들의 너비

  // *ulList.clientWidth < (liList.length*260 +Number(activeLi)) 의미는
  // *오른쪽으로 나열될 카드들이 넘친 상태라, 왼쪽으로 이동이 가능

  if (ulList.clientWidth < liList.length * 260 + Number(activeLi)) {
    //위치를 왼쪽으로 260px 이동(-260px)
    activeLi = Number(activeLi) - 260;

    // *위치를 왼쪽으로 -260px 이동
    // *해당 위치는 변경된 activeLi 값이 적용된 liList.length *260+Number(activeLi)값임
    // *이 값보다, classList.clientWidth (ul 태그의 너비)가 크다는 것은
    // *넘치는 li가 없다는 뜻으로,next버튼을 활성화되면 안됨
    if (ulList.clientWidth > liList.length * 260 + Number(activeLi)) {
      slidePrev.style.color = "#cfd8dc";
      slidePrev.classList.remove("slide_prev_hover");
      slidePrev.removeEventListener("click", transformPrev);
    }
    slideNext.style.color = "#2f3059";
    slideNext.classList.add("slide_next_hover");
    slideNext.addEventListener("click", transformNext);
  }
  ulList.style.transition = "transform 1s";
  ulList.style.transform = "translateX(" + String(activeLi) + "px)"; //ul이동
  ulList.setAttribute("data-position", activeLi); //ul이동값 저장
}
//슬라이드 prev,next 아이콘 상수 선언
const slidePrevList = document.querySelectorAll(".slide_prev");
const slideNextList = document.querySelectorAll(".slide_next");

//3개의 왼쪽화살표 들어감,3번 반복
for (let i = 0; i < slidePrevList.length; i++) {
  //ul 태그 선택, 부모->부모->다음형제
  let ulList = slidePrevList[i].parentElement.parentElement.nextElementSibling;
  //li 태그 선택
  let liList = ulList.getElementsByTagName("li");

  //카드 ul태그 너비보다 넘치면, 왼쪽 버튼 활성화, 오른쪽은 첫카드 위치이므로 비활성화
  if (ulList.clientWidth < liList.length * 260) {
    slidePrevList[i].classList.add("slide_prev_hover");
    slidePrevList[i].addEventListener("click", transformPrev);
  } else {
    //태그 삭제시, 부모 요소에서 removeChild로 삭제해야됨
    //1.부모 요소 찾고,2. 부모요소의 자식 요소로 있는 prev와 next요소 삭제
    const arrowContainer = slidePrevList[i].parentElement;
    arrowContainer.removeChild(slidePrevList[i].nextElementSibling);
    arrowContainer.removeChild(slidePrevList[i]);
  }
}
//===============================img박스 마우스 그래핑===================================

let touchStartX;
let currentUlList;
let currentImg;
let currentActiveLi;
let nowActiveLi;
let mouseStart;

function processTouchMove(event) {}

function processTouchStart(event) {
  mouseStart = true;
  event.preventDefault(); //이미지 드래그 되는 현상 사라짐
  touchStartX = event.clientX;
  currentImg = event.target;

  //드래그 처리를 위해, 드래그 중(mousemove), 드래그가 끝났을 때(mouseup)에 이벤트 걸어줌
  currentImg.addEventListener("mousemove", processTouchMove);
  currentImg.addEventListener("mouseup", processTouchEnd);

  currentUlList = currentImg.parentElement.parentElement;
  currentActiveLi = currentUlList.getAttribute("data-position");
}
function processTouchEnd(event) {}

//특정 요소를 드래그하다가, 요소 밖에서 드래그를 끝낼 수 있으므로, window에 이벤트를 걸음
window.addEventListener("dragend", processTouchEnd);
window.addEventListener("mouseup", processTouchEnd);

//인터페이스간의 오동작 막기 위해, 카드 내의 img에만 드래그 제공
const classImgLists = document.querySelectorAll("ul li img");
for (let i = 0; i < classImgLists.length; i++) {
  //해당 요소에 마우스를 누르면, 드래그를 시작할 수 있으므로, 이벤트를 걸어줌
  classImgLists[i].addEventListener("mousedown", processTouchStart);
  // classImgLists[i].addEventListener("touchstart", processTouchStart);
}
