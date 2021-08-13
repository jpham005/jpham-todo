export function createStore(reducer) {
  let state;

  const handlers = [];

  function dispatch(action) {
    state = reducer(state, action);

    handlers.forEach((handler) => {
      handler({
        getState() {
          return state;
        },
      });
    });
  }

  function getState() {
    return state;
  }

  function subscribe(handler) {
    handlers.push(handler);
  }

  return {
    dispatch,
    getState,
    subscribe,
  };
}
