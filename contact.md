---
mailerUrl: https://fierce-temple-94654.herokuapp.com/contact
---

# Contact Me

<script src="/assets/javascripts/contact_form.js"></script>

<style>
  .form-group-error span.errors {
    color: #a94442;
  }

  .form-group-error input, .form-group-error textarea {
    border-color: #a94442;
  }
</style>

<div class="alerts"></div>

<form action="{{ page.mailerUrl }}" accept-charset="UTF-8" method="post">
  <div class="form-group">
    <label for="contact_email_address">Email Address</label> <span class="errors"></span>
    <input type="email" id="contact_email_address" name="contact[email_address]" class="form-control" placeholder="Required Field">
  </div>

  <div class="form-group">
    <label for="contact_name">Name</label> <span class="errors"></span>
    <input type="text" id="contact_name" name="contact[name]" class="form-control">
  </div>

  <div class="form-group">
    <label for="contact_message">Message</label> <span class="errors"></span>
    <textarea id="contact_message" name="contact[message]" class="form-control" rows="3"></textarea>
  </div>

  <div class="form-group">
    <button type="submit" class="btn btn-primary">
      <i class="fa fa-envelope"></i>
      Contact Me
    </button>

    <a href="/" type="submit" class="btn btn-default">
      <i class="fa fa-close"></i>
      Cancel
    </a>
  </div>
</form>

##### Privacy Notice

By clicking "Contact Me", you agree to share your contact information with Sleeping King Studios. For more information on how we handle your information, see our [Privacy Policy](/about/privacy.html).
