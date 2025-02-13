---
layout: default
---

<div class="container is-max-desktop">
  <nav class="navbar" role="navigation" aria-label="main navigation" data-target="primary-navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="{{site.baseurl}}/">
        <figure class="image is-32x32" style="top: 0.25rem;">
          <img src="{{site.baseurl}}/assets/images/favicon.png" />
        </figure>
        <span class="title is-size-4">Sleeping King Studios</span>
      </a>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="primary-navigation" class="navbar-menu">
      <div class="navbar-start">
        <a href="{{site.baseurl}}/about" class="navbar-item">
          About
        </a>
        <a class="navbar-item">
          Portfolio
        </a>
        <a class="navbar-item">
          Resume
        </a>
      </div>
    </div>
  </nav>
</div>

{% include pages/main.md %}

{% include pages/footer.md %}
