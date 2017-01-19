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

// Create the XHR object.
/*function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // This is a sample server that supports CORS.
  var url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=random&callback=';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported!!!!!');
    return;
  }
  //alert("Made it this far.");
  // Response handlers.
  xhr.onload = function() {
    alert("So far so good.");
//    var text = xhr.responseText;
//    var title = getTitle(text);
 //   alert('Response from CORS request to ' + url + ': ' + title);
  var post = data.shift(); // The data is an array of posts. Grab the first one.
  $('#quote-content').html(post.content);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}
*/
/*
$('#get-quote').on('click', function(e) {
    e.preventDefault();
    $('#author').html("Made it in the function");
    $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        //$('#quote-title').text(post.title);
        $('p').html('Working'); //post.content);

        // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#author').html('Source:' + post.custom_meta.Source);
        } else {
          $('#author').text('lllll');
        }
      },
      cache: false
    });
  });
//});
*/

$(document).ready(function() {
	$("#get-quote").on("click", function(){
		$.getJSON("http://api.forismatic.com/api/1.0/getQuote&key=457653&format=json&lang=en", function(a) {
  			$("#quote-content").html("<i class='fa fa-quote-left fa-pull-left fa-2x'></i>" + "<p style='font-size:large;'>" + a[0].quoteText + "</p>");
			$("#author").html("<p class='text-center'>— " + a[0].quoteAuthor + "</p>");
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
  //$('#author').html("Injected html successfully");
}