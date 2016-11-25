(function(){
    function Room($firebaseArray) {
        var Room = {};
        
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        Room.addRoom = function(childName, value){
            ref.child(childName).set(value);
            };
        
        Room.all = rooms;
     
        
        //return { all: rooms };
        return Room;
        
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();



