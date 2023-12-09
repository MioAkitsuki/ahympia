$(document).ready(() => {
  function adjustMainSectionMargin() {
    const navHeight = $("nav").outerHeight();
    $(".main-section").css("margin-top", navHeight + "px");
  }
  adjustMainSectionMargin();

  function toggleVisibility(selectedId) {
    const sections = ["#main", "#kanata", "#lumoni", "#join", "#about"];
    sections.forEach((id) => {
      if (id === selectedId) {
        $(id).show().addClass("d-flex");
      } else {
        $(id).hide().removeClass("d-flex");
      }
    });
    $("body").css("background", "none");
    collapseNavbar();
  }
  
  function collapseNavbar() {
    let navbarCollapse = $("#navbarCollapse");
    if (navbarCollapse.hasClass("show")) {
      navbarCollapse.collapse("hide");
    }
  }
  $("#index").on("click", () => window.location.reload());
  $("#showKanata, #showLumoni, #showJoin, #showAbout").on("click", function () {
    const sectionId = "#" + this.id.replace("show", "").toLowerCase();
    toggleVisibility(sectionId);
  });
});
