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
  $scope.$storage = $localStorage;
  
  $ionicModal.fromTemplateUrl('templates/modalTemplate.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;

  $scope.storage = $localStorage.$default({
          database: {
            events: 
            [{
                teacherPeriod: "idk",
                attendingPeriod: "noone",
                infomationPeriod: "g fed",
                event: {
                  name: "abcd",
                  time: {
                    startTime: "2019-09-21",
                    endTime: "",
                    peopleAttending: [
                      { 
                        name: "Alan",
                        age: "asd",
                        platoon: {
                          name: "3platoon",
                          commander: "CUO James",
                        }
                      }
                    ]
                  }
                }
              }],
            }});

  $scope.updateDatabase = function(newInput) {
        $scope.$storage.database.events.push({teacherPeriod: newInput.teacherName});
        $scope.$storage.database.events["0"].attendingPeriod = newInput.attendingName;
        $scope.$storage.database.events["0"].infomationPeriod = newInput.infoName;
        console.log($scope);
        $scope.modal.hide();
  }

})
}]);

/**
  $scope.updateDatabase = function (newInput) {
							var addInput = {
							teacherPeriod: 		newInput.teacherName,
							attendingPeriod: 	newInput.attendingName,
							infoPeriod: 		  newInput.infoName,
						}



						
					// Push the addInput Object(above) into Localstorage	
						$localStorage.database.push(updateDatabase);
							newInput.teacherName			= 		"" ;
							newInput.attendingName	= 		"";
							newInput.infoName  		= 		"";
          };


.controller('databaseController', function($scope,$localStorage) {
					
					// this CREATES a localstorage called "myReviews".
					// this sets up default records
					// you can access this localstorage in your html page via the $scope eg $scope.storage.myReviews  			
				



/**


        $ionicModal.fromTemplateUrl('templates/modalTemplate.html', {scope: $scope}).then(function(modal) {
            $scope.modal = modal;
          });
          
          $scope.createContact = function(u) {        
            $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
            $scope.modal.hide();
          };


          $scope.database = {
            teacherPeriod: "Cpt Name",
            attendingPeriod: "All cadets",
						infomationPeriod: "Bring everything",
          }






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