---
layout: hero
---

<p class="is-size-5">
  Welcome to <span class="has-text-success has-text-weight-semibold">Sleeping King Studios</span>, my imprint and portfolio!
</p>

I'm Rob Smith, a senior software engineer with 14 years of professional development experience, primarily for startup companies and contract roles. I have particular expertise in the areas of automated testing and systems design. I develop and maintain a library of open source tools, and I've also worked as a professional tabletop game designer.

<div class="fixed-grid has-1-cols-mobile has-3-cols mt-5 mb-5">
  <div class="grid">
    <div class="cell is-flex">
      {% capture card_body %}<p>
        Information about the author, Sleeping King Studios, and this website.
      </p>{% endcapture %}
      {% capture card_url %}{{site.baseurl}}/about{% endcapture %}
      {% include card.md icon="pen-nib" label="About" url=card_url body=card_body %}
    </div>
    <div class="cell is-flex">
      {% capture card_body %}<p>
        My open source projects, primarily in the
        <span class="has-text-imperial-purple">
          <i class="fa fa-gem"></i>
          Ruby
        </span>
        programming language.
      </p>{% endcapture %}
      {% capture card_url %}{{site.baseurl}}/portfolio{% endcapture %}
      {% include card.md icon="lightbulb" label="Portfolio" url=card_url body=card_body %}
    </div>
    <div class="cell is-flex">
      {% capture card_body %}<p>
        My professional accomplishments across a 14 year career as a professional software engineer.
      </p>{% endcapture %}
      {% capture card_url %}{{site.baseurl}}/resume{% endcapture %}
      {% include card.md icon="file-lines" label="Resume" url=card_url body=card_body %}
    </div>
  </div>
</div>


My development philosophy:

<p>
  <span class="has-text-imperial-purple has-text-weight-semibold">
    Libraries Over Frameworks
  </span>
  <br />
  Frameworks are powerful. Use that power, but remember that frameworks are designed around their use case, not yours.
</p>

<p>
  <span class="has-text-imperial-purple has-text-weight-semibold">
    Recenter Your Verbs
  </span>
  <br />
  Your business logic is just as important as your data. Make it a first-class part of your application.
</p>

<p>
  <span class="has-text-imperial-purple has-text-weight-semibold">
    Solve Problems Once
  </span>
  <br />
  Experiment. Iterate. Find the right solution and then apply it. Don't keep reinventing the same wheel.
</p>

Looking for an expert developer, either for a contract or a full-time position? Need someone who will work with your team every step of the way, from business idea to product and from engineering to quality assurance? While my expertise is in Ruby, Rails, and JavaScript, I have a proven track record of picking up new languages and frameworks as needed for a project. I'm happy to discuss your needs for Node, Python, Elixir, or whatever solution is the right fit for you. <span class="is-size-7">As long as it's not PHP. Sorry, but once was enough.</span>
