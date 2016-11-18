
(function(){
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        //$scope.rooms = rooms;
                                           
        //return ["Room 1","Room 2", "Room 3"]; 
        return { all: rooms };
        
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
