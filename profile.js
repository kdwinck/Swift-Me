function getLocalStorage() {
  var user = JSON.parse(localStorage.getItem('User'));
  return user;
}

function setLocalStorage(user) {
  var strUser = JSON.stringify(user);
  localStorage.setItem('User', strUser);
}

function updateProfilePage() {
  var user = getLocalStorage();

  var name = document.getElementById('username');
  var times = document.getElementById('quizTaken');
  var song = document.getElementById('recentSong');
  var favorites = document.getElementById('favSongs');

  name.textContent = user.username;
  times.textContent = 'On a scale of 1 to infinity, how much do you love Taylor Swift? ' + user.timesQuizTaken;
  song.textContent = 'Most recent song suggestion: ' + user.lastSong;

  for (var index in user.favorites) {
    listItem = document.createElement('li');
    listItem.textContent = [user.favorites[index]];
    favorites.appendChild(listItem);
  }
}

function updateFavorites() {
  var user = getLocalStorage();
  if (user.favorites.indexOf(user.lastSong) === -1)
    user.favorites.push(user.lastSong);
  setLocalStorage(user);
}

var graph = {
  labels: [],
  data: [],
  user: getLocalStorage(),

  updateData: function() {
    for (var prop in graph.user.history) {
      graph.labels.push(prop);
      graph.data.push(graph.user.history[prop]);
    }
  },

  renderBarChart: function() {
    var canvas = document.getElementById('bar');
    var ctx = canvas.getContext('2d');

    graph.updateData();

    var data = {
      labels: graph.labels,
      datasets: [
        {
          label: 'Times Selected',
          backgroundColor: 'rgba(255,99,132,0.8)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: '#fc515f',
          data: graph.data
        }
      ]
    };

    var barChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 1
            }
          }]
        },
        title: {
          display: true,
          text: 'Quiz Results',
          fontSize: 24,
          fontColor: 'white'
        }
      }
    });
  },
};

updateProfilePage();
graph.renderBarChart();

var add = document.getElementById('addFav');
add.addEventListener('click', updateFavorites);

function updateBgColor(event) {
  var id = event.target.id;
  var elements = document.getElementsByClassName('bgc');
  for (var i = elements.length - 1; i >= 0; i--) {
    if (id === 'lightgrey') {
      elements[i].style.background = 'lightgrey';
    } else if (id === 'lightyellow') {
      elements[i].style.background = 'lightyellow';
    } else if (id === 'violet') {
      elements[i].style.background = 'violet';
    } else if (id === 'lightgreen') {
      elements[i].style.background = 'lightgreen';
    } else if (id === 'default') {
      elements[i].style.background = '#bbdfdc';
    }
  }
}

var color = document.getElementById('custColor');
color.addEventListener('click', updateBgColor);
