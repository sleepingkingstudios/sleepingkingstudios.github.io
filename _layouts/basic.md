---
layout: default
---

<div class="container is-max-desktop">
  <nav class="navbar" role="navigation" aria-label="main navigation" data-controller="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="{{site.baseurl}}/">
        <figure class="image is-32x32" style="top: 0.25rem;">
          <img src="{{site.baseurl}}/assets/images/favicon.png" />
        </figure>
        <span class="title is-size-4">Sleeping King Studios</span>
      </a>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-action="click->navbar#toggle" data-navbar-target="button">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="primary-navigation" class="navbar-menu" data-navbar-target="menu">
      <div class="navbar-start">
        <a href="{{site.baseurl}}/about" class="navbar-item">
          About
        </a>
        <a class="navbar-item">
          Portfolio
        </a>
        <a href="{{site.baseurl}}/resume" class="navbar-item">
          Resume
        </a>
      </div>
    </div>
  </nav>
</div>

{% include pages/main.md %}

{% include pages/footer.md %}

<script type="module">
  import NavbarController from "{{site.baseurl}}/assets/javascript/navbar-controller.js";

  window.Stimulus.register("navbar", NavbarController);
</script>
