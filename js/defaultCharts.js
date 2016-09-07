function extend(obj, src) {
    for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
}


Chart.defaults.global.responsive = false;
        Chart.defaults.global.title.display = true;
        Chart.defaults.global.title.text = 'Untitled';
        Chart.defaults.global.title.position = 'bottom';
        Chart.defaults.global.animation.duration = 750;
        Chart.defaults.line.stacked = true;


function createOptions(title) {
    return {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {text: title}
    };
}


var genericOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

var genericData = {
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

var genericMultipleBarData = {
    datasets: [{
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
