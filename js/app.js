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

firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
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
    .state('seller-dashboard', {
      url: "/seller-dashboard",
      templateUrl: "views/template.html",
      controller: 'SellerDashboardCtrl'
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
    .state('category-price-range', {
      url: "/category-price-range",
      templateUrl: "views/template.html",
      controller: 'CategoryPriceRangeCtrl'
    })
    .state('view-orders', {
      url: "/view-orders",
      templateUrl: "views/template.html",
      controller: 'ViewOrdersCtrl'
    })
    .state('product-approval', {
      url: "/product-approval",
      templateUrl: "views/template.html",
      controller: 'ProdApprovalCtrl'
    })
    .state('view-seller-product', {
      url: "/view-seller-product",
      templateUrl: "views/template.html",
      controller: 'ViewSellerProductsCtrl'
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
      url: "/view-request-sellers/:id",
      templateUrl: "views/template.html",
      controller: 'View-request-sellersCtrl'
    })
    .state('view-request-buyers', {
      url: "/view-request-buyers/:id",
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
    .state('view-products', {
      url: "/view-products",
      templateUrl: "views/template.html",
      controller: 'View-productsCtrl'
    })
    .state('coupon-code', {
      url: "/coupon-code",
      templateUrl: "views/template.html",
      controller: 'Coupon-codeCtrl'
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
    .state('homebanner', {
      url: "/homebanner",
      templateUrl: "views/template.html",
      controller: 'HomebannerCtrl'
    })
    .state('testimonials', {
      url: "/testimonials",
      templateUrl: "views/template.html",
      controller: 'TestimonialsCtrl'
    })
    .state('about', {
      url: "/about",
      templateUrl: "views/template.html",
      controller: 'AboutCtrl'
    })
    .state('product-banner', {
      url: "/product-banner",
      templateUrl: "views/template.html",
      controller: 'ProductbannerCtrl'
    })
    .state('view-contact', {
      url: "/view-contact",
      templateUrl: "views/template.html",
      controller: 'ViewcontactCtrl'
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
    .state('transport-order', {
      url: "/transport-order",
      templateUrl: "views/template.html",
      controller: 'TransportorderCtrl'
    })
    .state('transporters', {
      url: "/transporters",
      templateUrl: "views/template.html",
      controller: 'TransportersCtrl'
    })
    .state('brands', {
      url: "/brand-manufacture",
      templateUrl: "views/template.html",
      controller: 'BrandsCtrl'
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
    })
    .state('super-admin', {
      url: "/super-admin",
      templateUrl: "views/template.html",
      controller: 'SuperAdminCtrl'
    })
    .state('payment-transaction-master', {
      url: "/payment-transaction-master",
      templateUrl: "views/template.html",
      controller: 'PaymentTransactionMasterCtrl'
    })
    .state('payment-process', {
      url: "/payment-process",
      templateUrl: "views/template.html",
      controller: 'PaymentProcessCtrl'
    })
    .state('edit-agency-details', {
      url: "/edit-agency-details",
      templateUrl: "views/template.html",
      controller: 'EditAgencyDetailsCtrl'
    })

  .state('inspection-login', {
    url: "/inspection-login",
    templateUrl: "views/template.html",
    controller: 'InspectionLoginCtrl'
  });

  $urlRouterProvider.otherwise("/dashboard");
  $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function ($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function ($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function () {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

// firstapp.directive('imageonload', function () {
//  return {
//    restrict: 'A',
//    link: function (scope, element, attrs) {
//      element.bind('load', function () {
//     //  console.log(attrs.imageonload);
//        scope.$apply(attrs.imageonload);
//      });
//    }
//  };
// });

firstapp.filter('uploadpath', function () {
  return function (input, width, height, style) {
    var other = "";
    if (width && width !== "") {
      other += "&width=" + width;
    }
    if (height && height !== "") {
      other += "&height=" + height;
    }
    if (style && style !== "") {
      other += "&style=" + style;
    }
    if (input) {
      return imgpath + "?file=" + input + other;

    }
  };
});

firstapp.directive('uploadImage', function ($http, $filter) {
  console.log("innnnn");
  return {
    templateUrl: 'views/directive/uploadFile.html',
    scope: {
      model: '=ngModel',
      callback: '=ngCallback',
      // mymodel: '=ngModel'

    },
    link: function ($scope, element, attrs) {
      $scope.isMultiple = false;
      $scope.inObject = false;
      if (attrs.multiple || attrs.multiple === "") {
        $scope.isMultiple = true;
        $("#inputImage").attr("multiple", "ADD");
      }
      if (attrs.noView || attrs.noView === "") {
        $scope.noShow = true;
      }
      if ($scope.model) {
        if (_.isArray($scope.model)) {
          $scope.image = [];
          _.each($scope.model, function (n) {
            $scope.image.push({
              url: $filter("uploadpath")(n)
            });
          });
        } else {
          $scope.image = {};
          $scope.image.url = $filter("uploadpath")($scope.model);
        }

      }
      $scope.$watch("image", function (newVal, oldVal) {
        if (newVal && newVal.file) {
          $scope.upload(newVal);
        }
      });
      if (attrs.inobj || attrs.inobj === "") {
        $scope.inObject = true;
      }
      $scope.clearOld = function () {
        $scope.model = [];
      };
      $scope.upload = function (image) {
        var Template = this;
        image.hide = true;
        var formData = new FormData();
        formData.append('file', image.file, image.name);
        $http.post(uploadurl, formData, {
          headers: {
            'Content-Type': undefined
          },
          transformRequest: angular.identity
        }).success(function (data) {
          console.log("success");
          //  console.log(data);
          if ($scope.callback) {
            $scope.model = data.data[0];
            if (data.value) {
              $scope.callback(null, data);
            } else {
              $scope.callback('Not Uploaded', data);
            }
          } else {
            if ($scope.isMultiple) {
              if ($scope.inObject) {
                $scope.model.push({
                  "image": data.data[0]
                });
              } else {
                $scope.model.push(data.data[0]);
              }
            } else {
              $scope.model = data.data[0];
            }
          }
        });

        //  } else {
        //    console.log("Unsccessfull");
        //    //  $scope.mymodel="Please upload only png or jpg image.";
        //    //  console.log($scope.mymodel);
        //    $scope.callback('Please upload only png or jpg image.', null);

        //  }

      };
    }
  };
});

firstapp.directive('onlyDigits', function () {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function (scope, element, attr, ctrl) {
      var digits;

      function inputValue(val) {
        if (val) {
          if (attr.type == "tel") {
            digits = val.replace(/[^0-9\+\\]/g, '');
          } else {
            digits = val.replace(/[^0-9\-\\]/g, '');
          }


          if (digits !== val) {
            ctrl.$setViewValue(digits);
            ctrl.$render();
          }
          return parseInt(digits, 10);
        }
        return undefined;
      }
      ctrl.$parsers.push(inputValue);
    }
  };
});

firstapp.directive('fancyboxBox', function ($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function (scope, element, attr) {
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