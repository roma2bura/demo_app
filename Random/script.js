var students = [
  {name: 'Roman',
    track: 'iOS',
    achievements: 157,
    points: 773430
  },
  {name: 'Dave',
    track: 'iOS',
    achievements: 23,
    points: 770
  },
  {name: 'John',
    track: 'iOS',
    achievements: 34,
    points: 770
  },
  {name: 'Sam',
    track: 'iOS',
    achievements: 152423457,
    points: 77234320
  },
  {name: 'Kate',
    track: 'iOS',
    achievements: 157,
    points: 770
  }
];


var message = '';
var student;

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
  }

  for ( var i = 0; i < students.length; i += 1) {
    student = students[i]; // array notation to access each student.
    message += '<h2> Student: ' + student.name + '</h2>';
    message += '<ul>';
    message += '<li>' + student.track + '</li>'
    message += '<li>' + student.achievements + '</li>'
    message += '<li>' + student.points + '</li>'
    message += '</ul>';
  }




  print(message);