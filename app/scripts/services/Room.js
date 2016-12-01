(function(){
    function Room($firebaseArray) {
        var Room = {};
        
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        Room.all = rooms;
        Room.roomName = null;
        
        
        
        Room.addRoom = function(childName, value){
            ref.child(childName).set(value);
            };
        
        Room.openRoom = function(){
            var roomInfo = event.target;
            Room.roomName = roomInfo.innerHTML;
        };
        
        
        //return { all: rooms };
        return Room;
        
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();



