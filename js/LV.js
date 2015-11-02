//an array of all the talks
var talks = [{ title: "Security: Footprinting by Susan Donoho", Desc: "In computers, footprinting is the process of accumulating data regarding a specific network environment, usually for the purpose of finding ways to intrude into the environment. Footprinting can reveal system vulnerabilities and improve the ease with which they can be exploited. The more informed software and systems developers are the more secure they can become.", src: "img/susanSecurityTalk.png" },
{ title: "Git Better by Steve Smith", Desc: "Are you a Git user who feels like they're\ only using a fraction of the functionality? Do you find yourself knowing there is more to it, but are worried about screwing up your repo? In this session we will dive into a few of the more powerful commands that will make us better, more confident, more organized developers. Come out of the talk understanding more about the way Git stores your data, how to recover from mistakes, and how to dive more deeply into the information stored in your repository.", src: "img/gitSteveSmith.jpg"},
{ title: "Parallel Node.js by Jacob Van Vleet", Desc: "Node.js has become a hot topic in recent years, but making it scale across cores is something that doesn't get as much attention. We'll take a look at 2 ways to do multiprocess node apps, so you can get the most out of your server's CPU.", src: "img/parallelNodeJacobV.jpg" },
{ title: "Visualizing Data with D3 by Rob Ribeiro", Desc: "Sometimes a table just doesn't cut it for showing data on the web. Sometimes people want to really see it. That's where D3.js comes into play. Rob will be showing how to start creating beautiful graphs with D3, as well as some other D3 based tools to become productive more quickly.", src: "img/d3RobRibeiro.jpg" },
{ title: "Why I Like React by Josh Johanan", Desc: "Building complex user interfaces for web applications has always been a challenge, but Facebook presents a new answer with React, their own spin on the V in the MVC. React is new and it looks weird. To utilize React fully you need to 'think in React' which we will learn to do. ", src: "img/ReactjsJoshJ.jpg" },
{ title: "C# Inception: Using Roslyn and C# Code to Analyze C# Code by Eric Potter", Desc: "Project Roslyn is Microsoft's next generation .Net compiler. It's API allows you to dig into the details of any C# or VB Code. It can be used to improve your code by doing deep analysis and custom rule enforcement. In this presentation, we will look at how you can get started with the Roslyn C# API.", src: "img/cSharpRoslyn.jpg" }];

function renderInElement(el, renderFunction) {
    //clear the current children
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }

    renderFunction(el);
}

function renderPosts(postArray) {
    var internalRender = function internalRender(el){
        var header = document.createElement('h4');
        header.appendChild(document.createTextNode('Work'));
        el.appendChild(header);

        var paragraph = document.createElement('p');
        paragraph.appendChild(document.createTextNode('Click on each image!'));
        el.appendChild(paragraph);

        var ul = document.createElement('ul');
        ul.className = 'clearing-thumbs small-block-grid-1 medium-block-grid-2 large-block-grid-4';
        el.appendChild(ul);

        postArray.forEach(function (post) {
            var li = document.createElement('li');
            var img = document.createElement('img');
            img.src = post.src;
            img.title = post.title;

            li.appendChild(img);
            ul.appendChild(li);
        });
    };

    return internalRender;
}

var imgClickHandler = function imgClickHandler(posts) {
    var updateStage = function updateStage(e) {
        if (e.target.tagName === "IMG") {
            //find img
            var clickedPost = posts.filter(function (post) {
                //may need a better way to determine this
                return e.target.src.indexOf(post.src) > 0;
            });

            //should be one
            document.getElementById('titleStage').innerHTML = clickedPost[0].title;
            document.getElementById('descriptionStage').innerHTML = clickedPost[0].Desc;
            document.getElementById("imgStage").src = clickedPost[0].src;
        }
    }

    return updateStage;
}

//actually do it
window.addEventListener('load', function () {
    var root = document.getElementById('work-root');
    renderInElement(root, renderPosts(talks));
    root.addEventListener('click', imgClickHandler(talks));
});

