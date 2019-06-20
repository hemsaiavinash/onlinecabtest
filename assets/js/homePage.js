var d = new Date();
var nowDate = d.getFullYear() + "-0" + (d.getMonth()+1) + "-" + d.getDate();
var nowwDate = d.getDate() + "-0" + (d.getMonth()+1) + "-" + d.getFullYear();

document.getElementById("today").innerHTML = nowwDate;

$("#get-started").on("click",function(){
	$("#title-holder").addClass("passive-widget");
	$("#widget-holder").removeClass("passive-widget");
});

$("#outstation-button").on("click", function() {
	// body...
	$("#rental").addClass("passive-widget");
	$("#outstation").removeClass("passive-widget");
	$("#outstation-button").addClass("selected");
	$("#rental-button").removeClass("selected");

});

$("#rental-button").on("click", function() {
	// body...
	$("#outstation").addClass("passive-widget");
	$("#rental-button").addClass("selected");
	$("#rental").removeClass("passive-widget");
	$("#outstation-button").removeClass("selected");


});



$("input[type='date']").attr("min",nowDate);
$("input[type='date']").attr("value",nowDate);


//setDate should be put only after this line.
var setDate = $("input[type='date']").val();


$("#currentDate").change(function(){
	$("#hidden-date-div").toggleClass("passive-widget");
	$("input[type='date']").attr("value",nowDate);
});

$("#returnToggle").change(function(){
	$("#hidden-days-div").toggleClass("passive-widget");
});

$("#homeDeliv").change(function(){
	$("#hidden-address-div").toggleClass("passive-widget");
});


$("input[type='date']").change(function(){
	var setDate = $("input[type='date']").val();
	$("input[type='date']").attr("value",setDate);
});

$("#outstation-conf").click(function(){
	$("#outstation").addClass("passive-widget");
	$("#personal-details").removeClass("passive-widget");
});


$("#rental-conf").click(function(){
	$("#rental").addClass("passive-widget");
	$("#personal-details").removeClass("passive-widget");
});

$("#book-now").click(function(){
	alert("Booking Confirmed!");
	window.location.href = "index.html";
});