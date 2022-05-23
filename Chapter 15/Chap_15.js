var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");
var CurMonth = document.getElementById("MonthOfYear");
var QuoteButton = document.getElementById("MonthQuote");
const m = new Date();


// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);
QuoteButton.addEventListener("click", getQuote);

// create a new Date object
var d = new Date();

// call the displayDate() function
displayDate();

function displayDate() {
    todayDate.innerHTML = d.toDateString();
}

function displayMonth() {
    CurMonth.innerHTML =("The current month is " + monthNames[m.getMonth()]);;
}

function displayActivity() {
    // find out the day of the week.
    var dayOfWeek = d.getDay();

    /* set a variable, called youShould, with a different
       string based on what day of the week it is. */
    var youShould;

    switch (dayOfWeek) {
        case 0:
            youShould = "Take it easy. You've earned it.";
            break;
        case 1:
            youShould = "Gotta do what ya gotta do!";
            break;
        case 2:
            youShould = "Take time to smell the roses!";
            break;
        case 3:
            youShould = "Don't forget to eat breakfast!";
            break;
        case 4:
            youShould = "Learn something new today!";
            break;
        case 5:
            youShould = "Make a list of things you like to do.";
            break;
        case 6:
            youShould = "Do one thing from your list of things you like to do.";
            break;
        default:
            youShould = "Hmm. Something has gone wrong.";
            break;
    }
           // output the value of youShould into the thingToDo div    
           document.getElementById("thingToDo").innerHTML =youShould+"<br>";
}   

displayMonth();

function displayMonth() {
    var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    MonthOfYear.innerHTML = "<br>" + month[d.getMonth()];
}

   function getQuote(){
        // find Month
        var MonOfYear = m.getMonth();
    
            var ShortQuote;
    
        switch (MonOfYear) {
            case 0:
                ShortQuote = "Love For All, Hatred For None.";
                break;
            case 1:
                ShortQuote = "Change the world by being yourself.";
                break;
            case 2:
                ShortQuote = "Every moment is a fresh beginning.";
                break;
            case 3:
                ShortQuote = "Never regret anything that made you smile.";
                break;
            case 4:
                ShortQuote = "Everything you can imagine is real.";
                break;
            case 5:
                ShortQuote = "Die with memories, not dreams";
                break;
            case 6:
                ShortQuote = "Simplicity is the ultimate sophistication.";
                break;
            case 7:
                ShortQuote = "Whatever you do, do it well.";
                break;    
            case 8:
                ShortQuote = "What we think, we become.";
                break;
            case 9:
                ShortQuote = "All limitations are self-imposed.";
                break;
            case 10:
                ShortQuote = "Tough times never last but tough people do.";
                break;
            case 11:
                ShortQuote = "Problems are not stop signs, they are guidelines.";
                break;
            default:
                ShortQuote = "Hmm. Something has gone wrong.";
                break;
        }
      
    document.getElementById("ShortQuote").innerHTML = "<br>" + ShortQuote;
    }   
    
   
  
 
