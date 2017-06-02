angular.module('app.controllers', ['ngStorage', 'app.services'])

.controller('homepageCtrl', ['$scope' ,'$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $localStorage, $sessionStorage) {
    $scope.$storage = $localStorage;

}])


.controller('cycle11PLTCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cycle12PLTCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cycle13PLTCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cycle1PionnersCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cycle21PLTCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cycle22PLTCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cycle23PLTCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cycle2PioneersCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('navDataSheetTemplateCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('databaseTemplateCtrl', ['$scope', '$stateParams', 'timetableDataService', '$ionicModal', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, timetableDataService, $ionicModal, $localStorage) {
  //var periods = timetableDataService.getPeriodsForNextWeek();
  $scope.$storage = $localStorage;
}])


.controller('modalController', ['$scope', '$stateParams', '$ionicModal', '$localStorage', 
function($scope, $stateParams, $ionicModal, $localStorage) {
  $scope.$storage = $localStorage;  //For ngstorage
  
  $ionicModal.fromTemplateUrl('templates/modalTemplate.html', {   //Here is where the modal is called from ionic
    scope: $scope                                                 //it is also called to run
  }).then(function(modal) {
    $scope.modal = modal;
               

    $scope.storage = $localStorage.$default({
      database: {
        periods: [{             //Object is for the individual period that the data is for
          nameofPeriod: "Nav Data Sheet Revision",
          teacherPeriod: "Teacher person",
          attendingPeriod: "Cadets",
          infomationPeriod: "Bring x,y and z",
        }]
      }
    });
                                                                  //Here is where the database is updated from the user input
  $scope.updateDatabase = function(newInput) {                    //Recieves the data from the newInput object   
        $scope.$storage.database.periods["0"].nameofPeriod = newInput.periodName;   //Places the input from the user (newInput) into the database (newInput.periodName into database.nameofPeriod)
        $scope.$storage.database.periods["0"].teacherPeriod = newInput.teacherName;
        $scope.$storage.database.periods["0"].attendingPeriod = newInput.attendingName;
        $scope.$storage.database.periods["0"].infomationPeriod = newInput.infoName;  //"0" is so that it gets the newest input
        console.log($scope);
        $scope.modal.hide();    //Hides the modal because the input has finished
  }

})
}]);

/**
  



                            Below is the intented database design that wasn't completed
					
				


$scope.storage = $localStorage.$default({
    						myReviews: [{

                      groupID: "1PLT",
                      eventID: "1PLT-6",
											periodName: "Nav Datasheets",
											periodID: "navDatasheet1",
											teacherPeriod: "Cpt Name",
											attendingPeriod: "All cadets",
											infomationPeriod: "Bring everything",
										}]


                            [{
                              /**
                                               *****KEY FOR DATABASE*****          

                groupID:  "1PLT",   //Identifies the group it is ment to be in

                            groupID:  "1PLT",                 //Identifies the group it is ment to be in
                            eventID:  "navDatasheets",         //Identifies the event it is ment to be in
                            eventName:  "Nav Data Sheets",    //User inputed
                            dateEvent:  "random date",        //User inputed

                                          groupID:  "1PLT",                       //Identifies the group it is ment to be in (irrelivent??)
                                          eventID:  "navDatasheets",              //Identifies the event it is ment to be in
                                          periodName: "Nav Data Sheets",          //User inputed
                                          periodID: "navDataSheet1",              //Idenfifies the period/order to be in
                                          teacherPeriod:  "Cpt Name",             //User inputed
                                          attendingPeriod:  "All cadets",         //User inputed
                                          infomationPeriod: "Bring everything",   //User inputed
                            }]                          
                              **/

//Backup plan if big DB dosn't work, put the databases for the relivent pages inside each controller.

                             //                 *****THE MAINFRAME*****

/**

$scope.storage = $localStorage.$default({
    						theManifraime: [{

                    groupID:  "1PLT",
                                      groupID:  "1PLT",
                                      eventID:  "navDatasheets",
                                      eventName:  "Nav Data Sheets",
                                      dateEvent:  "random date",
                                                                    groupID:  "1PLT",
                                                                    eventID:  "navDatasheets",
                                                                    periodName: "Nav Data Sheets",
                                                                    periodID: "navDataSheet1",
                                                                    teacherPeriod:  "Cpt Name",
                                                                    attendingPeriod:  "All cadets",
                                                                    infomationPeriod: "Bring everything",

                                                                    groupID:  "1PLT",
                                                                    eventID:  "navDatasheets",
                                                                    periodName: "Nav Data Sheets",
                                                                    periodID: "navDataSheet1",
                                                                    teacherPeriod:  "Cpt Name",
                                                                    attendingPeriod:  "All cadets",
                                                                    infomationPeriod: "Bring everything",
                                                                                                                    
                                                                    groupID:  "1PLT",
                                                                    eventID:  "navDatasheets",
                                                                    periodName: "Nav Data Sheets",
                                                                    periodID: "navDataSheet1",
                                                                    teacherPeriod:  "Cpt Name",
                                                                    attendingPeriod:  "All cadets",
                                                                    infomationPeriod: "Bring everything",
                                                                    
                    groupID:  "2PLT",
                    groupID:  "3PLT",
                    groupID:  "4PLT",


                    groupID:  "1PLT",
                    eventID:  "navDatasheets",
                    eventName:  "Nav Data Sheets",
                    dateEvent:  "random date",


                    groupID:  "1PLT",
                    eventID:  "navDatasheets",
                    periodName: "Nav Data Sheets",
                    periodID: "navDataSheet1",
                    teacherPeriod:  "Cpt Name",
                    attendingPeriod:  "All cadets",
                    infomationPeriod: "Bring everything",

                  }]



**/