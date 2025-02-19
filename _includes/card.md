<div class="card" style="width: 100%">
  <div class="card-content is-flex is-flex-direction-column" style="height: 100%;">
    {% assign label_size = include.label_size | default: "4" %}
    <p class="has-text-weight-bold is-size-{{ label_size }} mb-1">
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
