document.addEventListener("DOMContentLoaded", function () {
  var menuItem247 = document.getElementById("menu-item-247");
  var menuItem248 = document.getElementById("menu-item-248");
  var menuItem250 = document.getElementById("menu-item-250");
  var logo = document.getElementById("logo");

  if (menuItem247) {
    menuItem247.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior

      // Remove "/data-strategy" from the current URL using replace()
      var newURL = window.location.href.replace("/data-strategy", "");

      // Remove "/index.html" from the modified URL using replace()
      newURL = newURL.replace("/index.html", "");

      // Use the modified URL to navigate to "index.html"
      window.location.href = newURL + "/index.html";
    });
  }

  if (logo) {
    logo.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior

      // Remove "/ai-strategy" from the current URL using replace()
      var newURL = window.location.href.replace("/data-strategy", "");

      // Remove "/index.html" from the modified URL using replace()
      newURL = newURL.replace("/index.html", "");

      // Use the modified URL to navigate to "index.html"
      window.location.href = newURL + "/index.html";
    });
  }

  if (menuItem248) {
    menuItem248.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior

      // Remove "/data-strategy" from the current URL using replace()
      var newURL = window.location.href.replace("/data-strategy", "");

      // Remove "/index.html" from the modified URL using replace()
      newURL = newURL.replace("/index.html", "");

      // Use the modified URL to navigate to "ai-strategy/index.html"
      window.location.href = newURL + "/ai-strategy/index.html";
    });
  }

  if (menuItem250) {
    menuItem250.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior

      // Remove "/data-strategy" from the current URL using replace()
      var newURL = window.location.href.replace("/data-strategy", "");

      // Remove "/index.html" from the modified URL using replace()
      newURL = newURL.replace("/index.html", "");

      // Use the modified URL to navigate to "nosotros/index.html"
      window.location.href = newURL + "/nosotros/index.html";
    });
  }
});
