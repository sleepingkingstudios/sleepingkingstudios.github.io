---
layout: basic
breadcrumbs:
  - label: Home
    url: '../'
  - label: Portfolio
---

# Portfolio

The projects below are why Sleeping King Studios exists. They represent over ten years of open source development work, from low-level tools to libraries for business logic management to deployed and active applications.

In addition, I have made contributions to [RSpec](https://github.com/rspec/rspec) (including support for Ruby 3 keyword parameters) and [Mongoid](https://github.com/mongodb/mongoid).

## Applications

I develop and maintain two applications for personal use: <strong>Lanyard</strong> and <strong>Lodestone</strong>.

<div class="fixed-grid has-1-cols-mobile has-2-cols mt-5 mb-5">
  <div class="grid">
    <div class="cell is-flex-tablet">
      {% capture card_body %}
      <p style="flex: 1">
        Lanyard is an application for tracking job openings and applications. It defines functionality for managing applications, events, companies, recruiters, and agencies.
      </p>
      <p>
        <a href="https://github.com/sleepingkingstudios/lanyard" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa-brands fa-github"></i>
            </span>
            Source Code
          </span>
        </a>
      </p>
      {% endcapture %}
      {% include card.md label="Lanyard" icon="briefcase" body=card_body %}
    </div>
    <div class="cell is-flex-tablet">
      {% capture card_body %}
      <p class="is-flex-grow-1">
        Lodestone is a tool for managing my open source development work, similar to Trello or Jira. It manages projects, tasks, and statuses, with particular functionality for handling cross-project dependencies.
      </p>
      <p>
        <a href="https://github.com/sleepingkingstudios/lodestone" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa-brands fa-github"></i>
            </span>
            Source Code
          </span>
        </a>
      </p>
      {% endcapture %}
      {% include card.md label="Lodestone" icon="compass" body=card_body %}
    </div>
  </div>
</div>

While the applications themselves are not publicly available, they are open source; anyone is free to clone, fork, or deploy their own copies on their own infrastructure.

<details class="block">
  <summary class="is-italic">Why personal use?</summary>
  <p>
    Managing and scaling an application from the ground up would be interesting, but the biggest obstacle to turning a personal application is liability. The internet being what it is, it would be only a matter of time before someone posts copyrighted material, or explicit content, or extreme political views.
  </p>
</details>

## Libraries

The following libraries are
<span class="has-text-success has-text-weight-semibold">production-ready</span>,
and suitable for use in deployed applications.

<div class="fixed-grid has-1-cols-mobile has-2-cols mt-5 mb-5">
  <div class="grid">
    <div class="cell is-col-span-1-mobile is-col-span-2 is-flex-tablet">
      {% capture card_body %}
      <p style="flex: 1">
        Cuprum is the jewel in Sleeping King Studios' crown. The gem implements the
        <a href="https://en.wikipedia.org/wiki/Command_pattern" target="_blank">Command pattern</a>,
        allowing projects to define encapsulated, composable logic. Supports error handling and branching logical flows using railway-oriented programming.
      </p>
      <p>
        <a href="{{site.baseurl}}/portfolio/cuprum">
          About Cuprum
        </a>
      </p>
      <div class="columns is-7" style="padding-top: var(--bulma-column-gap); padding-bottom: var(--bulma-column-gap)">
        <div class="column py-0">
          <p class="mb-1">
            <a href="https://www.sleepingkingstudios.com/cuprum/" target="_blank">
              <span class="icon-text">
                <span class="icon">
                  <i class="fa fa-book"></i>
                </span>
                Documentation
              </span>
            </a>
          </p>
          <p class="mb-1">
            <a href="https://rubygems.org/gems/cuprum" target="_blank">
              <span class="icon-text">
                <span class="icon">
                  <i class="fa fa-gem"></i>
                </span>
                RubyGems
              </span>
            </a>
          </p>
        </div>
        <div class="column py-0">
          <p class="mb-1">
            <a href="https://github.com/sleepingkingstudios/cuprum" target="_blank">
              <span class="icon-text">
                <span class="icon">
                  <i class="fa-brands fa-github"></i>
                </span>
                Source Code
              </span>
            </a>
          </p>
          <p class="mb-1">
            <a href="https://github.com/sleepingkingstudios/cuprum/releases/tag/v1.3.0" target="_blank">
              <span class="icon-text">
                <span class="icon">
                  <i class="fa fa-tag"></i>
                </span>
                v1.3.0
              </span>
            </a>
          </p>
        </div>
      </div>
      {% endcapture %}
      {% capture card_url %}{{site.baseurl}}/portfolio/cuprum{% endcapture %}
      {% include card.md label="Cuprum" label_size="5" icon="gear" url=card_url body=card_body %}
    </div>
    <div class="cell is-flex-tablet">
      {% capture card_body %}
      <p style="flex: 1">
        A collection of concerns, matchers, and tools for use with the
        <a href="https://rspec.info/" target="_blank">RSpec</a>
        testing framework. Now supports deferred example groups for sharing specs between projects or repositories.
      </p>
      <p>
        <a href="{{site.baseurl}}/portfolio/rspec-sleeping_king_studios">
          About RSpec::SleepingKingStudios
        </a>
      </p>
      <p class="mb-1">
        <a href="https://www.sleepingkingstudios.com/rspec-sleeping_king_studios/" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa fa-book"></i>
            </span>
            Documentation
          </span>
        </a>
      </p>
      <p class="mb-1">
        <a href="https://rubygems.org/gems/rspec-sleeping_king_studios" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa fa-gem"></i>
            </span>
            RubyGems
          </span>
        </a>
      </p>
      <p class="mb-1">
        <a href="https://github.com/sleepingkingstudios/rspec-sleeping_king_studios/" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa-brands fa-github"></i>
            </span>
            Source Code
          </span>
        </a>
      </p>
      <p class="mb-1">
        <a href="https://github.com/sleepingkingstudios/rspec-sleeping_king_studios/releases/tag/v2.8.2" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa fa-tag"></i>
            </span>
            v2.8.2
          </span>
        </a>
      </p>
      {% endcapture %}
      {% capture card_url %}{{site.baseurl}}/portfolio/rspec-sleeping_king_studios{% endcapture %}
      {% include card.md label="RSpec::SleepingKingStudios" label_size="5" icon="microscope" url=card_url body=card_body %}
    </div>
    <div class="cell is-flex-tablet">
      {% capture card_body %}
      <p style="flex: 1">
        Functional-style tools for working with common Ruby objects, inspired by JavaScript tools such as
        <a href="https://lodash.com/" target="_blank">Lodash</a>.
        Handles common tasks such as string inflection without patching the global namespace.
      </p>
      <p class="mb-1">
        <a href="https://rubygems.org/gems/sleeping_king_studios-tools" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa fa-gem"></i>
            </span>
            RubyGems
          </span>
        </a>
      </p>
      <p class="mb-1">
        <a href="https://github.com/sleepingkingstudios/sleeping_king_studios-tools" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa-brands fa-github"></i>
            </span>
            Source Code
          </span>
        </a>
      </p>
      <p class="mb-1">
        <a href="https://github.com/sleepingkingstudios/sleeping_king_studios-tools/releases/tag/v1.2.0" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa fa-tag"></i>
            </span>
            v1.2.0
          </span>
        </a>
      </p>
      {% endcapture %}
      {% include card.md label="SleepingKingStudios::Tools" label_size="5" icon="screwdriver-wrench" body=card_body %}
    </div>
  </div>
</div>

## Experiments

The following libraries are under active development and
<span class="has-text-danger has-text-weight-semibold">not production-ready</span>.
Expect changes to public-facing code and interfaces until each library hits the magic
<span class="icon-text">
  <span class="icon" style="margin-right: -0.25rem;">
    <i class="fa fa-tag"></i>
  </span>
  1.0.0
</span>
release.

<div class="fixed-grid has-1-cols-mobile has-2-cols mt-5 mb-5">
  <div class="grid">
    <div class="cell is-flex-tablet">
      {% capture card_body %}
      <p style="flex: 1">
        A datastore abstraction library built on Cuprum. Cuprum::Collections leverages the Repository pattern and provides a template for defining collections and scopes against different data sources.
      </p>
      <p class="mb-1">
        <a href="https://rubygems.org/gems/cuprum-collections" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa fa-gem"></i>
            </span>
            RubyGems
          </span>
        </a>
      </p>
      <p class="mb-1">
        <a href="https://github.com/sleepingkingstudios/cuprum-collections" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa-brands fa-github"></i>
            </span>
            Source Code
          </span>
        </a>
      </p>
      <p class="mb-1">
        <a href="https://github.com/sleepingkingstudios/cuprum-collections/releases/tag/v0.4.0" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa fa-tag"></i>
            </span>
            v0.4.0
          </span>
        </a>
      </p>
      {% endcapture %}
      {% include card.md label="Cuprum::Collections" label_size="5" icon="gears" body=card_body %}
    </div>
    <div class="cell is-flex-tablet">
      {% capture card_body %}
      <p style="flex: 1">
        A toolkit for developing
        <a href="https://rubyonrails.org/" target="_blank">Rails</a>
        applications, using Cuprum to define your business logic and deconstruct your controllers into single-responsibility actions, responders, and serializers.
      </p>
      <p class="mb-1">
        <a href="https://rubygems.org/gems/cuprum-rails" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa fa-gem"></i>
            </span>
            RubyGems
          </span>
        </a>
      </p>
      <p class="mb-1">
        <a href="https://github.com/sleepingkingstudios/cuprum-rails" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa-brands fa-github"></i>
            </span>
            Source Code
          </span>
        </a>
      </p>
      <p class="mb-1">
        <a href="https://github.com/sleepingkingstudios/cuprum-rails/releases/tag/v0.2.0" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa fa-tag"></i>
            </span>
            v0.2.0
          </span>
        </a>
      </p>
      {% endcapture %}
      {% include card.md label="Cuprum::Rails" label_size="5" icon="train-subway" body=card_body %}
    </div>
    <div class="cell is-flex-tablet">
      {% capture card_body %}
      <p style="flex: 1">
        Tools for generating a versioned documentation site from YARD docs.
      </p>
      <p class="mb-1">
        <a href="https://rubygems.org/gems/sleeping_king_studios-docs" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa fa-gem"></i>
            </span>
            RubyGems
          </span>
        </a>
      </p>
      <p class="mb-1">
        <a href="https://github.com/sleepingkingstudios/sleeping_king_studios-docs" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa-brands fa-github"></i>
            </span>
            Source Code
          </span>
        </a>
      </p>
      <p class="mb-1">
        <a href="https://github.com/sleepingkingstudios/sleeping_king_studios-docs/releases/tag/v0.1.0" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa fa-tag"></i>
            </span>
            v0.1.0
          </span>
        </a>
      </p>
      {% endcapture %}
      {% include card.md label="SleepingKingStudios::Docs" label_size="5" icon="book" body=card_body %}
    </div>
    <div class="cell is-flex-tablet">
      {% capture card_body %}
      <p style="flex: 1">
        A library for defining and validating data structures without relying on an ORM or framework. Provides entity definitions and validator objects.
      </p>
      <p class="mb-1">
        <a href="https://rubygems.org/gems/stannum" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa fa-gem"></i>
            </span>
            RubyGems
          </span>
        </a>
      </p>
      <p class="mb-1">
        <a href="https://github.com/sleepingkingstudios/stannum" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa-brands fa-github"></i>
            </span>
            Source Code
          </span>
        </a>
      </p>
      <p class="mb-1">
        <a href="https://github.com/sleepingkingstudios/stannum/releases/tag/v0.3.0" target="_blank">
          <span class="icon-text">
            <span class="icon">
              <i class="fa fa-tag"></i>
            </span>
            v0.3.0
          </span>
        </a>
      </p>
      {% endcapture %}
      {% include card.md label="Stannum" label_size="5" icon="dolly" body=card_body %}
    </div>
  </div>
</div>
