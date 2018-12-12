# Summary

Let's build out a `<CheckboxList />` component.

## 1. Take 1

```
<CheckboxList
  @items={{teamMembers}}
  @checked={{checkedTeamMembers}}
  @onCheck={{action "handleCheck"}} />
```

* Is this reusable?
* What if I want to customize the markup?
* What if each object in my array doesn't have a `name` property?

## 2. Take 2

* Don't want to require each object to have a `name` property
* Want the ability to customize the markup, such as adding attributes or classes to the checkbox

Let's use a block to allow markup customization and expose the component's state through block params:

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

* The previous implementation broke encapsulation by exposing too much state. This implementation can make it difficult to change without breaking the component's public API.
* Complicated for consumers to use

Let's expose the checkbox as a contextual component that is pre-wired with `checked` and `oninput`:

```
<CheckboxList
  @items={{teamMembers}}
  @checked={{checkedTeamMembers}}
  @onCheck={{action "handleCheck"}} as |teamMember Checkbox|>
  <Checkbox class="my-custom-class" />
  {{teamMember.name}}
</CheckboxList>
```

## Related Resources

* [React Patterns in Ember - Render Props](https://thejsguy.com/2018/02/25/react-patterns-in-ember-render-props.html)
* [Contextual Components in React](https://thejsguy.com/2018/03/18/contextual-components-in-react.html)
