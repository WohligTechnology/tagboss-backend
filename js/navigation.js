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

    getInventory: function (idata, callback) {
      var data = idata;
      return $http({
        url: adminURL + "inventory/search",
        method: "POST",
        data: data
      }).success(callback);
    },

    getInventoryByAgency: function (callback) {
      return $http({
        url: adminURL + "inventory/getAllInventory",
        method: "POST"
      }).success(callback);
    },

    getAllOrders: function (senddata, callback) {
      var data = senddata
      return $http({
        url: adminURL + "bill/getAllOrders",
        method: "POST",
        data: data
      }).success(callback);
    },



    getAllOrdersByCoupon: function (senddata, callback) {
      var data = senddata
      return $http({
        url: adminURL + "coupon/getordersbycoupon",
        method: "POST",
        data: data
      }).success(callback);
    },

    getAllOrdersBySeller: function (senddata, callback) {
      var data = senddata
      return $http({
        url: adminURL + "bill/getbillbyseller",
        method: "POST",
        data: data
      }).success(callback);
    },
    getMaterial: function (callback) {
      return $http({
        url: adminURL + "moc/getall",
        method: "POST"
      }).success(callback);
    },

    getBrands: function (callback) {
      return $http({
        url: adminURL + "brand/search",
        method: "POST"
      }).success(callback);
    },

    getGradesStandards: function (id, callback) {
      var data = {
        _id: id
      };
      return $http({
        url: adminURL + "GradesStandards/getGradesStandardsByMoc",
        method: "POST",
        data: data
      }).success(callback);
    },

    getOneOrder: function (id, callback) {
      var data = {
        billid: id
      };
      return $http({
        url: adminURL + "bill/getonebill",
        method: "POST",
        data: data
      }).success(callback);
    },


    getOrder: function (id, callback) {
      var data = {
        orderid: id
      };
      return $http({
        url: adminURL + "order/getoneorder",
        method: "POST",
        data: data
      }).success(callback);
    },


    updateOrderStatusByAdmin: function (odata, callback) {
      var data = odata;
      return $http({
        url: adminURL + "order/updateOrderStatusByAdmin",
        method: "POST",
        data: data
      }).success(callback);
    },

    updateBill: function (bdata, callback) {
      var data = bdata;
      return $http({
        url: adminURL + "bill/updateDeliveryStatus",
        method: "POST",
        data: data
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

    addGrade: function (mocdata, callback) {
      var data = mocdata;
      return $http({
        url: adminURL + "GradesStandards/save",
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

    editGrade: function (mocdata, callback) {
      var data = mocdata;
      return $http({
        url: adminURL + "GradesStandards/save",
        method: "POST",
        data: data
      }).success(callback);
    },

    deleteMoc: function (id, callback) {
      var data = {
        _id: id
      };
      return $http({
        url: adminURL + "moc/delete",
        method: "POST",
        data: data
      }).success(callback);
    },


    deleteGrade: function (id, callback) {
      var data = {
        _id: id
      };
      return $http({
        url: adminURL + "GradesStandards/delete",
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

    getOneAgency: function (id, callback) {
      var data = {
        _id: id
      };
      return $http({
        url: adminURL + "inspection/getOne",
        method: "POST",
        data: data
      }).success(callback);
    },

    deleteAgency: function (id, callback) {
      var data = {
        _id: id
      };
      return $http({
        url: adminURL + "inspection/delete",
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

    getAllCoupon: function (cdata, callback) {
      var data = cdata;
      return $http({
        url: adminURL + "coupon/search",
        method: "POST",
        data: data
      }).success(callback);
    },

    deleteCoupon: function (id, callback) {
      var data = {
        _id: id
      };
      return $http({
        url: adminURL + "coupon/delete",
        method: "POST",
        data: data
      }).success(callback);
    },

    addCoupon: function (cdata, callback) {
      var data = cdata;
      return $http({
        url: adminURL + "coupon/save",
        method: "POST",
        data: data
      }).success(callback);
    },


    getOneCoupon: function (id, callback) {
      var data = {
        _id: id
      };
      return $http({
        url: adminURL + "coupon/getone",
        method: "POST",
        data: data
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

    getAllVerifiedBuyer: function (callback) {
      return $http({
        url: adminURL + "user/getAllVerifiedBuyer",
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

    getAllPayments: function (callback) {
      return $http({
        url: adminURL + "transaction/getalltransaction",
        method: "POST"
      }).success(callback);
    },

  };


});