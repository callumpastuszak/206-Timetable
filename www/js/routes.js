angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('homepage', {
    url: '/homepage',
    templateUrl: 'templates/homepage.html',
    controller: 'homepageCtrl'
  })

  .state('cycle11PLT', {
    url: '/page2',
    templateUrl: 'templates/cycle11PLT.html',
    controller: 'cycle11PLTCtrl'
  })

  .state('cycle12PLT', {
    url: '/page3',
    templateUrl: 'templates/cycle12PLT.html',
    controller: 'cycle12PLTCtrl'
  })

  .state('cycle13PLT', {
    url: '/page5',
    templateUrl: 'templates/cycle13PLT.html',
    controller: 'cycle13PLTCtrl'
  })

  .state('cycle1Pionners', {
    url: '/page6',
    templateUrl: 'templates/cycle1Pionners.html',
    controller: 'cycle1PionnersCtrl'
  })

  .state('cycle21PLT', {
    url: '/page7',
    templateUrl: 'templates/cycle21PLT.html',
    controller: 'cycle21PLTCtrl'
  })

  .state('cycle22PLT', {
    url: '/page8',
    templateUrl: 'templates/cycle22PLT.html',
    controller: 'cycle22PLTCtrl'
  })

  .state('cycle23PLT', {
    url: '/page9',
    templateUrl: 'templates/cycle23PLT.html',
    controller: 'cycle23PLTCtrl'
  })

  .state('cycle2Pioneers', {
    url: '/page10',
    templateUrl: 'templates/cycle2Pioneers.html',
    controller: 'cycle2PioneersCtrl'
  })

  .state('navDataSheetTemplate', {
    url: '/page11',
    templateUrl: 'templates/navDataSheetTemplate.html',
    controller: 'navDataSheetTemplateCtrl'
  })

$urlRouterProvider.otherwise('/homepage')

  

});