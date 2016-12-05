(function() {
    function HomeCtrl(Room, Message, $cookies) {
        this.currentUser = $cookies.get('blocChatCurrentUser');
        this.room = Room;
        this.message = Message;
        
     };
           
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);    
})();