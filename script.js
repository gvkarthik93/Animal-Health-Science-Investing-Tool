window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  title:{
  },
  data: [{
    type: "doughnut",
    startAngle: 60,
    //innerRadius: 60,
    indexLabelFontSize: 17,
    indexLabel: "{label} - #percent%",
    toolTipContent: "<b>{label}:</b> (#percent%)",
    dataPoints: [
      { y: 41, label: "Labelled Green Bonds" },
      { y: 36, label: "Unlabelled Green Bonds" },
      { y: 23, label: "Animal Bonds" },
    ]
  }]
});
chart.render();

}