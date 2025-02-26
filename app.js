////// global variables //////////////////////////////////////////////////////////////////////////////////////////////
var songsArray = [];

/////// song object constructor //////////////////////////////////////////////////////////////////////////////////////
function Song (name, answers, album, music) {
  this.name = name;
  this.answers = answers;
  this.album = album;
  this.music = music;
  this.compatibility = 0;
  songsArray.push(this);
};

/////// instantiate song objects /////////////////////////////////////////////////////////////////////////////////////////
var newYork = new Song('Welcome to New York', ['Cumulus', 'Pink', 'Jake Gyllenhaal', 'Yangchuanosaurus', 'True', 'True', 'Coffee', 'Autumn', 'Charmander', 'Guava'], 'assets/album.png', '1989/WelcomeToNewYork.mp3');
var blankSpace = new Song('Blank Space', ['Stratus', 'Purple', 'Zac Efron', 'Diplodocus', 'True', 'True','Alcoholic', 'Winter', 'Squirtle', 'Guava'], 'assets/album.png', '1989/BlankSpace.m4a');
var style = new Song('Style', ['Stratocumulus', 'Red', 'Taylor Lautner', 'Diplodocus', 'True', 'True', 'Water', 'Spring', 'Bulbasaur', 'Mango'], 'assets/album.png', '1989/Style.m4a');
var woods = new Song('Out of the Woods', ['Stratus', 'Blue', 'Taylor Lautner', 'Diplodocus', 'True','False', 'Water', 'Winter', 'Charmander', 'Strawberry'], 'assets/album.png', '1989/OutOfTheWoods.m4a');
var stay = new Song('All You Had to Do Was Stay', ['Cumulonimbus', 'Purple', 'Taylor Lautner', 'Bambiraptor' ,'True', 'false', 'Soda', 'Spring', 'Pikachu', 'Strawberry'], 'assets/album.png', '1989/AllYouHadToDoWasStay.m4a');
var shake = new Song('Shake It Off', ['Stratus', 'Red', 'Taylor Lautner', 'Diplodocus', 'True','False', 'Water', 'Summer', 'Squirtle', 'Strawberry'], 'assets/album.png', '1989/ShakeItOff.m4a');
var wish = new Song('I Wish You Would', ['Cumulonimbus', 'Blue', 'Zac Efron', 'Yangchuanosaurus','False','False','Alcoholic', 'Winter', 'Squirtle', 'Guava'], 'assets/album.png', '1989/IWishYouWould.m4a');
var blood = new Song('Bad Blood', ['Cumulus', 'Red', 'Jake Gyllenhaal','Yangchuanosaurus','False', 'True', 'Soda', 'Autumn', 'Charmander', 'Grapefruit'], 'assets/album.png', '1989/BadBlood.m4a');
var dreams = new Song('Wildest Dreams', ['Stratus', 'Blue', 'Jake Gyllenhaal', 'Yangchuanosaurus', 'True', 'True', 'Coffee', 'Autumn', 'Bulbasaur', 'Guava'], 'assets/album.png', '1989/WildestDreams.m4a');
var girl = new Song('How you Get the Girl', ['Stratus', 'Pink', 'Jake Gyllenhaal', 'Diplodocus', 'True', 'True', 'Soda', 'Spring', 'Squirtle', 'Strawberry'], 'assets/album.png', '1989/HowYouGetTheGirl.m4a');
var love = new Song('This Love', ['Cumulonimbus', 'Blue', 'Taylor Lautner', 'Diplodocus', 'True', 'False', 'Alcoholic', 'Summer', 'Squirtle', 'Mango'], 'assets/album.png', '1989/ThisLove.m4a');
var places = new Song('I Know Places', ['Cumulus', 'Purple', 'Taylor Lautner', 'Diplodocus', 'False', 'False', 'Coffee', 'Winter', 'Charmander', 'Guava'], 'assets/album.png', '1989/IKnowPlaces.m4a');
var clean = new Song('Clean', ['Cumulus', 'Red', 'Harry Styles', 'Diplodocus', 'True', 'True', 'Alcoholic', 'Autumn', 'Bulbasaur', 'Mango'], 'assets/album.png', '1989/Clean.m4a');
var grace = new Song('State of Grace', ['Cumulonimbus', 'Pink', 'Taylor Lautner', 'Yangchuanosaurus', 'True', 'False', 'Water', 'Spring', 'Pikachu', 'Strawberry'], 'assets/red.png', 'red/StateOfGrace.m4a');
var red = new Song('Red', ['Cumulus', 'Blue', 'Harry Styles', 'Diplodocus', 'True', 'True', 'Coffee', 'Winter', 'Bulbasaur', 'Grapefruit'], 'assets/red.png', 'red/Red.m4a');
var treacherous = new Song('Treacherous', ['Stratus', 'Red', 'Jake Gyllenhaal','Bambiraptor', 'True', 'True', 'Soda', 'Autumn', 'Bulbasaur', 'Mango'], 'assets/red.png', 'red/Treacherous.m4a');
var trouble = new Song('I Knew You Were Trouble', ['Stratocumulus', 'Purple', 'Harry Styles', 'Bambiraptor', 'True', 'True', 'Coffee', 'Summer', 'Pikachu', 'Guava'], 'assets/red.png', 'red/IKnewYouWereTrouble.m4a');
var well = new Song( 'All Too Well', ['Cumulonimbus', 'Pink', 'Jake Gyllenhaal', 'Bambiraptor', 'True', 'True','Alcoholic', 'Spring', 'Squirtle', 'Strawberry'], 'assets/red.png', 'red/AllTooWell.m4a');
var twentyTwo = new Song('22', ['Cumulonimbus', 'Red', 'Harry Styles', 'Bambiprator', 'True','False', 'Coffee', 'Winter', 'Charmander', 'Mango'], 'assets/red.png', 'red/22.m4a');
var almost = new Song('Almost Do', ['Cumulus', 'Pink', 'Taylor Lautner', 'Bambiraptor', 'False', 'True', 'Water', 'Autumn', 'Charmander', 'Grapefruit'], 'assets/red.png', 'red/IAlmostDo.m4a');
var ever = new Song('We Are Never Getting Back Together', ['Stratocumulus', 'Purple', 'Taylor Lautner', 'Yangchuanosaurus', 'True', 'False', 'Coffee', 'Summer', 'Bulbasaur', 'Strawberry'], 'assets/red.png', 'red/WeAreNeverEverGettingBackTogether.m4a');
var stayStay = new Song('Stay Stay Stay', ['Stratus', 'Pink','Taylor Lautner', 'Diplodocus', 'True', 'True', 'Water', 'Spring', 'Bulbasaur', 'Strawberry'], 'assets/red.png', 'red/StayStayStay.m4a');
var time = new Song('The Last Time', ['Stratus', 'Red', 'Harry Styles', 'Diplodocus', 'True', 'True', 'Alcoholic', 'Winter', 'Squirtle', 'Mango'], 'assets/red.png', 'red/TheLastTime.m4a');
var holy = new Song('Holy Ground', ['Cumulus', 'Purple', 'Harry Styles', 'Bambiraptor', 'True', 'True', 'Water', 'Autumn', 'Pikachu', 'Guava'], 'assets/red.png', 'red/HolyGround.m4a');
var beautiful = new Song('Sad Beautiful Tragic', ['Stratocumulus', 'Blue', 'Pink', 'Bambiraptor', 'True','False','Alcoholic', 'Summer', 'Pikachu', 'Mango'], 'assets/red.png', 'red/SadBeautifulTragic.m4a');
var lucky = new Song('The Lucky One', ['Stratus', 'Blue', 'Jake Gyllenhaal', 'Diplodocus', 'False', 'True', 'Soda', 'Summer', 'Charmander', 'Strawberry'], 'assets/red.png', 'red/TheLuckyOne.m4a');
var changed = new Song('Everything Has Changed', ['Stratocumulus', 'Pink', 'Taylor Lautner', 'Diplodocus', 'True', 'False', 'Coffee', 'Winter', 'Pikachu', 'Guava'], 'assets/red.png', 'red/EverythingHasChanged.m4a');
var starlight = new Song('Starlight', ['Stratus', 'Purple', 'Harry Styles', 'Bambiraptor', 'True', 'True', 'Alcoholic', 'Spring', 'Bulbasaur', 'Mango'], 'assets/red.png', 'red/Starlight.m4a');
var again = new Song('Begin Again', ['Cumulus', 'Red', 'Taylor Lautner', 'Yangchuanosaurus', 'True', 'True', 'Alcoholic', 'Autumn', 'Pikachu', 'Grapefruit'], 'assets/red.png', 'red/BeginAgain.m4a');

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
    var songItem = document.getElementById('albumArt');
    var listItem = document.getElementById('song');
    var musicItem = document.getElementById('mp3');
    var albumItem = document.createElement('img');
    listItem.textContent = songsArray[0].name;
    albumItem.src = songsArray[0].album;
    musicItem.src = songsArray[0].music;
    songItem.appendChild(albumItem);
  },

  getLocalStorage: function() {
    var user = JSON.parse(localStorage.getItem('User'));
    user.timesQuizTaken += 1;
    user.lastSong = songsArray[0].name;
    quiz.updateHistory(user);
    var strUser = JSON.stringify(user);
    localStorage.setItem('User', strUser);
  },

  updateHistory: function(user) {
    var song = user.lastSong;
    if (user.history.hasOwnProperty(song)) {
      user.history[song] += 1;
    } else {
      user.history[song] = 1;
    }
  }
};



var form = document.getElementById('quiz');
form.addEventListener('submit', quiz.updateQuizAnswers);
