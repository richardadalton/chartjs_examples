var polarAreaOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    title: {text: 'Polar Area Chart'}
};

var singlePolarAreaData = {
    datasets: [{
        data: [
            11,
            16,
            7,
            3,
            14
        ],
        backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB"
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


var multiplePolarAreaData = {
    datasets: [{
        data: [
            11,
            16,
            7,
            3,
            14
        ],
        backgroundColor: "rgba(200,200,200,0.25)",
        borderColor: "#800000",
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
            backgroundColor: "rgba(220,206,86,0.75)",
            borderColor: "#008000",
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
