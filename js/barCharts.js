var barOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    title: {text: 'My Cool Chart'}

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
        data: [
            11,
            16,
            7,
            3,
            14
        ],
        backgroundColor: "#4BC0C0",
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
