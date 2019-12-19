similar to setState second param callback


example
jsx
```
const [state, setState] = useStateCallback({
  name: 'frankie'
}, (state) => {
  fetch(`/list/${state.name}`)
})
```