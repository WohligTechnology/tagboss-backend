var adminURL = "http://localhost:1337/";
// var adminURL = "https://104.155.129.33:1337/";
var imgurl = adminURL+"upload/";
var imgpath = adminURL+"upload/readFile";
var uploadurl = adminURL+"upload/";

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

 getInventory: function (callback) {
      return $http({
        url: adminURL + "inventory/search",
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

     sendReport: function (rdata, callback) {
      var data = rdata;
      return $http({
        url: adminURL + "inventory/sendReport",
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