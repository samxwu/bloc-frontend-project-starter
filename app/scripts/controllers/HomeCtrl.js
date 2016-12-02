(function() {
    function HomeCtrl(Room, Message) {
        
        this.room = Room;
        this.message = Message;
        
     };
         
    
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);    
})();