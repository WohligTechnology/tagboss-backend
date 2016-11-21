var adminURL = "http://localhost:1337/";
var adminURL = "http://104.155.129.33:1337/";

var imgurl = adminURL + "upload/";
var imgpath = adminURL + "upload/readFile";
var uploadurl = adminURL + "upload/";

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

    getInventoryByAgency: function (callback) {
      return $http({
        url: adminURL + "inventory/getAllInventory",
        method: "POST"
      }).success(callback);
    },

      getAllOrders: function (callback) {
      return $http({
        url: adminURL + "order/getbuyerorderandbill",
        method: "POST"
      }).success(callback);
    },

     getMaterial: function (callback) {
      return $http({
        url: adminURL + "moc/getall",
        method: "POST"
      }).success(callback);
    },

 addMoc: function (mocdata, callback) {
      var data = mocdata;
      return $http({
        url: adminURL + "moc/save",
        method: "POST",
        data: data
      }).success(callback);
    },


 editMoc: function (mocdata, callback) {
      var data = mocdata;
      return $http({
        url: adminURL + "moc/save",
        method: "POST",
        data: data
      }).success(callback);
    },

     deleteMoc: function (id, callback) {
      var data = { _id: id};
      return $http({
        url: adminURL + "moc/delete",
        method: "POST",
        data: data
      }).success(callback);
    },


 editPercentage: function (percentagedata, callback) {
      var data = percentagedata;
      return $http({
        url: adminURL + "moc/save",
        method: "POST",
        data: data
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

    rejectReport: function (rdata, callback) {
      var data = rdata;
      return $http({
        url: adminURL + "inventory/rejectReport",
        method: "POST",
        data: data
      }).success(callback);
    },

    acceptReport: function (rdata, callback) {
      var data = rdata;
      return $http({
        url: adminURL + "inventory/acceptReport",
        method: "POST",
        data: data
      }).success(callback);
    },


    updateSeller: function (sdata, callback) {
      var data = sdata;
      return $http({
        url: adminURL + "user/updateSeller",
        method: "POST",
        data: data
      }).success(callback);
    },

    updateBuyer: function (sdata, callback) {
      var data = sdata;
      return $http({
        url: adminURL + "user/updateBuyer",
        method: "POST",
        data: data
      }).success(callback);
    },



    assignInspection: function (rdata, callback) {
      var data = rdata;
      return $http({
        url: adminURL + "inventory/assignInspection",
        method: "POST",
        data: data
      }).success(callback);
    },

    Login: function (logindata, callback) {
      var data = logindata;
      return $http({
        url: adminURL + "register/login",
        method: "POST",
        data: data
      }).success(callback);
    },

    Logout: function (callback) {
      return $http({
        url: adminURL + "register/logout",
        method: "POST"
      }).success(callback);
    },

    getUser: function (callback) {
      return $http({
        url: adminURL + "register/getUser",
        method: "POST"
      }).success(callback);
    },


    getAllSeller: function (sdata, callback) {
      var data = {
        "status": sdata
      };
      return $http({
        url: adminURL + "user/getAllSeller",
        method: "POST",
        data: data
      }).success(callback);
    },

    getAllBuyer: function (sdata, callback) {
      var data = {
        "status": sdata
      };
      return $http({
        url: adminURL + "user/getAllBuyer",
        method: "POST",
        data: data
      }).success(callback);
    },

    getAllVerifiedSeller: function (callback) {
      return $http({
        url: adminURL + "user/getAllVerifiedSeller",
        method: "POST"
      }).success(callback);
    },

    getOneSeller: function (id, callback) {
      var data = {
        '_id': id
      };
      return $http({
        url: adminURL + "user/getOne",
        method: "POST",
        data: data
      }).success(callback);
    },

    getOneBuyer: function (id, callback) {
      var data = {
        '_id': id
      };
      return $http({
        url: adminURL + "user/getOne",
        method: "POST",
        data: data
      }).success(callback);
    },

    InspectionLogin: function (logindata, callback) {
      var data = logindata;
      return $http({
        url: adminURL + "inspection/Login",
        method: "POST",
        data: data
      }).success(callback);
    },

    InspectionLogout: function (callback) {
      return $http({
        url: adminURL + "inspection/logout",
        method: "POST"
      }).success(callback);
    },

    getInspectionUser: function (callback) {
      return $http({
        url: adminURL + "inspection/getInspectionUser",
        method: "POST"
      }).success(callback);
    },

    getAgencyByID: function (callback) {
      return $http({
        url: adminURL + "inspection/getAgency",
        method: "POST"
      }).success(callback);
    },

  };


});