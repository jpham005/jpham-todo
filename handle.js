import {
  ADD_BUTTON_CLASSNAME,
  REMOVE_BUTTON_CLASSNAME,
  FAB_NAME,
  FAB_CONTAINER_NAME,
} from './constant.js';

import {
  applyLineThrough,
  deleteItem,
  getInput,
  toggleFab,
  store,
} from './todo.js';

export function handleClickList(e) {
  if (e.target.nodeName !== 'LI') return;
  
  handleClickListItem(e);
}

export function handleClickListItem(e) {
  if (store.getState().isDeleting) {
    deleteItem(e);
  } else {
    applyLineThrough(e);
  }
  /*
  if (state.getIsDeleting()) {      
    deleteItem(e);
  } else {
    applyLineThrough(e);
  }
  */
}

export function handleClickAddItemButton(e) {
  const ref = document.querySelector(`.${ADD_BUTTON_CLASSNAME}`);
  if (ref === null) return;

  if (ref.classList.contains(`${ADD_BUTTON_CLASSNAME}`)) {
    getInput();
  }
}

export function handleClickDeleteItemButton(e) {
  const ref = document.querySelector(`.${REMOVE_BUTTON_CLASSNAME}`);
  if (ref === null) return;

  if (ref.classList.contains(`${REMOVE_BUTTON_CLASSNAME}--off`)) {
    ref.classList.remove(`${REMOVE_BUTTON_CLASSNAME}--off`);
    ref.classList.add(`${REMOVE_BUTTON_CLASSNAME}--on`);
    // state.setDeleteMode();
    store.dispatch({
      type: 'setDeleteMode',
      payload: true,
    });
  } else if (ref.classList.contains(`${REMOVE_BUTTON_CLASSNAME}--on`)) {
    ref.classList.remove(`${REMOVE_BUTTON_CLASSNAME}--on`);
    ref.classList.add(`${REMOVE_BUTTON_CLASSNAME}--off`);
    // state.setLineThroughMode();
    store.dispatch({
      type: 'setDeleteMode',
      payload: false,
    });
  }
}

export function handleClickFab(e) {
  const fabRef = document.querySelector(`.${FAB_NAME}`);
  if (fabRef === null) return;

  const fabContainerRef = document.querySelector(`.${FAB_CONTAINER_NAME}`);
  if (fabContainerRef === null) return;

  toggleFab(fabRef, fabContainerRef);
}
