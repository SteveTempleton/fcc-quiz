/**
 * TODO:
 * Create a for loop to iterate over and create each story section.
 * i = story number
 * each dialog ID needs to be called.
 * 
 * for (i = 0; i < 5; i++) {
 *    Replace numbers with i, add code from below
 * }
 * 
 * Issues with iterating the loop. hard coding for now.
 */

/**
 * Used to create jQuery loading, CSS loading, and calling anonymous function
 * https://alexmarandon.com/articles/web_widget_jquery/
 */


(function () {

  // Localize jQuery variable
  var jQuery;

  /******** Load jQuery if not present *********/
  if (window.jQuery === undefined || window.jQuery.fn.jquery !== '3.5.1') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type", "text/javascript");
    script_tag.setAttribute("src",
      "http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
        if (this.readyState == 'complete' || this.readyState == 'loaded') {
          scriptLoadHandler();
        }
      };
    } else { // Other browsers
      script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
  } else {
    // The jQuery version on the window is the one we want to use
    jQuery = window.jQuery;
    main();
  }

  /******** Called once jQuery has loaded ******/
  function scriptLoadHandler() {
    // Restore $ and window.jQuery to their previous values and store the
    // new jQuery in our local jQuery variable
    jQuery = window.jQuery.noConflict(true);
    // Call our main function
    main();
  }

  /******** Our main function ********/
  function main() {
    jQuery(document).ready(function ($) {
      /******* Load CSS *******/
      var css_link_jqueryUI = $("<link>", {
        rel: "stylesheet",
        type: "text/css",
        href: "css/jquery-ui.min.css"
      });
      var css_link = $("<link>", {
        rel: "stylesheet",
        type: "text/css",
        href: "css/widgetstyle.css"
      });
      css_link_jqueryUI.appendTo('head');
      css_link.appendTo('head');
    });
  }
 

  /* TODO: Listed above */

  // for (i = 0; i < 5; i++) {
  //   var newsStory = $("#dialog" + i + "");
  //   console.log(newsStory);
  //   $.getJSON(worldnews, function (newsGet) {
  //     newsStory.html('<div class="title"><p> Title: ' + newsGet['data']['children'][i]['data']['title'] +
  //       '</p></div>');
  //     newsStory.append('<div><p> url: ' + newsGet['data']['children'][i]['data']['url'] + '</p></div>');
  //     newsStory.append('<div><p> domain: ' + newsGet['data']['children'][i]['data']['domain'] +
  //       '</p></div>');
  //     newsStory.append('<div><p> Permalink: ' + newsGet['data']['children'][i]['data']['permalink'] +
  //       '</p></div>');
  //   });
  // }

  var worldnews = "https://www.reddit.com/r/worldnews.json";
  $.getJSON(worldnews, function (newsGet) {
    $("#dialog0").html('<div class="title"><p> Title: ' + newsGet['data']['children'][0]['data']['title'] +
      '</p></div>');
    $("#dialog0").append('<div><p> URL: ' + newsGet['data']['children'][0]['data']['url'] + '</p></div>');
    $("#dialog0").append('<div><p> Domain: ' + newsGet['data']['children'][0]['data']['domain'] +
      '</p></div>');
    $("#dialog0").append('<div><p> Permalink: ' + newsGet['data']['children'][0]['data']['permalink'] +
      '</p></div>');
  });
  $.getJSON(worldnews, function (newsGet) {
    $("#dialog1").html('<div class="title"><p> Title: ' + newsGet['data']['children'][1]['data']['title'] +
      '</p></div>');
    $("#dialog1").append('<div><p> url: ' + newsGet['data']['children'][1]['data']['url'] + '</p></div>');
    $("#dialog1").append('<div><p> domain: ' + newsGet['data']['children'][1]['data']['domain'] +
      '</p></div>');
    $("#dialog1").append('<div><p> Permalink: ' + newsGet['data']['children'][1]['data']['permalink'] +
      '</p></div>');
  });
  $.getJSON(worldnews, function (newsGet) {
    $("#dialog2").html('<div class="title"><p> Title: ' + newsGet['data']['children'][2]['data']['title'] +
      '</p></div>');
    $("#dialog2").append('<div><p> url: ' + newsGet['data']['children'][2]['data']['url'] + '</p></div>');
    $("#dialog2").append('<div><p> domain: ' + newsGet['data']['children'][2]['data']['domain'] +
      '</p></div>');
    $("#dialog2").append('<div><p> Permalink: ' + newsGet['data']['children'][2]['data']['permalink'] +
      '</p></div>');
  });
  $.getJSON(worldnews, function (newsGet) {
    $("#dialog3").html('<div class="title"><p> Title: ' + newsGet['data']['children'][3]['data']['title'] +
      '</p></div>');
    $("#dialog3").append('<div><p> url: ' + newsGet['data']['children'][3]['data']['url'] + '</p></div>');
    $("#dialog3").append('<div><p> domain: ' + newsGet['data']['children'][3]['data']['domain'] +
      '</p></div>');
    $("#dialog3").append('<div><p> Permalink: ' + newsGet['data']['children'][3]['data']['permalink'] +
      '</p></div>');
  });
  $.getJSON(worldnews, function (newsGet) {
    $("#dialog4").html('<div class="title"><p> Title: ' + newsGet['data']['children'][4]['data']['title'] +
      '</p></div>');
    $("#dialog4").append('<div><p> url: ' + newsGet['data']['children'][4]['data']['url'] + '</p></div>');
    $("#dialog4").append('<div><p> domain: ' + newsGet['data']['children'][4]['data']['domain'] +
      '</p></div>');
    $("#dialog4").append('<div><p> Permalink: ' + newsGet['data']['children'][4]['data']['permalink'] +
      '</p></div>');
  });
})(); // We call our anonymous function immediately