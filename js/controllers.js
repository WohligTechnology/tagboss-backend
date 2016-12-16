Window.uploadurl = "http://wohlig.biz/uploadfile/upload/";
angular.module('phonecatControllers', ['templateservicemod', 'ui.select', 'toastr', 'ui.tinymce', 'navigationservice', 'highcharts-ng', 'ui.bootstrap', 'ngAnimate', 'imageupload', 'ngSanitize', 'angular-flexslider', 'ksSwiper', 'toggle-switch', 'angular.filter'])

.controller('LoginPageCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, toastr) {

    $scope.template = TemplateService.changecontent("loginpage");
    $scope.menutitle = NavigationService.makeactive("Login Page");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = 'views/header1.html';
    TemplateService.sidemenu = '';

    $scope.logindata = {};
    $scope.error = false
    $scope.Login = function (logindata) {
        NavigationService.Login(logindata, function (data) {
            if (data.value == true) {
                var successmsg = toastr.success("Login Successfully", "Information");
                setTimeout(function () {
                    toastr.clear(successmsg);
                    $state.go("dashboard");
                }, 1000);

            } else {
                $scope.error = true;
                toastr.error("User not Found", "Error");
                // $scope.errmsg = "User not Found";
            }
        });
    }
})

.controller('DashboardCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("dashboard");
    $scope.menutitle = NavigationService.makeactive("Dashboard");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();





    $scope.chartConfig1 = {

        options: {
            //This is the Main Highcharts chart config. Any Highchart options are valid here.
            //will be overriden by values specified below.
            chart: {
                type: 'column'

            },
            tooltip: {
                style: {
                    padding: 10,
                    fontWeight: 'bold'
                }
            }
        },
        //The below properties are watched separately for changes.

        //Series object (optional) - a list of series using normal Highcharts series options.
        series: [{
            data: [10, 15]
        }],
        //Title configuration (optional)
        // title: {
        //     text: 'Example with bold text',
        //     floating: true,
        //     align: 'right',
        //     x: -30,
        //     y: 30
        // },
        //Boolean to control showing loading status on chart (optional)
        //Could be a string if you want to show specific loading text.
        loading: false,
        //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
        //properties currentMin and currentMax provided 2-way binding to the chart's maximum and minimum
        xAxis: {
            currentMin: 0,
            currentMax: 1,
            title: {
                text: 'values'
            }
        },
        // yAxis: {
        // currentMin: 0,
        // currentMax: 20,
        // title: {text: 'values'}
        // },
        //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
        useHighStocks: false,
        //size (optional) if left out the chart will default to size of the div or something sensible.
        size: {
            width: 300,
            height: 300
        },
        //function (optional)
        func: function (chart) {
            //setup some logic for the chart
        }
    };

    $scope.chartConfig = {

        options: {
            //This is the Main Highcharts chart config. Any Highchart options are valid here.
            //will be overriden by values specified below.
            chart: {
                type: 'line'
            },
            tooltip: {
                style: {
                    padding: 10,
                    fontWeight: 'bold'
                }
            }
        },
        //The below properties are watched separately for changes.

        //Series object (optional) - a list of series using normal Highcharts series options.
        series: [{
            data: [10, 15, 12, 8, 7]
        }],
        //Title configuration (optional)
        // title: {
        //    text: 'Hello'
        // },
        //Boolean to control showing loading status on chart (optional)
        //Could be a string if you want to show specific loading text.
        loading: false,
        //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
        //properties currentMin and currentMax provided 2-way binding to the chart's maximum and minimum
        xAxis: {
            currentMin: 0,
            currentMax: 20,
            title: {
                text: 'values'
            }
        },
        yAxis: {
            currentMin: 0,
            currentMax: 20,
            title: {
                text: 'values'
            }
        },
        //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
        useHighStocks: false,
        //size (optional) if left out the chart will default to size of the div or something sensible.
        size: {
            width: 670,
            height: 300
        },
        //function (optional)
        func: function (chart) {
            //setup some logic for the chart
        }
    };

    $scope.freqPie = {

        options: {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 60,
                    beta: 0
                }
            },
            title: {
                text: null
            }

        },
        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 0,
            layout: 'vertical'
        },


        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 50,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Category',
            data: [
                ['Pipe', 35.0],

                {
                    name: 'Coil',
                    y: 15.0,
                    sliced: true,
                    selected: true
                },
                ['Plate/Sheet', 30],
                ['Roundbar', 20]

            ]
        }],
        size: {
            width: 350,
            height: 300
        }
    };
})

.controller('MaterialConstructCtrl', function ($scope, toastr, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("material-construct");
    $scope.menutitle = NavigationService.makeactive("Material Construct");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.getMaterial = function () {
        NavigationService.getMaterial(function (data) {
            if (data.value == true) {
                $scope.allData = data.data;
            } else {
                $scope.allData = [];
            }
        });
    }
    $scope.getMaterial();
    $scope.errmsg = false;
    $scope.addMoc = function (mocdata, cat, indexid) {
        if (mocdata != undefined) {
            var senddata = {};
            senddata.category = cat;
            senddata.name = mocdata.mocname;

            console.log("searchdata", senddata);

            NavigationService.addMoc(senddata, function (data) {
                if (data.value == true) {
                    // $scope.formdata ={};
                    toastr.success("MOC added Successfully", "Information");
                    document.getElementById(indexid).value = "";
                    $scope.errmsg = false;
                    $scope.getMaterial();
                }
            });
        } else {
            $scope.errmsg = true;
            $scope.myindex = indexid;
        }
    }

    $scope.hidetext = false;
    $scope.showtext = true;
    $scope.showEditData = function (indexid) {
        $scope.hidetext = true;
        $scope.showtext = false;
        $scope.indexid = indexid;
    }

    $scope.editMoc = function (mocdata, cat, indexid) {
        if (mocdata.name !== "") {
            var senddata = {};
            senddata.category = cat;
            senddata.name = mocdata.name;
            senddata._id = mocdata._id;
            $scope.hidetext = false;
            $scope.showtext = true;
            $scope.indexid = "a";
            NavigationService.editMoc(senddata, function (data) {
                if (data.value == true) {
                    // $scope.formdata ={};
                    toastr.success("MOC updated Successfully", "Information");
                    $scope.errmsg = false;
                    $scope.getMaterial();
                }
            });
        } else {
            $scope.errmsg = true;
            $scope.myindex = indexid;
        }
    }
    $scope.deleteMoc = function (mocid) {
        NavigationService.deleteMoc(mocid, function (data) {
            if (data.value == true) {
                toastr.success("MOC deleted Successfully", "Information");
                $scope.getMaterial();
            }
        });
    }

})

.controller('ProdApprovalCtrl', function ($scope, toastr, TemplateService, NavigationService, $timeout, $filter) {
    $scope.template = TemplateService.changecontent("product-approval");
    $scope.menutitle = NavigationService.makeactive("Product Approval");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.brands = [{
        name: 'Tata Steel'
    }, {
        name: 'Tata Steel'
    }, {
        name: 'Tata Steel'
    }];

    $scope.pdfURL = "http://104.155.129.33:1337/upload/readFile?file";
    // $scope.pdfURL = "http://localhost:1337/upload/readFile?file";

    $scope.showEdit = false;
    $scope.hideEdit = true;
    $scope.showEditProduct = function () {
        $scope.showEdit = true;
        $scope.hideEdit = false;

    };

    $scope.showInspection = function () {
        $scope.hideEdit = true;
        $scope.showEdit = false;
    };


    $scope.getAgency = function () {
        NavigationService.getAgency(function (data) {
            if (data.value == true) {
                $scope.getAllAgency = data.data.results;
            }
        });
    }
    $scope.getAgency();

    $scope.filter = {};
    $scope.filter.page = 1;




    $scope.getInventory = function () {
        NavigationService.getInventory($scope.filter, function (data) {
            if (data.value == true) {
                $scope.getAllInventory = data.data.results;
                $scope.totalItems = data.data.total;
                console.log("filter", $scope.filter);
            }
        });
    }
    $scope.getInventory();

    $scope.errmsg = false;
    $scope.assignInspection = function (inventorydata, indexid) {
        console.log("asssign", inventorydata.agentIDTemp, indexid);
        if (inventorydata.agentIDTemp != undefined) {

            var senddata = {};
            senddata._id = inventorydata._id;
            senddata.agencyid = inventorydata.agentIDTemp;
            senddata.firstName = inventorydata.seller.firstName;
            senddata.date = $filter('date')(new Date(), 'MMM dd yyyy');
            $scope.mydate = new Date();
            $scope.newdate = $scope.mydate.setDate($scope.mydate.getDate() + 6);
            senddata.duedate = $filter('date')(new Date($scope.newdate), 'MMM dd yyyy');
            senddata.report = inventorydata.report;
            if (inventorydata.category.name === "Pipes") {
                senddata.price = inventorydata.ratePerKgMtr;
                senddata.quantity = inventorydata.totalQty;

            } else {
                senddata.price = inventorydata.pricePerKg;
                senddata.quantity = inventorydata.quantityInNos;
            }
            senddata.product = inventorydata.brand.name + " " + inventorydata.moc.name + " " + inventorydata.category.name
            NavigationService.assignInspection(senddata, function (data) {
                if (data.value == true) {
                    toastr.success("Assign Successfully", "Information");
                    $scope.errmsg = false;
                    $scope.getInventory();
                }
            });
        } else {
            $scope.errmsg = true;
            $scope.myindex = indexid;
        }
    }

    $scope.rejectReport = function (inventorydata) {
        var senddata = {};
        senddata._id = inventorydata._id;
        senddata.email = inventorydata.seller.email;
        senddata.firstName = inventorydata.seller.firstName;
        NavigationService.rejectReport(senddata, function (data) {
            if (data.value == true) {
                // toastr.success("Assign Successfully", "Information");
                $scope.getInventory();
            }
        });
    }

    $scope.acceptReport = function (inventorydata) {
        var senddata = {};
        senddata._id = inventorydata._id;
        senddata.email = inventorydata.seller.email;
        senddata.firstName = inventorydata.seller.firstName;
        senddata.quantity = inventorydata.quantityInNos;
        senddata.date = $filter('date')(new Date(), 'MMM dd yyyy');
        senddata.report = inventorydata.report;

        if (inventorydata.ratePerKgMtr) {
            senddata.price = inventorydata.ratePerKgMtr;
        }
        if (inventorydata.pricePerKg) {
            senddata.price = inventorydata.pricePerKg;
        }
        senddata.product = inventorydata.brand.name + " " + inventorydata.moc.name + " " + inventorydata.category.name
        NavigationService.acceptReport(senddata, function (data) {
            if (data.value == true) {
                // toastr.success("Assign Successfully", "Information");
                $scope.getInventory();
            }
        });
    }

})

.controller('ViewSellerProductsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("view-seller-product");
    $scope.menutitle = NavigationService.makeactive("View Seller Products");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.showProd = false;
    $scope.showSell = true;
    $scope.showProduct = function () {
        $scope.showProd = true;
        $scope.showSell = false;
    };

    $scope.showSellerProduct = function () {
        $scope.showSell = true;
        $scope.showProd = false;
    };

})


.controller('InspectionAgenciesCtrl', function ($scope, toastr, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.changecontent("inspection-agencies");
    $scope.menutitle = NavigationService.makeactive("Inspection Agencies");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.openInspection = function (data, id) {
        $scope.modaltitle = data;
        if (id != undefined) {
            NavigationService.getOneAgency(id, function (data) {
                if (data.value == true) {
                    $scope.agency = data.data;
                }
            });
        } else {
            $scope.agency = {};
        }
        $scope.agencypop = $uibModal.open({
            animation: true,
            templateUrl: "views/modal/inspection.html",
            scope: $scope,
        });
    };
    $scope.agency = {};
    $scope.addAgency = function (agency) {
        NavigationService.addAgency(agency, function (data) {
            if (data.value == true) {
                // console.log("done");
                toastr.success("Agency Added Successfully", "Information");
                closeAgencyPopup();
                $scope.agency = {};
                $scope.getAgency();
            }
        });
    }

    $scope.deleteAgency = function (id) {
        NavigationService.deleteAgency(id, function (data) {
            if (data.value == true) {
                $scope.getAgency();
                toastr.success("Agency Deleted Successfully", "Information");
            }
        });
    }

    $scope.getAgency = function () {
        NavigationService.getAgency(function (data) {
            if (data.value == true) {
                $scope.allAgency = data.data.results;
            } else {
                $scope.allAgency = "";
            }
        });
    }

    $scope.getAgency();

    closeAgencyPopup = function () {
        $scope.agencypop.close();
    }

})

.controller('AddInspectionAgencyCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("add-inspection-agency");
    $scope.menutitle = NavigationService.makeactive("Add Inspection Agency");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('AddTransporterCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("add-transporter");
    $scope.menutitle = NavigationService.makeactive("Add Transporter");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('TransportorderCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("transport-order");
    $scope.menutitle = NavigationService.makeactive("Transport Order");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('BrandsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.changecontent("brands");
    $scope.menutitle = NavigationService.makeactive("Brands");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.getBrands = function () {
        NavigationService.getBrands(function (data) {
            if (data.value == true) {
                $scope.allBrands = data.data.results;
            } else {
                $scope.allBrands = [];
            }
        });
    }

    $scope.getBrands();

    $scope.openBrand = function () {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/brandmanufacturer.html",
            scope: $scope,
        });
    };

})

.controller('TransportersCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("transporters");
    $scope.menutitle = NavigationService.makeactive("Transporters");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('AdsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("ads");
    $scope.menutitle = NavigationService.makeactive("Ads");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('AddAdCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("add-ad");
    $scope.menutitle = NavigationService.makeactive("Add ad");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('ReportsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("reports");
    $scope.menutitle = NavigationService.makeactive("Reports");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('TransporterPaymentCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("transporter-payment");
    $scope.menutitle = NavigationService.makeactive("Transporter Payment");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('PendingDeliveryCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("pending-delivery");
    $scope.menutitle = NavigationService.makeactive("Pending Delivery");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('SuperAdminCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("super-admin");
    $scope.menutitle = NavigationService.makeactive("Super Admin");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('PaymentProcessCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("payment-process");
    $scope.menutitle = NavigationService.makeactive("Payment Process");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('PaymentTransactionMasterCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("payment-transaction-master");
    $scope.menutitle = NavigationService.makeactive("Payment Transaction Master");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('EditAgencyDetailsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("edit-agency-details");
    $scope.menutitle = NavigationService.makeactive("Edit Agency Details");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = 'views/headeragency.html';
    TemplateService.sidemenu = 'views/sidemenuagency.html';

    $scope.getAgencyDetails = function () {
        NavigationService.getAgencyByID(function (data) {
            if (data.value == true) {
                $scope.agencyDetails = data.data;
            }
        });
    }

    $scope.getAgencyDetails();
})

.controller('InspectionLoginCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
    $scope.template = TemplateService.changecontent("inspection-login");
    $scope.menutitle = NavigationService.makeactive("Inspection Login");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = 'views/headeragencylogin.html';
    TemplateService.sidemenu = '';


    $scope.logindata = {};
    $scope.error = false
    $scope.Login = function (logindata) {
        NavigationService.InspectionLogin(logindata, function (data) {
            if (data.value == true) {
                $state.go("view-products");
            } else {
                $scope.error = true;
                $scope.errmsg = data.data.message;
            }
        });
    }

})

.controller('SellerDashboardCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("seller-dashboard");
    $scope.menutitle = NavigationService.makeactive("Seller Dashboard");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.rate = 3;
    $scope.max = 5;
})

.controller('GradesStandardsCtrl', function ($scope, toastr, TemplateService, NavigationService, $timeout, $uibModal, $state) {
        $scope.template = TemplateService.changecontent("grades-standards");
        $scope.menutitle = NavigationService.makeactive("Grades Standards");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.getGradesStandards = function () {
            NavigationService.getGradesStandards($state.params.id, function (data) {
                if (data.value == true) {
                    $scope.allGrades = data.data;
                    console.log("$scope.allGrades", $scope.allGrades);
                }
            });
        }

        $scope.getGradesStandards();

        $scope.errmsg = false;
        $scope.addGrade = function (id, grade, indexid) {
            console.log("aa", indexid, grade, id);
            if (grade != undefined) {
                var senddata = {};
                senddata.moc = id;
                senddata.name = grade;

                console.log("searchdata", senddata);

                NavigationService.addGrade(senddata, function (data) {
                    if (data.value == true) {
                        // $scope.formdata ={};
                        toastr.success("Grade added Successfully", "Information");
                        $scope.getGradesStandards();
                        document.getElementById(indexid).value = "";
                        $scope.errmsg = false;

                    }
                });
            } else {
                $scope.errmsg = true;
                $scope.myindex = indexid;
            }
        }

        $scope.hidetext = false;
        $scope.showtext = true;
        $scope.showEditData = function (indexid) {
            $scope.hidetext = true;
            $scope.showtext = false;
            $scope.indexid = indexid;
        }

        $scope.editGrade = function (mocdata, cat, indexid) {
            console.log("Aa", mocdata, cat, indexid);
            if (mocdata.name !== "") {
                var senddata = {};
                senddata.moc = cat;
                senddata.name = mocdata.name;
                senddata._id = mocdata._id;
                $scope.hidetext = false;
                $scope.showtext = true;
                $scope.indexid = "a";
                NavigationService.editGrade(senddata, function (data) {
                    if (data.value == true) {
                        // $scope.formdata ={};
                        toastr.success("Grade updated Successfully", "Information");
                        $scope.errmsg = false;
                        $scope.getGradesStandards();
                    }
                });
            } else {
                $scope.errmsg = true;
                $scope.myindex = indexid;
            }
        }
        $scope.deleteGrade = function (mocid) {
            NavigationService.deleteGrade(mocid, function (data) {
                if (data.value == true) {
                    toastr.success("Grade deleted Successfully", "Information");
                    $scope.getGradesStandards();
                }
            });
        }


        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
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

        $scope.toggleMin = function () {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
        };

        $scope.toggleMin();

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };

        $scope.setDate = function (year, month, day) {
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
        $scope.events = [{
            date: tomorrow,
            status: 'full'
        }, {
            date: afterTomorrow,
            status: 'partially'
        }];

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }
    })
    .controller('HomebannerCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.changecontent("homebanner");
        $scope.menutitle = NavigationService.makeactive("Home Banner");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.openHome = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/editbanner.html",
                scope: $scope,
            });
        };

    })
    .controller('TestimonialsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.changecontent("testimonials");
        $scope.menutitle = NavigationService.makeactive("Testimonials");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.openTestimonial = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/edit-testimonial.html",
                scope: $scope,
            });
        };

    })
    .controller('AboutCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.changecontent("about");
        $scope.menutitle = NavigationService.makeactive("About");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.openAbout = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/edit-about.html",
                scope: $scope,
            });
        };

    })
    .controller('ProductbannerCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.changecontent("product-banner");
        $scope.menutitle = NavigationService.makeactive("Product Banner");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.openBanner = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/editbanner.html",
                scope: $scope,
            });
        };

    })
    .controller('ViewContactCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.changecontent("view-contact");
        $scope.menutitle = NavigationService.makeactive("View Contact");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.openCotact = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/opencontact.html",
                scope: $scope,
            });
        };

    })
    .controller('ViewCareerCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.changecontent("view-career");
        $scope.menutitle = NavigationService.makeactive("View Career");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.openCareer = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/opencareer.html",
                scope: $scope,
            });
        };
    })
    .controller('ViewPressCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.changecontent("view-press");
        $scope.menutitle = NavigationService.makeactive("View Press");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.openPress = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/openpress.html",
                scope: $scope,
            });
        };
    })
    .controller('GradesStandards1Ctrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.changecontent("grades-standards1");
        $scope.menutitle = NavigationService.makeactive("Grades Standards1");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.openstandard = function () {
            $uibModal.open({
                animation: true,
                controller: 'GradesStandards1Ctrl',
                templateUrl: "views/modal/gradestandard.html",
                scope: $scope,
                windowClass: "width80",
            });
        };

        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
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

        $scope.toggleMin = function () {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
        };

        $scope.toggleMin();

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };

        $scope.setDate = function (year, month, day) {
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
        $scope.events = [{
            date: tomorrow,
            status: 'full'
        }, {
            date: afterTomorrow,
            status: 'partially'
        }];

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }
    })

.controller('ViewOrdersCtrl', function ($scope, toastr, $state, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("view-orders");
    $scope.menutitle = NavigationService.makeactive("View orders");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
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

    $scope.toggleMin = function () {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function (year, month, day) {
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
    $scope.events = [{
        date: tomorrow,
        status: 'full'
    }, {
        date: afterTomorrow,
        status: 'partially'
    }];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }


    $scope.updateBill = function (orderdata) {
        var senddata = {};
        senddata._id = orderdata._id;
        senddata.deliveryStatus = orderdata.deliveryStatus;
        senddata.transporterComment = orderdata.transporterComment;
        senddata.transporterReceiept = orderdata.transporterReceiept;
        NavigationService.updateBill(senddata, function (data) {
            if (data.value == true) {
                toastr.success("Order Status Updated!", "Information");
            }
        });
    };
    $scope.getOneOrder = function () {
        $scope.calcst = 0.00;
        $scope.calvat = 0.00;
        NavigationService.getOneOrder($state.params.id, function (data) {
            if (data.value == true) {
                $scope.detailBill = data.data;
                $scope.sizeQty = $scope.detailBill.sizeQty;
                if ($scope.detailBill.order.delivery[0].deliveryState == $scope.detailBill.warehouse.warehouseState) {
                    $scope.calvat = ($scope.detailBill.price * ($scope.detailBill.inventory.vat / 100));
                    $scope.vat = ($scope.calvat).toFixed(2);
                    $scope.cst = 0.00;
                } else {
                    $scope.calcst = ($scope.detailBill.price * ($scope.detailBill.inventory.cst / 100));
                    $scope.cst = ($scope.calcst).toFixed(2);
                    $scope.vat = 0.00;
                }

                // $scope.discount = ($scope.detailBill.inventory.finalPrice * ($scope.detailBill.inventory.discount / 100)).toFixed(2);
                // $scope.granTotal = ($scope.detailBill.price + $scope.calvat + $scope.detailBill.transporterCharges) - $scope.discount;
                $scope.granTotal = ($scope.detailBill.price + $scope.calcst + $scope.calvat + $scope.detailBill.transporterCharges);
                console.log($scope.vat, $scope.granTotal, $scope.calcst);
                console.log("$scope.detailBill", $scope.detailBill);
            } else {
                $scope.detailBill = "";
            }
        });
    }
    $scope.getOneOrder();
})


.controller('OrdersCtrl', function ($scope, toastr, TemplateService, NavigationService, $timeout, $state, $uibModal) {

    $scope.template = TemplateService.changecontent("orders");
    $scope.menutitle = NavigationService.makeactive("Orders");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.updateOrder = function (paymentstatus, id) {
        console.log("paymentstatus", paymentstatus, id);
    };

    $scope.editOrder = function (id) {
        $scope.order = {};
        var subid = id.slice(1);
        $scope.order.orderid = subid;
        NavigationService.getOrder($scope.order.orderid, function (data) {
            if (data.value == true) {
                $scope.orderData = data.data;
                console.log("aa", $scope.orderData);
                ordermod = $uibModal.open({
                    animation: true,
                    templateUrl: "views/modal/editorder.html",
                    scope: $scope,
                });
            }
        });


    }

    $scope.updateOrder = function (orderdata) {
        console.log("Aaa", orderdata);
        var senddata = {};
        senddata._id = orderdata._id;
        senddata.paymentStatus = orderdata.paymentStatus;
        senddata.paymentMethod = "NEFT/RTGS";
        senddata.comment = orderdata.comment;
        NavigationService.updateOrderStatusByAdmin(senddata, function (data) {
            if (data.value == true) {
                toastr.success("Order Payment Status Updated!", "Information");
                ordermod.close();
            }
        });
    }

    $scope.getCountDown = function (adate, orderid, myindex) {
        var a = moment(adate);
        // var b = moment(bdate);
        var orderid = orderid.substring(1, orderid.length);
        var b = moment(a).add(2, 'days');
        var cdate = new Date();
        var currentTime = moment(cdate);
        var duration = moment.duration(b.diff(currentTime));
        // console.log("duration.days()", duration.days(), "duration.hours()", duration.hours(), "duration.minutes()", duration.minutes(), "duration.seconds()", duration.seconds());

        if (new Date(currentTime) < new Date(b)) {
            // console.log("innnnnnn");
            var interval = 1;
            var timer = setInterval(function () {
                // console.log("duration1", duration);
                duration = moment.duration(duration.asSeconds() - interval, 'seconds');
                if (duration > 0) {
                    document.getElementById("countdays" + orderid + myindex).value = duration.days();
                    document.getElementById("counthours" + orderid + myindex).value = duration.hours();
                    document.getElementById("countmin" + orderid + myindex).value = duration.minutes();
                    document.getElementById("countseconds" + orderid + myindex).value = duration.seconds();
                } else {
                    // document.getElementById("countercomplete" + orderid + myindex).innerHTML = moment().format('MMMM Do YYY');
                    clearInterval(timer);
                }
            }, 1000);
        } else {
            console.log("stop", "countercomplete" + orderid + myindex);
         // document.getElementById("countercomplete"+myindex).innerHTML =new Date();
        }
    }

    // $scope.getCountDown();
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
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

    $scope.toggleMin = function () {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function (year, month, day) {
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
    $scope.events = [{
        date: tomorrow,
        status: 'full'
    }, {
        date: afterTomorrow,
        status: 'partially'
    }];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }

    var senddata = {};
    if ($state.params.id) {
        if ($state.params.type === "seller") {
            senddata.sellerid = $state.params.id;
        } else if ($state.params.type === "buyer") {
            senddata.buyerid = $state.params.id;
        }
        senddata.status = "All"
        senddata.createdAt = ""

        if ($state.params.type === "coupon") {
            senddata.code = $state.params.id;
            NavigationService.getAllOrdersByCoupon(senddata, function (data) {
                if (data.value == true) {
                    $scope.allData = data.data.results;
                    console.log("$scope.aaaaallData", $scope.allData);
                } else {
                    $scope.allData = [];
                }
            });
        }
        if ($state.params.type !== "coupon") {
            NavigationService.getAllOrdersBySeller(senddata, function (data) {
                if (data.value == true) {
                    $scope.selleris = true;
                    $scope.allData = data.data;
                    console.log("$scope.aaaaallData", $scope.allData);
                } else {
                    $scope.allData = [];
                }
            });
        }
    } else {
        senddata.sellerid = "";
        senddata.status = "All"
        senddata.createdAt = ""
        NavigationService.getAllOrders(senddata, function (data) {
            if (data.value == true) {
                $scope.selleris = false;
                $scope.allData = data.data;
                console.log("$scope.allData", $scope.allData);
            } else {
                $scope.allData = [];
            }
        });
    }



})

.controller('CategogiesCtrl', function ($scope, TemplateService, NavigationService, $timeout) {

    $scope.template = TemplateService.changecontent("categories");
    $scope.menutitle = NavigationService.makeactive("Categories");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.oneAtATime = true;
})

.controller('CategoryPriceRangeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {

    $scope.template = TemplateService.changecontent("category-price-range");
    $scope.menutitle = NavigationService.makeactive("category-price-range");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.oneAtATime = true;
    $scope.getMaterial = function () {
        NavigationService.getMaterial(function (data) {
            if (data.value == true) {
                $scope.allData = data.data;
                // console.log("$scope.allData ", $scope.allData);
            } else {
                $scope.allData = [];
            }
        });
    }
    $scope.getMaterial();

    $scope.updatePercentage = function (moc) {
        console.log("in percentage", moc);
        var senddata = {};
        senddata._id = moc._id;
        senddata.pricePercentage = moc.pricePercentage;
        NavigationService.editPercentage(senddata, function (data) {
            if (data.value == true) {
                $scope.getMaterial();
            }
        });
    }

})

.controller('SellersCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("sellers");
    $scope.menutitle = NavigationService.makeactive("Sellers");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
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

    $scope.toggleMin = function () {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function (year, month, day) {
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
    $scope.events = [{
        date: tomorrow,
        status: 'full'
    }, {
        date: afterTomorrow,
        status: 'partially'
    }];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }


    $scope.getAllVerifiedSeller = function () {

        NavigationService.getAllVerifiedSeller(function (data) {
            if (data.value == true) {
                $scope.AllSeller = data.data.results;
                console.log("sellers", $scope.AllSeller);
            }
        });
    }
    $scope.getAllVerifiedSeller();
})

.controller('BuyersCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("buyers");
        $scope.menutitle = NavigationService.makeactive("Buyer");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.getAllVerifiedBuyer = function () {
            NavigationService.getAllVerifiedBuyer(function (data) {
                if (data.value == true) {
                    $scope.AllBuyer = data.data.results;
                    console.log("Buyer", $scope.AllBuyer);
                }
            });
        }
        $scope.getAllVerifiedBuyer();
    })
    .controller('View-sellersCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
        $scope.template = TemplateService.changecontent("view-sellers");
        $scope.menutitle = NavigationService.makeactive("View-sellers");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        NavigationService.getOneSeller($state.params.id, function (data) {
            if (data.value == true) {
                $scope.sellerData = data.data;
                console.log("sellerdata", $scope.sellerData);
            }
        });

        $scope.rate = 3;
        $scope.max = 5;
        $scope.isReadonly = false;
        $scope.salesBar = {

            options: {
                //This is the Main Highcharts chart config. Any Highchart options are valid here.
                //will be overriden by values specified below.
                chart: {
                    type: 'column'
                },
                title: {
                    text: null
                }


            },
            //The below properties are watched separately for changes.

            //Series object (optional) - a list of series using normal Highcharts series options.
            series: [{
                data: _.times(12, function () {
                    return Math.random(100);
                })
            }],

            loading: false,

            yAxis: {

                // currentMin: 0,
                // currentMax: 100,
                title: {
                    text: 'ORDERS',
                    align: 'low'
                }

            },

            xAxis: {
                currentMin: 0,
                currentMax: 11,

                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                title: {
                    text: 'MONTHS',
                    align: 'low'
                }

            },
            size: {
                width: 700,
                height: 300
            },

            //function (optional)
            func: function (chart) {
                //setup some logic for the chart
            }
        };


        $scope.freqPie = {

            options: {
                chart: {
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 60,
                        beta: 0
                    }
                },
                title: {
                    text: null
                }

            },
            legend: {
                align: 'right',
                verticalAlign: 'top',
                y: 0,
                layout: 'vertical'
            },


            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 50,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [
                    ['Firefox', 35.0],

                    {
                        name: 'Chrome',
                        y: 15.0,
                        sliced: true,
                        selected: true
                    },
                    ['Safari', 30],
                    ['Opera', 20]

                ]
            }],
            size: {
                width: 350,
                height: 300
            }
        };

        $scope.orderPie = {

            options: {
                chart: {
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 60,
                        beta: 0
                    }
                },
                title: {
                    text: null
                }

            },
            legend: {
                align: 'right',
                verticalAlign: 'top',
                y: 0,
                layout: 'vertical'
            },


            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 50,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [
                    ['Firefox', 70.0],

                    {
                        name: 'Chrome',
                        y: 30.0,
                        sliced: true,
                        selected: true
                    },

                ]
            }],
            size: {
                width: 350,
                height: 139
            }
        };

        $scope.refundPie = {

            options: {
                chart: {
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 60,
                        beta: 0
                    }
                },
                title: {
                    text: null
                }

            },
            legend: {
                align: 'right',
                verticalAlign: 'top',
                y: 0,
                layout: 'vertical'
            },


            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 50,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [
                    ['Firefox', 65.0], {
                        name: 'Chrome',
                        y: 35.0,
                        sliced: true,
                        selected: true
                    },


                ]
            }],
            size: {
                width: 350,
                height: 139
            }
        };

        $scope.hoveringOver = function (value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
        };


    })


.controller('View-buyersCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
        $scope.template = TemplateService.changecontent("view-buyers");
        $scope.menutitle = NavigationService.makeactive("View-buyers");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.rate = 3;
        $scope.max = 5;
        $scope.isReadonly = false;

        $scope.hoveringOver = function (value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
        };

        NavigationService.getOneBuyer($state.params.id, function (data) {
            if (data.value == true) {
                $scope.buyerData = data.data;
                console.log("buyerdata", $scope.buyerData);
            }
        });
    })
    .controller('Request-sellersCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
        $scope.template = TemplateService.changecontent("request-sellers");
        $scope.menutitle = NavigationService.makeactive("Request-sellers");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.getAllSeller = function (searchdata) {
            NavigationService.getAllSeller(searchdata, function (data) {
                if (data.value == true) {
                    $scope.AllSeller = data.data;
                } else {
                    $scope.AllSeller = [];
                }
            });
        }
        var status = "All";
        $scope.getAllSeller(status);
    })
    .controller('Request-buyersCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("request-buyers");
        $scope.menutitle = NavigationService.makeactive("Request-buyers");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.getAllBuyer = function (searchdata) {
            NavigationService.getAllBuyer(searchdata, function (data) {
                if (data.value == true) {
                    $scope.AllBuyer = data.data;
                    console.log("Buyer", $scope.AllBuyer);
                } else {
                    $scope.AllBuyer = [];
                }
            });
        }
        var status = "All";
        $scope.getAllBuyer(status);
    })
    .controller('View-request-sellersCtrl', function ($scope, toastr, TemplateService, NavigationService, $timeout, $state) {
        $scope.template = TemplateService.changecontent("view-request-sellers");
        $scope.menutitle = NavigationService.makeactive("View-request-sellers");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        NavigationService.getOneSeller($state.params.id, function (data) {
            if (data.value == true) {
                $scope.sellerData = data.data;
                // console.log("aaaaa",$scope.sellerData);
            }
        });

        $scope.acceptSeller = function (sellerdata) {
            var senddata = {}
            senddata._id = sellerdata._id;
            senddata.email = sellerdata.email;
            senddata.mobile = sellerdata.mobile;
            senddata.firstName = sellerdata.firstName;
            senddata.comment = sellerdata.comment;
            senddata.cstTinNoVerified = sellerdata.cstTinNoVerified;
            senddata.vatTinNoVerified = sellerdata.vatTinNoVerified;
            senddata.panNoVerified = sellerdata.panNoVerified;
            senddata.status = "verified";
            if (senddata.cstTinNoVerified == false || senddata.vatTinNoVerified == false || senddata.panNoVerified == false) {
                toastr.error("Please verified all Documents!", "Error");
            } else {
                NavigationService.updateSeller(senddata, function (data) {
                    if (data.value == true) {
                        toastr.success("Seller Status Updated!", "Information");
                        $state.go("request-sellers");
                    }
                });
            }
        }

        $scope.rejectSeller = function (sellerdata) {
            var senddata = {}
            senddata._id = sellerdata._id;
            senddata.email = sellerdata.email;
            senddata.mobile = sellerdata.mobile;
            senddata.firstName = sellerdata.firstName;
            senddata.comment = sellerdata.comment;
            senddata.cstTinNoVerified = sellerdata.cstTinNoVerified;
            senddata.vatTinNoVerified = sellerdata.vatTinNoVerified;
            senddata.panNoVerified = sellerdata.panNoVerified;
            senddata.status = "rejected";
            NavigationService.updateSeller(senddata, function (data) {
                if (data.value == true) {
                    toastr.success("Seller Status Updated!", "Information");
                    $state.go("request-sellers");
                }
            });
        }
    })
    .controller('View-request-buyersCtrl', function ($scope, $state, toastr, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("view-request-buyers");
        $scope.menutitle = NavigationService.makeactive("View-request-buyers");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        NavigationService.getOneBuyer($state.params.id, function (data) {
            if (data.value == true) {
                $scope.buyerData = data.data;
                // console.log("aaaaa",$scope.sellerData);
            }
        });

        $scope.acceptBuyer = function (buyerdata) {
            console.log("sdata", buyerdata);
            var senddata = {}
            senddata._id = buyerdata._id;
            senddata.email = buyerdata.email;
            senddata.mobile = buyerdata.mobile;
            senddata.firstName = buyerdata.firstName;
            senddata.comment = buyerdata.comment;
            senddata.cstTinNoVerified = buyerdata.cstTinNoVerified;
            senddata.vatTinNoVerified = buyerdata.vatTinNoVerified;
            senddata.panNoVerified = buyerdata.panNoVerified;
            senddata.status = "verified";
            console.log("new data", senddata);

            if (senddata.cstTinNoVerified == false || senddata.vatTinNoVerified == false || senddata.panNoVerified == false) {
                toastr.error("Please verified all Documents!", "Error");
            } else {
                NavigationService.updateBuyer(senddata, function (data) {
                    if (data.value == true) {
                        toastr.success("Buyer Status Updated!", "Information");
                        $state.go("request-buyers");
                    }
                });
            }
        }

        $scope.rejectBuyer = function (buyerdata) {
            console.log("sdata", buyerdata);
            var senddata = {}
            senddata._id = buyerdata._id;
            senddata.email = buyerdata.email;
            senddata.mobile = buyerdata.mobile;
            senddata.firstName = buyerdata.firstName;
            senddata.comment = buyerdata.comment;
            senddata.cstTinNoVerified = buyerdata.cstTinNoVerified;
            senddata.vatTinNoVerified = buyerdata.vatTinNoVerified;
            senddata.panNoVerified = buyerdata.panNoVerified;
            senddata.status = "rejected";
            NavigationService.updateBuyer(senddata, function (data) {
                if (data.value == true) {
                    toastr.success("Buyer Status Updated!", "Information");
                    $state.go("request-buyers");
                }
            });
        }
    })
    .controller('Payment-to-sellersCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("payment-to-sellers");
        $scope.menutitle = NavigationService.makeactive("Payment-to-sellers");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;
    })
    .controller('Refund-to-buyersCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.changecontent("refund-to-buyers");
        $scope.menutitle = NavigationService.makeactive("Refund-to-buyers");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.openstandard = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/refundbuyer.html",
                scope: $scope,

                //                windowClass: "width80",
            });
        };
        $scope.openView = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/refundbuyerview.html",
                scope: $scope,

                //                windowClass: "width80",
            });
        };
        $scope.barChartConfig = {

            options: {
                //This is the Main Highcharts chart config. Any Highchart options are valid here.
                //will be overriden by values specified below.
                chart: {
                    type: 'column'
                },
                tooltip: {
                    style: {
                        padding: 10,
                        fontWeight: 'bold'
                    }
                }
            },
            //The below properties are watched separately for changes.

            //Series object (optional) - a list of series using normal Highcharts series options.
            series: [{
                data: _.times(4, function () {
                    return Math.random(100);
                })
            }],

            loading: false,

            xAxis: {
                currentMin: 0,
                currentMax: 3,

            },

            //function (optional)
            func: function (chart) {
                //setup some logic for the chart
            }
        };
    })
    .controller('SettingCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("setting");
        $scope.menutitle = NavigationService.makeactive("Setting");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;
    })
    .controller('PaymentCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.changecontent("paymentseller");
        $scope.menutitle = NavigationService.makeactive("Payment Seller");
        TemplateService.title = $scope.menutitle;
        $scope.open
        $scope.navigation = NavigationService.getnav();
        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };
        $scope.popup1 = {
            opened: false
        };

        $scope.openDate = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/datemodal.html",
                scope: $scope,
            });
        };

        $scope.convertedPay = [{
            paymentid: "P003",
            sellerid: "SB009",
            amount: "7100",
            transactionref: "ABC001A, ABC003X",
            status: "Paid"
        }, {
            paymentid: "P004",
            sellerid: "SB009",
            amount: "7100",
            transactionref: "ABC001A, ABC003X",
            status: "Paid"
        }, {
            paymentid: "P005",
            sellerid: "SB009",
            amount: "7100",
            transactionref: "ABC001A, ABC003X",
            status: "Paid"
        }];

        $scope.showData = false;
        $scope.showText = true;
        $scope.showConverted = function (indexid) {
            $scope.showData = true;
            $scope.myindex = indexid;
        };

    })
    .controller('Assign-agencyCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("assign-agency");
        $scope.menutitle = NavigationService.makeactive("Assign-agency");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('Inspection-panelCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("inspection-panel");
        $scope.menutitle = NavigationService.makeactive("Inspection-panel");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('View-productsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("view-products");
        $scope.menutitle = NavigationService.makeactive("View-products");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = 'views/headeragency.html';
        TemplateService.sidemenu = 'views/sidemenuagency.html';
        $scope.getInventory = function () {
            NavigationService.getInventoryByAgency(function (data) {
                if (data.value == true) {
                    $scope.getAllInventory = data.data;
                } else {
                    $scope.getAllInventory = [];
                }
            });
        }
        $scope.getInventory();

        $scope.uploadReport = function (err, data) {
            if (err) {
                $scope.errorMsgpan = err;
            } else {
                $scope.errorMsgpan = "Successfully uploaded";
            }
        }
        $scope.sendReport = function (reportdata) {
            var senddata = {};
            senddata._id = reportdata._id;
            senddata.report = reportdata.report;
            senddata.remark = reportdata.remark;
            NavigationService.sendReport(senddata, function (data) {
                if (data.value == true) {
                    $scope.getInventory();
                }
            });
        }
    })

.controller('Coupon-codeCtrl', function ($scope, toastr, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.changecontent("coupon-code");
    $scope.menutitle = NavigationService.makeactive("Coupon-code");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.openedit = function (data, id) {
        $scope.title = data;
        if (id) {
            NavigationService.getOneCoupon(id, function (data) {
                if (data.value == true) {
                    $scope.coupon = data.data;
                    $scope.coupon.startDate = new Date($scope.coupon.startDate);
                    $scope.coupon.endDate = new Date($scope.coupon.endDate);
                }
            });
        } else {
            $scope.coupon = {};
        }
        openmodc = $uibModal.open({
            animation: true,
            templateUrl: "views/modal/openedit.html",
            scope: $scope,
            windowClass: "width60",
        });
    };

    $scope.filter = {};
    $scope.filter.page = 1;

    $scope.getAllCoupon = function () {
        NavigationService.getAllCoupon($scope.filter, function (data) {
            if (data.value == true) {
                $scope.allCoupon = data.data.results;
                $scope.totalItems = data.data.total;
                console.log("coupon", $scope.allCoupon);
            }
        });
    }

    $scope.getAllCoupon();

    $scope.addCoupon = function (coupondata) {
        console.log("aa", coupondata);
        NavigationService.addCoupon(coupondata, function (data) {
            if (data.value == true) {
                openmodc.close();
                toastr.success("Coupon Added!", "Information");
                $scope.getAllCoupon();
            }
        });
    }

    $scope.editCoupon = function () {

    }

    $scope.deleteCoupon = function (id) {
        NavigationService.deleteCoupon(id, function (data) {
            if (data.value == true) {
                toastr.success("Coupon Deleted!", "Information");
                $scope.getAllCoupon();
            }
        });
    }

})

.controller('headerctrl', function ($scope, TemplateService, NavigationService, $state) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);

    $scope.getUser = function () {
        NavigationService.getUser(function (data) {
            if (data.value == true) {
                $scope.userData = data.data;
                // if ($state.current.name == "view-products" || $state.current.name == "edit-agency-details") {
                //     $state.go("dashboard");
                // }
            } else {
                if ($state.current.name == "view-products" || $state.current.name == "edit-agency-details") {

                } else {
                    $state.go("loginpage");
                }

            }
        });
    }

    $scope.getUser();


    $scope.Logout = function () {
        NavigationService.Logout(function (data) {
            if (data.value == true) {
                $state.go("loginpage");
            }
        });
    }


})

.controller('headeragencyctrl', function ($scope, TemplateService, NavigationService, $state) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);

    // $scope.pdfURL = "http://localhost:1337/upload/readFile";
    $scope.getInspectionUser = function () {
        NavigationService.getInspectionUser(function (data) {
            if (data.value == true) {
                $scope.userData = data.data;
            } else {
                if ($state.current.name == "view-products" || $state.current.name == "edit-agency-details") {
                    $state.go("inspection-login");
                }
            }
        });
    }

    $scope.getInspectionUser();


    $scope.Logout = function () {
        NavigationService.InspectionLogout(function (data) {
            if (data.value == true) {
                $state.go("inspection-login");
            }
        });
    }
})

.controller('languageCtrl', function ($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function () {

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