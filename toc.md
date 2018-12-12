Let's build out a `<CheckboxList />` component.

## 1. Take 1

```
<CheckboxList
  @items={{teamMembers}}
  @checked={{checkedTeamMembers}}
  @onCheck={{action "handleCheck"}} />
```

* Is this reusable?
* What if I want to customize the markup? Add extra attributes to component?
* What if each object in my array doesn't have a `name` property?

## 2. Take 2

* Don't want to require each object to have a `name` property
* Want the ability to add custom attributes to the checkbox (classes, data-test attributes, etc)

Let's use a block and block params:

```
<CheckboxList
  @items={{teamMembers}}
  @checked={{checkedTeamMembers}}
  @onCheck={{action "handleCheck"}} as |teamMember handleCheck checkedSet|>
  <input
    type="checkbox"
    checked={{in-set checkedSet teamMember}}
    oninput={{handleCheck}}>
  {{teamMember.name}}
</CheckboxList>
```

## 3. Take 3

* Previous implementation broke encapsulation by exposing too much state. Difficult to change without breaking public API.
* Complicated to use for consumers

Let's expose the checkbox as a contextual component that is pre-wired with data and the action:

```
<CheckboxList
  @items={{teamMembers}}
  @checked={{checkedTeamMembers}}
  @onCheck={{action "handleCheck"}} as |teamMember Checkbox|>
  <Checkbox class="my-custom-class" />
  {{teamMember.name}}
</CheckboxList>
```
