// local reviews data
const reviews = [
  {
    id: 1,
    name: "henry golding",
    job: "web designer",
    img:
      "./person-1.jpg",
    text:
      "Possess a range of skills and qualities. Responsible for designing and building the interface, navigation and aesthetic of websites for businesses and clients. Excellent IT and analytical skills.",
  },
  {
    id: 2,
    name: "Choi woo shik",
    job: "Graphic designer",
    img:
      "https://networthheightsalary.com/wp-content/uploads/2020/04/Choi-Woo-shik-Biography-1200x1200.jpg",
    text:
      "Creative development of concepts, graphics and layouts for product illustrations, company logos and websites. Managing client proposals from typesetting through to design, print and production.",
  },
  {
    id: 3,
    name: "anthony hopkins",
    job: "chief executive officer",
    img:
      "https://pyxis.nymag.com/v1/imgs/655/b27/2cbf13b949494702a9faf6bba62f8904be-anthony-hopkins.rsquare.w700.jpg",
    text:
      "Primary responsibilities include making major corporate decisions, managing the overall operations and resources of a company, acting as the main point of communication between the board of directors and corporate operations.",
  },
  {
    id: 4,
    name: "George Smith",
    job: "Manager",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQugXAWUOCsw8XtTkg_VplzunN1-NMc97EnRdEPyMIR1QSDQ8J4ruIRzlGzt1QfD0eoZ30&usqp=CAU",
    text:
      "Accomplishes department objectives by managing staff; planning and evaluating department activities. Maintains staff by recruiting, selecting, orienting, and training employees.",
  },
  {
  id: 5,
    name: "Andrei Homes",
    job: "coordinator",
    img:
      "https://content.thriveglobal.com/wp-content/uploads/2018/01/Happy_guy.jpg",
    text:
      "Create, compile and export databases containing all information for each event. Inspect public areas prior to events and direct the custodial staff and process and file invoices from vendors.",
  },
  {
  id: 6,
    name: "susane william",
    job: "Marketing manager",
    img:
      "https://media.istockphoto.com/photos/woman-giving-thumbs-up-over-plain-background-picture-id1166740465?k=6&m=1166740465&s=612x612&w=0&h=jOD2vW77N6PzuTViLDFuBSA-IUeXWcMTTc4r6Bw-R2A=",
    text:
      "Responsible for managing the promotion and positioning of a brand or the products and services that a company sells. Creates awareness by developing and executing on marketing strategies to maximize profits.",
  },
  {
  id: 7,
    name: "chloe jones",
    job: "chief financial officer",
    img:
      "https://ak.picdn.net/offset/photos/6036d7226f52af4409fdbc56/medium/offset_1100527.jpg",
    text:
      "Effective risk management and plan the organization’s financial strategy. Well-versed in all aspects of financial management ranging from simple accounting to broad investment and banking operations.",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
      currentItem = 0;
    }
    showPerson(currentItem);
});

// show next person
prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson(currentItem);
});