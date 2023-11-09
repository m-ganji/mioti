document.addEventListener("DOMContentLoaded", function () {
  var menuItem248 = document.getElementById("menu-item-248");
  var menuItem250 = document.getElementById("menu-item-250");
  var menuItem = document.getElementById("menu-item-249");

  if (menuItem) {
    menuItem.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior

      // Use window.location to navigate to the new HTML file
      window.location.href = "data-strategy/index.html";
    });
  }

  if (menuItem248) {
    menuItem248.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior

      // Navigate to "ai-strategy/index.html"
      window.location.href = "ai-strategy/index.html";
    });
  }

  if (menuItem250) {
    menuItem250.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior

      // Navigate to "nosotros/index.html"
      window.location.href = "nosotros/index.html";
    });
  }
});

var languages = {
  en: {
    headertxt: "Multiple languages Website",
  },
  fa: {
    headertxt: "وبسایت چند زبانه",
  },
};

if (window.location.hash) {
  if (window.location.hash === "#fa") {
    headertxt.textContent = languages.fa.headertxt;

    document.body.style.direction = "rtl";
  }
}

var reload = document.querySelectorAll(".reload");

for (i = 0; i <= reload.length; i++) {
  reload[i].onclick = function () {
    window.location.hash = this.getAttribute("href");
    window.location.reload();
  };
}
