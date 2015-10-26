//replaces image on imgStage with whatever was clicked.
function changeImage(a){
  document.getElementById("imgStage").src=a;
}

// These are the titles and descriptions for the talks at the bottom of Our Work page.
// This needs to be built more modular and dynamically.
var sDonoho = {title:"Security: Footprinting by Susan Donoho", Desc:"In computers, footprinting is the process of accumulating data regarding a specific network environment, usually for the purpose of finding ways to intrude into the environment. Footprinting can reveal system vulnerabilities and improve the ease with which they can be exploited. The more informed software and systems developers are the more secure they can become."};

var sSmith = {title:"Git Better by Steve Smith", Desc:"Are you a Git user who feels like they're\ only using a fraction of the functionality? Do you find yourself knowing there is more to it, but are worried about screwing up your repo? In this session we will dive into a few of the more powerful commands that will make us better, more confident, more organized developers. Come out of the talk understanding more about the way Git stores your data, how to recover from mistakes, and how to dive more deeply into the information stored in your repository."};

var jvVleet = {title:"Parallel Node.js by Jacob Van Vleet", Desc:"Node.js has become a hot topic in recent years, but making it scale across cores is something that doesn't get as much attention. We'll take a look at 2 ways to do multiprocess node apps, so you can get the most out of your server's CPU."};

var rRibeiro = {title:"Visualizing Data with D3 by Rob Ribeiro", Desc:"Sometimes a table just doesn't cut it for showing data on the web. Sometimes people want to really see it. That's where D3.js comes into play. Rob will be showing how to start creating beautiful graphs with D3, as well as some other D3 based tools to become productive more quickly."};

var jJohanan = {title:"Why I Like React by Josh Johanan", Desc:"Building complex user interfaces for web applications has always been a challenge, but Facebook presents a new answer with React, their own spin on the V in the MVC. React is new and it looks weird. To utilize React fully you need to 'think in React' which we will learn to do. "};

var ePotter = {title:"C# Inception: Using Roslyn and C# Code to Analyze C# Code by Eric Potter", Desc:"Project Roslyn is Microsoft's next generation .Net compiler. It's API allows you to dig into the details of any C# or VB Code. It can be used to improve your code by doing deep analysis and custom rule enforcement. In this presentation, we will look at how you can get started with the Roslyn C# API."};

// mainStage1-6 are apart of the onClick when selecting an image on Our Work page.
// These need to be built more modular and dynamically.

// mainStage1 is set to onload in the Our Work page.
function mainStage1(a){
  document.getElementById('titleStage').innerHTML = sDonoho.title;
  document.getElementById('descriptionStage').innerHTML = sDonoho.Desc;
}

function mainStage2(a){
  document.getElementById('titleStage').innerHTML = sSmith.title;
  document.getElementById('descriptionStage').innerHTML = sSmith.Desc;
}

function mainStage3(a){
  document.getElementById('titleStage').innerHTML = jvVleet.title;
  document.getElementById('descriptionStage').innerHTML = jvVleet.Desc;
}

function mainStage4(a){
  document.getElementById('titleStage').innerHTML = rRibeiro.title;
  document.getElementById('descriptionStage').innerHTML = rRibeiro.Desc;
}

function mainStage5(a){
  document.getElementById('titleStage').innerHTML = jJohanan.title;
  document.getElementById('descriptionStage').innerHTML = jJohanan.Desc;
}

function mainStage6(a){
  document.getElementById('titleStage').innerHTML = ePotter.title;
  document.getElementById('descriptionStage').innerHTML = ePotter.Desc;
}
