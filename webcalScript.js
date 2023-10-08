//Task variable, function, and parameters of day, time, subject, and description.     
var task = [];
        function Task(day, time, subject, taskInfo) {
        this.dayy = day;
        this.timee = time;
        this.subjectt= subject;
        this.taskInfoo = taskInfo; }
        
        
//Assigns time, day, subject, and description values to tasks as variables.    
function setProperties() {
    var e = document.getElementById('daySelector');
    var daySelectorValue = e.options[e.selectedIndex].text;
    var f = document.getElementById('timeSelector');
    var timeSelectorValue = f.options[f.selectedIndex].text; 
    
    var a = daySelectorValue;
    var b = timeSelectorValue;
    var c = (document.getElementById("Subject").value);
    var d = (document.getElementById("taskInfo").value);
        
    var newTask = new Task(a, b, c, d);
        	task.push(newTask);
    
    var x = document.getElementById("daySelector").value;
    var z = document.getElementById("Subject").value;
    var w = document.getElementById("taskInfo").value;

//Outputs task subject and description in table cell.
    document.getElementById(document.getElementById("timeSelector").value).children[parseInt(x)].innerHTML = w + ' regarding/for ' + z;
    
//Outputs task day, time, subject, and description as text that appears as a to-do list. 
    var i;
    var txt = '';
    for (i = 0; i < task.length; i++) {
        var total = task[i];
        txt += total.totalList()+'<br><br>';
        document.getElementById('outputTasks').innerHTML = txt;
   }
        }
  Task.prototype.totalList = function() {
        return 'you have to ' + this.taskInfoo + ' regarding/for ' + this.subjectt + ' on/by ' + this.dayy + ' at ' + this.timee;
        }
    
//When the webpage loads, the variable a stores the current day and time elements. Variables b, c, and d store the specific day, hours, and minutes values.          
var a = new Date();
var b = a.getDay();
var c = a.getHours();
var d = a.getMinutes();

var trs = document.getElementsByTagName('tr');

//If and else if statements check which day of the week it is. For loops of the matching day go through all of the table cells (time slots) of the current day and highlight them in the color #9EE4A1.  
    
if (b==0) {
   var i; 
    for (i=0;i<trs.length; i++){
 trs[i].children[1].style.backgroundColor = "#9EE4A1"} }
    
else if (b==1) {
   var i; 
    for (i=0;i<trs.length; i++){
 trs[i].children[2].style.backgroundColor = "#9EE4A1"} }

else if (b==2) {
   var i; 
    for (i=0;i<trs.length; i++){
 trs[i].children[3].style.backgroundColor = "#9EE4A1"} }

else if (b==3) {
   var i; 
    for (i=0;i<trs.length; i++){
 trs[i].children[4].style.backgroundColor = "#9EE4A1"} }

else if (b==4) {
   var i; 
    for (i=0;i<trs.length; i++){
 trs[i].children[5].style.backgroundColor = "#9EE4A1"} }

else if (b==5) {
   var i; 
    for (i=0;i<trs.length; i++){
 trs[i].children[6].style.backgroundColor = "#9EE4A1"} }

else {
   var i; 
    for (i=0;i<trs.length; i++){
 trs[i].children[7].style.backgroundColor = "#9EE4A1"} }

//If and else if statements check which time slot matches the current time in whole hours. The if and else statements within the matching time slot check the minutes of the current time. If the minutes are less than 30, the whole hour time slot is highlighted. If it's 30 or above, the hald hour increment of the whole hour is highlighted in the color #31C437.
    
if (c == 8) {
    if (d<30) {document.getElementById("8am").children[b+1].style.backgroundColor = "#31C437"}
    else {document.getElementById("8:30am").children[b+1].style.backgroundColor = '#31C437'}
}
else if (c==9)
    {if (d<30) {document.getElementById("9am").children[b+1].style.backgroundColor='#31C437'}
    else {document.getElementById('9:30am').children[b+1].style.backgroundColor='#31C437'}}

else if (c==10)
    {if (d<30) {document.getElementById("10am").children[b+1].style.backgroundColor='#31C437'}
    else {document.getElementById('10:30am').children[b+1].style.backgroundColor='#31C437'}}

else if (c==11)
    {if (d<30) {document.getElementById("11am").children[b+1].style.backgroundColor='#31C437'}
    else {document.getElementById('11:30am').children[b+1].style.backgroundColor='#31C437'}}

else if (c==12)
    {if (d<30) {document.getElementById("12pm").children[b+1].style.backgroundColor='#31C437'}
    else {document.getElementById('12:30pm').children[b+1].style.backgroundColor='#31C437'}}
    
else if (c==13)
    {if (d<30) {document.getElementById("1pm").children[b+1].style.backgroundColor='#31C437'}
    else {document.getElementById('1:30pm').children[b+1].style.backgroundColor='#31C437'}}
    
else if (c==14)
    {if (d<30) {document.getElementById("2pm").children[b+1].style.backgroundColor='#31C437'}
    else {document.getElementById('2:30pm').children[b+1].style.backgroundColor='#31C437'}}
    
else if (c==15)
    {if (d<30) {document.getElementById("3pm").children[b+1].style.backgroundColor='#31C437'}
    else {document.getElementById('3:30pm').children[b+1].style.backgroundColor='#31C437'}}
    
else if (c==16)
    {if (d<30) {document.getElementById("4pm").children[b+1].style.backgroundColor='#31C437'}
    else {document.getElementById('4:30pm').children[b+1].style.backgroundColor='#31C437'}}
    
else if (c==17)
    {if (d<30) {document.getElementById("5pm").children[b+1].style.backgroundColor='#31C437'}
    else {document.getElementById('5:30pm').children[b+1].style.backgroundColor='#31C437'}}
    
else if (c==18)
    {if (d<30) {document.getElementById("6pm").children[b+1].style.backgroundColor='#31C437'}
    else {document.getElementById('6:30pm').children[b+1].style.backgroundColor='#31C437'}}
    
else if (c==19)
    {if (d<30) {document.getElementById("7pm").children[b+1].style.backgroundColor='#31C437'}
    else {document.getElementById('7:30pm').children[b+1].style.backgroundColor='#31C437'}}

else if (c==20)
    {if (d<30) {document.getElementById("8pm").children[b+1].style.backgroundColor='#31C437';}}
    
else {document.getElementById('outsideHours').innerHTML = "it is currently outside of your working hours!";}
    
//This function reloads the page in order to delete  the tasks from the calendar and the to-do list. 
function deleteArray() {
    window.location.reload();
}
 //This function handles the event when the deleteTask button is clicked. It assigns the values of the day and time selectors to variables that are used to delete the associated tasks from the calendar and the to-do list. Splice() is used to remove the tasks array element that is the task being deleted. 
function deleteTask() {
    var x = document.getElementById("daySelectorD").value;
    var e = document.getElementById('daySelectorD');
    var daySelectorDvalue = e.options[e.selectedIndex].text;
    var f = document.getElementById('timeSelectorD');
    var timeSelectorDvalue = f.options[f.selectedIndex].text;
    var a = daySelectorDvalue;
    var b = timeSelectorDvalue;
    document.getElementById(document.getElementById("timeSelectorD").value).children[parseInt(x)].innerHTML = "";
    
for (i=0; i<task.length; i++) {
    var i;
    var total = task[i];
        if (total.dayy === a){
            if (total.timee === b){
                task.splice (i, 1);
                document.getElementById('outputTasks').innerHTML = "";
            
        }
}
   
}
}