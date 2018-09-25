$(document).ready(function() {
  $("#heading").addClass("load");

  $("#github").click(() => {
    window.open("https://github.com/JMathis52");
  });

  $("#resume").click(() => {
    window.location.replace("http://jerrodmathis.com/resume/resume.html");
  });

  $("#contact").click(() => {
    window.location.replace("http://jerrodmathis.com/contact/contact.html");
  });
});
