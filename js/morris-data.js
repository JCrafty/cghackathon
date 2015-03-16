$(function() {

    Morris.Area({
        element: 'morris-area-chart-vap-test',
                data: [{"Last Name":"BXWR TR","First Name":"","MI":"","Transaction":"Redemption: Auto plan","Fund Name":"The Tax-Exempt Fund of Virginia - A","Account Number":12010526,"Trade Date":"02/17/2015","Transaction Amount":"-$20.00"},
                       {"Last Name":"BALL","First Name":"TENNIS","MI":"","Transaction":"Redemption: Auto plan","Fund Name":"Washington Mutual Investors Fund - 529-A","Account Number":85595146,"Trade Date":"02/17/2015","Transaction Amount":"-$15.99"},
                       {"Last Name":"BALL","First Name":"TENNIS","MI":"","Transaction":"Redemption: Auto plan","Fund Name":"Washington Mutual Investors Fund - 529-A","Account Number":85595146,"Trade Date":"02/17/2015","Transaction Amount":"-$15.99"},
                       {"Last Name":"TEST","First Name":"EVANS","MI":"","Transaction":"Purchase: Auto plan","Fund Name":"The Growth Fund of America - A","Account Number":85587870,"Trade Date":"02/17/2015","Transaction Amount":"$10.00"},
                       {"Last Name":"TEST","First Name":"EVANS","MI":"","Transaction":"Purchase: Auto plan","Fund Name":"The Growth Fund of America - A","Account Number":85587870,"Trade Date":"02/17/2015","Transaction Amount":"$10.00"},
                       {"Last Name":"TEST","First Name":"EVANS","MI":"","Transaction":"Purchase: Auto plan","Fund Name":"The Growth Fund of America - A","Account Number":85587870,"Trade Date":"02/17/2015","Transaction Amount":"$10.00"},
                       {"Last Name":"TEST","First Name":"EVANS","MI":"","Transaction":"Purchase: Auto plan","Fund Name":"The Growth Fund of America - A","Account Number":85587870,"Trade Date":"02/17/2015","Transaction Amount":"$10.00"},
                       {"Last Name":"TEST","First Name":"EVANS","MI":"","Transaction":"Purchase: Auto plan","Fund Name":"The Growth Fund of America - A","Account Number":85587870,"Trade Date":"02/17/2015","Transaction Amount":"$10.00"},
                       {"Last Name":"TEST","First Name":"EVANS","MI":"","Transaction":"Purchase: Auto plan","Fund Name":"The Growth Fund of America - A","Account Number":85587870,"Trade Date":"02/17/2015","Transaction Amount":"$10.00"},
                       {"Last Name":"TEST","First Name":"EVANS","MI":"","Transaction":"Purchase: Auto plan","Fund Name":"The Growth Fund of America - A","Account Number":85587870,"Trade Date":"02/17/2015","Transaction Amount":"$10.00"},
                       {"Last Name":"TEST","First Name":"EVANS","MI":"","Transaction":"Purchase: Auto plan","Fund Name":"The Growth Fund of America - A","Account Number":85587870,"Trade Date":"02/17/2015","Transaction Amount":"$10.00"},
                       {"Last Name":"GEORGE","First Name":"GIANNA","MI":"","Transaction":"Redemption: Auto plan","Fund Name":"The Bond Fund of America - 529-A","Account Number":85593332,"Trade Date":"02/17/2015","Transaction Amount":"-$9.78"},
                       {"Last Name":"GEORGE","First Name":"GIANNA","MI":"","Transaction":"Redemption: Auto plan","Fund Name":"The Bond Fund of America - 529-A","Account Number":85593332,"Trade Date":"02/17/2015","Transaction Amount":"-$9.78"
        }],
        xkey: 'Trade Date',
        ykeys: ['Transaction Amount'],
        labels: ['Transaction Amount'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
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
