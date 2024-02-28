function startGame()
{
    gameLoop()
}

var count = 0;
var personVis = false;
var score = 0;


function gameLoop()
{
    personVis = ! personVis;

    if (personVis == true)
    {
        var classToset = "char visible";
    }
    else
    {
        var classToset = "char hidden";
    }

    var gamezone = document.getElementById("gamezone");

    for (i = 0; i<8; i++)
    {
        gamezone.children[i].className = classToset;
        gamezone.children[i].innerHTML = "LoL";

        gamezone.children[i].onclick = function()
        {score-=2; document.getElementById("scorezone").innerHTML = "Score: " + score};
    }

    var randomNum = Math.floor(Math.random()*8) +1;

    gamezone.children[randomNum-1].innerHTML = "HuhZi";

    gamezone.children[randomNum-1].onclick = function()
    {score+=1; document.getElementById("scorezone").innerHTML = "Score: " + score};

    gamezone.children[randomNum-1].className = classToset + " Uzi";

    count++;


    if (count < 12)
    {
        setTimeout(gameLoop, personVis ? 2000:1000);
    }
    else
    {
        alert("Game Over");
        alert("Score: " +score);
    }

    
}