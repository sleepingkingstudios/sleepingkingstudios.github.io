<div class="card">
  <div class="card-content">
    <p class="has-text-weight-bold is-size-4">
      {% if include.url %}
      <a href="{{site.baseurl}}{{include.url}}">
        <span class="icon-text">
          <span class="icon">
            <i class="fa fa-{{include.icon}}"></i>
          </span>
          {{include.label}}
        </span>
      </a>
      {% else %}
      <span class="icon-text">
        <span class="icon">
          <i class="fa fa-{{include.icon}}"></i>
        </span>
        {{include.label}}
      </span>
      {% endif %}
    </p>
    {{include.body}}
  </div>
</div>
