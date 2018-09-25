$(document).ready(function() {
  const windowUrl = window.location.href.slice(
    0,
    window.location.href.indexOf("contact/contact.html") - 1
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

  var forms = document.getElementsByClassName('needs-validation');

  var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
          }
          form.classList.add('was-validated');
      }, false);
  });
});
