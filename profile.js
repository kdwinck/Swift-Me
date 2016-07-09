function getLocalStorage() {
  var user = JSON.parse(localStorage.getItem('User'));
  var username = user.username;
  var timesQuiz = user.timesQuizTaken;
  var lastSong = user.lastSong;
  return [username, timesQuiz, lastSong];
}

function updateProfilePage() {
  var dataArray = getLocalStorage();

  var name = document.getElementById('username');
  var times = document.getElementById('quizTaken');
  var song = document.getElementById('recentSong');

  name.textContent = dataArray[0];
  times.textContent = 'Times you have taken quiz: ' + dataArray[1];
  song.textContent = 'Most recent song suggestion: ' + dataArray[2];
}

updateProfilePage();
