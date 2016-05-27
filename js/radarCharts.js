var radarOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

var singleRadarData = {
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


var multipleRadarData = {
    datasets: [
        {
            data: [
                11,
                16,
                7,
                3,
                14
            ],
            borderColor: "#800000",
            backgroundColor: "rgba(220,220,220,0.5)",
            label: '2015' // for legend
        },
        {
            data: [
                1,
                6,
                17,
                13,
                4
            ],
            borderColor: "#008000",
            backgroundColor: "rgba(220,220,220,0.5)",
            label: '2016' // for legend
        }],
    labels: [
        "Red",
        "Green",
        "Yellow",
        "Grey",
        "Blue"
    ]
};