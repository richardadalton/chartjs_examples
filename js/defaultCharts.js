        Chart.defaults.global.responsive = false;
        Chart.defaults.global.title.display = true;
        Chart.defaults.global.title.text = 'Untitled';
        Chart.defaults.global.title.position = 'bottom';
        Chart.defaults.global.animation.duration = 750;
        Chart.defaults.line.stacked = true;

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

        var genericOptions = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };