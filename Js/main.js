// SOAT JS

// document.addEventListener('contextmenu',(e)=>{
//     e.preventDefault()
// })
// document.addEventListener('keypress',(e)=>{
//     e.preventDefault()
// })
let newData = new Date();
let soat = document.querySelectorAll(".soat"),
  minut = document.querySelectorAll(".minut");
soat.forEach((val) => {
  val.innerHTML = newData.getHours();
});
minut.forEach((val) => {
  val.innerHTML = newData.getMinutes();
});

// fot_setting btn footer bg img
let file_img = document.querySelector(".file_img"),
  upper = "";
file_img.addEventListener("change", function () {
  // e.preventDefault();
  localStorage.setItem("file", JSON.stringify([file_img.value]));
  let fileNew = JSON.parse(localStorage.getItem("file"));
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    upper = reader.result;
    document.querySelector(".set_bg").style.backgroundImage = `url(${upper})`;
  });
  reader.readAsDataURL(this.files[0]);
});

// DARK SETTING jS
let fot_setting = document.querySelector(".fot_setting"),
  set_close = document.querySelector(".set_btn_close"),
  setting = document.querySelector(".setting_dark"),
  // fot_setting = document.querySelector(".fot_setting"),
  set_body = document.querySelector(".set_body");
fot_setting.addEventListener("click", () => {
  setting.classList.add("activ");
  set_body.classList.add("activ");
  fot_setting.classList.add("activ");
});
set_close.addEventListener("click", () => {
  setting.classList.remove("activ");
  set_body.classList.remove("activ");
  fot_setting.classList.remove("activ");
});

// let bellClick = document.querySelectorAll(".bellClick"), k = true;
// bellClick.forEach((val) => {
//     if ( k ) {
//         val.addEventListener('click', () => {
//             bellClick((item) => {
//                 item.src = "./icon/bell1.svg"
//             })
//             bellClick[i].src = "./icon/bell2.svg"
//         })
//         k = false
//     }else {
//         val.addEventListener('click', () => {
//             bellClick((item) => {
//                 item.src = "./icon/bell2.svg"
//             })
//             bellClick[i].src = "./icon/bell1.svg"
//         })
//         k = true
//     }
// })

let set_btn_close2 = document.querySelector(".set_btn_close2"),
  userProfils = document.querySelector(".userProfils"),
  contact_btn = document.querySelector(".contact_btn"),
  userProfil = document.querySelector(".userProfil");

contact_btn.addEventListener("click", () => {
  userProfils.classList.add("activ");
  userProfil.classList.add("activ");
});

set_btn_close2.addEventListener("click", () => {
  userProfils.classList.remove("activ");
  userProfil.classList.remove("activ");
});

let filter_media = [
  {
    id: 0,
    img1: "./img/Image 2.png",
    img2: "./img/Avatar4.svg",
    video: "./img/doc_2022-04-27_07-10-50.mp4",
  },
  {
    id: 1,
    img1: "./img/Image 2.png",
    img2: "./img/Avatar1.svg",
    video: "./img/doc_2022-04-27_07-10-42.mp4",
  },
  {
    id: 2,
    img1: "./img/Image 2.png",
    img2: "./img/Avatar5.svg",
    video: "./img/doc_2022-04-27_07-11-06.mp4",
  },
  {
    id: 3,
    img1: "./img/Image 2.png",
    img2: "./img/Avatar3.svg",
    video: "./img/loading-blue.mp4",
  },
  {
    id: 4,
    img1: "./img/Image 2.png",
    img2: "./img/Avatar4.svg",
    video: "./img/amalie-steiness.mp4",
  },
];

// MEDIA USER
let fil_btn = document.querySelectorAll(".fil_btn"),
  filter_btn = document.querySelector(".filter_btn"),
  filterBodyImg = document.querySelector(".filter_img");
fil_btn.forEach((btns, i) => {
  btns.addEventListener("click", () => {
    console.log(i);
    fil_btn.forEach((item) => {
      filterBodyImg.innerHTML = "";
      item.classList.remove("activ");
    });
    fil_btn[i].classList.add("activ");
  });
});
fil_btn[0].addEventListener("click", () => {
  // serch_filter.style.display = "block"
  filterBodyImg.innerHTML = "";
  filter_media.forEach((val) => {
    filterBodyImg.innerHTML += `
        <img src="${val.img1}" class="fil_img1"/>
        `;
  });
});
fil_btn[1].addEventListener("click", () => {
  filterBodyImg.innerHTML = "";
  filter_media.forEach((val) => {
    filterBodyImg.innerHTML += `
        <video src="${val.video}" controls autoplay ></video>
        `;
  });
});
fil_btn[2].addEventListener("click", () => {
  // serch_filter.style.display = "block"
  filterBodyImg.innerHTML = "";
  filter_media.forEach((val) => {
    filterBodyImg.innerHTML += `
        <div class="tel_link">
            <img src="${val.img2}" alt="">
            <div class="link_h3">
                <h3>YouTube</h3>
                <a href="">https://youtu.be/3-bZ7gLVSzo</a>
            </div>
        </div>
        `;
  });
});

// ADD USER MODAL
// POSITION : FIXED;
let userNav = document.querySelectorAll(".userNav"),
  s = true,
  f = true,
  user_close = document.querySelectorAll(".user_close"),
  profilCilck = document.querySelectorAll(".profil");
let profils = document.querySelector(".profils");
let ProfilStorage = JSON.parse(localStorage.getItem("profil")) || [];

// PROFIL BAZA
function telegramData() {
  profils.innerHTML = "";
  ProfilStorage = JSON.parse(localStorage.getItem("profil")) || [];
  if (ProfilStorage.length === 0) {
    profils.innerHTML = `<h1 class="all_h3 malumot">Foydalanuvchi qo'shing!</h1>`;
  } else {
    ProfilStorage.forEach((val, i) => {
      profils.innerHTML += `
               <div class="profil" onclick="profilesFun(${i})">
                    <img src="./img/Avatar5.svg" alt="" class="prof_img">
                    <div class="profil_text">
                        <h3 class="all_h3">${val.Fname}</h3>
                        <h5 class="all_h5">What is a “bug”?</h5>
                    </div>
                    <button class="setting_profil" onclick="del(${i})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                    </button>
                </div>
            `;
    });
  }
}
telegramData();

let user = document.querySelector(".user"),
  userBody = document.querySelector(".userBody");
function userContact() {
  userBody.innerHTML = "";
  ProfilStorage = JSON.parse(localStorage.getItem("profil")) || [];
  if (ProfilStorage.length === 0) {
    userBody.innerHTML = `<h1 class="all_h3 malumot"> qo'shing!</h1>`;
  } else {
    ProfilStorage.forEach((val) => {
      userBody.innerHTML += `
                    <div class="userNav">
                        <div class="hours">
                            <h3 class="all_hour"><span class="soat"></span> : <span class="minut"></span></h3>
                            <div class="hourImg">
                                <img src="./icon/internet.svg" alt="">
                                <img src="./icon/WF.svg" alt="">
                                <img src="./icon/Battery.svg" alt="">
                            </div>
                        </div>
                        <div class="user_Nav_profil">
                            <div class="">
                                <button class="user_close">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 12L6.29289 11.2929C5.90237 11.6834 5.90237 12.3166 6.29289 12.7071L7 12ZM16.7071 3.70711C17.0976 3.31658 17.0976 2.68342 16.7071 2.29289C16.3166 1.90237 15.6834 1.90237 15.2929 2.29289L16.7071 3.70711ZM15.2929 21.7071C15.6834 22.0976 16.3166 22.0976 16.7071 21.7071C17.0976 21.3166 17.0976 20.6834 16.7071 20.2929L15.2929 21.7071ZM7.70711 12.7071L16.7071 3.70711L15.2929 2.29289L6.29289 11.2929L7.70711 12.7071ZM6.29289 12.7071L15.2929 21.7071L16.7071 20.2929L7.70711 11.2929L6.29289 12.7071Z" fill="#FFF"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="user_nav_text">
                                <img src="./img/Avatar5.svg" alt="">
                                <div class="">
                                    <h3 class="all_h3 LastName">${val.Fname}</h3>
                                    <h3 class="all_h5 user_text_h5">online</h3>
                                </div>
                            </div>
                            <div class="">
                                <button class="user_btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
            `;
    });
  }
}
userContact();

user_close.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    userNav[i].classList.remove("activ");
    user.classList.remove("activ");
    console.log(e);
  });
});

// FILET
let search_input = document.querySelector(".search_input");
search_input.addEventListener("input", (e) => {
  if (e.target.value === "") {
    telegramData();
  } else {
    let SearchProfil = ProfilStorage.filter((val) => {
      return (
        val.Fname.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      );
    });
    if (SearchProfil.length === 0) {
      profils.innerHTML = `<h1 class="all_h3 malumot">Foydalanuvchi topilmadi!</h1>`;
    } else {
      SearchProfil.forEach((val, i) => {
        profils.innerHTML = `
                <div class="profil" >
                     <img src="./img/Avatar5.svg" alt="" class="prof_img">
                     <div class="profil_text">
                         <h3 class="all_h3">${val.Fname}</h3>
                         <h5 class="all_h5">What is a “bug”?</h5>
                     </div>
                     <button class="setting_profil" onclick="del(${i})">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                             <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                         </svg>
                     </button>
                 </div>
             `;
      });
    }
  }
});

let modalAdd = document.querySelector(".modalAdd"),
  modalBody = document.querySelector(".modalBody"),
  index = null,
  inputs = document.querySelectorAll(".inputs"),
  modal_close = document.querySelector(".modal_close"),
  profilBtn = document.querySelector(".profilBtn");

let form = document.querySelector(".form"),
  profil = {};
// agar index null ga teng bo'lsa ma'lumot qo'shsin, aks holda edit bo'ladi
// MA'LUMOT QO'SHISH
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(profil);
  if (index === null) {
    if (localStorage.getItem("profil")) {
      localStorage.setItem(
        "profil",
        JSON.stringify([...JSON.parse(localStorage.getItem("profil")), profil])
      );
    } else {
      localStorage.setItem("profil", JSON.stringify([profil]));
    }
    e.target.reset();
    modalAdd.classList.remove("activ");
    modalBody.classList.remove("activ");
    telegramData();
    index = null;
  } else {
    if (localStorage.getItem("profil")) {
      localStorage.setItem(
        "profil",
        JSON.stringify([
          ...ProfilStorage.slice(0, index),
          profil,
          ...ProfilStorage.slice(index + 1, ProfilStorage.length),
        ])
      );
      e.target.reset();
      modalAdd.classList.remove("activ");
      modalBody.classList.remove("activ");
      telegramData();
      index = null;
    }
  }
  telegramData();
  profilCilck = document.querySelectorAll(".profil");
});

modal_close.addEventListener("click", () => {
  modalAdd.classList.remove("activ");
  modalBody.classList.remove("activ");
  index = null;
  inputs.forEach((val) => {
    val.value = "";
  });
});

inputs.forEach((val) => {
  val.addEventListener("change", (e) => {
    profil = {
      ...profil,
      [e.target.name]: e.target.value,
    };
    console.log(e.target.name);
    console.log(e.target.value);
  });
});

function del(i) {
  console.log(ProfilStorage.slice(i, i + 1));
  localStorage.setItem(
    "profil",
    JSON.stringify([
      ...ProfilStorage.slice(0, i),
      ...ProfilStorage.slice(i + 1, ProfilStorage.length),
    ])
  );
  telegramData();
}

// function edit(i){
//     profilBtn.click()
//     index = i
//     inputs.forEach((val) => {
//         val.value = ProfilStorage[i][val.name]
//     })
// }

profilBtn.addEventListener("click", () => {
  modalAdd.classList.add("activ");
  modalBody.classList.add("activ");
});

// setting PROFIL
let n = true,
  setting_profil = document.querySelectorAll(".setting_profil");
setting_profil.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    setting_profil.forEach((val) => {
      val.classList.remove("activ");
    });
    setting_profil[i].classList.add("activ");
  });
});
function profilesFun(i) {
  //   userNav[i].classList.add("activ");
  //   user.classList.add("activ");
  //   userBody.classList.add("activ");
  console.log(userNav[i]);
}
// profilCilck.forEach((btn, i) => {
//   btn.addEventListener("click", (e) => {
//     console.log(e);
//     userNav.forEach((item) => {
//       item.classList.remove("activ");
//     });
//     console.log(i);
//     userNav[i].classList.add("activ");
//     user.classList.add("activ");
//   });
// });
