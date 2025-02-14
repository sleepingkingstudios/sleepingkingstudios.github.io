---
layout: hero
---

<p class="is-size-5">
  Welcome to <span class="has-text-success has-text-weight-semibold">Sleeping King Studios</span>, my imprint and portfolio!
</p>

<p>
  I'm Rob Smith, a senior software engineer with 14 years of professional development experience, primarily for startup companies and contract roles. I have particular expertise in the areas of automated testing and systems design. I develop and maintain a library of open source tools, and I've also worked as a professional tabletop game designer.
</p>

<div class="fixed-grid has-3-cols has-1-cols-mobile mt-5 mb-5">
  <div class="grid">
    <div class="cell is-flex-tablet">
      {% capture card_body %}<p>
        Information about the author, Sleeping King Studios, or this website.
      </p>{% endcapture %}
      {% capture card_url %}{{site.baseurl}}/about{% endcapture %}
      {% include card.md icon="pen-nib" label="About" url=card_url body=card_body %}
    </div>
    <div class="cell is-flex-tablet">
      {% capture card_body %}<p>
        My open source projects, primarily in the
        <span class="has-text-danger-40">
          <i class="fa fa-gem"></i>
          Ruby
        </span>
        programming language.
      </p>{% endcapture %}
      {% include card.md icon="lightbulb" label="Portfolio" body=card_body %}
    </div>
    <div class="cell is-flex-tablet">
      {% capture card_body %}<p>
        My professional accomplishments across a 14 year career as a professional software engineer.
      </p>{% endcapture %}
      {% include card.md icon="file-lines" label="Resume" body=card_body %}
    </div>
  </div>
</div>

<p>
  Looking for an expert developer, either for a contract or a full-time position? Need someone who will work with your team every step of the way, from business idea to product and from engineering to quality assurance? While my expertise is in Ruby, Rails, and JavaScript, I have a proven track record of picking up new languages and frameworks as needed for a project. I'm happy to discuss your needs for Node, Python, Elixir, or whatever solution is the right fit for you. <span class="is-size-7">As long as it's not PHP. Sorry, but once was enough.</span>
</p>
