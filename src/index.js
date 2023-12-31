import { list } from "postcss";
import "./sass/main.scss";

const headlinesContainer = document.getElementById("todays-headlines");
const seeAllBtn = document.getElementById("see-all");
const dropdownList = document.getElementById("dropdown-list");
const curItemName = document.getElementById("selected-item");

let results;
let seeAll = false;

function renderHeadlines(results, index) {
  headlinesContainer.innerHTML = "";
  for (let i = 0; i <= index; i++) {
    const result = results[i];
    const headlineHtml = `
        <li class="w-336  flex  items-center  gap-sm">
            <figure class="w-[102px]  h-[96px]  rounded-sm  overflow-hidden  shrink-0  object-cover">
                <img class="h-full w-full"
                    src="${result.multimedia[1].url}"
                    alt="king pin knocked down">
            </figure>
            <div class="flex  flex-col justify-center  gap-xsm    grow">
                <h3 class="font-bold  text-md">${result.title}
                </h3>
                <p class="truncate-2  max-w-[200px]  text-sm">${result.abstract}</p>
            </div>
       </li>
        `;
    headlinesContainer.insertAdjacentHTML("beforeend", headlineHtml);
  }
}

function renderError(error) {
  headlinesContainer.innerHTML = "";
  const errorHtml = `
    <li class= "flex  items-center  justify-center  w-full">
      <p class="text-darkblue  text-lg"> ${error.message} </p>
      </li>
  `;
  headlinesContainer.insertAdjacentHTML("beforeend", errorHtml);
}

async function getData(section = "home") {
  try {
    seeAll = false;
    const response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=bAyMmUuJ8Aa2hOxXViAcZBdgKjrIenYU`
    );
    if (!response.ok)
      throw new Error("Unable to load... try agian after sometime :(");
    const data = await response.json();
    results = data.results;
    renderHeadlines(results, 7);
  } catch (error) {
    renderError(error);
  }
}
getData();

seeAllBtn.addEventListener("click", function () {
  if (seeAll) {
    renderHeadlines(results, 7);
    seeAll = false;
  } else if (!seeAll) {
    renderHeadlines(results, results.length - 1);
    seeAll = true;
  }
});

document.addEventListener("click", function (e) {
  const ele = e.target.closest("#js-dropdown");
  if (!ele) dropdownList.classList.add("hidden");
  else {
    dropdownList.classList.toggle("hidden");
    const listItem = e.target;
    if (!listItem.classList.contains("dropdown-item")) return;
    const selectedName = listItem.textContent.toLowerCase();
    curItemName.textContent = listItem.textContent;
    getData(selectedName);
  }
});
