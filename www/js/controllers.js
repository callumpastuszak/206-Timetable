angular.module('app.controllers', ['ngStorage'])

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

.controller('databaseTemplateCtrl', ['$scope', '$stateParams', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $localStorage,) {

$scope.$storage = $localStorage;
$scope.testdisplay = $scope.$storage.message;
    $scope.testclick = function(testinput){
        $scope.$storage.message = testinput;
        $scope.testdisplay = $scope.$storage.message;
        console.log($scope);
    }

}])


.controller('hashtagController', function($scope, $ionicModal) {
  
  $scope.teacherDB = [
    { name: 'Cpt Name'},
  ];

  $scope.attendenceDB = [
    { attending: '3PLT Cadets and NCOs'},
  ];

  $scope.infomationDB = [
    { info: 'For the lesson you will need to bring 12and3....'},
  ];

  $ionicModal.fromTemplateUrl('hashtag-modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  

  $scope.createContact = function(u) {  
    console.log("here " + u.teacher);  
    console.log("here " + u.attendence);
    console.log("here " + u.infomation);

  /**var addContact = {
    name: u.name,
    teacher: u.teacher,
    information: u.infomation,
  }
    **/

    $scope.teacherDB.push({ name: u.teacher });
    $scope.attendenceDB.push({ attending: u.attendence });
    $scope.infomationDB.push({ info: u.infomation });
    
    $scope.modal.hide();
  };

});


/**

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


//Backup plan if big DB dosn't work, put the databases for the relivent pages inside each controller.

                                                *****THE MAINFRAME*****



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