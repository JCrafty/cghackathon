$(function() {

    Morris.Area({
        element: 'morris-area-chart',
                data: [{"purchases":1200.00,"tradeDate":"2015-02-01","totalAssets":1456799900.00,"withdrawals":10000.00},
                       {"purchases":500.00,"tradeDate":"2015-02-02","totalAssets":1456729900.00,"withdrawals":5000.00},
                       {"purchases":2500.00,"tradeDate":"2015-02-03","totalAssets":1456699900.00,"withdrawals":5000.00},
                       {"purchases":180.00,"tradeDate":"2015-02-04","totalAssets":1456899900.00,"withdrawals":1500.00},
                       {"purchases":230.00,"tradeDate":"2015-02-05","totalAssets":1456709900.00,"withdrawals":10000.00},
                       {"purchases":4500.00,"tradeDate":"2015-02-06","totalAssets":1456299900.00,"withdrawals":2500.00},
                       {"purchases":1200.00,"tradeDate":"2015-02-07","totalAssets":1456099900.00,"withdrawals":1200.00},
                       {"purchases":1000.00,"tradeDate":"2015-02-08","totalAssets":1456799900.00,"withdrawals":10000.00},
                       {"purchases":14000.00,"tradeDate":"2015-02-09","totalAssets":1456729900.00,"withdrawals":4000.00},
                       {"purchases":280.00,"tradeDate":"2015-02-10","totalAssets":1456699900.00,"withdrawals":2800.00},
                       {"purchases":1375.00,"tradeDate":"2015-02-11","totalAssets":1456899900.00,"withdrawals":375.00},
                       {"purchases":2000.00,"tradeDate":"2015-02-12","totalAssets":1456709900.00,"withdrawals":2300.00},
                       {"purchases":15000.00,"tradeDate":"2015-02-13","totalAssets":1456299900.00,"withdrawals":5000.00},
                       {"purchases":16000.00,"tradeDate":"2015-02-14","totalAssets":1456099900.00,"withdrawals":6000.00},
                       {"purchases":2000.00,"tradeDate":"2015-02-15","totalAssets":1456799900.00,"withdrawals":800.00},
                       {"purchases":700.00,"tradeDate":"2015-02-16","totalAssets":1456729900.00,"withdrawals":7800.00},
                       {"purchases":7000.00,"tradeDate":"2015-02-17","totalAssets":1456699900.00,"withdrawals":5600.00},
                       {"purchases":700.00,"tradeDate":"2015-02-18","totalAssets":1456899900.00,"withdrawals":7700.00},
                       {"purchases":14500.00,"tradeDate":"2015-02-19","totalAssets":1456709900.00,"withdrawals":4500.00},
                       {"purchases":11000.00,"tradeDate":"2015-02-20","totalAssets":1456299900.00,"withdrawals":1000.00},
                       {"purchases":4200.00,"tradeDate":"2015-02-21","totalAssets":1456099900.00,"withdrawals":1200.00},
                       {"purchases":2500.00,"tradeDate":"2015-02-22","totalAssets":1456799900.00,"withdrawals":1500.00},
                       {"purchases":3300.00,"tradeDate":"2015-02-23","totalAssets":1456729900.00,"withdrawals":3300.00},
                       {"purchases":3300.00,"tradeDate":"2015-02-24","totalAssets":1456699900.00,"withdrawals":2300.00},
                       {"purchases":5000.00,"tradeDate":"2015-02-25","totalAssets":1456899900.00,"withdrawals":4000.00},
                       {"purchases":2300.00,"tradeDate":"2015-02-26","totalAssets":1456709900.00,"withdrawals":300.00},
                       {"purchases":4900.00,"tradeDate":"2015-02-27","totalAssets":1456299900.00,"withdrawals":3900.00},
                       {"purchases":9800.00,"tradeDate":"2015-02-28","totalAssets":1456099900.00,"withdrawals":9500.00}],
        xkey: 'tradeDate',
        ykeys: ['purchases','withdrawals'],
        labels: ['Purchases','Redemptions'],
        pointSize: 1,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Retirement",
            value: 50
        }, {
            label: "College 529",
            value: 25
        }, {
            label: "Other Investments",
            value: 25
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
