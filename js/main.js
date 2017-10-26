var fluido, prop1, prop2, prop1val, prop2val;

$(document).ready(function() {
  $("#calcular").click(function(clickEvent) {
    leerEntrada();
    if (prop1 == prop2) {
      alert("Introduce datos distintos!");
    } else if (isNaN(prop1val) || isNaN(prop2val)) {
      alert("No puedes dejar datos en blanco!");
    } else {
      calcPropiedades(fluido, prop1, prop2, prop1val, prop2val);
    }
  });
});

function leerEntrada() {
  fluido = $("#fluido").val();
  prop1 = $("#prop1").val();
  prop2 = $("#prop2").val();
  prop1val = parseFloat($("#prop1val").val());
  prop2val = parseFloat($("#prop2val").val());
}


function calcPropiedades(fluido, p1, p2, p1val, p2val) {
  var densidad = Module.PropsSI("D", p1, p1val, p2, p2val, fluido);
  $("#densidad").text(densidad);
  var temperatura = Module.PropsSI("T", p1, p1val, p2, p2val, fluido);
  $("#temperatura").text(temperatura);
  var presion = Module.PropsSI("P", p1, p1val, p2, p2val, fluido);
  $("#presion").text(presion);
  var titulovapor = Module.PropsSI("Q", p1, p1val, p2, p2val, fluido);
  $("#titulovapor").text(titulovapor);
  var entalpia = Module.PropsSI("H", p1, p1val, p2, p2val, fluido);
  $("#entalpia").text(entalpia);
  var entropia = Module.PropsSI("S", p1, p1val, p2, p2val, fluido);
  $("#entropia").text(entropia);
  var energiainterna = Module.PropsSI("U", p1, p1val, p2, p2val, fluido);
  $("#energiainterna").text(energiainterna);
  var calorp = Module.PropsSI("CP0MASS", p1, p1val, p2, p2val, fluido);
  $("#calorp").text(calorp);
  var calorv = Module.PropsSI("CVMASS", p1, p1val, p2, p2val, fluido);
  $("#calorv").text(calorv);
  var conductividad = Module.PropsSI("L", p1, p1val, p2, p2val, fluido);
  $("#conductividad").text(conductividad);
  var viscosidad = Module.PropsSI("V", p1, p1val, p2, p2val, fluido);
  $("#viscosidad").text(viscosidad);
}
