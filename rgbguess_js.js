var numsquares = 6;
var colors = [];
var goalcolor;
var squares = document.querySelectorAll(".square");
var colordisp = document.querySelector("#colordisp");
var messagedisp = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
	setModeButtons();
	setSquares();
	resetfun();	
}

function setSquares()
{
	for(var i = 0; i < squares.length ;i++)
	{
		//Add click listeners 
		squares[i].addEventListener("click", function(){
		// grab the current clicked color and compare with goal
			var currentcolor = this.style.backgroundColor;
			if(currentcolor === goalcolor)
			{
				messagedisp.textContent = "Correct!";
				changecolor(currentcolor);
				h1.style.backgroundColor = currentcolor;
				reset.textContent = "Play Again?";
			}
			else
			{
				this.style.backgroundColor = "#232323"; 
				messagedisp.textContent = "Try Again";
				h1.style.backgroundColor = "steelblue";
			}
		});
	}
}

function setModeButtons()
{
	for(var i = 0; i < modeButtons.length;i++)
	{
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent==="Easy")
				numsquares=3;
			else numsquares=6;
			resetfun();
		});
	}
}

function resetfun()
{
	reset.textContent = "New Colors";
	colors = generatecolorarray(numsquares);
	goalcolor = pickColor();
	colordisp.textContent = goalcolor;
	for(var i = 0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	messagedisp.textContent = "";
}


reset.addEventListener("click",function(){
	resetfun();
});
			 


function changecolor(color)
{
	//change each color to match given!
	for(var i = 0; i < squares.length ;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor()
{
	// pick random color
	var number = Math.floor(Math.random() * colors.length);
	return colors[number];
}

function generatecolorarray(x)
{
	var arr = [];

	for(var i = 0; i < x ;i++)
	{
		//get random color x times
		arr.push(randomColor())
	}

	return arr;
}

function randomColor()
{
	var rednum = Math.floor(Math.random() * 256);
	var greennum = Math.floor(Math.random() * 256);
	var bluenum = Math.floor(Math.random() * 256);

	// rgb(r, g, b);
	var result = "rgb("+rednum+", "+greennum+", "+bluenum+")";
	return result;
}