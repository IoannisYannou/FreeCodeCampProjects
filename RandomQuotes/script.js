$(document).ready(function() {
  $('#get-quote').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quote-content').html("<i class='fa fa-quote-left fa-pull-left'></i>" + post.content);
        $('#quote-author').html("- " + post.title);
      },
      cache: false
    });
  });
});

function change() {
	var x = Math.floor(Math.random() * 256); // range is 0-255
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	var thergb = "rgb(" + x + "," + y + "," + z + ")"; 
	elements = document.getElementsByClassName("bkgc");
	for (var i=0; i<elements.length; i++) {
		elements[i].style.backgroundColor=thergb;
	}
  document.getElementById("quote-content").style.color=thergb;
  document.getElementById("quote-author").style.color=thergb;
}