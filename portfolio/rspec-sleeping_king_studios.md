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
  - label: Features
    url: '#features'
    children:
    - label: Matchers
      url: '#matchers'
    - label: Deferred Examples
      url: '#deferred-examples'
    - label: Utilities
      url: '#utilities'

---

# RSpec::SleepingKingStudios

RSpec::SleepingKingStudios is a collection of matchers and extensions for [RSpec](https://rspec.info/), designed to make your test suite faster, more powerful, and less painful. It defines matchers for common cases including boolean values, UUIDs, class constructors, and method aliases; shared examples for quickly asserting on reader, writer, and predicate methods; and defines deferred example groups for sharing RSpec tests across projects.

<p>
  The
  <span class="icon">
    <i class="fa fa-book"></i>
  </span>Documentation for RSpec::SleepingKingStudios is
  <a href="https://www.sleepingkingstudios.com/rspec-sleeping_king_studios/" target="_blank">
    available online
  </a>.
</p>

## Features

RSpec::SleepingKingStudios defines the following features.

### Matchers

The library defines a number of new matchers. For a full list, see the [reference documentation](https://www.sleepingkingstudios.com/rspec-sleeping_king_studios/reference/r-spec/sleeping-king-studios/matchers).

```ruby
include RSpec::SleepingKingStudios::Matchers::Macros
```

#### `be_a_uuid`

Asserts that the expected value is a valid UUID.

```ruby
expect(response[:id]).to be_a_uuid
```

Also aliased as `a_uuid`.

#### `be_boolean`

Asserts that the expected value is either `true` or `false`.

```ruby
expect(response[:ok]).to be_boolean
```

Also aliased as `a_boolean`.

#### `be_constructible`

Asserts that the expected value is a Class whose `#initialize` method responds to the given parameters.

```ruby
expect(described_class)
  .to be_constructible
  .with(0).arguments
  .and_keywords(:foo, :bar)
```

#### `deep_match`

Performs a deep comparison of the expected and actual values. Uses the [Hashdiff](https://github.com/liufengyun/hashdiff) gem to identify and present differences in nested data structures.

```ruby
expect(response).to deep_match(
  {
    ok:    false,
    data:  {
      id:    0,
      title: 'Gideon the Ninth'
    },
    error: "author can't be blank"
  }
)
```

This matcher excels at asserting on complex data structures such as API responses.

#### `have_aliased_method`

Asserts that the subject has aliased the expected method using the given name.

```ruby
expect(service).to have_aliased_method(:matches?).as(:match?)
```

#### `have_changed`

Asserts that the observed value has changed, using a similar interface to the built-in `change` matcher.

```ruby
spy = watch_value(Book, :count)

create_book(attributes)

expect(spy).to have_changed.by(1)
```

This matcher is useful for asserting on multiple changed values for a single operation.

### Deferred Examples

Deferred example groups define a mechanism for reusing and sharing RSpec context and examples, even between libraries or projects.

```ruby
module RocketryExamples
  include RSpec::SleepingKingStudios::Deferred::Provider

  deferred_context 'with an unlaunched rocket' do
    let(:rocket) { Rocket.new(name: 'Charon III', launched: false) }
  end

  deferred_examples 'should launch the rocket' do
    describe '#launch' do
      it { expect { rocket.launch }.to change(rocket, :launched?).to be true }
    end
  end
end
```

Once you have defined a deferred example group, you can import it into an RSpec example group by including Deferred::Consumer and the module defining the deferred examples, then calling include_deferred and the description for the example group.

```ruby
RSpec.describe Rocket do
  include RSpec::SleepingKingStudios::Deferred::Consumer
  include RocketryExamples

  context 'when the rocket has not been launched' do
    include_deferred 'with an unlaunched rocket'

    include_deferred 'should launch the rocket'
  end

  context 'when the rocket has fuel' do
    let(:rocket) { Rocket.new(name: 'Charon III', fuel: 1_000) }

    include_deferred 'should have fuel'
  end
end
```

Because deferred examples are defined and included as modules, they can be safely shared and distributed between projects and repositories. For example, a library that defines an interface (such a collection of objects) could publish deferred examples that validate implementations of that interface.

For more details, see the [documentation](https://www.sleepingkingstudios.com/rspec-sleeping_king_studios/deferred/).

### Utilities

RSpec::SleepingKingStudios also defines utility methods for making your tests easier and more powerful.

#### Example Constants

Example constants allow you to define constants and classes that are scoped to the current RSpec example.

```ruby
include RSpec::SleepingKingStudios::Concerns::ExampleConstants
```

##### `example_class`

The `example_class` method allows you to define a temporary class that is scoped to the current example. Need to test the behavior of a generic subclass of your class? Implementation requires a collaborator object? `example_class` has you covered.

```ruby
RSpec.describe PaymentProcessor do
  include RSpec::SleepingKingStudios::Concerns::ExampleConstants

  context 'with a concrete subclass' do
    subject { Spec::BasicProcessor.new }

    example_class 'Spec::BasicProcessor' do |klass|
      klass.define_method(:call) { |amount| { ok: true, amount: } }
    end

    describe '#call' do
      let(:amount) { 10.0 }

      it { expect(subject.call(amount)).to eq({ ok: true, amount: }) }
    end
  end
end
```

Note that the block passed to `example_class` is *not* evaluated in the class scope, but in the RSpec example. This means you can reference things like memoized values from `let` statements in your class definition, but you need to remember to use the block parameter to reference the class itself.

Because the class is scoped to the current example, you can safely define methods or constants and set class-level properties without worrying about reverting your changes or polluting the environment for other test cases.

##### `example_constant`

The `example_constant` method allows you to define a temporary constant that is scoped to the current example.

```ruby
RSpec.describe Entity do
  include RSpec::SleepingKingStudios::Concerns::ExampleConstants

  example_constant :RESERVED_UUID, '00000000-0000-0000-0000-000000000000'

  example_constant :Address, Struct.new(:street, :city, :state, :zip)
end
```

#### Property Examples

RSpec::SleepingKingStudios defines a number of shared examples for concisely testing common cases for object properties.

```ruby
RSpec.describe Rocket do
  include RSpec::SleepingKingStudios::Examples::PropertyExamples

  include_examples 'should define reader', :name, -> { Rocket.default_name }

  include_examples 'should define writer', :name=

  include_examples 'should define predicate',
    :name?,
    -> { subject.name && !subject.name.empty? }
end
```

##### `should define constant`

```ruby
include_examples 'should define constant', :RESERVED_UUID, -> { be_a_uuid }
```

Asserts that `described_class` defines the specified constant. If a second parameter is passed, asserts that the value of the constant matches the expected value.

You can also use `should define immutable constant`, which asserts that the constant value is either an immutable value (such as an `Integer` or `Symbol`) or is `#frozen?`. For data structures such as `Array`s and `Hash`es, the contents are also checked (recursively, if necessary).

##### `should define predicate`

```ruby
include_examples 'should define predicate', :valid?, false
```

Asserts that the object defines a predicate method with the given name (the `?` prefix is optional). If a second parameter is passed, asserts that the value of the predicate method matches the expected value.

##### `should define property`

```ruby
include_examples 'should define property', :name, -> { Rocket.default_name }
```

Asserts that the object defines reader and writer methods with the given name. If a second parameter is passed, asserts that the value of the reader method matches the expected value.

You can also use `should define class property` and `should define private property`.

##### `should define reader`

```ruby
include_examples 'should define reader', :name, -> { Rocket.default_name }
```

Asserts that the object defines the reader with the given name. If a second parameter is passed, asserts that the value of the reader method matches the expected value.

You can also use `should define class reader` and `should define private reader`.

##### `should define writer`

```ruby
include_examples 'should define writer', :name=
```

Asserts that the object defines a writer method with the given name (the `=` prefix is optional).

You can also use `should define class writer` and `should define private writer`.
