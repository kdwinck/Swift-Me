function User(username, password, timesQuizTaken, lastSong) {
  this.username = username;
  this.password = password;
  this.timesQuizTaken = timesQuizTaken || 0;
  this.lastSong =  lastSong || null;
}

function createUser(event) {
  event.preventDefault();

  var userName = event.target.userName.value;
  var password = event.target.password.value;

  if (localStorage) {
    var currentUser = new User()
  }

}

var user = document.getElementById('form');
user.addEventListener('submit', createUser);
