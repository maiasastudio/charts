var orgChart = c3.generate({
    bindto: '#ds-org-chart',
    size:{
        height: 320
    },
    data: {
      x: 'date',
      columns: [
        ['Active', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ['Suspended', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ['Unsubscribed', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ['date', '2022-12-01', '2022-12-02', '2022-12-03', '2022-12-04', '2022-12-05', '2022-12-06', '2022-12-07', '2022-12-08', '2022-12-09', '2022-12-10', '2022-12-11', '2022-12-12']
      ],
      type: 'area-spline',
      labels: false
    },
    color: {
        pattern:['#0075E1', '#FFC333', '#DD3C51']
    },
    axis:{
        x:{
            type: 'timeseries',
            tick:{
                culling:{
                    max:6
                },
                fit:true,
                count: 12,
                format: '%d %b %Y'
            }
        },
        y:{
            padding: {top:50, bottom:50},
            label:{
                text: 'Organizations',
                position: 'outer-middle'
            }
        }
    },
    grid:{
        y:{
            show: true
        },
        x:{
            show: false
        }
    },
    zoom:{
        enabled: true
    },
    point:{
        show:true
    }
});

var accountChart = c3.generate({
    bindto: '#ds-account-chart',
    size:{
        height: 320
    },
    data: {
      x: 'date',
      columns: [
        ['Active', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ['Suspended', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ['Unsubscribed', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ['date', '2022-12-01', '2022-12-02', '2022-12-03', '2022-12-04', '2022-12-05', '2022-12-06', '2022-12-07', '2022-12-08', '2022-12-09', '2022-12-10', '2022-12-11', '2022-12-12']
      ],
      type: 'spline',
      labels: false
    },
    color: {
        pattern:['#0075E1', '#FFC333', '#DD3C51']
    },
    axis:{
        x:{
            type: 'timeseries',
            tick:{
                culling:{
                    max:6
                },
                fit:true,
                count: 12,
                format: '%d %b %Y'
            }
        },
        y:{
            padding: {top:50, bottom:0},
            label:{
                text: 'Accounts',
                position: 'outer-middle'
            }
        }
    },
    grid:{
        y:{
            show: true
        },
        x:{
            show: false
        }
    },
    zoom:{
        enabled: true
    },
    point:{
        show:true
    }
});

setTimeout(function(){
    orgChart.load({
        columns:[
            ['Active', 30, 200, 100, 180, 300, 250, 30, 200, 100, 400, 150, 250],
            ['Suspended', 50, 20, 10, 40, 15, 25, 80, 60, 40, 40, 15, 25],
            ['Unsubscribed', 0, 40, 38, 30, 45, 70, 53, 60, 80, 30, 85, 15]
        ]
    })
}, 1500);

setTimeout(function(){
    accountChart.load({
        columns:[
            ['Active', 30, 200, 100, 180, 300, 250, 30, 200, 100, 400, 150, 250],
            ['Suspended', 50, 20, 10, 40, 15, 25, 80, 60, 40, 40, 15, 25],
            ['Unsubscribed', 0, 40, 38, 30, 45, 70, 53, 60, 80, 30, 85, 15]
        ]
    })
}, 1500);