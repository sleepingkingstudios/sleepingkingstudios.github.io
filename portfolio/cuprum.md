---
layout: left-sidebar
breadcrumbs:
  - label: Home
    url: '../'
  - label: Portfolio
    url: '../portfolio'
navigation:
  - label: Introduction
    url: '#'
    children:
      - label: Why Cuprum?
        url: '#why-cuprum'
  - label: Overview
    url: '#overview'
    children:
      - label: Commands
        url: '#commands'
      - label: Results
        url: '#results'
      - label: Errors
        url: '#errors'
  - label: Advanced Features
    url: '#advanced-features'
    children:
      - label: Middleware
        url: '#middleware'
      - label: Parameter Validation
        url: '#parameter-validation'
      - label: Steps
        url: '#steps'
---

# Cuprum

Cuprum is a toolkit for defining business logic as a first-class member of your application. It bridges object-oriented and functional programming techniques to provide a structured approach to defining actions, state transitions, and other processes for your application.

{% capture code_block %}
```ruby
class LaunchRocket < Cuprum::Command
  private

  def build_rocket(name:)
    return failure(invalid_rocket_error) if name.nil? || name.empty?

    Rocket.new(name:)
  end

  def fuel_rocket(rocket:)
    FuelRocket.new.call(fuel: 100.0, rocket:)
  end

  def invalid_rocket_error
    Cuprum::Error.new(
      message: "name can't be blank",
      type:    'space.rockets.invalid_rocket_error'
    )
  end

  def launch_rocket(rocket)
    rocket.launched = true
  end

  def process(name:)
    rocket = step { build_rocket(name:) }

    step { fuel_rocket(rocket:) }

    step { launch_rocket(rocket:) }

    success(rocket)
  end
end
```
{% endcapture %}

<details class="block">
  <summary><strong>How It Works</strong></summary>

  {{ code_block | markdownify }}
</details>

<p>
  The
  <span class="icon">
    <i class="fa fa-book"></i>
  </span>Documentation for Cuprum is
  <a href="https://www.sleepingkingstudios.com/cuprum/" target="_blank">
    available online
  </a>.
</p>

## Why Cuprum?

Most application design is focused on the *nouns* of your application: your data. And that's good - your data is important! But what's left out is the *verbs* of your application, the business logic that ties everything together. You wind up with overloaded models, enormous controllers, or a complex tangle of concerns, helpers, and services that make it difficult to test or reason about your processes.

Cuprum proposes an alternative. It defines a `Command` object that wraps a piece of business logic, such as authenticating a user, validating a data structure, or submitting an API request. Here are a few of the reasons that a command is a powerful abstraction:

- **Consistency:** Commands are always invoked using the `#call` method, and always return a `Result`. This makes reasoning about your logic easier, and enables applying more powerful techniques to your logic, such as the factory or strategy patterns.
- **Encapsulation:** You can reuse the same logic in a controller, an asynchronous job, and in a CLI tool by calling the command. This also makes testing commands much easier, since you don't have to carefully set up controller requests or parse framework responses.
- **Composability:** Commands can call other commands, allowing you to build complex logic from simple components. Cuprum provides built-in support for railway-oriented programming using the `step` method.

Cuprum also defines methods for the partial application and validation of command parameters.

## Overview

Cuprum defines three core concepts: [Commands](#commands), [Results](#results), and [Errors](#errors).

### Commands

Commands are used to define a process. They can be used to underlie a controller action or asynchonous job, or in place of a helper method or service call.

```ruby
class LaunchRocket < Cuprum::Command
  private

  def process(rocket)
    if rocket.launched
      return failure(rocket_already_launched_error)
    end

    rocket.launched = true

    success(rocket)
  end

  def rocket_already_launched_error
    Cuprum::Error.new(
      message: 'rocket already launched',
      type:    'space.errors.rocket_already_launched'
    )
  end
end
```

Above, we are defining a simple command to launch a rocket. We define a class extending `Cuprum::Command` and define the `#process` method, which implements our logic. The `#failure` and `#success` helpers are used to built a Result (see [Result](#results), below), either successful or not, which is returned when calling the command.

```ruby
Rocket  = Struct.new(:name, :launched, keyword_init: true)
rocket  = Rocket.new(name: 'Hermes I', launched: false)
command = LaunchRocket.new

command.call(rocket)

rocket.launched
#=> true
```

To call our command, we invoke the `#call` method, passing it the parameters we defined for `#process`. (Internally, `#call` delegates to `#process`, as well as ensuring that the returned object is always wrapped in a `Result`.)

### Results

Calling a `Command` will always return an instance of `Cuprum::Result`. Each result has three properties:

- `Result#value`: The value wrapped by the result. May be `nil` for failing results.
- `Result#status`: Either `:success` for a passing result, or `:failure` for a failing result.
- `Result#error`: The error for a failing result. Should be an instance of `Cuprum::Error` (see [Errors](#errors), below).

The result also defines `#success?` and `#failure?` helpers for checking the result status.

```ruby
rocket  = Rocket.new(name: 'Hermes I', launched: false)
command = LaunchRocket.new

# Calling the command with valid parameters.
result = command.call(rocket)
#=> an instance of Cuprum::Result
result.status   #=> :success
result.success? #=> true
result.value    #=> the rocket
result.error    #=> nil

# Calling the command with invalid parameters.
result = command.call(rocket)
#=> an instance of Cuprum::Result
result.status   #=> :failure
result.failure? #=> true
result.value    #=> nil
result.error
#=> an instance of Cuprum::Error
result.error.message
#=> "rocket already launched"
result.error.type
#=> "space.errors.rocket_already_launched"
```

Generally speaking, a result with status `:success` will have a `#value`, while results with status `:failure` will have an `#error`. However, this is not always the case: for example, a Create or Update action might return the modified object as part of a failed result.

### Errors

A failed result should have its `#error` property set to an instance of `Cuprum::Error`, which provides information about the failure. Each error has two properties:

- `Error#message`: A human-readable explanation of the failure.
- `Error#type`: A namespaced, unique identifier for the error.

For larger applications, the recommended practice is to use defined Error subclasses:

```ruby
module Space
  module Errors
    class RocketAlreadyLaunched < Cuprum::Error
      TYPE = 'space.errors.rocket_already_launched'

      def initialize(message: nil)
        super(message: message || 'rocket already launched')
      end
    end
  end
end
```

More complex commands, or commands that use the `step` method (see [Steps](#steps), below) may have multiple associated errors. Use the `Error#type` property to identify which failure case should be handled.

## Advanced Features

The building blocks of Cuprum ([Commands](#commands), [Results](#results), and [Errors](#errors)) are simple but powerful tools for defining your application logic. On top of those, Cuprum defines some advanced features to reduce boilerplate and handle complex processes, including [Middleware](#middleware), [Parameter Validation](#parameter-validation), and [Steps](#steps).

### Middleware

A middleware command wraps the execution of another command, allowing you to compose functionality without an explicit wrapper command. Because the middleware is responsible for calling the wrapped command, it has control over when that command is called, with what parameters, and how the command result is handled.

```ruby
class LoggingMiddleware < Cuprum::Command
  include Cuprum::Middleware

  def initialize(logger)
    @logger = logger
  end

  attr_reader :logger

  private

  def process(next_command, *arguments, **keywords)
    logger.info("Calling command #{next_command.inspect}")

    result = super

    logger.info("The command returned a result with status #{result.status}")

    result
  end
end
```

Middleware can be called directly by calling the middleware command and passing the wrapped command as the first parameter. However, the easiest way to use one or more middleware commands is using `Cuprum::Middleware.apply` to generate a pre-wrapped command. When passing multiple middleware commands to `Middleware.apply`, the middleware will be called in that order.

```ruby
logger         = Logger.new(StringIO.new)
log_middleware = LoggingMiddleware.new(logger)
is_even        = Cuprum::Command.new do |int|
  Result.new(status: (int % 0 ? :success : failure))
end

command_with_middleware =
  Cuprum::Middleware.apply(command: is_even, middleware: [log_middleware])
command_with_middleware.call(2)
#=> a Cuprum::Result with status: :success

logger.string.include?('The command returned a result with status success')
#=> true
```

Middleware can also be used to gate or control the execution of the wrapped command. For example, you can use middleware to implement command authorization, returning a failing result if the configured user is not allowed to call the command with those parameters.

### Parameter Validation

Cuprum defines a built-in DSL for validating a command's parameters prior to evaluating the command.

```ruby
class LaunchRocket < Cuprum::Command
  include Cuprum::ParameterValidation

  validate :rocket, Rocket

  private

  def process(rocket)
    rocket.launched = true
  end
end

result = LaunchRocket.new.call
result.success?    #=> false
result.error.class #=> Cuprum::Errors::InvalidParameters
result.error.message
#=> 'invalid parameters for LaunchRocket - rocket is not an instance of Rocket'
```

If the parameters fail validation, the command will return a failing result with an instance of `Cuprum::Errors::InvalidParameters`.

When multiple validations fail, the error will include all failure messages, not just the first:

```ruby
class PurchaseItem < Cuprum::Command
  include Cuprum::ParameterValidation

  validate :item_name, :name
  validate :qty,       Integer, as: 'quantity'

  private

  def process(item_name:, qty:); end
end

result = PurchaseItem.new.call(item_name: '', qty: 3.14)
result.error.message
#=> "invalid parameters for PurchaseItem - item_name can't be blank, quantity is not an instance of Integer"
```

Validations are also inherited from parent classes or included modules.

Parameter validations are defined using the `.validate` class method, which can be used in one of five ways:

- `validate :description` calls the `#validate_description` method on the command with the value of the `:description` parameter. The method should return an error string or array of error strings, or `nil` or an empty array if there are no validation errors.
- `validate :author, using: :author_is_published?` calls the `#author_is_published?` method with the value of the `:author` parameter. The method should return an error string or array of error strings, or `nil` or an empty array if there are no validation errors.
- `validate(:title) { |title, as: 'title'| }` passes the value of the `:title` parameter to the block. The block should return an error string or array of error strings, or `nil` or an empty array if there are no validation errors.
- `validate :name, :presence` calls the `#validate_presence` method on the command (if defined) or the [#validate_presence](https://www.sleepingkingstudios.com/sleeping_king_studios-tools/reference/sleeping-king-studios/tools/assertions#instance-method-validate-presence) tools method with the value of the `:name` parameter. For a full list of available validations, see [SleepingKingStudios::Tools](https://www.sleepingkingstudios.com/sleeping_king_studios-tools/reference/sleeping-king-studios/tools/assertions).
- `validate :name, String` validates that the value of the `:name` parameter is an instance of `String`.

### Steps

Cuprum uses `steps` to implement Railway-Oriented Programming in Ruby.

To quickly summarize a complex topic, Railway-Oriented Programming uses a series of processes with a defined success or failure state (monads for functional languages, `Result`s for Cuprum). Those processes are evaluated in order as long as the result continues to be a success, but fails immediately (and halts execution) if any of the results are a failure.

Cuprum implements this using two methods. The `#step` method evaluates the given block and handles the returned value.

- If the value is anything but a `Result`, returns the value.
- If the value is a successful `Result`, returns the result's `#value`.
- If the value is a failing `Result`, throws the result to the nearest `steps` context.

The `#steps` method generates a context for `step` calls and evaluates the given block.

- If all of the `step` calls inside the block return successful `Result`s, returns the value returned by the block (wrapped in a `Result` if the value is not already a `Result`).
- If any of the `step` calls return a failing `Result`, immediately halts execution of the block. The `#steps` method call then returns the failing `Result`.

```ruby
called_steps = []

result = steps do
  called_steps << step { success('first step') }

  called_steps << step { failure(Cuprum::Error.new(message: 'second step')) }

  called_steps << step { success('third step') }
end

called_steps
#=> ['first step']
result.class
#=> Cuprum::Result
result.failure?
#=> true
result.error.message('second step')
```

In the example above, the first `step` block returns a successful result with a value of `"first step"`. The `step` call, therefore, returns that value, which is appended to the `called_steps` array. The second `step` block returns a failing result. This immediately halts execution of the `steps` block, which then returns the failing result. Because the `steps` block is terminated early, the third `step` is never called.

Each `Cuprum::Command#call` block automatically generates a `steps` context, so you can use `step` calls directly inside your `#process` method without needing to wrap them in a `steps` block. Here's a more practical example of using steps to handle failures:

```ruby
class LaunchRocket < Cuprum::Command
  private

  def build_rocket(name:)
    return failure(invalid_rocket_error) if name.nil? || name.empty?

    Rocket.new(name:)
  end

  def fuel_rocket(rocket:)
    FuelRocket.new.call(fuel: 100.0, rocket:)
  end

  def invalid_rocket_error
    Cuprum::Error.new(
      message: "name can't be blank",
      type:    'space.rockets.invalid_rocket_error'
    )
  end

  def launch_rocket(rocket)
    rocket.launched = true
  end

  def process(name:)
    rocket = step { build_rocket(name:) }

    step { fuel_rocket(rocket:) }

    step { launch_rocket(rocket:) }

    success(rocket)
  end
end
```

Our `#process` method defines three steps.

- The first step calls the `#build_rocket` method. If the given name is `nil` or empty, this method returns a failing result, immediately halting the `#process` call. Note that we're assigning the value of `rocket` to the value returned by `step`, and that this is the newly created `Rocket`, not a `Result`.
- The second step calls the `#fuel_rocket` method, which in turn delegates to another command. We already know that the rocket must be valid (otherwise, the `#process` call would have halted), so we don't need to check the status of the rocket in this method. Presumably, the `FuelRocket` can return it's own errors, which would be passed to the `step` and would halt processing accordingly.
- The third step calls the `#launch_rocket` method. We already know that the rocket was successfully created and fueled, so we can simply update it's status.

As you can see, using `#step`s to manage the control flow has two benefits. First, it smooths over the transition from a `Result` to a pure Ruby object, as you can see when we assign the value of `rocket`. There's no need to check the `Result` status or make an explicit call to `Result#value`.

Second, notice what is **not** written in the above command. There is no conditional logic checking the result of each step, no defensive checks against invalid values being returned by previous steps. As long as failure states are handled by returning a failing result, using `step`s ensures that only valid results will be passed to each successive action.
