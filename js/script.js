const BTC = {
  color: "#d4d23f",
  id: "chartBTC"
};

const walletBTC = {
  color: "#d4d23f",
  id: "walletChartBTC"
};

const ETH = {
  color: "#d4d23f",
  id: "chartETH"
};
// график для отображения имемющихся средств
var pieOptions = {
  series: [80, 15, 5],

  colors: ["#d4d23f", "#00ff15", "#1758b9"],

  chart: {
    type: "donut",
    height: 350,
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
  responsive: [{
    breakpoint: 769,
    options: {
      chart: {
        height: 300,
      },
    },
  }, ],
};
// полноценный график монеты
var mainOptionsBTC = {
  series: [{
    name: "",
    data: [46544, 47865, 45002, 46375, 46315, 45375, 46465, 46875, 46375, 46544, 47865, 45002, 46375, 46315, 45375, 46465, 46875, 46375],
  }, ],
  // общие настройки
  chart: {
    id: BTC.id,
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
var mainOptionsWalletBTC = {
  series: [{
    name: "",
    data: [46544, 47865, 45002, 46375, 46315, 45375, 46465, 46875, 46375, 46544, 47865, 45002, 46375, 46315, 45375, 46465, 46875, 46375],
  }, ],
  // общие настройки
  chart: {
    id: walletBTC.id,
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
    colors: walletBTC.color,
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
    strokeColors: walletBTC.color,
    atrokeWidth: 1.5,
  },

  // изменение area
  colors: [BTC.color],
};
var mainOptionsETH = {
  series: [{
    name: "",
    data: [46544, 47865, 45002, 46375, 46315, 45375, 46465, 46875, 46375, 46544, 47865, 45002, 46375, 46315, 45375, 46465, 46875, 46375],
  }, ],
  // общие настройки
  chart: {
    id: ETH.id,
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
  colors: [ETH.color],
};
// кастомный скролл
new SimpleBar(document.getElementById("content"));
let type, height;
if (window.innerWidth < 769) {
  type = "area"
  height = "93"
} else {
  type = "line"
  height = "73"
}

var smOptions = {
  series: [{
    name: "",
    data: [5, 9, 7, 8, 5, 9, 7, 8, 12, 9, 7, 8, 5],
  }, ],
  // общие настройки
  chart: {
    height: height,
    type: type,
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

if (document.querySelector("#profile__circle")) {
  // надо уменьшить ширину + убрать ховер
  var pieChart = new ApexCharts(document.querySelector("#profile__circle"), pieOptions);
  pieChart.render();

  // превью графика монеты
  var smChartBTC = new ApexCharts(document.querySelector("#graficBTC"), smOptions);
  smChartBTC.render();

  var smChartETH = new ApexCharts(document.querySelector("#graficETH"), smOptions);
  smChartETH.render();

  var chartBTC = new ApexCharts(document.querySelector("#chartBTC"), mainOptionsBTC);
  chartBTC.render();

  var chartETH = new ApexCharts(document.querySelector("#chartETH"), mainOptionsETH);
  chartETH.render();

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
}

if (document.querySelector(".backup")) {
  // убираем класс btn--disabled при вводе пароля от 8 символов
  document.querySelectorAll(".backup__input").forEach((input) => {
    input.addEventListener("input", function (e) {
      if (input.value.length >= 8) {
        input.parentElement.querySelector(".btn[type='submit']").classList.remove("btn--disabled");
      } else {
        input.parentElement.querySelector(".btn[type='submit']").classList.add("btn--disabled");
      }
    });
  });

  // переключение по этапам backup
  document.querySelector(".backup").addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("btn")) {
      const action = e.target.dataset.action;
      const stepEl = e.target.closest(".backup__step");
      const step = stepEl.dataset.step;
      const stepNum = stepEl.dataset.stepnum;
      const nextStepEl = this.querySelector(`.backup__step[data-stepnum="${+stepNum + 1}"]`);
      const stepNumEl = this.querySelector(`.steps__item[data-step="${step}"]`);
      const nextStepNumEl = this.querySelector(`.steps__item[data-step="${nextStepEl.dataset.step}"]`);
      // переключение на след этап
      if (action === "next") {
        // плавно убираем curent step
        stepEl.style.opacity = 0;
        nextStepEl.style.opacity = 0;
        setTimeout(() => {
          stepNumEl.classList.add("completed");
          nextStepNumEl.classList.add("current");
          stepEl.classList.add("hidden");
          nextStepEl.classList.remove("hidden");
          nextStepEl.style.opacity = 1;
        }, 300);
      }

      if (action === "back") {
        const prevStepEl = this.querySelector(`.backup__step[data-stepnum="${+stepNum - 1}"]`);
        const prevStepNumEl = this.querySelector(`.steps__item[data-step="${prevStepEl.dataset.step}"]`);
        // плавно убираем curent step
        stepEl.style.opacity = 0;
        prevStepEl.style.opacity = 0;
        setTimeout(() => {
          stepNumEl.classList.remove("current");
          prevStepNumEl.classList.add("current");
          prevStepNumEl.classList.remove("completed");
          stepEl.classList.add("hidden");
          prevStepEl.classList.remove("hidden");
          prevStepEl.style.opacity = 1;
        }, 300);
      }

      if (action === "print") {
        // Function to download data to a file
        function download(data, filename, type) {
          var file = new Blob([data], {
            type: type
          });
          if (window.navigator.msSaveOrOpenBlob)
            // IE10+
            window.navigator.msSaveOrOpenBlob(file, filename);
          else {
            // Others
            var a = document.createElement("a"),
              url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
              document.body.removeChild(a);
              window.URL.revokeObjectURL(url);
            }, 0);
          }
        }

        let phrase = [];
        document.querySelectorAll(".backup__word").forEach((word) => {
          phrase.push(word.innerHTML);
        });

        phrase = phrase.join(" ");

        download(phrase, "phrase", "txt");
      }

      if (action === "finish") {
        stepEl.style.opacity = 0;
        nextStepEl.style.opacity = 0;
        setTimeout(() => {
          stepNumEl.classList.add("completed");
          stepEl.classList.add("hidden");
          nextStepEl.classList.remove("hidden");
          nextStepEl.style.opacity = 1;
        }, 300);
      }
    }

    // выбор слова которое было во фразе в пред. шаге
    if (e.target.dataset.word) {
      const word = e.target.dataset.word;
      if (this.querySelector(".backup__checklist button.active")) {
        this.querySelector(".backup__checklist button.active").classList.remove("active");
      }
      e.target.classList.add("active");
    }
  });
}

if (document.querySelector(".wallet")) {
  // слайдер монет в кошельке
  $(".coins").slick({
    variableWidth: true,
    infinite: false,
    nextArrow: '<button type="button" class="coins__arrow coins__arrow--next"></button>',
    prevArrow: '<button type="button" class="coins__arrow coins__arrow--prev"></button>',
  });

  new SimpleBar(document.getElementById("transactions"), {
    autoHide: false
  });
  document.querySelector(".wallet").addEventListener("click", function (e) {

    if (e.target.classList.contains("wallet__open")) {
      e.preventDefault();
      e.target.parentElement.classList.toggle("open");
      setTimeout(() => {
        if (e.target.parentElement.querySelector(".search")) {
          e.target.parentElement.querySelector(".search").style.width = "220px";
        }
      }, 100);
    }

    if (e.target.classList.contains("search__close")) {
      e.preventDefault();
      e.target.parentElement.parentElement.querySelector(".search").style.width = "60px";
      setTimeout(() => {
        e.target.parentElement.parentElement.classList.remove("open");
      }, 300);
    }

    if (e.target.classList.contains("wallet__title")) {
      e.target.parentElement.classList.toggle("opened");
      e.target.classList.toggle("opened");
    }

    if (e.target.dataset.action === "send") {
      const popup = document.getElementById("send")
      popup.classList.add("active")
    }

    if (e.target.dataset.action === "recieve") {
      const popup = document.getElementById("recieve")
      popup.classList.add("active")
    }

    if (e.target.classList.contains("popup__close")) {
      e.target.closest(".popup").classList.remove("active")
    }

    if (e.target.classList.contains("popup__copy")) {
      const value = e.target.parentElement.querySelector("span").innerHTML
      var area = document.createElement('textarea');
      document.body.appendChild(area);
      area.value = value;
      area.select();
      document.execCommand("copy");
      document.body.removeChild(area);
    }
  });

  document.getElementById("coinAmount").addEventListener("input", function (e) {
    const coinAmount = this.value;
    const rate = this.dataset.rate
    console.log(rate);
    if (coinAmount) {
      document.getElementById("moneyAmount").value = Number(coinAmount) * Number(rate)
    }
  })

  document.getElementById("moneyAmount").addEventListener("input", function (e) {
    const moneyAmount = this.value;
    const rate = document.getElementById("coinAmount").dataset.rate
    console.log(moneyAmount);
    if (moneyAmount) {
      document.getElementById("coinAmount").value = (moneyAmount * 1 / Number(rate)).toFixed(8)
    }
  })

  document.querySelector(".tabs").addEventListener("click", function (e) {
    if (e.target.classList.contains("tabs__btn")) {
      const data = e.target.dataset.tab
      const content = document.querySelector(`.tabs__content[data-tab="${data}"]`)
      const btn = e.target.parentElement
      const parent = e.target.closest(".tabs")
      parent.querySelectorAll(".active").forEach(el => el.classList.remove("active"))
      btn.classList.add("active");
      content.classList.add("active");
    }
  });

  var walletChartBTC = new ApexCharts(document.querySelector("#walletChartBTC"), mainOptionsWalletBTC);
  walletChartBTC.render();
}

if (document.querySelector(".login")) {
  document.querySelector(".login").addEventListener("click", function (e) {
    if (e.target.classList.contains("login__check")) {
      e.preventDefault();
      const input = e.target.parentElement.querySelector("input");
      if (input.value == "hello hello") {
        e.target.parentElement.parentElement.classList.remove("current");
        document.querySelector(".login__step--last").classList.add("current");
      } else {
        document.querySelector(".login__error").classList.add("active");
      }
    }
  });
}

if (document.querySelector(".exchange")) {
  const searchPopUp = document.querySelector(".exchange__search")
  const searchPopUpClose = document.querySelector(".search__shut")
  new SimpleBar(document.querySelector(".search__list"))
  document.querySelectorAll(".exchange__choose").forEach(btn => {
    btn.addEventListener("click", function (e) {
      searchPopUp.classList.add("active")
    })
  })
  searchPopUpClose.addEventListener("click", function (e) {
    e.target.parentElement.classList.remove("active")
  })


  const exchangeCheck = function (coinCost, applyCoinCost, balance, value) {
    // return [проверка, кол-во в долларах, кол-во в другой монете]
    return [value * coinCost > balance ? false : true, value * coinCost, value * coinCost / applyCoinCost]
  }

  const balance = 2300
  const BTC = 46000
  const ETH = 28000
  const submitBtn = document.querySelector(".exchange__submit")

  document.getElementById("sent").addEventListener("input", function (e) {
    const [check, amount, receivedCoin] = [...exchangeCheck(BTC, ETH, balance, this.value)]
    if (check) {
      submitBtn.classList.remove("disabled")
    } else {
      submitBtn.classList.add("disabled")
    }
    document.querySelectorAll(".exchange__dollars").forEach(el => {
      el.innerHTML = `$${amount}`
    })
    document.getElementById("received").value = +receivedCoin.toFixed(6)
  })

}

document.querySelector(".header__settings").addEventListener("click", function (e) {
  if (window.innerWidth < 769) {
    if (e.target.classList.contains("header__settings--link")) {
      e.preventDefault()
      e.target.closest(".header").classList.toggle("open")

    }
  }
})

if (document.querySelector(".token__times")) {
  document.querySelectorAll(".token__times").forEach(time => {
    time.addEventListener("click", function (e) {
      let chartID = this.parentElement.parentElement.querySelector(".token__chart")
      chartID = chartID.getAttribute("id")
      let chartData = [{
        data: [49544, 50865, 42002, 41375, 41315, 35375, 46465, 46875, 46375, 46544, 47865, 45002, 46375, 46315, 45375, 46465, 46875, 46375]
      }]

      ApexCharts.exec(chartID, 'updateSeries', chartData);


    })
  })
}

if (document.querySelector(".personalize")) {
  document.querySelector(".personalize").addEventListener("click", function (e) {
    if (e.target.classList.contains("item__currency") || e.target.classList.contains("item__language")) {
      e.target.classList.toggle("active")
    }
    if (e.target.classList.contains("option")) {
      e.target.parentElement.parentElement.querySelector(".choosed").innerHTML = e.target.innerHTML
      e.target.parentElement.parentElement.classList.remove("active")
    }
  })
}