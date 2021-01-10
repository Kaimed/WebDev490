$(document).ready(load_news);
var data = news['news'];


function load_news() {
//solution goes here
    var marqueeInfo = document.getElementById("news");
    marqueeInfo.innerHTML = "<span>Lebron</span>";
    populateMarquee();
}

function startMarquee(){
    console.log("startMarquee function executing");
    var play = document.getElementById('toggle');
    var news = document.getElementById("news");

    play.src = "data/pause.png";
    play.setAttribute("onclick","stopMarquee()");

    news.className = "marquee";
}

function stopMarquee(){
    console.log("stopMarquee function executing");
    var pause = document.getElementById('toggle');
    var news = document.getElementById("news");

    pause.src = "data/play.png";
    pause.setAttribute("onclick","startMarquee()");

    news.className = "marquee_paused";
}

function populateMarquee(){
  var marq = document.getElementById("news");
  var html = "";
  for(var i = 0; i<data.length; i++){
    html += "<span class = 'news_item' onclick = 'displayDetails(" + data[i]['id'] + ")'>" + data[i]['heading'] + "</span>\n";
    html += "<img class = 'news_img' src = 'data/NBA.jpg'\n>";
  }
  marq.innerHTML = html;
}

function displayDetails(newsNumber){
    newsNumber = newsNumber - 1;
    var display = document.getElementById("detail");
    var html  = "";
    html += "<img class = 'news_photo' src='" + data[newsNumber]['photo'] + "'>\n";
    html += "<p class = 'news_heading'>" + data[newsNumber]['heading'] + "</p>\n";
    html += "<p class = 'date'>" + data[newsNumber]['Date'] + "</p>\n";
    html += "<p class = 'news_detail'>" + data[newsNumber]['details'] + "</p>\n";
    document.getElementById('detail').innerHTML = html;
}
