define(["jquery"], ($) => {
  class Application {
    constructor(options) {
      this.mode = options.mode || "mint";
    }

    init() {
      ApplyUIBindings.call(this);
    }
  }

  function ApplyUIBindings() {
    $('#header-mint').on('click', ShowPage.bind(this, "mint"));
    $('#header-about').on('click', ShowPage.bind(this, "about"));
    $('#header-white').on('click', ShowPage.bind(this, "white"));
    $('#header-learn').on('click', ShowPage.bind(this, "learn"));
    $('#header-benefits').on('click', ShowPage.bind(this, "benefits"));
    $('#header-merch').on('click', ShowPage.bind(this, "merch"));
  }

  function ShowPage(mode) {
    this.mode = mode;
    $.each($("#centerbox").children(), (_i, v) => {
      $(v).hide();
      if (v.id == mode) $(v).show();
    });
  }

  return Application;
});
