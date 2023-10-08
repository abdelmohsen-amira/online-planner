//This const declaration gets the edit, minutes, and seconds elements through a read-only reference in order to handle the edit button. This allows the client to edit the default timer duration of 25 minutes and 00 seconds in order to satisfy her wish for a customizable way to manage time for working and breaks.
const progressBar = document.querySelector(".edgeOfTimer"),
	minuteArea = document.querySelector("#minutes"),
	secondArea = document.querySelector("#seconds"),
	edit = document.querySelector("#edit"),
//Get the start/stop button value using the const declaration and declare minutes and seconds as let variables. This is useful to customize the minutes and seconds displayed values.
    startStop = document.querySelector("#startAndStop");
let minutes = document.querySelector("#minutes").innerHTML,
	seconds = document.querySelector("#seconds").innerHTML,
	progress = null,
	startingPoint = 0,
	endingPoint = parseInt(minutes) * 60 + parseInt(seconds),
	progressSpeed = 1000,
	degreesDivided = 360 / endingPoint,
//Declare toggleEdits as a let variable in order to keep track of the EDIT button. Set to false so that the default timer value is 25 minutes to suit ADHD people.
	toggleEdits = false,
	remainingSeconds = 0,
	remainingMinutes = 0;

//This function tracks the progress of the timer and its progress bar. It calculates the remaining minutes and seconds by finding the difference between the endingPoint and startingPoint then calculating how much that difference is relative to a second or a minute. This determines how many degrees of the progress bar are allocated per second. The starting point is increased because, otherwise, it would be zero and it would always give a value of zero when multiplied with the number of degrees allocated for every second.
function progressTrack() {
	startingPoint++;

	remainingSeconds = Math.floor((endingPoint - startingPoint) % 60);
	remainingMinutes = Math.floor((endingPoint - startingPoint) / 60);
//the length makes it possible to update the numerical display of the timer.
	secondArea.innerHTML = remainingSeconds.toString().length == 2 ? remainingSeconds : `0${remainingSeconds}`;
	minuteArea.innerHTML = remainingMinutes.toString().length == 2 ? remainingMinutes : `0${remainingMinutes}`;

//To handle the progress bar, I used the conic-gradient() function because the radial-gradient() function would be unnecessary as only the edge of the gradient will be displayed. I styled its color depending on the progress. If the timer is in progress, then the progress bar will be displayed in the color #D62A2A. Otherwise, when the time interval is fulfilled, the progress bar will display in the color #2AD62C, indicating the time for a break. The DOM is updated accordingly.
	progressBar.style.background = `conic-gradient(
      	#D62A2A ${startingPoint * degreesDivided}deg,
      	#17171a ${startingPoint * degreesDivided}deg
  		)`;
	if (startingPoint == endingPoint) {
		progressBar.style.background = `conic-gradient(
				#2AD62C 360deg,
				#2AD62C 360deg
		  )`;
		clearInterval(progress);
		startStop.innerHTML = "start";
		progress = null;
		startingPoint = 0;
	}
}

//This function is called when the start/stop button is clicked. If there's no progress, then it is assumed that the start button is displayed (i.e. the timer isn't in motion) and the setInterval() method is used to track the progress. Otherwise, it is assumed that the timer is running and that the stop text is displayed on the button, which uses the clearInterval method. That is when the progress bar is erased and reset to its original color. The actual progress is also reset whereas the initial countdown value, whether edited or by default, is maintained. 
function startStopProgress() {
	if (!progress) {
		progress = setInterval(progressTrack, progressSpeed);
	} else {
		clearInterval(progress);
		progress = null;
		startingPoint = 0;
		progressBar.style.background = `conic-gradient(
				#000000 360deg,
				#000000 360deg
		  )`;
	}
}
//This is the function that is called in the event of an onblur of the minute and second display. It is also called when the EDIT button is unclicked. That way, the values of the timer reset to their original conditions in order to start the new assigned timer interval. querySelector() method uses the first elements of the minutes and seconds.
function reset() {
	if (progress) {
		clearInterval(progress);
	}
	minutes = document.querySelector("#minutes").innerHTML;
	seconds = document.querySelector("#seconds").innerHTML;
	toggleEdits = false;
	minuteArea.contentEditable = false;
	minuteArea.style.borderBottom = `none`;
	secondArea.contentEditable = false;
	secondArea.style.borderBottom = `none`;
	progress = null;
	startingPoint = 0;
	endingPoint = parseInt(minutes) * 60 + parseInt(seconds);
	degreesDivided = 360 / endingPoint;
	progressBar.style.background = `conic-gradient(
				#000000 360deg,
				#000000 360deg
		  )`;
}
//This handles the click event of the START/STOP button. In order to make my code more compact, I used the same startStopProgress function for either conditions of the button. [1]If the button displays START, then the function first makes sure that the values assigned are valid and not equal to zero. If the values are valid, then the START/STOP button's text changes from START to STOP. At the same time, the progress indicator starts as the function startStopProgress is called, changing the timer display and the progress bar display. Otherwise, the user is alerted and prompted to assign valid values as minutes and seconds. This prevents user error. If the button displays STOP when it's clicked (i.e. the timer was running), then the same startStopProgress function is used to reset the progress and set the button text back to START.
startStop.onclick = function () {
	if (startStop.innerHTML === "start") {
		if (!(parseInt(minutes) === 0 && parseInt(seconds) === 0)) {
			startStop.innerHTML = "stop";
			startStopProgress();
		} else {
			alert("please enter numerical values that are greater than zero!");
		}
	} else {
		startStop.innerHTML = "start";
		startStopProgress();
	}
};
//This function handles the click event of the EDIT button. These conditions allow the timer display to be editable. The function also separately underlines the minutes and seconds displays upon the click event of the EDIT button.  
edit.onclick = function () {
	if (!toggleEdits) {
		toggleEdits = true;
		minuteArea.contentEditable = true;
		minuteArea.style.borderBottom = `5px dashed #ffffff`;
		secondArea.contentEditable = true;
		secondArea.style.borderBottom = `5px dashed #ffffff`;
	} else {
		reset();
	}
};
//For the minutes and seconds elements, the onblur event resets the visual indications that follow the click of the edit button. The reset function handles the new, edited values to update the minutes and seconds elements.
minuteArea.onblur = function () {
	reset();
};

secondArea.onblur = function () {
	reset();
};