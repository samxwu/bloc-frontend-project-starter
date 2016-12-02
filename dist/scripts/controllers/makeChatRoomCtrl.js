(function(){
  function makeChatRoomCtrl ($uibModal, Room) {
    var $ctrl = this;
    $ctrl.room = null;
    $ctrl.animationsEnabled = true;
  
    $ctrl.open = function () {
      
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      templateUrl: 
        //'/templates/makeChatRoom.html', 
        'makeChatRoom.html',
      controller: function ($uibModalInstance, room, Room) {
                      var $ctrl = this;
                      $ctrl.room = room;
                      $ctrl.ok = function () {
                          $ctrl.room = this.room;
                          Room.addRoom($ctrl.room, $ctrl.room);
                          $uibModalInstance.close($ctrl.room);
                        };

                      $ctrl.cancel = function () {
                          $uibModalInstance.dismiss('cancel');
                        };
                  },
      
      controllerAs: '$ctrl',
      resolve: {room: function () {return $ctrl.room;}
      }        
    });
       
  };
 
 $ctrl.toggleAnimation = function () {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  }; 
  }
  
  angular
    .module('blocChat')
    .controller('makeChatRoomCtrl', ['$uibModal', 'Room', makeChatRoomCtrl]);
})();

