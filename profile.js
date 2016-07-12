function getLocalStorage() {
  var user = JSON.parse(localStorage.getItem('User'));
  return user;
}

function setLocalStorage() {
  var strUser = JSON.stringify(user);
  localStorage.setItem('User', strUser);
}

function updateProfilePage() {
  var user = getLocalStorage();

  var name = document.getElementById('username');
  var times = document.getElementById('quizTaken');
  var song = document.getElementById('recentSong');
  var favorites = document.getElementById('favorites');

  name.textContent = user.username;
  times.textContent = 'On a scale of 1 to infinity how much do you love Taylor Swift? ' + user.timesQuizTaken;
  song.textContent = 'Most recent song suggestion: ' + user.lastSong;

  for (var index in user.favorites) {
    listItem = document.createElement('li');
    listItem.textContent = [user.favorites[index]];
    favorites.appendChild(listItem);
  }
}

function updateFavorites() {
  var user = getLocalStorage();
  console.log(user);
  user.favorites.push(user.lastSong);

  var favorites = document.getElementById('favorites');

  for (var index in favorites) {
    listItem = document.createElement('li');
    listItem.textContent[favorites[index]];
    favorites.appendChild(listItem);
  }
}

updateProfilePage();

var add = document.getElementById('addFav');
add.addEventListener('click', updateFavorites);
