/* jQuery( function( $ ) {
  $( '#get-quote' ).on( 'click', function ( e ) {
    e.preventDefault();
    $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=random&callback=',
      success: function ( data ) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        console.log(post);
        $( '#quote-title' ).text( post.title );
        $( '#quote-content' ).html( post.content );

        // If the Source is available, use it. Otherwise hide it.
        if ( typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined' ) {
          $( '#quote-source' ).html( 'Source:' + post.custom_meta.Source );
        } else {
          $( '#quote-source' ).text( '' );
        }
      },
      cache: false
    } );
  } );
} ); */
/*
$.ajaxPrefilter( function (options) {
  if (options.crossDomain && jQuery.support.cors) {
    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    //options.url = "http://cors.corsproxy.io/url=" + options.url;
  }
});



function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

var request = createCORSRequest("get", "http://www.stackoverflow.com/");
if (request){
    request.onload = function() {
        console.log("This is amazing!");
    };
} else {
	console.log("Not Working!");
}



*/

$(document).ready(function() {
	$("#get-quote").on("click", function(){
		$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=random&callback=", function(a) {
  			$("#quote-content").html("<i class='fa fa-quote-left fa-pull-left fa-2x'></i>" + "<p style='font-size:large;'>" + a[0].content + "</p>");
			$("#author").html("<p class='text-center'>— " + a[0].title + "</p>");
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
}