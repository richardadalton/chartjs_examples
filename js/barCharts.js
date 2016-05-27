var barOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    title: {text: 'Bar Chart'}

};

var singleBarData = {
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


var multipleBarData = {
    datasets: [{
        type: 'line',
        data: [
            11,
            16,
            7,
            3,
            14
        ],
        backgroundColor: "rgba(200,200,200,0.5)",
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
            backgroundColor: "#FFCE56",
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
