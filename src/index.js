import "./sass/main.scss";

const headlinesContainer = document.getElementById("todays-headlines");
const seeAllBtn = document.getElementById("see-all");

const API =
  "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=bAyMmUuJ8Aa2hOxXViAcZBdgKjrIenYU";

let results;

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

async function getData() {
  const response = await fetch(API);
  const data = await response.json();
  results = data.results;
  console.log(results);
  renderHeadlines(results, 7);
}
getData();

let all = false;

seeAllBtn.addEventListener("click", function () {
  if (all) {
    renderHeadlines(results, 7);
    all = false;
  } else if (!all) {
    renderHeadlines(results, results.length - 1);
    all = true;
  }
});
