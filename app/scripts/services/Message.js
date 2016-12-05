(function() {
  function Message($firebaseArray, Room) {
    var Message = {}
    
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    
    Message.messagesByRoomId = function(){
        ref.orderByChild("roomid").equalTo(Room.roomName).on('value', 
            function(snapshot) {
                
                Message.selectedRoom = snapshot.val();
            
                /*        
                var selectedRoom = snapshot.val();
                Message.selectedRoom = null;
                Message.selectedRoom = selectedRoom.filter(function(val){return val !== null;});
                */
            
            });
    };
      
    
    Date.prototype.today = function () {
        return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
    }
    
    Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes();
    }
    
    Message.content = null;
    Message.submitMessage = function(content, roomid, username){
        console.log("submitMessage excuted");
        // Post entry
        var newDate = new Date();
        
        var postMessage = {
            content: content,
            roomid: roomid,
            sentAt: newDate.timeNow(),
            username: username
        };

        // Write the new post to firebase
        ref.push(postMessage);
        // Refresh post entry
        postMessage = null;
        Message.content = null;
    };
    
      
 
    return Message;  
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', 'Room', Message]);
})();