similar to setState second param callback


example

```jsx
const [state, setName] = useStateCallback({
  name: 'frankie'
}, (state) => {
  fetch(`/list/${state.name}`)
})

const handleClick = useCallback(() => {
  setName({
    name: 'woodenfish'
  })
, [setName])
```
