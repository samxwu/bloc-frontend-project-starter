(function() {
    function config($stateProvider, $locationProvider) {
         $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
         $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
          
    }

    
angular
    .module('blocChat',['firebase', 'ui.router', 'ui.bootstrap', 'ngCookies'])
    .config(config);
    
})();











/*
(function() {
    function config($stateProvider, $locationProvider) {
         $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
         $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
          
    }
    
      
    
   function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        
        $uibModal.open({
            templateUrl: '/templates/createUsername.html',
            //template: "<h1>Hello</h1>",
            controller: function ($uibModalInstance) {
                console.log($uibModalInstance);
                      ok = function () {
                          $uibModalInstance.close('testing');
                        };
                }
        })
        
        toggleAnimation = function () {
            animationsEnabled = !animationsEnabled;
        }; 
        
      }
      
    
    
    
    
    
   }
    
       
angular
    .module('blocChat',['firebase', 'ui.router', 'ui.bootstrap', 'ngCookies'])
    .config(config);
    //.run(['$cookies', '$uibModal', BlocChatCookies]);
    
})();

*/