(function() {
    function HomeCtrl(Room) {
        console.log(Room);
        this.rooms = Room.all;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
    
    
})();
