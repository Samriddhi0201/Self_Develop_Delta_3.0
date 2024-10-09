let url = "http://universities.hipolabs.com/search?country=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  console.log("button was clicked");
  let country = document.querySelector("#country").value;
  let state = document.querySelector("#state").value;
  console.log("Country:", country);
  console.log("State:", state);
  let colArr = await getColleges(country, state);
  console.log(colArr);
  show(colArr);
});

function show(colArr) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (col of colArr) {
    console.log(col.name);
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}

async function getColleges(country, state) {
  try {
    let result = await axios.get(url + country + "&state=" + state);
    return result.data;
  } catch (err) {
    console.log("Error : ", err);
    return [];
  }
}
