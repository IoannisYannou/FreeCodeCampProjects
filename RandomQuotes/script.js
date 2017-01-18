/*$("#get-quote").on("click", function(){
  //$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=random&callback=", function(a) {
  //$("#quote").html("<i class='fa fa-quote-left fa-pull-left fa-2x'></i>" + "<p style='font-size:large;'>" + a[0].content + "</p>" + "<p class='text-center'>— " + a[0].title + "</p>")
//});
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	var thergb = "rgb(" + x + "," + y + "," + z + ")";
	$document.getElementById("bkgc").style.backgroundColor = thergb;
}); */

function change() {
	var x = Math.floor(Math.random() * 256); // range is 0-255
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	var thergb = "rgb(" + x + "," + y + "," + z + ")"; 
	elements = document.getElementsByClassName("bkgc");
	for (var i=0; i<elements.length; i++){
		elements[i].style.backgroundColor=thergb;
	}
}