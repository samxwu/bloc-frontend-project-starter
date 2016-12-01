(function() {
  function Message($firebaseArray, Room) {
    var Message = {}
    
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    
    Message.messagesByRoomId = function(){
        ref.orderByChild("roomid").equalTo(Room.roomName).on('value', 
            function(snapshot) {
                var selectedRoom = snapshot.val();
                Message.selectedRoom = null;
                Message.selectedRoom = selectedRoom.filter(function(val){return val !== null;});
            });
    };
      
    
    
      
 
    return Message;  
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', 'Room', Message]);
})();