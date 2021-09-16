// график для отображения имемющихся средств
var pieOptions = {
  series: [80, 15, 5],

  colors: ["#d4d23f", "#00ff15", "#1758b9"],

  chart: {
    type: "donut",
    height: 400,
  },

  dataLabels: {
    enabled: false,
  },

  legend: {
    show: false,
  },

  pie: {
    expandOnClick: false,
    donut: {
      size: "100%",

      name: {
        show: false,
      },

      value: {
        show: false,
      },
    },
  },

  // убираем подсказки
  tooltip: {
    enabled: false,
  },

  // убираем бордер
  stroke: {
    width: 0,
  },
  // responsive: [
  //   {
  //     breakpoint: 480,
  //     options: {
  //       chart: {
  //         width: 200,
  //       },
  //       legend: {
  //         position: "bottom",
  //       },
  //     },
  //   },
  // ],
};

// надо уменьшить ширину + убрать ховер
var pieChart = new ApexCharts(document.querySelector("#profile__circle"), pieOptions);
pieChart.render();

const BTC = {
  color: "#d4d23f",
};

// кастомный скролл
new SimpleBar(document.getElementById("content"));

var smOptions = {
  series: [
    {
      name: "",
      data: [5, 9, 7, 8, 5, 9, 7, 8, 5, 9, 7, 8, 5],
    },
  ],
  // общие настройки
  chart: {
    height: 73,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    animations: {
      enabled: false,
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
    show: false,
  },
  // изменение на оси Х
  xaxis: {
    labels: {
      show: false,
    },

    tooltip: {
      enabled: false,
    },

    axisTicks: {
      show: false,
    },

    crosshairs: {
      show: false,
    },

    axisBorder: {
      show: false,
    },
  },

  // изменения на оси У
  yaxis: {
    labels: {
      show: false,
    },
  },

  tooltip: {
    enabled: false,
  },

  // изменение area
  colors: [BTC.color],
};

// превью графика монеты
var smChartBTC = new ApexCharts(document.querySelector("#graficBTC"), smOptions);
smChartBTC.render();

var smChartETH = new ApexCharts(document.querySelector("#graficETH"), smOptions);
smChartETH.render();

// полноценный график монеты
var mainOptions = {
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

var chartBTC = new ApexCharts(document.querySelector("#chartBTC"), mainOptions);
chartBTC.render();

var chartETH = new ApexCharts(document.querySelector("#chartETH"), mainOptions);
chartETH.render();

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

// показать/скрыть большой график монеты
document.querySelectorAll(".token__grafic .show").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const parent = e.target.closest(".token");
    const content = e.target.querySelector(".show__btn");
    parent.querySelector(".token__view").classList.toggle("active");
    if (content.innerHTML === "Expand") {
      content.innerHTML = "Collapse";
    } else {
      content.innerHTML = "Expand";
    }
  });
});

// переключение на настройки
document.querySelector(".header").addEventListener("click", function (e) {
  // открытие настроек
  if (e.target.classList.contains("header__settings")) {
    this.classList.add("settings");
    document.querySelector(".curContent").classList.remove("curContent");
    document.querySelector(".devices").classList.add("curContent");
    document.querySelector(".menu__btn[data-content='devices']").parentElement.classList.add("active");
  }

  // переключение между контентом
  if (e.target.dataset.content) {
    const data = e.target.dataset.content;
    document.querySelector(".curContent").classList.remove("curContent");
    document.querySelector(`.${data}`).classList.add("curContent");

    this.querySelector(".menu--settings .active").classList.remove("active");
    e.target.parentElement.classList.add("active");
  }

  // возвращаемся домой
  if (e.target.classList.contains("header__back")) {
    this.classList.remove("settings");
    document.querySelector(".curContent").classList.remove("curContent");
    document.querySelector(".home").classList.add("curContent");
    document.querySelector(".menu__item.active").parentElement.classList.remove("active");
  }
});

// переход в создание пароля по ссылке в Security
document.getElementById("goToBackUp").addEventListener("click", function (e) {
  document.querySelector(".curContent").classList.remove("curContent");
  document.querySelector(`.backup`).classList.add("curContent");
  document.querySelector(".menu--settings .active").classList.remove("active");
  document.querySelector(".menu__btn[data-content='backup']").parentElement.classList.add("active");
});
