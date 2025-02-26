<li style="list-style: none;">
  <a href="{{include.url}}" class="is-size-5 has-text-weight-medium">
    {{ include.label }}
  </a>
  {% if include.children %}
  <ul class="is-hidden-touch mt-1 ml-0">
    {% for child in include.children %}
    <li style="list-style: none;">
      <a href="{{child.url}}">{{ child.label }}</a>
    </li>
    {% endfor %}
  </ul>
  {% endif %}
</li>
