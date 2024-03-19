const btn = document.getElementById("btn");
const container = document.getElementById("container");

// console.log("Working");

// const getData = (api) => {
//   fetch(api)
//     .then((res) => {
//       //   console.log(res.json());
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// };

// getData(api);

btn.addEventListener("click", () => {
  showData().then((data) => {
    console.log(data);
    container.innerHTML = data;
  });

  //   console.log(joke);
});

var limit = 1;
var apiKey = "O6A1WUR2ne/Ls5QCII0zAg==TYPLEPoEC9RM2ZKh";

var headers = new Headers();
headers.append("X-Api-Key", apiKey);

// fetch("https://api.api-ninjas.com/v1/dadjokes?limit=" + limit, {
//   method: "GET",
//   headers: headers,
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].joke);
//   })
//   .catch(function (error) {
//     console.error("Error fetching data:", error);
//   });

async function showData() {
  const response = await fetch(
    "https://api.api-ninjas.com/v1/dadjokes?limit=" + limit,
    {
      method: "GET",
      headers: headers,
    }
  );
  const data = await response.json();
  console.log(data[0].joke);
  return data[0].joke;
}
