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
