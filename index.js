function User(username, timesQuizTaken, lastSong) {
  this.username = username;
  this.timesQuizTaken = timesQuizTaken || 0;
  this.lastSong = lastSong || null;
}

function createUser(event) {
  event.preventDefault();

  var userName = event.target.userName.value;

  var user = new User(userName);
  var strUser = JSON.stringify(user);
  localStorage.setItem('User', strUser);
  showButton();
}

function showButton() {
  var form = document.getElementById('form');
  form.style.visibility = 'hidden';
  var enter = document.getElementById('enter');
  enter.style.visibility = 'visible';
}

(function checkLocalStorage() {
  if (localStorage.User) {
    showButton();
  }
})();

var user = document.getElementById('form');
user.addEventListener('submit', createUser);
