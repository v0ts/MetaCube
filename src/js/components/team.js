import { team } from "../DB/teamDB.js";

const list = document.querySelector(".team__list");
let delay = 0;

const delayCreate = () => {
  delay += 300;
  return delay;
};

//  data-aos="flip-up" data-aos-duration="500" data-aos-anchor-placement="top-bottom" data-aos-delay="${delayCreate()}"

const result = team 
  .map(
    (item) => `          <li class="team__item"> 
            <div class="team__img-box">
              <img src="${item.image}" alt="staff photo" class="team__img" />
            </div>
            <div class="team__box">
              <p class="team__name">${item.name}</p>
              <p class="team__adm">${item.adm}</p>
            </div>
          </li>`
  )
  .join("");

list.innerHTML = result;
