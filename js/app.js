// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice',
  'pascalprecht.translate',
  'angulartics',
  'angulartics.google.analytics'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
  .state('loginpage', {
  url: "/loginpage",
  templateUrl: "views/template.html",
  controller: 'LoginPageCtrl'
  })
  .state('dashboard', {
  url: "/dashboard",
  templateUrl: "views/template.html",
  controller: 'DashboardCtrl'
  })
  .state('orders', {
  url: "/orders",
  templateUrl: "views/template.html",
  controller: 'OrdersCtrl'
  })
  .state('categories', {
  url: "/categories",
  templateUrl: "views/template.html",
  controller: 'CategogiesCtrl'
  })
  .state('view-orders', {
  url: "/view-orders",
  templateUrl: "views/template.html",
  controller: 'ViewOrdersCtrl'
  })
  .state('sellers', {
  url: "/sellers",
  templateUrl: "views/template.html",
  controller: 'SellersCtrl'
})
.state('buyers', {
url: "/buyers",
templateUrl: "views/template.html",
controller: 'BuyersCtrl'
})
.state('view-sellers', {
url: "/view-sellers",
templateUrl: "views/template.html",
controller: 'View-sellersCtrl'
})
.state('view-buyers', {
url: "/view-buyers",
templateUrl: "views/template.html",
controller: 'View-buyersCtrl'
})
.state('request-sellers', {
url: "/request-sellers",
templateUrl: "views/template.html",
controller: 'Request-sellersCtrl'
})
.state('request-buyers', {
url: "/request-buyers",
templateUrl: "views/template.html",
controller: 'Request-buyersCtrl'
})
.state('view-request-sellers', {
url: "/view-request-sellers",
templateUrl: "views/template.html",
controller: 'View-request-sellersCtrl'
})
.state('view-request-buyers', {
url: "/view-request-buyers",
templateUrl: "views/template.html",
controller: 'View-request-buyersCtrl'
})
.state('payment-to-sellers', {
url: "/payment-to-sellers",
templateUrl: "views/template.html",
controller: 'Payment-to-sellersCtrl'
})
.state('refund-to-buyers', {
url: "/refund-to-buyers",
templateUrl: "views/template.html",
controller: 'Refund-to-buyersCtrl'
})
.state('assign-agency', {
url: "/assign-agency",
templateUrl: "views/template.html",
controller: 'Assign-agencyCtrl'
})
.state('inspection-panel', {
url: "/inspection-panel",
templateUrl: "views/template.html",
controller: 'Inspection-panelCtrl'
})
  .state('material-construct', {
  url: "/material-construct",
  templateUrl: "views/template.html",
  controller: 'MaterialConstructCtrl'
  })
  .state('grades-standards', {
  url: "/grades-standards",
  templateUrl: "views/template.html",
  controller: 'GradesStandardsCtrl'
  })
  .state('grades-standards1', {
  url: "/grades-standards1",
  templateUrl: "views/template.html",
  controller: 'GradesStandards1Ctrl'
  })
  .state('inspection-agencies', {
  url: "/inspection-agencies",
  templateUrl: "views/template.html",
  controller: 'InspectionAgenciesCtrl'
  })
  .state('add-inspection-agency', {
  url: "/add-inspection-agency",
  templateUrl: "views/template.html",
  controller: 'AddInspectionAgencyCtrl'
  })
  .state('add-transporter', {
  url: "/add-transporter",
  templateUrl: "views/template.html",
  controller: 'AddTransporterCtrl'
  })
  .state('transporters', {
  url: "/transporters",
  templateUrl: "views/template.html",
  controller: 'TransportersCtrl'
  })
  .state('ads', {
  url: "/ads",
  templateUrl: "views/template.html",
  controller: 'AdsCtrl'
  })
  .state('add-ad', {
  url: "/add-ad",
  templateUrl: "views/template.html",
  controller: 'AddAdCtrl'
  })
  .state('reports', {
  url: "/reports",
  templateUrl: "views/template.html",
  controller: 'ReportsCtrl'
  })
  .state('transporter-payment', {
  url: "/transporter-payment",
  templateUrl: "views/template.html",
  controller: 'TransporterPaymentCtrl'
  })
  .state('pending-delivery', {
  url: "/pending-delivery",
  templateUrl: "views/template.html",
  controller: 'PendingDeliveryCtrl'
  });

    $urlRouterProvider.otherwise("/dashboard");
    $locationProvider.html5Mode(isproduction);
  });


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.directive('fancyboxBox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
               target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});


firstapp.config(function ($translateProvider) {
  $translateProvider.translations('en', LanguageEnglish);
  $translateProvider.translations('hi', LanguageHindi);
  $translateProvider.preferredLanguage('en');
});
