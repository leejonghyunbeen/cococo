


// 

// window.addEventListener("load", function () {
//   alert("데스크탑 버전으로 1200px 이상에서 권장됩니다.");
// });


let banner_slide = new Swiper('.banner_swiper', {
    slidesPerView: 1,
    loop : true,
  //   autoplay: {
  //      delay: 2000,
  //     disableOnInteraction: false ,
  // }
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  pagination: {
    el: ".main_pagina", // ⭐ 반드시 추가해야 함
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",  // 👉 다음 버튼
    prevEl: ".swiper-button-prev",  // 👉 이전 버튼
  },
  });

  document.addEventListener("DOMContentLoaded", function () {
    const trigger = document.querySelector('.header_nav2 li:nth-child(1)'); // '베럴 인사이드'
    const hiddenSecond = document.querySelector('.hidden_second');

    let isHoveringHidden = false;

    // 트리거에 마우스 진입
    trigger.addEventListener('mouseenter', () => {
        hiddenSecond.classList.add('show');
    });

    // 트리거에서 마우스 나갈 때 약간의 딜레이 후 숨김 시도
    trigger.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!isHoveringHidden) {
                hiddenSecond.classList.remove('show');
            }
        }, 100);
    });

    // hidden_second에 마우스 올렸을 때 유지
    hiddenSecond.addEventListener('mouseenter', () => {
        isHoveringHidden = true;
    });

    // hidden_second에서 마우스 벗어나면 숨김
    hiddenSecond.addEventListener('mouseleave', () => {
        isHoveringHidden = false;
        hiddenSecond.classList.remove('show');
    });
});


// 기달려봐 이거먼저하자

document.addEventListener("DOMContentLoaded", function () {
const navItems = document.querySelectorAll(".header_nav1 > li");
const subMenus = document.querySelectorAll(".header_sub2");

navItems.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    // 모든 서브메뉴 숨기기
    subMenus.forEach(menu => menu.classList.remove("show"));

    // 해당하는 메뉴만 보여줌
    const target = document.querySelector(`.header_sub2.nav${index + 1}`);
    if (target) target.classList.add("show");
  });
});

// 마우스 벗어나면 서브메뉴 감춤
document.querySelector("header").addEventListener("mouseleave", () => {
  subMenus.forEach(menu => menu.classList.remove("show"));
});
});


let product_line = new Swiper('.product_line', {
  slidesPerView: 3.8,
  spaceBetween: 20,
//   autoplay: {
//      delay: 2000,
//     disableOnInteraction: false ,
// }
scrollbar: {
  el: ".swiper-scrollbar",
  dragSize: 'auto',
},
pagination: {
  el: ".swiper-pagination",
  type: "fraction",
  formatFractionCurrent: function (number) {
    return number < 10 ? '0' + number : number;
  },
  formatFractionTotal: function (number) {
    return number < 10 ? '0' + number : number;
  }
}
});



// 모든 'wishi_heart' 버튼에 클릭 이벤트 추가
document.querySelectorAll('.wishi_heart').forEach(function(heartButton) {
  heartButton.addEventListener('click', function() {
    alert("로그인 후 이용 가능합니다.");
  });
});







let swiperNew = new Swiper('.swiper_conti_new', {
  slidesPerView: 5.5,
  spaceBetween: 10,
  scrollbar: {
    el: ".new_scrollbar",
    dragSize: 'auto',
  },
  pagination: {
    el: ".new_pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return number < 10 ? '0' + number : number;
    },
    formatFractionTotal: function (number) {
      return number < 10 ? '0' + number : number;
    }
  }
});

// 공통 함수로 중복 제거
function showCategory(target) {
  const categories = ['kid', 'female', 'male', 'ack'];
  categories.forEach(cat => {
    const section = document.querySelector(`.${cat}_cate`);
    const button = document.querySelector(`.${cat}`);

    if (cat === target) {
      section.style.display = 'block';
      button.classList.add('active');
    } else {
      section.style.display = 'none';
      button.classList.remove('active');
    }
  });
}

// 각 메뉴에 이벤트 등록
document.querySelector('.kid').addEventListener('click', function(e) {
  e.preventDefault();
  showCategory('kid');
});
document.querySelector('.female').addEventListener('click', function(e) {
  e.preventDefault();
  showCategory('female');
});
document.querySelector('.male').addEventListener('click', function(e) {
  e.preventDefault();
  showCategory('male');
});
document.querySelector('.ack').addEventListener('click', function(e) {
  e.preventDefault();
  showCategory('ack');
});

// 페이지 로드시 기본값 설정
document.addEventListener('DOMContentLoaded', function() {
  showCategory('kid');
});



// 하 이게 빡세네

const imgList = document.querySelectorAll('.second_wrapper_new1 img');

// 각 이미지에 대응되는 마우스 오버 이미지 배열
const hoverImages = [
  './img/over_0000056734_20250321160225_1.gif',
  './img/over_0000056735_20250321160149_1.gif',
  './img/over_0000056687_20250403160909_1.gif',
  './img/over_0000056745_20250418152016_1.gif',
  './img/over_0000056657_20250408104630_1.gif',
  './img/over_0000056658_20250408104558_1.gif',
  './img/over_0000056792_20250417100330_2.gif',
  './img/over_0000056792_20250417100330_2.gif'

];

// 원래 이미지도 배열로 저장
const originalImages = [
  './img/over_0000056657_20250408104630_1.gif',
  './img/over_0000056658_20250408104558_1.gif',
  './img/over_0000056659_20250408104511_1.gif',
  './img/over_0000056703_20250411093557_1.gif',
  './img/over_0000056775_20250324141757_1.gif',
  './img/over_0000056776_20250324141616_1.gif',
  './img/over_0000056659_20250408104511_1.gif',
  './img/over_0000056703_20250411093557_1.gif'
];

// 이미지에 각각 이벤트 적용
imgList.forEach((img, i) => {
  img.addEventListener('mouseenter', () => {
    img.src = hoverImages[i];
  });
  img.addEventListener('mouseleave', () => {
    img.src = originalImages[i];
  });
});


// 2

// 이미지 목록 2
const imgList2 = document.querySelectorAll('.second_wrapper_new2 img');

// 각 이미지에 대응되는 마우스 오버 이미지 배열
const hoverImages2 = [
  './img/over_0000056613_20250415094758_1.gif',
  './img/over_0000056792_20250417100330_2.gif',
  './img/over_0000056757_20250423105651_2.gif',
  './img/over_0000056847_20250402095025_1.gif',
  './img/over_0000056848_20250402094952_1.gif',
  './img/over_0000056851_20250428134622_1.gif',
  './img/list_0000056846_20250402095126_0.gif',
  './img/over_0000056878_20250424095035_2.gif'
];

// 원래 이미지 배열
const originalImages2 = [
  './img/list_0000056613_20250415094758_0.gif',
  './img/list_0000056457_20250417095113_0.gif',
  './img/list_0000056455_20250417100423_0.gif',
  './img/list_0000056097_20250417115909_0.gif',
  './img/list_0000056144_20250417095327_0.gif',
  './img/list_0000056064_20250417095911_0.gif',
  './img/list_0000056768_20250421111249_0.gif',
  './img/over_0000056455_20250417100423_2.gif'
];

// 이미지에 각각 이벤트 적용
imgList2.forEach((img, i) => {
  img.addEventListener('mouseenter', () => {
    img.src = hoverImages2[i]; // 마우스 오버 시 hoverImages2 배열의 이미지 사용
  });
  img.addEventListener('mouseleave', () => {
    img.src = originalImages2[i]; // 마우스 떠날 때 원래 이미지로 되돌리기
  });
});
// 3

// 이미지 목록 2
const imgList3 = document.querySelectorAll('.second_wrapper_new3 img');

// 각 이미지에 대응되는 마우스 오버 이미지 배열
const hoverImages3 = [
  './img/over_0000056876_20250429131251_2.gif',
  './img/over_0000056878_20250424095035_2.gif',
  './img/over_0000056909_20250425184234_2.gif',
  './img/over_0000056044_20250320110333_1.gif',
  './img/over_0000056045_20250320110254_1.gif',
  './img/over_0000056735_20250321160149_1.gif',
  './img/over_0000056792_20250417100330_2.gif',
  './img/over_0000056800_20250328160650_1.gif'
];

// 원래 이미지 배열
const originalImages3 = [
  './img/list_0000056002_20250321145829_0.gif',
  './img/list_0000056045_20250320110254_0.gif',
  './img/list_0000056044_20250320110333_0.gif',
  './img/over_0000056002_20250321145829_1.gif',
  './img/over_0000056003_20250321145809_1.gif',
  './img/over_0000056045_20250320110254_1.gif',
  './img/over_0000056047_20250320105839_1.gif',
  './img/over_0000056701_20250401094610_1.gif'
];

// 이미지에 각각 이벤트 적용
imgList3.forEach((img, i) => {
  img.addEventListener('mouseenter', () => {
    img.src = hoverImages3[i]; // 마우스 오버 시 hoverImages2 배열의 이미지 사용
  });
  img.addEventListener('mouseleave', () => {
    img.src = originalImages3[i]; // 마우스 떠날 때 원래 이미지로 되돌리기
  });
});
// 이미지 목록 2
const imgList4 = document.querySelectorAll('.second_wrapper_new4 img');

// 각 이미지에 대응되는 마우스 오버 이미지 배열
const hoverImages4 = [
  './img/over_0000056376_20250321173656_1.gif',
  './img/over_0000056375_20250321173849_1.gif',
  './img/over_0000056374_20250321174001_1.gif',
  './img/over_0000056044_20250320110333_1.gif',
  './img/over_0000056045_20250320110254_1.gif',
  './img/over_0000056735_20250321160149_1.gif',
  './img/over_0000056792_20250417100330_2.gif',
  './img/over_0000056576_20250404181945_1.gif'
];

// 원래 이미지 배열
const originalImages4 = [
  
  './img/list_0000056376_20250321173656_0.gif',
  './img/list_0000056375_20250321173849_0.gif',
  './img/list_0000056374_20250321174001_0.gif',
  './img/list_0000056481_20250418151943_0.gif',
  './img/over_0000056003_20250321145809_1.gif',
  './img/over_0000056045_20250320110254_1.gif',
  './img/over_0000056047_20250320105839_1.gif',
  './img/over_0000056575_20250404172331_1.gif'
];

// 이미지에 각각 이벤트 적용
imgList4.forEach((img, i) => {
  img.addEventListener('mouseenter', () => {
    img.src = hoverImages4[i]; // 마우스 오버 시 hoverImages2 배열의 이미지 사용
  });
  img.addEventListener('mouseleave', () => {
    img.src = originalImages4[i]; // 마우스 떠날 때 원래 이미지로 되돌리기
  });
});



let swiperNew2 = new Swiper('.swiper_conti_new2', {
  slidesPerView: 4.9,
  spaceBetween: 30,
  scrollbar: {
    el: ".new_scrollbar",
    dragSize: 'auto',
  },
  pagination: {
    el: ".new_pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return number < 10 ? '0' + number : number;
    },
    formatFractionTotal: function (number) {
      return number < 10 ? '0' + number : number;
    }
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".cate_tab");
  const contents = document.querySelectorAll(".second_right_new2");

  function showCategory(targetClass) {
    contents.forEach(content => {
      if (content.classList.contains(targetClass)) {
        content.classList.add("active");
        content.style.display = "block";
      } else {
        content.classList.remove("active");
        content.style.display = "none";
      }
    });
  }

  // 초기에 첫 번째 카테고리 표시 및 탭 활성화
  showCategory("kid_cate2");
  tabs.forEach(t => t.classList.remove("active"));
  document.querySelector('[data-target="kid_cate2"]').classList.add("active");

  // 탭 클릭 시 처리
  tabs.forEach(tab => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      // 모든 탭 비활성화
      tabs.forEach(t => t.classList.remove("active"));
      // 현재 탭 활성화
      tab.classList.add("active");

      // 해당 콘텐츠 표시
      const target = tab.getAttribute("data-target");
      showCategory(target);
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const fiexBtn = document.querySelector(".fiex_btn");
  const upBtn = document.querySelector(".fiex_btn .up");

  // 스크롤 이벤트
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      fiexBtn.classList.add("show-up");
    } else {
      fiexBtn.classList.remove("show-up");
    }
  });

  // 위로 스크롤
  upBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


window.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("startPopup");
  const closeBtn = document.getElementById("closePopupBtn");
  const noToday = document.getElementById("noToday");

  // 페이지 로드 시 쿠키 체크
  if (getCookie("noPopupToday") !== "true") {
    popup.style.display = "flex";
  }

  // '오늘 하루 닫기' 체크박스 클릭 시
  noToday.addEventListener("change", function () {
    if (this.checked) {
      setCookie("noPopupToday", "true", 1);
      popup.style.display = "none";
    }
  });

  // 닫기 버튼 클릭 시
  closeBtn.addEventListener("click", function () {
    if (noToday.checked) {
      setCookie("noPopupToday", "true", 1);
    }
    popup.style.display = "none";
  });

  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    console.log(`쿠키 설정: ${name}=${value}`);
  }

  function getCookie(name) {
    const value = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return value ? value.pop() : '';
  }
});



