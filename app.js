////// global variables //////////////////////////////////////////////////////////////////////////////////////////////
var songsArray = [];

/////// song object constructor //////////////////////////////////////////////////////////////////////////////////////
function Song (name, answer1, answer2, answer3, answer4, answer5, answer6, answer7) {
  this.name = name;
  this.answers = [answer1, answer2, answer3, answer4, answer5, answer6, answer7];
  this.compatibility = 0;
  songsArray.push(this);
};

/////// instantiate song objects /////////////////////////////////////////////////////////////////////////////////////////
var newYork = new Song('Welcome to New York', 'Cumulus', 'Pink', 'Jake Gyllenhaal', 'Yangchuanosaurus', 'True', 'True', 'Coffee');
var blankSpace = new Song('Blank Space', 'Stratus', 'Purple', 'Zac Efron', 'Diplodocus', 'True', 'True','Alcoholic');
var style = new Song('Style', 'Stratocumulus', 'Red', 'Taylor Lautner', 'Diplodocus', 'True', 'True', 'Water');
var woods = new Song('Out of the Woods', 'Stratus', 'Blue', 'Taylor Lautner', 'Diplodocus', 'True','False', 'Water');
var stay = new Song('All You Had to Do Was Stay', 'Cumulonimbus', 'Purple', 'Taylor Lautner', 'Bambiraptor' ,'True', 'false', 'Soda');
var blankSpace = new Song('Blank Space', 'Stratus', 'Purple', 'Zac Efron' , 'Bambiraptor','False', 'True', 'Coffee');
var shake = new Song('Shake It Off', 'Stratus', 'Red', 'Taylor Lautner', 'Diplodocus', 'True','False', 'Water');
var wish = new Song('I Wish You Would', 'Cumulonimbus', 'Blue', 'Zac Efron', 'Yangchuanosaurus','False','False','Alcoholic');
var blood = new Song('Bad Blood', 'Cumulus', 'Red', 'Jake Gyllenhaal','Yangchuanosaurus','False', 'True', 'Soda');
var dreams = new Song('Wildest Dreams', 'Stratus', 'Blue', 'Jake Gyllenhaal', 'Yangchuanosaurus', 'True', 'True', 'Coffee');
var girl = new Song('How you Get the Girl', 'Stratus', 'Pink', 'Jake Gyllenhaal', 'Diplodocus', 'True', 'True', 'Soda');
var love = new Song('This Love', 'Cumulonimbus', 'Blue', 'Taylor Lautner', 'Diplodocus', 'True', 'False', 'Alcoholic');
var places = new Song('I Know Places', 'Cumulus', 'Purple', 'Taylor Lautner', 'Diplodocus', 'False', 'False', 'Coffee');
var clean = new Song('Clean', 'Cumulus', 'Red', 'Harry Stiles', 'Diplodocus', 'True', 'True', 'Alcoholic');
var grace = new Song('State of Grace', 'Cumulonimbus', 'Pink', 'Taylor Lautner', 'Yangchuanosaurus', 'True', 'False', 'Water');
var red = new Song('Red', 'Cumulus', 'Blue', 'Harry Stiles', 'Diplodocus', 'True', 'True', 'Coffee');
var treacherous = new Song('Treacherous', 'Stratus', 'Red', 'Jake Gyllenhaal','Bambiraptor', 'True', 'True', 'Soda');
var trouble = new Song('I Knew You Were Trouble', 'Stratocumulus', 'Purple', 'Harry Stiles', 'Bambiraptor', 'True', 'True', 'Coffee');
var well = new Song( 'All Too Well', 'Cumulonimbus', 'Pink', 'Jake Gyllenhaal', 'Bambiraptor', 'True', 'True','Alcoholic');
var twentyTwo = new Song('22', 'Cumulonimbus', 'Red', 'Harry Stiles', 'Bambiprator', 'True','False', 'Coffee');
var almost = new Song('Almost Do', 'Cumulus', 'Pink', 'Taylor Lautner', 'Bambiraptor', 'False', 'True', 'Water');
var ever = new Song('We Are Never Getting Back Together', 'Stratocumulus', 'Purple', 'Taylor Lautner', 'Yangchuanosaurus', 'True', 'False', 'Coffee');
var stay = new Song('Stay Stay Stay', 'Stratus', 'Pink','Taylor Lautner', 'Diplodocus', 'True', 'True', 'Water');
var time = new Song('The Last Time', 'Stratus', 'Red', 'Harry Stiles', 'Diplodocus', 'True', 'True', 'Alcoholic');
var holy = new Song('Holy Ground', 'Cumulus', 'Purple', 'Harry Stiles', 'Bambiraptor', 'True', 'True', 'Water');
var beautiful = new Song('Sad Beautiful Tragic', 'Stratocumulus', 'Blue', 'Pink', 'Bambiraptor', 'True','False','Alcoholic');
var lucky = new Song('The Lucky One', 'Stratus', 'Blue', 'Jake Gyllenhaal', 'Diplodocus', 'False', 'True', 'Soda');
var changed = new Song('Everything Has Changed', 'Stratocumulus', 'Pink', 'Taylor Lautner', 'Diplodocus', 'True', 'False', 'Coffee');
var starlight = new Song('Starlight', 'Stratus', 'Purple', 'Harry Stiles', 'Bambiraptor', 'True', 'True', 'Alcoholic');
var again = new Song('Begin Again', 'Cumulus', 'Red', 'Taylor Lautner', 'Yangchuanosaurus', 'True', 'True', 'Alcoholic');
var story = new Song('Love Story', 'Stratus', 'Purple', 'Jake Gyllenhaal', 'Diplodocus', 'True', 'True', 'Coffee');


var quiz = {
  answers: [],

  updateQuizAnswers: function(event) {
    event.preventDefault();
    var quizEl = document.getElementById('quiz');
    var inputs = quizEl.getElementsByTagName('input');

    for (var i = 0; i < inputs.length - 3; i++) { //input.lengths - 3 to eliminate button and last quesiton from answers
      if (inputs[i].checked) {
        var answer = inputs[i].value;
        quiz.answers.push(answer);
      }
    }
    quiz.compareAnswers();
    quiz.sortSongsByCompatibility();
    quiz.displaySong();
  },

  compareAnswers: function(){
    for(var song in songsArray) {
      for(var index in songsArray[song].answers) {
        if(songsArray[song].answers[index] === quiz.answers[index])
          songsArray[song].compatibility += 1;
      }
    }
  },

  sortSongsByCompatibility: function(){
    songsArray.sort(function (a, b) {
      if (a.compatibility < b.compatibility) {
        return 1;
      }
      if (a.compatibility > b.compatibility) {
        return -1;
      }
      return 0;
    });
  },

  displaySong: function() {
    var listItem = document.getElementById('song');
    listItem.textContent = songsArray[0].name;
  }
};

var form = document.getElementById('quiz');
form.addEventListener('submit', quiz.updateQuizAnswers);
