////// global variables //////////////////////////////////////////////////////////////////////////////////////////////
var songsArray = [];

/////// song object constructor //////////////////////////////////////////////////////////////////////////////////////
function Song (name, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, asnwer9, answer10) {
  this.name = name;
  this.answers = [answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10];
  this.compatibility = 0;
  songsArray.push(this);
};

Grapefruit
/////// instantiate song objects /////////////////////////////////////////////////////////////////////////////////////////
var newYork = new Song('Welcome to New York', 'Cumulus', 'Pink', 'Jake Gyllenhaal', 'Yangchuanosaurus', 'True', 'True', 'Coffee', 'Autumn', 'Charmander', 'Guava');
var blankSpace = new Song('Blank Space', 'Stratus', 'Purple', 'Zac Efron', 'Diplodocus', 'True', 'True','Alcoholic', 'Winter', 'Squirtle', 'Guava');
var style = new Song('Style', 'Stratocumulus', 'Red', 'Taylor Lautner', 'Diplodocus', 'True', 'True', 'Water', 'Spring', 'Bulbasaur', 'Mango');
var woods = new Song('Out of the Woods', 'Stratus', 'Blue', 'Taylor Lautner', 'Diplodocus', 'True','False', 'Water', 'Winter', 'Charmander', 'Strawberry');
var stay = new Song('All You Had to Do Was Stay', 'Cumulonimbus', 'Purple', 'Taylor Lautner', 'Bambiraptor' ,'True', 'false', 'Soda', 'Spring', 'Pikachu', 'Strawberry');
var blankSpace = new Song('Blank Space', 'Stratus', 'Purple', 'Zac Efron' , 'Bambiraptor','False', 'True', 'Coffee', 'Summer', 'Pikachu', 'Mango');
var shake = new Song('Shake It Off', 'Stratus', 'Red', 'Taylor Lautner', 'Diplodocus', 'True','False', 'Water', 'Summer', 'Squirtle', 'Strawberry');
var wish = new Song('I Wish You Would', 'Cumulonimbus', 'Blue', 'Zac Efron', 'Yangchuanosaurus','False','False','Alcoholic', 'Winter', 'Squirtle', 'Guava');
var blood = new Song('Bad Blood', 'Cumulus', 'Red', 'Jake Gyllenhaal','Yangchuanosaurus','False', 'True', 'Soda', 'Autumn', 'Charmander', 'Grapefruit');
var dreams = new Song('Wildest Dreams', 'Stratus', 'Blue', 'Jake Gyllenhaal', 'Yangchuanosaurus', 'True', 'True', 'Coffee', 'Autumn', 'Bulbasaur', 'Guava');
var girl = new Song('How you Get the Girl', 'Stratus', 'Pink', 'Jake Gyllenhaal', 'Diplodocus', 'True', 'True', 'Soda', 'Spring', 'Squirtle', 'Strawberry');
var love = new Song('This Love', 'Cumulonimbus', 'Blue', 'Taylor Lautner', 'Diplodocus', 'True', 'False', 'Alcoholic', 'Summer', 'Squirtle', 'Mango');
var places = new Song('I Know Places', 'Cumulus', 'Purple', 'Taylor Lautner', 'Diplodocus', 'False', 'False', 'Coffee', 'Winter', 'Charmander', 'Guava');
var clean = new Song('Clean', 'Cumulus', 'Red', 'Harry Styles', 'Diplodocus', 'True', 'True', 'Alcoholic', 'Autumn', 'Bulbasaur', 'Mango');
var grace = new Song('State of Grace', 'Cumulonimbus', 'Pink', 'Taylor Lautner', 'Yangchuanosaurus', 'True', 'False', 'Water', 'Spring', 'Pikachu', 'Strawberry');
var red = new Song('Red', 'Cumulus', 'Blue', 'Harry Styles', 'Diplodocus', 'True', 'True', 'Coffee', 'Winter', 'Bulbasaur', 'Grapefruit');
var treacherous = new Song('Treacherous', 'Stratus', 'Red', 'Jake Gyllenhaal','Bambiraptor', 'True', 'True', 'Soda', 'Autumn', 'Bulbasaur', 'Mango');
var trouble = new Song('I Knew You Were Trouble', 'Stratocumulus', 'Purple', 'Harry Styles', 'Bambiraptor', 'True', 'True', 'Coffee', 'Summer', 'Pikachu', 'Guava');
var well = new Song( 'All Too Well', 'Cumulonimbus', 'Pink', 'Jake Gyllenhaal', 'Bambiraptor', 'True', 'True','Alcoholic', 'Spring', 'Squirtle', 'Strawberry');
var twentyTwo = new Song('22', 'Cumulonimbus', 'Red', 'Harry Styles', 'Bambiprator', 'True','False', 'Coffee', 'Winter', 'Charmander', 'Mango');
var almost = new Song('Almost Do', 'Cumulus', 'Pink', 'Taylor Lautner', 'Bambiraptor', 'False', 'True', 'Water', 'Autumn', 'Charmander', 'Grapefruit');
var ever = new Song('We Are Never Getting Back Together', 'Stratocumulus', 'Purple', 'Taylor Lautner', 'Yangchuanosaurus', 'True', 'False', 'Coffee', 'Summer', 'Bulbasaur', 'Strawberry');
var stay = new Song('Stay Stay Stay', 'Stratus', 'Pink','Taylor Lautner', 'Diplodocus', 'True', 'True', 'Water', 'Spring', 'Bulbasaur', 'Strawberry');
var time = new Song('The Last Time', 'Stratus', 'Red', 'Harry Styles', 'Diplodocus', 'True', 'True', 'Alcoholic', 'Winter', 'Squirtle', 'Mango');
var holy = new Song('Holy Ground', 'Cumulus', 'Purple', 'Harry Styles', 'Bambiraptor', 'True', 'True', 'Water', 'Autumn', 'Pikachu', 'Guava');
var beautiful = new Song('Sad Beautiful Tragic', 'Stratocumulus', 'Blue', 'Pink', 'Bambiraptor', 'True','False','Alcoholic', 'Summer', 'Pikachu', 'Mango');
var lucky = new Song('The Lucky One', 'Stratus', 'Blue', 'Jake Gyllenhaal', 'Diplodocus', 'False', 'True', 'Soda', 'Summer', 'Charmander', 'Strawberry');
var changed = new Song('Everything Has Changed', 'Stratocumulus', 'Pink', 'Taylor Lautner', 'Diplodocus', 'True', 'False', 'Coffee', 'Winter', 'Pikachu', 'Guava');
var starlight = new Song('Starlight', 'Stratus', 'Purple', 'Harry Styles', 'Bambiraptor', 'True', 'True', 'Alcoholic', 'Spring', 'Bulbasaur', 'Mango');
var again = new Song('Begin Again', 'Cumulus', 'Red', 'Taylor Lautner', 'Yangchuanosaurus', 'True', 'True', 'Alcoholic', 'Autumn', 'Pikachu', 'Grapefruit');
var story = new Song('Love Story', 'Stratus', 'Purple', 'Jake Gyllenhaal', 'Diplodocus', 'True', 'True', 'Coffee', 'Autumn', 'Squirtle', 'Mango');


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
    quiz.getLocalStorage();
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
  },

  getLocalStorage: function() {
    var user = JSON.parse(localStorage.getItem('User'));
    user.timesQuizTaken += 1;
    user.lastSong = songsArray[0].name;
    var strUser = JSON.stringify(user);
    localStorage.setItem('User', strUser);
  },

};

var form = document.getElementById('quiz');
form.addEventListener('submit', quiz.updateQuizAnswers);
