$(document).ready(function() {
  const windowUrl = window.location.href.slice(
    0,
    window.location.href.indexOf("resume/resume.html") - 1
  );

  $("#github").click(() => {
    window.open("https://github.com/JMathis52");
  });

  $("#resume").click(() => {
    window.location.replace(windowUrl + "/resume/resume.html");
  });

  $("#contact").click(() => {
    window.location.replace(windowUrl + "/contact/contact.html");
  });
});
