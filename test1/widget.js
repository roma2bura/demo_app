var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
       var employees = JSON.parse(xhr.responseText);
       var statusHTML = '<ul class="bulleted">';
            for (var i = 0; i < employees.length; i ++) {
                if (employees[i].inoffice === true) {
                    statusHTML += '<li class="in">';
                } else {
                    statusHTML += '<li class="out">';
                }
            statusHTML += employees[i].name;
            statusHTML += '</li>';    
            }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;    
    }
};
xhr.open('GET', 'data.json'); // to load the file
xhr.send();


var avaRooms = new XMLHttpRequest();
avaRooms.onreadystatechange = function () {
    if(avaRooms.readyState === 4 && avaRooms.status === 200) {
       var rooms = JSON.parse(avaRooms.responseText);
       var statusHTML = '<ul class="rooms">';
            for (var i = 0; i < rooms.length; i ++) {
                if (rooms[i].available === true) {
                    statusHTML += '<li class="empty">';
                } else {
                    statusHTML += '<li class="full">';
                }
            statusHTML += rooms[i].room;
            statusHTML += '</li>';    
            }
        statusHTML += '</ul>';
        document.getElementById('roomsAvailable').innerHTML = statusHTML;    
    }
};
avaRooms.open('GET', 'room.json'); // to load the file
avaRooms.send();