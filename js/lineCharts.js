var lineOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    stacked: true
};

var singleLineData = {
    datasets: [{
        data: [
            11,
            16,
            7,
            3,
            14
        ],
        label: 'My dataset' // for legend
    }],
    labels: [
        "Red",
        "Green",
        "Yellow",
        "Grey",
        "Blue"
    ]
};


var multipleLineData = {
    datasets: [{
        data: [
            11,
            16,
            7,
            3,
            14
        ],
        backgroundColor: "rgba(220,220,220,0.5)",
        borderColor: "rgba(220,0,0,0.5)",
        label: '2015',
        lineTension: 0,
        fill: true
    },
        {
            data: [
                1,
                6,
                17,
                13,
                4
            ],
            backgroundColor: "rgba(255,206,56,0.5)",
            label: '2016',
            lineTension: 0
        }],
    labels: [
        "Red",
        "Green",
        "Yellow",
        "Grey",
        "Blue"
    ]
};

