<nav>
  <ul class="ml-0">
    {% for item in include.navigation %}
    {% include pages/side-nav-item.md label=item.label url=item.url children=item.children %}
    {% endfor %}
  </ul>
</nav>
