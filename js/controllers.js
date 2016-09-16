angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'highcharts-ng','ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('LoginPageCtrl', function($scope, TemplateService, NavigationService, $timeout) {

  $scope.template = TemplateService.changecontent("loginpage");
  $scope.menutitle = NavigationService.makeactive("Login Page");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  TemplateService.header='views/header1.html';
  TemplateService.sidemenu='';
})

.controller('DashboardCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("dashboard");
  $scope.menutitle = NavigationService.makeactive("Dashboard");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('MaterialConstructCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("material-construct");
  $scope.menutitle = NavigationService.makeactive("Material Construct");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})

.controller('InspectionAgenciesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("inspection-agencies");
  $scope.menutitle = NavigationService.makeactive("Inspection Agencies");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('AddInspectionAgencyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("add-inspection-agency");
  $scope.menutitle = NavigationService.makeactive("Add Inspection Agency");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('AddTransporterCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("add-transporter");
  $scope.menutitle = NavigationService.makeactive("Add Transporter");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('TransportersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("transporters");
  $scope.menutitle = NavigationService.makeactive("Transporters");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('AdsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("ads");
  $scope.menutitle = NavigationService.makeactive("Ads");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('AddAdCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("add-ad");
  $scope.menutitle = NavigationService.makeactive("Add ad");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('ReportsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("reports");
  $scope.menutitle = NavigationService.makeactive("Reports");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('TransporterPaymentCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("transporter-payment");
  $scope.menutitle = NavigationService.makeactive("Transporter Payment");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('PendingDeliveryCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("pending-delivery");
  $scope.menutitle = NavigationService.makeactive("Pending Delivery");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('SuperAdminCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("super-admin");
  $scope.menutitle = NavigationService.makeactive("Super Admin");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('PaymentTransactionMasterCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("payment-transaction-master");
  $scope.menutitle = NavigationService.makeactive("Payment Transaction Master");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('EditAgencyDetailsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("edit-agency-details");
  $scope.menutitle = NavigationService.makeactive("Edit Agency Details");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('InspectionLoginCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("inspection-login");
  $scope.menutitle = NavigationService.makeactive("Inspection Login");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('GradesStandardsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("grades-standards");
  $scope.menutitle = NavigationService.makeactive("Grades Standards");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.today = function() {
   $scope.dt = new Date();
 };
  $scope.today();

 $scope.clear = function() {
   $scope.dt = null;
 };

 $scope.inlineOptions = {
   customClass: getDayClass,
   minDate: new Date(),
   showWeeks: true
 };

 $scope.dateOptions = {
   dateDisabled: disabled,
   formatYear: 'yy',
   maxDate: new Date(2020, 5, 22),
   minDate: new Date(),
   startingDay: 1
 };

 // Disable weekend selection
 function disabled(data) {
   var date = data.date,
     mode = data.mode;
   return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
 }

 $scope.toggleMin = function() {
   $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
   $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
 };

 $scope.toggleMin();

 $scope.open1 = function() {
   $scope.popup1.opened = true;
 };

 $scope.open2 = function() {
   $scope.popup2.opened = true;
 };

 $scope.setDate = function(year, month, day) {
   $scope.dt = new Date(year, month, day);
 };

 $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
 $scope.format = $scope.formats[0];
 $scope.altInputFormats = ['M!/d!/yyyy'];

 $scope.popup1 = {
   opened: false
 };

 $scope.popup2 = {
   opened: false
 };

 var tomorrow = new Date();
 tomorrow.setDate(tomorrow.getDate() + 1);
 var afterTomorrow = new Date();
 afterTomorrow.setDate(tomorrow.getDate() + 1);
 $scope.events = [
   {
     date: tomorrow,
     status: 'full'
   },
   {
     date: afterTomorrow,
     status: 'partially'
   }
 ];

 function getDayClass(data) {
   var date = data.date,
     mode = data.mode;
   if (mode === 'day') {
     var dayToCheck = new Date(date).setHours(0,0,0,0);

     for (var i = 0; i < $scope.events.length; i++) {
       var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

       if (dayToCheck === currentDay) {
         return $scope.events[i].status;
       }
     }
   }

   return '';
 }
})

.controller('GradesStandards1Ctrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("grades-standards1");
  $scope.menutitle = NavigationService.makeactive("Grades Standards1");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.today = function() {
   $scope.dt = new Date();
 };
  $scope.today();

 $scope.clear = function() {
   $scope.dt = null;
 };

 $scope.inlineOptions = {
   customClass: getDayClass,
   minDate: new Date(),
   showWeeks: true
 };

 $scope.dateOptions = {
   dateDisabled: disabled,
   formatYear: 'yy',
   maxDate: new Date(2020, 5, 22),
   minDate: new Date(),
   startingDay: 1
 };

 // Disable weekend selection
 function disabled(data) {
   var date = data.date,
     mode = data.mode;
   return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
 }

 $scope.toggleMin = function() {
   $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
   $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
 };

 $scope.toggleMin();

 $scope.open1 = function() {
   $scope.popup1.opened = true;
 };

 $scope.open2 = function() {
   $scope.popup2.opened = true;
 };

 $scope.setDate = function(year, month, day) {
   $scope.dt = new Date(year, month, day);
 };

 $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
 $scope.format = $scope.formats[0];
 $scope.altInputFormats = ['M!/d!/yyyy'];

 $scope.popup1 = {
   opened: false
 };

 $scope.popup2 = {
   opened: false
 };

 var tomorrow = new Date();
 tomorrow.setDate(tomorrow.getDate() + 1);
 var afterTomorrow = new Date();
 afterTomorrow.setDate(tomorrow.getDate() + 1);
 $scope.events = [
   {
     date: tomorrow,
     status: 'full'
   },
   {
     date: afterTomorrow,
     status: 'partially'
   }
 ];

 function getDayClass(data) {
   var date = data.date,
     mode = data.mode;
   if (mode === 'day') {
     var dayToCheck = new Date(date).setHours(0,0,0,0);

     for (var i = 0; i < $scope.events.length; i++) {
       var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

       if (dayToCheck === currentDay) {
         return $scope.events[i].status;
       }
     }
   }

   return '';
 }
})

.controller('ViewOrdersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("view-orders");
  $scope.menutitle = NavigationService.makeactive("View orders");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.today = function() {
   $scope.dt = new Date();
 };
  $scope.today();

 $scope.clear = function() {
   $scope.dt = null;
 };

 $scope.inlineOptions = {
   customClass: getDayClass,
   minDate: new Date(),
   showWeeks: true
 };

 $scope.dateOptions = {
   dateDisabled: disabled,
   formatYear: 'yy',
   maxDate: new Date(2020, 5, 22),
   minDate: new Date(),
   startingDay: 1
 };

 // Disable weekend selection
 function disabled(data) {
   var date = data.date,
     mode = data.mode;
   return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
 }

 $scope.toggleMin = function() {
   $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
   $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
 };

 $scope.toggleMin();

 $scope.open1 = function() {
   $scope.popup1.opened = true;
 };

 $scope.open2 = function() {
   $scope.popup2.opened = true;
 };

 $scope.setDate = function(year, month, day) {
   $scope.dt = new Date(year, month, day);
 };

 $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
 $scope.format = $scope.formats[0];
 $scope.altInputFormats = ['M!/d!/yyyy'];

 $scope.popup1 = {
   opened: false
 };

 $scope.popup2 = {
   opened: false
 };

 var tomorrow = new Date();
 tomorrow.setDate(tomorrow.getDate() + 1);
 var afterTomorrow = new Date();
 afterTomorrow.setDate(tomorrow.getDate() + 1);
 $scope.events = [
   {
     date: tomorrow,
     status: 'full'
   },
   {
     date: afterTomorrow,
     status: 'partially'
   }
 ];

 function getDayClass(data) {
   var date = data.date,
     mode = data.mode;
   if (mode === 'day') {
     var dayToCheck = new Date(date).setHours(0,0,0,0);

     for (var i = 0; i < $scope.events.length; i++) {
       var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

       if (dayToCheck === currentDay) {
         return $scope.events[i].status;
       }
     }
   }

   return '';
 }
})


.controller('OrdersCtrl', function($scope, TemplateService, NavigationService, $timeout) {

  $scope.template = TemplateService.changecontent("orders");
  $scope.menutitle = NavigationService.makeactive("Orders");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.today = function() {
   $scope.dt = new Date();
 };
  $scope.today();

 $scope.clear = function() {
   $scope.dt = null;
 };

 $scope.inlineOptions = {
   customClass: getDayClass,
   minDate: new Date(),
   showWeeks: true
 };

 $scope.dateOptions = {
   dateDisabled: disabled,
   formatYear: 'yy',
   maxDate: new Date(2020, 5, 22),
   minDate: new Date(),
   startingDay: 1
 };

 // Disable weekend selection
 function disabled(data) {
   var date = data.date,
     mode = data.mode;
   return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
 }

 $scope.toggleMin = function() {
   $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
   $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
 };

 $scope.toggleMin();

 $scope.open1 = function() {
   $scope.popup1.opened = true;
 };

 $scope.open2 = function() {
   $scope.popup2.opened = true;
 };

 $scope.setDate = function(year, month, day) {
   $scope.dt = new Date(year, month, day);
 };

 $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
 $scope.format = $scope.formats[0];
 $scope.altInputFormats = ['M!/d!/yyyy'];

 $scope.popup1 = {
   opened: false
 };

 $scope.popup2 = {
   opened: false
 };

 var tomorrow = new Date();
 tomorrow.setDate(tomorrow.getDate() + 1);
 var afterTomorrow = new Date();
 afterTomorrow.setDate(tomorrow.getDate() + 1);
 $scope.events = [
   {
     date: tomorrow,
     status: 'full'
   },
   {
     date: afterTomorrow,
     status: 'partially'
   }
 ];

 function getDayClass(data) {
   var date = data.date,
     mode = data.mode;
   if (mode === 'day') {
     var dayToCheck = new Date(date).setHours(0,0,0,0);

     for (var i = 0; i < $scope.events.length; i++) {
       var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

       if (dayToCheck === currentDay) {
         return $scope.events[i].status;
       }
     }
   }

   return '';
 }
})

.controller('CategogiesCtrl', function($scope, TemplateService, NavigationService, $timeout) {

  $scope.template = TemplateService.changecontent("categories");
  $scope.menutitle = NavigationService.makeactive("Categories");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.oneAtATime = true;
})

.controller('SellersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("sellers");
  $scope.menutitle = NavigationService.makeactive("Sellers");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.today = function() {
   $scope.dt = new Date();
 };
  $scope.today();

 $scope.clear = function() {
   $scope.dt = null;
 };

 $scope.inlineOptions = {
   customClass: getDayClass,
   minDate: new Date(),
   showWeeks: true
 };

 $scope.dateOptions = {
   dateDisabled: disabled,
   formatYear: 'yy',
   maxDate: new Date(2020, 5, 22),
   minDate: new Date(),
   startingDay: 1
 };

 // Disable weekend selection
 function disabled(data) {
   var date = data.date,
     mode = data.mode;
   return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
 }

 $scope.toggleMin = function() {
   $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
   $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
 };

 $scope.toggleMin();

 $scope.open1 = function() {
   $scope.popup1.opened = true;
 };

 $scope.open2 = function() {
   $scope.popup2.opened = true;
 };

 $scope.setDate = function(year, month, day) {
   $scope.dt = new Date(year, month, day);
 };

 $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
 $scope.format = $scope.formats[0];
 $scope.altInputFormats = ['M!/d!/yyyy'];

 $scope.popup1 = {
   opened: false
 };

 $scope.popup2 = {
   opened: false
 };

 var tomorrow = new Date();
 tomorrow.setDate(tomorrow.getDate() + 1);
 var afterTomorrow = new Date();
 afterTomorrow.setDate(tomorrow.getDate() + 1);
 $scope.events = [
   {
     date: tomorrow,
     status: 'full'
   },
   {
     date: afterTomorrow,
     status: 'partially'
   }
 ];

 function getDayClass(data) {
   var date = data.date,
     mode = data.mode;
   if (mode === 'day') {
     var dayToCheck = new Date(date).setHours(0,0,0,0);

     for (var i = 0; i < $scope.events.length; i++) {
       var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

       if (dayToCheck === currentDay) {
         return $scope.events[i].status;
       }
     }
   }

   return '';
 }
})

.controller('BuyersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("buyers");
  $scope.menutitle = NavigationService.makeactive("Buyer");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('View-sellersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("view-sellers");
  $scope.menutitle = NavigationService.makeactive("View-sellers");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.rate = 3;
  $scope.max = 5;
  $scope.isReadonly = false;

  $scope.chartConfig={
              chart: {
                  type: 'pie',
                  options3d: {
                      enabled: true,
                      alpha: 45
                  }
              },
              title: {
                  text: 'Contents of Highsoft\'s weekly fruit delivery'
              },
              subtitle: {
                  text: '3D donut in Highcharts'
              },
              plotOptions: {
                  pie: {
                      innerSize: 100,
                      depth: 45
                  }
              },
              series: [{
                  name: 'Delivered amount',
                  data: [
                      ['Bananas', 8],
                      ['Kiwi', 3],
                      ['Mixed nuts', 1],
                      ['Oranges', 6],
                      ['Apples', 8],
                      ['Pears', 4],
                      ['Clementines', 4],
                      ['Reddish (bag)', 1],
                      ['Grapes (bunch)', 1]
                  ]
              }],
              size: {
                 width: 400,
                 height: 300
                }
          };




        $scope.hoveringOver = function(value) {
          $scope.overStar = value;
          $scope.percent = 100 * (value / $scope.max);
        };


})


.controller('View-buyersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("view-buyers");
  $scope.menutitle = NavigationService.makeactive("View-buyers");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.rate = 3;
  $scope.max = 5;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };
})
.controller('Request-sellersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("request-sellers");
  $scope.menutitle = NavigationService.makeactive("Request-sellers");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('Request-buyersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("request-buyers");
  $scope.menutitle = NavigationService.makeactive("Request-buyers");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('View-request-sellersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("view-request-sellers");
  $scope.menutitle = NavigationService.makeactive("View-request-sellers");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('View-request-buyersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("view-request-buyers");
  $scope.menutitle = NavigationService.makeactive("View-request-buyers");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('Payment-to-sellersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("payment-to-sellers");
  $scope.menutitle = NavigationService.makeactive("Payment-to-sellers");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.oneAtATime = true;
})
.controller('Refund-to-buyersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("refund-to-buyers");
  $scope.menutitle = NavigationService.makeactive("Refund-to-buyers");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.chartConfig = {}
})
.controller('Assign-agencyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("assign-agency");
  $scope.menutitle = NavigationService.makeactive("Assign-agency");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('Inspection-panelCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("inspection-panel");
  $scope.menutitle = NavigationService.makeactive("Inspection-panel");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('View-productsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("view-products");
  $scope.menutitle = NavigationService.makeactive("View-products");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})



.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
  $.fancybox.close(true);
})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

  $scope.changeLanguage = function() {
    console.log("Language CLicked");

    if (!$.jStorage.get("language")) {
      $translate.use("hi");
      $.jStorage.set("language", "hi");
    } else {
      if ($.jStorage.get("language") == "en") {
        $translate.use("hi");
        $.jStorage.set("language", "hi");
      } else {
        $translate.use("en");
        $.jStorage.set("language", "en");
      }
    }
    //  $rootScope.$apply();
  };


})

;
