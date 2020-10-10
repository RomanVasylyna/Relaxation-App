$(document).ready(() => {

//Time Variables
let totalTime = 7500; //7.5sec for the whole circle
let breatheTime = (totalTime / 5) * 2; //3 Seconds for breath in/breathe out (6 seconds total)
let pauseBreathing = totalTime / 5; //1.5 for pause hold breath

//Init Function for the first time
breathing();

//Then Run Function Every 7.5 seconds
setInterval(breathing, totalTime);

//Main Function
function breathing() {
  //P Default Text
  $('.mainCircle p').text('Breathe In!');

  //Toggle Classes
  $('.circlesContainer').removeClass('shrink');
  $('.circlesContainer').addClass('expand'); //Adding a class to container with circles

  //Do something after a certain time period
  setTimeout(() => {
  $('.mainCircle p').text('Hold!');

  setTimeout(() => {
  $('.mainCircle p').text('Breathe Out!');

  //Toggle Classes
  $('.circlesContainer').removeClass('expand');
  $('.circlesContainer').addClass('shrink'); //Shrink circle while breathing out

  }, pauseBreathing); //Wait 1.5 Seconds

  }, breatheTime); //Wait 3 Seconds


}














})
