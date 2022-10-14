participantList = [
  {
    name: "Abdul Fatah",
    title: "Software Developer",
    age: 32,
    country: "Afghanistan",
    hobby: "reading",
    imageUrl: `./images/Abdulfatah.jpg`,
  },

  {
    name: "Ali",
    title: "Web Developer",
    age: 34,
    country: "Turkey",
    hobby: "climbing",
    imageUrl: `./images/Ali.jpg`,
  },

  {
    name: "Ari",
    title: "Data Scientist",
    age: 25,
    country: "Indonesia",
    hobby: "swimming",
    imageUrl: `./images/Ari.jpg`,
  },

  {
    name: "Arwa",
    title: "Cloud Engineer",
    age: 35,
    country: "Syria",
    hobby: "dancing",
    imageUrl: `./images/Arwa.jpg`,
  },

  {
    name: "Baris",
    title: "DevOps Engineer",
    age: 38,
    country: "Turkey",
    hobby: "painting",
    imageUrl: `./images/Baris.jpg`,
  },

  {
    name: "Bilal",
    title: "Software Tester",
    age: 25,
    country: "Afghanistan",
    hobby: "chess",
    imageUrl: `./images/Bilal.jpg`,
  },

  {
    name: "Emin Samed",
    title: "Software Developer",
    age: 32,
    country: "Turkey",
    hobby: "basketball",
    imageUrl: `./images/Emin.jpg`,
  },

  {
    name: "Enes",
    title: "Web Developer",
    age: 33,
    country: "Turkey",
    hobby: "football",
    imageUrl: `./images/Enes.jpg`,
  },

  {
    name: "Fatih",
    title: "Data Scientist",
    age: 30,
    country: "Turkey",
    hobby: "photography",
    imageUrl: `./images/Fatih.jpg`,
  },

  {
    name: "Hasan",
    title: "Cloud Engineer",
    age: 35,
    country: "Turkey",
    hobby: "swimming",
    imageUrl: `./images/Hasan.jpg`,
  },

  {
    name: "Ismet",
    title: "Cloud Engineer",
    age: 34,
    country: "Turkey",
    hobby: "painting",
    imageUrl: `./images/Ismet.jpg`,
  },

  {
    name: "Jyothi",
    title: "Data Scientist",
    age: 28,
    country: "India",
    hobby: "reading",
    imageUrl: `./images/Jyothi.jpg`,
  },

  {
    name: "Murat",
    title: "Software Tester",
    age: 32,
    country: "Turkey",
    hobby: "dancing",
    imageUrl: `./images/Murat.jpg`,
  },

  {
    name: "Oguz",
    title: "Web Developer",
    age: 30,
    country: "Turkey",
    hobby: "cooking",
    imageUrl: `./images/Oguz.jpg`,
  },

  {
    name: "Olena",
    title: "Software Developer",
    age: 27,
    country: "Ukraine",
    hobby: "writing",
    imageUrl: `./images/Olena.jpg`,
  },

  {
    name: "Sadettin",
    title: "DevOps Engineer",
    age: 25,
    country: "Turkey",
    hobby: "football",
    imageUrl: `./images/Sadettin.jpg`,
  },

  {
    name: "Senay",
    title: "Software Developer",
    age: 26,
    country: "Turkey",
    hobby: "running",
    imageUrl: `./images/Senay.jpg`,
  },

  {
    name: "Serkan",
    title: "Software Developer",
    age: 25,
    country: "Turkey",
    hobby: "snowboarding",
    imageUrl: `./images/Serkan.jpg`,
  },

  {
    name: "Sevim",
    title: "Web Developer",
    age: 25,
    country: "Turkey",
    hobby: "music",
    imageUrl: `./images/Sevim.jpg`,
  },

  {
    name: "Shamil",
    title: "DevOps Engineer",
    age: 30,
    country: "Russia",
    hobby: "football",
    imageUrl: `./images/Shamil.jpg`,
  },

  {
    name: "Tuba",
    title: "Software Tester",
    age: 24,
    country: "Turkey",
    hobby: "gardening",
    imageUrl: `./images/Tuba.jpg`,
  },

  {
    name: "Yuliia",
    title: "Cloud Engineer",
    age: 26,
    country: "Ukraine",
    hobby: "chess",
    imageUrl: `./images/Yuliia.jpg`,
  },

  {
    name: "Yusuf",
    title: "Data Scientist",
    age: 22,
    country: "Turkey",
    hobby: "cooking",
    imageUrl: `./images/Yusuf.jpg`,
  },
];

let cardContainer = document.querySelector(".card-container");

let renderText = (e) => {
  console.log(e.target.value);
};

let renderParticipantList = () => {
  cardContainer.innerHTML = participantList
    .map((participant) => {
      return `<div class="card"  onmouseover="displayContext(this)" onmouseout="hideContext(this)">
                <img src="${participant.imageUrl}" alt="image" />
                <div class="card-text">
                    <h4><b>${participant.name}</b></h4>
                    <p>${participant.title}</p>
                </div>
                <div class="info-text">                  
                    <p> Country : ${participant.country} </p>
                    <p> Age : ${participant.age} </p>
                    <p> Hobby : ${participant.hobby} </p>
                </div>
              </div>`;
    })
    .join("");
};

document.addEventListener("DOMContentLoaded", renderParticipantList);

function displayContext(e) {
  let infoDiv = e?.firstElementChild?.nextElementSibling?.nextElementSibling;
  infoDiv.style.visibility = "visible";
}

function hideContext(e) {
  let infoDiv = e?.firstElementChild?.nextElementSibling?.nextElementSibling;
  infoDiv.style.visibility = "hidden";
}

function filterByTitle(value) {
  cardContainer.innerHTML = participantList
    .filter((participant) => participant.title == value)
    .map((participant) => {
      return `<div class="card"  onmouseover="displayContext(this)" onmouseout="hideContext(this)">
                <img src="${participant.imageUrl}" alt="image" />
                <div class="card-text">
                    <h4><b>${participant.name}</b></h4>
                    <p>${participant.title}</p>
                </div>
                <div class="info-text">                  
                    <p> Country : ${participant.country} </p>
                    <p> Age : ${participant.age} </p>
                    <p> Hobby : ${participant.hobby} </p>
                </div>
              </div>`;
    })
    .join("");
}
