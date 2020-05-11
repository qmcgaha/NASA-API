let urlRequest = "https://api.nasa.gov/planetary/apod?api_key=2mywooG5oOJwq9YfKS2fNOEPuKn3wY9C3HJy1s0n";
let request = new XMLHttpRequest();

request.open("GET", urlRequest);

request.responseType = "json";
request.send();

request.onload = function () {
  const nasaData = request.response;

  document.getElementById("date").innerText = nasaData.date;
  document.getElementById("title").innerText = nasaData.title;
  document.getElementById("hdpic").src = nasaData.hdurl;
  document.getElementById("description").innerText = nasaData.explanation;
  document.getElementById("citation").innerText = nasaData.copyright;
}
