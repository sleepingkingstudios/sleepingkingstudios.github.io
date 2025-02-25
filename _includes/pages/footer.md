<footer>
  {% if page.breadcrumbs %}
  <div class="section">
    <div class="container is-max-{{include.max-width}}">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          {% for breadcrumb in page.breadcrumbs %}
            <li>{% if breadcrumb.url %}<a href="{{site.baseurl}}{{breadcrumb.url}}">{{ breadcrumb.label }}</a>{% else %}{{ breadcrumb.label }}{% endif %}</li>
          {% endfor %}
        </ul>
      </nav>
    </div>
  </div>
  {% endif %}

  <div class="footer">
    <div class="container is-max-{{include.max-width}}">
      <div class="columns has-text-centered is-size-5 mb-5">
        <div class="column">
          <strong>Contact</strong>
        </div>
        <div class="column">
          <a href="mailto:rob.smith@sleepingkingstudios.com" target="_blank">
            <span class="icon-text">
              <span class="icon is-medium">
                <i class="fa-solid fa-envelope"></i>
              </span>
            </span>
            Email
          </a>
        </div>
        <div class="column">
          <a href="https://github.com/sleepingkingstudios/" target="_blank">
            <span class="icon-text">
              <span class="icon is-medium">
                <i class="fa-brands fa-github"></i>
              </span>
            </span>
            GitHub
          </a>
        </div>
        <div class="column">
          <a href="https://www.linkedin.com/in/robert-smith-bba5a84/" target="_blank">
            <span class="icon-text">
              <span class="icon is-medium ">
                <i class="fa-brands fa-linkedin"></i>
              </span>
            </span>
            LinkedIn
          </a>
        </div>
      </div>
      <p class="has-text-centered">
        Sleeping&nbsp;King&nbsp;Studios is
        <span class="icon-text">
          <span class="icon">
            <i class="fa fa-copyright"></i>
          </span>
        </span>
        Copyright&nbsp;2013-2025 Rob&nbsp;Smith
      </p>
      <p class="has-text-centered is-italic mt-1">
        Hic&nbsp;Iacet&nbsp;Arthurus Rex&nbsp;Quondam Rexque&nbsp;Futurus
      </p>
    </div>
  </div>
</footer>
