window.SleepingKingStudios = {};

SleepingKingStudios.Utilities = {};

(function(SleepingKingStudios) {
  SleepingKingStudios.Utilities.QualifiedPropertyName = {
    "join": function(ary) {
      console.log(`SleepingKingStudios.Utilities.QualifiedPropertyName#join()`);
      console.log(ary);

      if(ary.length < 2) { return ary[0]; }

      let str = ary.shift();

      return `${str}[${ary.join('][')}]`;
    }, // end method join

    "split": function(str) {
      return str.replace(']', '').split('[');
    }, // end method split

    "toPropertyName": function(str) {
      let ary = this.split(str);

      return ary[ary.length - 1];
    } // end method toPropertyName
  } // end object

  SleepingKingStudios.WrappedHtmlNode = class WrappedHtmlNode {
    constructor(rootElement) {
      this.$root = $(rootElement);
    } // end constructor

    bind(...args) {
      this.$root.bind(...args);
    } // end method bind
  } // end class

  SleepingKingStudios.FormGroup = class FormGroup extends SleepingKingStudios.WrappedHtmlNode {
    constructor(rootElement) {
      super(rootElement);

      let $input = this.$input = this._findInput();

      if($input.length == 0) { return; }

      let qualified = this.qualifiedPropertyName = $input.prop('name');

      this.propertyName = SleepingKingStudios.Utilities.QualifiedPropertyName.toPropertyName(qualified);
    } // end constructor

    get value() {
      return this.$input.val();
    } // end accessor value

    clearErrors() {
      this.$root.removeClass('form-group-error');

      let errors = this.$root.children('span.errors');

      errors.text('');
    } // end method clearErrors

    setErrors(messages) {
      this.$root.addClass('form-group-error');

      let errors = this.$root.children('span.errors');

      errors.text(messages);
    } // end method setErrors

    // Private Methods

    _findInput() {
      return this.$root.find('input, textarea');
    } // end method _findInput
  } // end class

  SleepingKingStudios.Form = class Form extends SleepingKingStudios.WrappedHtmlNode {
    constructor(rootElement) {
      super(rootElement);

      this._buildFields(rootElement);
    } // end constructor

    get data() {
      let qualified;
      let field;
      let data = {};

      for(qualified in this.fields) {
        let fragments = SleepingKingStudios.Utilities.QualifiedPropertyName.split(qualified);
        let formGroup = this.fields[qualified];
        let obj       = data;

        for(var i = 0; i < fragments.length - 1; ++i) {
          let fragment = fragments[i];

          if(typeof obj[fragment] == 'undefined') {
            obj[fragment] = {};
          } // end if

          obj = obj[fragment];
        } // end for

        let fragment = fragments[fragments.length - 1];

        obj[fragment] = formGroup.value;
      } // end for

      return data;
    } // end accessor data

    get url() {
      return this.$root.prop('action');
    } // end accessor url

    // Private Methods

    _buildFields(rootElement) {
      this.fields = {};

      let form = this;

      rootElement.children('.form-group').each(function(index) {
        let $formGroup = $(this);
        let formGroup  = new SleepingKingStudios.FormGroup($formGroup);

        if(formGroup.qualifiedPropertyName) {
          form.fields[formGroup.qualifiedPropertyName] = formGroup;
        } // end if
      }); // end each
    } // end method _buildFields

    _flattenErrors(errors) {
      let flattened = {};
      let fragments = [];
      let depth     = 0;

      for(let key in errors) {
        let value = errors[key];

        fragments.push(key);
        depth += 1;

        if(_.isArray(value) || !_.isObject(value)) {
          let joined = fragments.join(',');

          flattened[joined] = value;
        } else {
          let results = this._flattenErrors(value);

          for(let resultKey in results) {
            fragments.push(resultKey);

            let joined = fragments.join(',');

            flattened[joined] = results[resultKey];

            fragments.pop();
          } // end for
        } // end if-else

        fragments.pop();
        depth -= 1;
      } // end for..in

      return flattened;
    } // end method _flattenErrors

    _normalizeErrors(errors) {
      let flattened  = this._flattenErrors(errors);
      let normalized = {};

      for(let joined in flattened) {
        console.log(joined);
        let fragments = joined.split(',');
        let rejoined  = SleepingKingStudios.Utilities.QualifiedPropertyName.join(fragments);
        console.log(rejoined);

        normalized[rejoined] = flattened[joined];
      } // end for

      return normalized;
    } // end method _normalizeErrors
  } // end class
})(window.SleepingKingStudios);

class Alerts extends SleepingKingStudios.WrappedHtmlNode {
  add(type, message, title = null) {
    console.log(`Alerts#add(), type = ${type}, message = "${message}", title = "${title}"`);

    let $alert = this._build(type, message, title);

    this.$root.append($alert);
  } // end method add

  danger(message, title = null) {
    this.add('danger', message, title);
  } // end method danger

  info(message, title = null) {
    this.add('info', message, title);
  } // end method info

  success(message, title = null) {
    this.add('success', message, title);
  } // end method success

  removeAll() {
    this.alerts.remove();
  } // end method removeAll

  warning(message, title = null) {
    this.add('warning', message, title);
  } // end method success

  // Accessors and Mutators

  get alerts() {
    return this.$root.children('.alert');
  } // end accessor get alerts

  // Private Methods

  _build(type, message, title = null) {
    let $alert = jQuery('<p>');
    $alert.addClass(`alert alert-${type}`);

    $alert.append('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');

    if(typeof title == 'string' && title.length > 0) {
      let $title = jQuery('<strong>').text(title);

      $alert.append($title);

      message = ` ${message}`;
    } // end if

    let text = document.createTextNode(message);

    $alert.append(text);

    return $alert;
  } // end method _build
} // end class

class ContactForm extends SleepingKingStudios.Form {
  constructor(rootElement, alerts) {
    super(rootElement);

    this.alerts = alerts;

    this.bind('submit', this.submitHandler());
  } // end constructor

  // Event Handlers

  submitHandler() {
    let form = this;

    return function(event) {
      event.preventDefault();

      console.log('ContactForm#submit()');
      console.log(form.data);

      form.alerts.removeAll();
      form._clearErrors();

      let request = window.request = jQuery.post(form.url, form.data);

      request.done(form.submitSuccessHandler());
      request.fail(form.submitFailureHandler());
    }; // end handler
  } // end method submitHandler

  submitFailureHandler() {
    let form = this;

    return function(request) {
      console.log('ContactForm#submitFailure()');

      let json  = request.responseJSON;
      console.log(json);

      form.alerts.danger(json.message, 'Error');

      let errors = form._normalizeErrors(json.errors);
      console.log(errors);

      form._setErrors(errors);
    } // end handler
  } // end method submitFailureHandler

  submitSuccessHandler() {
    let form = this;

    return function(data) {
      console.log('ContactForm#submitSuccess()');
      console.log(data);

      form.alerts.success(data.message);
    } // end handler
  } // end method submitSuccessHandler

  // Private Methods

  _clearErrors() {
    for(let name in this.fields) {
      let field = this.fields[name];

      field.clearErrors();
    } // end for
  } // end method _clearErrors

  _setErrors(errors) {
    console.log('ContactForm#_setErrors()');
    console.log(this.fields);
    console.log(errors);
    for(let key in errors) {
      let field    = this.fields[key];
      let messages = errors[key].join(',');
      console.log(key);
      console.log(field);
      console.log(messages);

      field.setErrors(messages);
    } // end let
  } // end method _setErrors
} // end class

jQuery(document).ready(event => {
  let $form   = $('form');
  let $alerts = $('.alerts');

  window.alerts = new Alerts($alerts);
  window.form   = new ContactForm($form, window.alerts);

  console.log('Greetings, starfighter!');
});
