"use strict";

function getData(dataR) {
    for (var dates = Array(), finaldata = [], i = dataR.length - 1; i >= 0; i--) finaldata.push(dataR[i]);
    dataR.forEach(element => {
        finaldata.push(element)
    });
    for (let index = 0; index < dataR.length; index++) {
        var date = new Date;
        date.setDate(date.getDate() + (index - dataR.length + 1)), dates.push(date.getDate() + "/" + (date.getMonth() + 1))
    }
    var chartColors_default = {
            primary: "#00D1B2",
            info: "#209CEE",
            danger: "#FF3860"
        },
        ctx = document.getElementById("big-line-chart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            datasets: [{
                fill: !1,
                borderColor: chartColors_default.primary,
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0,
                pointBackgroundColor: chartColors_default.primary,
                pointBorderColor: "rgba(255,255,255,0)",
                pointHoverBackgroundColor: chartColors_default.primary,
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: finaldata
            }],
            labels: dates
        },
        options: {
            maintainAspectRatio: !1,
            legend: {
                display: !1
            },
            responsive: !0,
            tooltips: {
                backgroundColor: "#f5f5f5",
                titleFontColor: "#333",
                bodyFontColor: "#666",
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            scales: {
                yAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: !1,
                        color: "rgba(29,140,248,0.0)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9a9a9a"
                    }
                }],
                xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        drawBorder: !1,
                        color: "rgba(225,78,202,0.1)",
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9a9a9a"
                    }
                }]
            }
        }
    })
}