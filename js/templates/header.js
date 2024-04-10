document.addEventListener("DOMContentLoaded", function () {
  var template = `
    <header class="header-section container-fluid">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand" href="/">
                <img src="/images/image4.png" width="50" height="50" class="d-inline-block align-top" alt="" />
                L'ultima Cena
            </a>
            <ul class="navbar-nav mr-auto"></ul>
            <ul class="navbar-nav">
                {{#links}}
                <li class="nav-item">
                    <a class="nav-link" href="{{url}}">{{name}}</a>
                </li>
                {{/links}}
            </ul>
        </nav>
    </header>`;

  var rendered = Mustache.render(template, {
    links: [
      { name: "Build Your Pizza!", url: "/" },
      { name: "Orders", url: "/app/order/orders.html" },
      { name: "Ingredients", url: "/app/ingredient/ingredients.html" },
      { name: "Beverages", url: "/app/beverage/beverages.html" },
      { name: "Sizes", url: "/app/size/sizes.html" },
      { name: "Report", url: "/app/report/report.html" },
    ],
  });

  document.getElementById("header-placeholder").innerHTML = rendered;
});
