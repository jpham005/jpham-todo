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
  state,
} from './todo.js';

export function handleClickListItem(e) {
  if (state.getIsDeleting()) {      
    deleteItem(e);
  } else {
    applyLineThrough(e);
  }
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
    ref.className = 
      `${REMOVE_BUTTON_CLASSNAME} ${REMOVE_BUTTON_CLASSNAME}--on`;
    state.setDeleteMode();
  } else if (ref.classList.contains(`${REMOVE_BUTTON_CLASSNAME}--on`)) {
    ref.className = 
      `${REMOVE_BUTTON_CLASSNAME} ${REMOVE_BUTTON_CLASSNAME}--off`;
    state.setLineThroughMode();
  }
}

export function handleClickFab(e) {
  const fabRef = document.querySelector(`.${FAB_NAME}`);
  if (fabRef === null) return;

  const fabContainerRef = document.querySelector(`.${FAB_CONTAINER_NAME}`);
  if (fabContainerRef === null) return;

  toggleFab(fabRef, fabContainerRef);
}
