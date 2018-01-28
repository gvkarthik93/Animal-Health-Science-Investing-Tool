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
    toolTipContent: "<b>{label}:</b> {y} (#percent%)",
    dataPoints: [
      { y: 67, label: "Labelled Green Bonds" },
      { y: 28, label: "Unlabelled Green Bonds" },
      { y: 10, label: "Animal Bonds" },
    ]
  }]
});
chart.render();

}