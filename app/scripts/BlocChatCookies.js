(function() {
    function BlocChatCookies($cookies, $uibModal) {
        currentUser = $cookies.get('blocChatCurrentUser');
        
        if (!currentUser || currentUser === '') {    
            $uibModal.open({
                backdrop: 'static',
                keyboard: false,
                templateUrl: '/templates/createUsername.html',
                controller: function($uibModalInstance, $scope){
                        $scope.username = currentUser;
                        $scope.validUsername = false;
                        
                        //Create username
                        $scope.createUsername = function(username){
                            if (!username){
                                $scope.validUsername = true;
                            } else {
                                $cookies.put('blocChatCurrentUser', username);
                                $uibModalInstance.close($scope.username);
                            }                                               
                        };
                    },
            });
        }        
    }
       
angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
    
})();


