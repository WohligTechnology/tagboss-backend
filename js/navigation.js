var adminURL = "http://localhost:1337/";
// if(isproduction)
// {
//   adminURL =  "http://www.wohlig.co.in/demo/index.php";
// }
// else {
//   adminURL = "http://localhost/demo/index.php";
// }

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
  var navigation = [{
    name: "Home",
    classis: "active",
    anchor: "home",
    subnav: [{
      name: "Subnav1",
      classis: "active",
      anchor: "home"
    }]
  }];

  return {
    getnav: function () {
      return navigation;
    },
    makeactive: function (menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

    getAgency: function (callback) {
      return $http({
        url: adminURL + "inspection/search",
        method: "POST"
      }).success(callback);
    },

    addAgency: function (agencydata, callback) {
      var data = agencydata;
      return $http({
        url: adminURL + "inspection/save",
        method: "POST",
        data: data
      }).success(callback);
    },

    Login: function (logindata, callback) {
      var data = logindata;
      return $http({
        url: adminURL + "inspection/Login",
        method: "POST",
        data: data
      }).success(callback);
    },

  };


});