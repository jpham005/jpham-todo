import {
  FAB_COLLAPSE_NAME,
  FAB_EXTENDED_NAME,
  FAB_CONTAINER_COLLAPSE_NAME,
  FAB_CONTAINER_EXTENDED_NAME,
  LIST_CLASSNAME,
  UPDATE_COUNT,
} from './constant.js';
import { createStore } from './store.js';

const initialState = {
  works: [],
  isDeleting: false,
};

function todoReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'addItem': {
      const works = [...state.works];
      works.push(payload);

      return {
        ...state,
        works,
      };
    }
    case 'removeItem': {
      const works = [...state.works];
      const index = works.indexOf(payload);
      works.splice(index, 1);

      return {
        ...state,
        works,
      }
    }
    case 'setDeleteMode': {
      return {
        ...state,
        isDeleting: payload,
      };
    }
    default: {
      return state;
    }
  }
}

export const store = createStore(todoReducer);

store.subscribe((store) => {
  console.log(store.getState());
});

export function createWork(text) {
  return { text };
}

export function toggleFab(ref, containerRef) {
  if (ref.classList.contains(FAB_COLLAPSE_NAME)
  && containerRef.classList.contains(FAB_CONTAINER_COLLAPSE_NAME)) {
    return openFab(ref, containerRef);
  }

  if (ref.classList.contains(FAB_EXTENDED_NAME)
  && containerRef.classList.contains(FAB_CONTAINER_EXTENDED_NAME)) {
    return closeFab(ref, containerRef);
  }
}

export function openFab(ref, containerRef) {
  ref.classList.remove(FAB_COLLAPSE_NAME);
  ref.classList.add(FAB_EXTENDED_NAME);
  containerRef.classList.remove(FAB_CONTAINER_COLLAPSE_NAME);
  containerRef.classList.add(FAB_CONTAINER_EXTENDED_NAME);
}

export function closeFab(ref, containerRef) {
  ref.classList.remove(FAB_EXTENDED_NAME);
  ref.classList.add(FAB_COLLAPSE_NAME);
  containerRef.classList.remove(FAB_CONTAINER_EXTENDED_NAME);
  containerRef.classList.add(FAB_CONTAINER_COLLAPSE_NAME);
}

export function applyLineThrough(e) {
  if (e.target.classList.contains(`${LIST_CLASSNAME}-item--done`)) {
    e.target.classList.remove(`${LIST_CLASSNAME}-item--done`)
    return;
  }
  e.target.classList.add(`${LIST_CLASSNAME}-item--done`);
}

export function deleteItem(e) {
  const listRef = document.querySelector(`.${LIST_CLASSNAME}`);
  if (listRef === null) return;

  listRef.removeChild(e.target); 

  /*
  const index = state.works.indexOf(e.target.dataset.obj);
  state.works.splice(index, 1);
  */

  store.dispatch({
    type: 'removeItem',
    payload: e.target.dataset.obj,
  });

  updateCount();  
}

export function updateCount() {
  const ref = document.querySelector(`.${UPDATE_COUNT}`);
  if (ref === null) return;

  ref.innerText = state.works.length;
}

export function getInput() {
  while (true) {
    const p = prompt('할 일', '');
    if (p === null || p === '') {
      break;
    }
    const work = createWork(p);
    // state.works.push(work);

    store.dispatch({
      type: 'addItem',
      payload: work,
    });
    addList(work);
    updateCount();    
  }
}

export function addList(work) {
  const listRef = document.querySelector(`.${LIST_CLASSNAME}`);
  if (listRef === null) return;

  const li = document.createElement('li');
  li.classList.add('content__list-item');
  li.dataset.obj = work;
  listRef.appendChild(li);
  li.innerText = work.text;
}