# Difference State and Variable

This `section` is for example the difference between `state` and `variable`.

## State

File: `pages/CounterWithState.js`

- Init useState

  ```jsx
  const [counter, setCounter] = useState(0);
  ```

- Function for Handle Increment

  ```jsx
  const Add = () => {
    setCounter(counter + 1);
  };
  ```

- Function for Handle Decrement

  ```jsx
  const Less = () => {
    setCounter(counter - 1);
  };
  ```

## Variable

File: `pages/CounterWithVariable.js`

- Declare counter variable

  ```jsx
  let counter = 0;
  ```

- Init useReducer for forceUpdate Component

  ```jsx
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  ```

- Function for Handle Increment

  ```jsx
  const Add = () => {
    counter = counter + 1;
    forceUpdate();
  };
  ```

- Function for Handle Decrement

  ```jsx
  const Less = () => {
    counter = counter - 1;
    forceUpdate();
  };
  ```

**Disclaimer**: `This method is not recomended`
