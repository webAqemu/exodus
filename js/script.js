// график для отображения имемющихся средств
new Chartist.Pie(
  ".profile__circle",
  {
    series: [60, 30, 10],
  },
  {
    donut: true,
    donutWidth: 5,
    donutSolid: true,
    startAngle: 0,
    showLabel: false,
  }
);

// превью графика монеты
new Chartist.Line(
  "#graficBTC",
  {
    labels: false,
    series: [[5, 9, 7, 8, 5, 9, 7, 8, 5, 9, 7, 8, 5]],
  },
  {
    fullWidth: true,
    stretch: true,
    chartPadding: {
      right: 0,
    },
  }
);

new SimpleBar(document.getElementById("content"));

const BTC = {
  color: "#d4d23f",
};

// полноченный график монеты
var options = {
  series: [
    {
      name: "",
      data: [46544, 47865, 45002, 46375, 46315, 45375, 46465, 46875, 46375, 46544, 47865, 45002, 46375, 46315, 45375, 46465, 46875, 46375],
    },
  ],
  // общие настройки
  chart: {
    height: 300,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },

  // изменение линии
  stroke: {
    curve: "straight",
    width: 1.5,
    colors: BTC.color,
  },
  // изменение сетки
  grid: {
    borderColor: "rgba(255, 255, 255, 0.1)",
    row: {
      colors: ["transparent"],
    },
  },
  // изменение на оси Х
  xaxis: {
    categories: ["Aug 6", "Aug 7", "Aug 8", "Aug 9", "Aug 10", "Aug 11", "Aug 12", "Aug 13", "Aug 14", "Aug 15", "Aug 16", "Aug 17", "Aug 18", "Aug 19", "Aug 20", "Aug 21", "Aug 22", "Aug 23"],
    labels: {
      style: {
        colors: "white",
        fontSize: "14px",
        fontFamily: "'Etica', sans-serif",
      },
    },

    tooltip: {
      enabled: false,
    },

    axisTicks: {
      show: false,
    },

    crosshairs: {
      stroke: {
        color: "rgba(255, 255, 255, 0.3)",
      },
    },

    axisBorder: {
      show: false,
    },
  },

  // изменения на оси У
  yaxis: {
    labels: {
      style: {
        colors: "white",
        fontSize: "14px",
        fontFamily: "'Etica', sans-serif",
      },
      formatter: (value) => {
        return "$ " + value;
      },
    },
  },

  // изменение маркера
  markers: {
    colors: "#0a0e11",
    strokeColors: BTC.color,
    atrokeWidth: 1.5,
  },

  // изменение area
  colors: [BTC.color],
};

var chartBTC = new ApexCharts(document.querySelector("#chartBTC"), options);
chartBTC.render();

// document.querySelectorAll(".token__chart").forEach((chart) => {
//   chart.addEventListener("mousemove", function (e) {
//     const trigger = (window.innerWidth - 67.73) / 2;
//     const infoWindow = this.querySelector(".apexcharts-tooltip");
//     if (e.clientX - 60 > trigger) {
//       infoWindow.style.transform = "translateX(60%)";
//     } else {
//       infoWindow.style.transform = "translateX(-60%)";
//     }
//   });
// });

document.querySelectorAll(".token__grafic .show").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const parent = e.target.closest(".token");
    const mainGrafic = parent.querySelector(".token__chart");
    parent.querySelector(".token__view").classList.toggle("active");
    if (e.target.innerHTML === "Expand") {
      e.target.innerHTML = "Collapse";
    } else {
      e.target.innerHTML = "Expand";
    }
  });
});
