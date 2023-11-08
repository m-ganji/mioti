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
