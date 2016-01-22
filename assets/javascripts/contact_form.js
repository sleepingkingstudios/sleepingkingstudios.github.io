"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.SleepingKingStudios = {};

SleepingKingStudios.Utilities = {};

(function (SleepingKingStudios) {
  SleepingKingStudios.Utilities.QualifiedPropertyName = {
    "join": function join(ary) {
      console.log("SleepingKingStudios.Utilities.QualifiedPropertyName#join()");
      console.log(ary);

      if (ary.length < 2) {
        return ary[0];
      }

      var str = ary.shift();

      return str + "[" + ary.join('][') + "]";
    }, // end method join

    "split": function split(str) {
      return str.replace(']', '').split('[');
    }, // end method split

    "toPropertyName": function toPropertyName(str) {
      var ary = this.split(str);

      return ary[ary.length - 1];
    } // end method toPropertyName
  }; // end object

  SleepingKingStudios.WrappedHtmlNode = function () {
    function WrappedHtmlNode(rootElement) {
      _classCallCheck(this, WrappedHtmlNode);

      this.$root = $(rootElement);
    } // end constructor

    _createClass(WrappedHtmlNode, [{
      key: "bind",
      value: function bind() {
        var _$root;

        (_$root = this.$root).bind.apply(_$root, arguments);
      } // end method bind

    }]);

    return WrappedHtmlNode;
  }(); // end class

  SleepingKingStudios.FormGroup = function (_SleepingKingStudios$) {
    _inherits(FormGroup, _SleepingKingStudios$);

    function FormGroup(rootElement) {
      _classCallCheck(this, FormGroup);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FormGroup).call(this, rootElement));

      var $input = _this.$input = _this._findInput();

      if ($input.length == 0) {
        return _possibleConstructorReturn(_this);
      }

      var qualified = _this.qualifiedPropertyName = $input.prop('name');

      _this.propertyName = SleepingKingStudios.Utilities.QualifiedPropertyName.toPropertyName(qualified);
      return _this;
    } // end constructor

    _createClass(FormGroup, [{
      key: "clearErrors",
      // end accessor value

      value: function clearErrors() {
        this.$root.removeClass('form-group-error');

        var errors = this.$root.children('span.errors');

        errors.text('');
      } // end method clearErrors

    }, {
      key: "setErrors",
      value: function setErrors(messages) {
        this.$root.addClass('form-group-error');

        var errors = this.$root.children('span.errors');

        errors.text(messages);
      } // end method setErrors

      // Private Methods

    }, {
      key: "_findInput",
      value: function _findInput() {
        return this.$root.find('input, textarea');
      } // end method _findInput

    }, {
      key: "value",
      get: function get() {
        return this.$input.val();
      }
    }]);

    return FormGroup;
  }(SleepingKingStudios.WrappedHtmlNode); // end class

  SleepingKingStudios.Form = function (_SleepingKingStudios$2) {
    _inherits(Form, _SleepingKingStudios$2);

    function Form(rootElement) {
      _classCallCheck(this, Form);

      var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, rootElement));

      _this2._buildFields(rootElement);
      return _this2;
    } // end constructor

    _createClass(Form, [{
      key: "_buildFields",
      // end accessor url

      // Private Methods

      value: function _buildFields(rootElement) {
        this.fields = {};

        var form = this;

        rootElement.children('.form-group').each(function (index) {
          var $formGroup = $(this);
          var formGroup = new SleepingKingStudios.FormGroup($formGroup);

          if (formGroup.qualifiedPropertyName) {
            form.fields[formGroup.qualifiedPropertyName] = formGroup;
          } // end if
        }); // end each
      } // end method _buildFields

    }, {
      key: "_flattenErrors",
      value: function _flattenErrors(errors) {
        var flattened = {};
        var fragments = [];
        var depth = 0;

        for (var key in errors) {
          var value = errors[key];

          fragments.push(key);
          depth += 1;

          if (_.isArray(value) || !_.isObject(value)) {
            var joined = fragments.join(',');

            flattened[joined] = value;
          } else {
            var results = this._flattenErrors(value);

            for (var resultKey in results) {
              fragments.push(resultKey);

              var joined = fragments.join(',');

              flattened[joined] = results[resultKey];

              fragments.pop();
            } // end for
          } // end if-else

          fragments.pop();
          depth -= 1;
        } // end for..in

        return flattened;
      } // end method _flattenErrors

    }, {
      key: "_normalizeErrors",
      value: function _normalizeErrors(errors) {
        var flattened = this._flattenErrors(errors);
        var normalized = {};

        for (var joined in flattened) {
          console.log(joined);
          var fragments = joined.split(',');
          var rejoined = SleepingKingStudios.Utilities.QualifiedPropertyName.join(fragments);
          console.log(rejoined);

          normalized[rejoined] = flattened[joined];
        } // end for

        return normalized;
      } // end method _normalizeErrors

    }, {
      key: "data",
      get: function get() {
        var qualified = undefined;
        var field = undefined;
        var data = {};

        for (qualified in this.fields) {
          var fragments = SleepingKingStudios.Utilities.QualifiedPropertyName.split(qualified);
          var formGroup = this.fields[qualified];
          var obj = data;

          for (var i = 0; i < fragments.length - 1; ++i) {
            var _fragment = fragments[i];

            if (typeof obj[_fragment] == 'undefined') {
              obj[_fragment] = {};
            } // end if

            obj = obj[_fragment];
          } // end for

          var fragment = fragments[fragments.length - 1];

          obj[fragment] = formGroup.value;
        } // end for

        return data;
      } // end accessor data

    }, {
      key: "url",
      get: function get() {
        return this.$root.prop('action');
      }
    }]);

    return Form;
  }(SleepingKingStudios.WrappedHtmlNode); // end class
})(window.SleepingKingStudios);

var Alerts = function (_SleepingKingStudios$3) {
  _inherits(Alerts, _SleepingKingStudios$3);

  function Alerts() {
    _classCallCheck(this, Alerts);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Alerts).apply(this, arguments));
  }

  _createClass(Alerts, [{
    key: "add",
    value: function add(type, message) {
      var title = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

      console.log("Alerts#add(), type = " + type + ", message = \"" + message + "\", title = \"" + title + "\"");

      var $alert = this._build(type, message, title);

      this.$root.append($alert);
    } // end method add

  }, {
    key: "danger",
    value: function danger(message) {
      var title = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      this.add('danger', message, title);
    } // end method danger

  }, {
    key: "info",
    value: function info(message) {
      var title = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      this.add('info', message, title);
    } // end method info

  }, {
    key: "success",
    value: function success(message) {
      var title = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      this.add('success', message, title);
    } // end method success

  }, {
    key: "removeAll",
    value: function removeAll() {
      this.alerts.remove();
    } // end method removeAll

  }, {
    key: "warning",
    value: function warning(message) {
      var title = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      this.add('warning', message, title);
    } // end method success

    // Accessors and Mutators

  }, {
    key: "_build",
    // end accessor get alerts

    // Private Methods

    value: function _build(type, message) {
      var title = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

      var $alert = jQuery('<p>');
      $alert.addClass("alert alert-" + type);

      $alert.append('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');

      if (typeof title == 'string' && title.length > 0) {
        var $title = jQuery('<strong>').text(title);

        $alert.append($title);

        message = " " + message;
      } // end if

      var text = document.createTextNode(message);

      $alert.append(text);

      return $alert;
    } // end method _build

  }, {
    key: "alerts",
    get: function get() {
      return this.$root.children('.alert');
    }
  }]);

  return Alerts;
}(SleepingKingStudios.WrappedHtmlNode); // end class

var ContactForm = function (_SleepingKingStudios$4) {
  _inherits(ContactForm, _SleepingKingStudios$4);

  function ContactForm(rootElement, alerts) {
    _classCallCheck(this, ContactForm);

    var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(ContactForm).call(this, rootElement));

    _this4.alerts = alerts;

    _this4.bind('submit', _this4.submitHandler());
    return _this4;
  } // end constructor

  // Event Handlers

  _createClass(ContactForm, [{
    key: "submitHandler",
    value: function submitHandler() {
      var form = this;

      return function (event) {
        event.preventDefault();

        console.log('ContactForm#submit()');
        console.log(form.data);

        form.alerts.removeAll();
        form._clearErrors();

        var request = window.request = jQuery.post(form.url, form.data);

        request.done(form.submitSuccessHandler());
        request.fail(form.submitFailureHandler());
      }; // end handler
    } // end method submitHandler

  }, {
    key: "submitFailureHandler",
    value: function submitFailureHandler() {
      var form = this;

      return function (request) {
        console.log('ContactForm#submitFailure()');

        var json = request.responseJSON;
        console.log(json);

        form.alerts.danger(json.message, 'Error');

        var errors = form._normalizeErrors(json.errors);
        console.log(errors);

        form._setErrors(errors);
      }; // end handler
    } // end method submitFailureHandler

  }, {
    key: "submitSuccessHandler",
    value: function submitSuccessHandler() {
      var form = this;

      return function (data) {
        console.log('ContactForm#submitSuccess()');
        console.log(data);

        form.alerts.success(data.message);
      }; // end handler
    } // end method submitSuccessHandler

    // Private Methods

  }, {
    key: "_clearErrors",
    value: function _clearErrors() {
      for (var name in this.fields) {
        var field = this.fields[name];

        field.clearErrors();
      } // end for
    } // end method _clearErrors

  }, {
    key: "_setErrors",
    value: function _setErrors(errors) {
      console.log('ContactForm#_setErrors()');
      console.log(this.fields);
      console.log(errors);
      for (var key in errors) {
        var field = this.fields[key];
        var messages = errors[key].join(',');
        console.log(key);
        console.log(field);
        console.log(messages);

        field.setErrors(messages);
      } // end let
    } // end method _setErrors

  }]);

  return ContactForm;
}(SleepingKingStudios.Form); // end class

jQuery(document).ready(function (event) {
  var $form = $('form');
  var $alerts = $('.alerts');

  window.alerts = new Alerts($alerts);
  window.form = new ContactForm($form, window.alerts);

  console.log('Greetings, starfighter!');
});