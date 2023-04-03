// 로그인 버튼--------------------------------------------------
const login = document.querySelector('.login');
const loginPage1 = document.querySelector('.loginPage1');
const loginPage2 = document.querySelector('.loginPage2');
const btn1 = document.querySelector('.button1');
const btn2 = document.querySelector('.button2');
const btns1 = document.querySelector('.sbutton1');
const btns2 = document.querySelector('.sbutton2');
const tex = document.querySelector('.login span');
const icon = document.querySelector('.login i');
login.addEventListener('click', function () {
  if ((loginPage2.style.display = 'none')) {
    loginPage2.style.display = 'block';
    loginPage1.style.display = 'none';
  }

  if ($('.bgColor').removeClass('on')) {
    $('.bgColor').addClass('on');
  }
});

btn2.addEventListener('click', function () {
  if (loginPage2.style.display === 'block') {
    loginPage2.style.display = 'none';
    loginPage1.style.display = 'block';
  }
});

btns1.addEventListener('click', function () {
  if (loginPage1.style.display === 'block') {
    loginPage1.style.display = 'none';
    loginPage2.style.display = 'block';
  }
});

// 로그인 버튼 끝-----------------------------------------------------------

// x마크 ------------------------------------------------------------------------------------

const xmark1 = document.querySelector('.sXmark');
const xmark2 = document.querySelector('.lXmark');

xmark2.addEventListener('click', function () {
  loginPage2.style.display = 'none';
  $('.bgColor').removeClass('on');
});

xmark1.addEventListener('click', function () {
  loginPage1.style.display = 'none';
  $('.bgColor').removeClass('on');
});

// x마크 끝------------------------------------------------------------------------------------

// 로그인 페이지 유효성 검사 ----------------------------------------------------------------

const us = document.getElementById('us');
const uswers = document.querySelector('.uswers');
// console.log(us)
const pw = document.getElementById('pw');
const pwd = document.querySelector('.pwd');
const userror = document.querySelector('.userror');
const pwderror = document.querySelector('.pwderror');
let regIdPw = /^[a-zA-Z0-9]{4,13}$/;
let values = regIdPw;

btn1.addEventListener('click', function () {
  if (us.value === '') {
    alert('아이디를 입력하세요.');
    us.focus();
  } else if (pw.value === '') {
    alert('비밀번호를 입력하세요.');
    pw.focus();
  }

  if (!regIdPw.test(us.value) && us.value !== '') {
    alert('아이디를 다시 입력하세요.');
    us.focus();
  }

  if (!regIdPw.test(pw.value) && pw.value !== '') {
    alert('비밀번호를 다시 입력하세요.');
    pw.focus();
  }
  if (regIdPw.test(us.value) && regIdPw.test(pw.value)) {
    $('.bgColor').removeClass('on');
    alert('로그인이 완료되었습니다.');
    us.value = null;
    pw.value = null;
    userror.style.display = 'none';
    pwderror.style.display = 'none';
    loginPage2.style.display = 'none';
    tex.innerText = '로그아웃';
    if ($('.login i').hasClass('fa-solid fa-user')) {
      $('.login i').removeClass('fa-solid fa-user');
    }
    if ($('.login i').removeClass('fa-solid fa-user')) {
      $('.login i').addClass('fa-solid fa-arrow-right-from-bracket');
    }
  }

  tex.addEventListener('click', function () {
    if (tex.innerText == '로그아웃') {
      alert('로그아웃이 완료 되었습니다.');
    }
    tex.innerText = '로그인';
    if ($('.login i').removeClass('fa-solid fa-arrow-right-from-bracket')) {
      $('.login i').addClass('fa-solid fa-user');
    }
  });
});

us.addEventListener('focusout', function () {
  if (!regIdPw.test(us.value)) {
    userror.innerText = '@아이디가 정확하지 않습니다.';
    userror.style.color = 'red';
  } else {
    userror.innerText = '@아이디를 제대로 입력하셨습니다.';
    userror.style.color = 'green';
  }

  if (!regIdPw.test(us.value)) {
    userror.innerText = '@아이디가 정확하지 않습니다.';
    userror.style.color = 'red';
  }
});

pw.addEventListener('focusout', function () {
  if (!regIdPw.test(pw.value)) {
    pwderror.innerText = '@비밀번호가 정확하지 않습니다.';
    pwderror.style.color = 'red';
  } else {
    pwderror.innerText = '@비밀번호를 제대로 입력하셨습니다.';
    pwderror.style.color = 'green';
  }
});

// 로그인 페이지 유효성 검사 끝 ----------------------------------------------------------------

// 회원가입 유효성 검사 시작 ---------------------------------------------------------------------------------------------

const us1 = document.querySelector('#us1');
const pw1 = document.querySelector('#pw1');
const em1 = document.querySelector('#em1');
const ph1 = document.querySelector('#ph1');
const userrors = document.querySelector('.userrors');
const pwderrors = document.querySelector('.pwderrors');
const emerrors = document.querySelector('.emerrors');
const telerrors = document.querySelector('.telerrors');
let regem = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/;
let regph = /^01(?:0|1|[6-9])+(?:\d{3}|\d{4})+\d{4}$/;

btns2.addEventListener('click', function () {
  if (us1.value === '') {
    alert('아이디를 입력하세요.');
    us1.focus();
  } else if (em1.value === '') {
    alert('이메일을 입력하세요.');
    em1.focus();
  } else if (pw1.value === '') {
    alert('비밀번호를 입력하세요.');
    pw1.focus();
  } else if (ph1.value === '') {
    alert('전화번호를 입력하세요.');
    ph1.focus();
  }
  if (!regIdPw.test(us1.value) && us1.value !== '') {
    alert('아이디를 다시 입력하세요.');
  }
  if (!regem.test(em1.value) && em1.value !== '') {
    alert('이메일을 다시 입력하세요.');
  }

  if (!regIdPw.test(pw1.value) && pw1.value !== '') {
    alert('비밀번호를 다시 입력하세요.');
  }

  if (!regph.test(ph1.value) && ph1.value !== '') {
    alert('전화번호를 다시 입력하세요.');
  }

  if (
    regIdPw.test(us1.value) &&
    regIdPw.test(pw1.value) &&
    regem.test(em1.value) &&
    regph.test(ph1.value)
  ) {
    alert('회원가입이 완료되었습니다.');
    us1.value = null;
    pw1.value = null;
    em1.value = null;
    ph1.value = null;
    userrors.style.display = 'none';
    pwderrors.style.display = 'none';
    emerrors.style.display = 'none';
    telerrors.style.display = 'none';
    loginPage1.style.display = 'none';
  }

  return false;
});

us1.addEventListener('focusout', function () {
  if (!regIdPw.test(us1.value)) {
    userrors.innerText = '@아이디가 정확하지 않습니다.';
    userrors.style.color = 'red';
    // btn1.addEventListener("click", function () {
    //     alert("아이디를 다시 입력하세요.");
    //     us.focus();
    //     return false;
    // });
  } else {
    userrors.innerText = '@아이디를 제대로 입력하셨습니다.';
    userrors.style.color = 'green';
    // return e.preventDefault();
  }

  if (!regIdPw.test(us.value)) {
    userror.innerText = '@아이디가 정확하지 않습니다.';
    userror.style.color = 'red';
    return false;
  }
});

pw1.addEventListener('focusout', function () {
  if (!regIdPw.test(pw1.value)) {
    pwderrors.innerText = '@비밀번호가 정확하지 않습니다.';
    pwderrors.style.color = 'red';
    // btn1.addEventListener("click", function () {
    //     alert("비밀번호를 다시 입력하세요.");
    //     pw.focus();

    // });
  } else {
    pwderrors.innerText = '@비밀번호를 제대로 입력하셨습니다.';
    pwderrors.style.color = 'green';
    // return e.preventDefault();
  }
});

em1.addEventListener('focusout', function () {
  if (!regem.test(em1.value)) {
    emerrors.innerText = '@이메일이 정확하지 않습니다.';
    emerrors.style.color = 'red';
    // btn1.addEventListener("click", function () {
    //     alert("아이디를 다시 입력하세요.");
    //     us.focus();
    //     return false;
    // });
  } else {
    emerrors.innerText = '@이메일을 제대로 입력하셨습니다.';
    emerrors.style.color = 'green';
    // return e.preventDefault();
  }

  if (!regIdPw.test(us.value)) {
    userror.innerText = '@아이디가 정확하지 않습니다.';
    userror.style.color = 'red';
    return false;
  }
});

ph1.addEventListener('focusout', function () {
  if (!regph.test(ph1.value)) {
    telerrors.innerText = '@전화번호가 정확하지 않습니다.';
    telerrors.style.color = 'red';
    // btn1.addEventListener("click", function () {
    //     alert("비밀번호를 다시 입력하세요.");
    //     pw.focus();

    // });
  } else {
    telerrors.innerText = '@전화번호를 제대로 입력하셨습니다.';
    telerrors.style.color = 'green';
    // return e.preventDefault();
  }
});

//회원가입 유효성 검사 끝-----------------------------------------------------------
