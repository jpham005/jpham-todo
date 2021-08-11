import {
  FAB_COLLAPSE_NAME,
  FAB_EXTENDED_NAME,
  FAB_CONTAINER_COLLAPSE_NAME,
  FAB_CONTAINER_EXTENDED_NAME,
  LIST_CLASSNAME,
  UPDATE_COUNT,
} from './constant.js';

export const state = {
  works: [],
  isDeleting: false,
  getIsDeleting() { return this.isDeleting; },
  setDeleteMode() { this.isDeleting = true; },
  setLineThroughMode() { this.isDeleting = false; },
};

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
    e.target.className = `${LIST_CLASSNAME}-item`;
    return;
  }
  e.target.className =
    `${LIST_CLASSNAME}-item ${LIST_CLASSNAME}-item--done`;
}

export function deleteItem(e) {
  const listRef = document.querySelector(`.${LIST_CLASSNAME}`);
  if (listRef === null) return;

  listRef.removeChild(e.target); 

  let index = state.works.indexOf(e.target.dataset.obj);
  state.works.splice(index, 1);

  updateCount();  
}

export function updateCount() {
  const ref = document.querySelector(`.${UPDATE_COUNT}`);
  if (ref === null) return;

  ref.innerText = state.works.length;
}

export function getInput() {
  for (let i = 0;; i += 1) {
    const p = prompt('할 일', '');
    if (p === null || p === '') {
      break;
    }
    state.works[i] = createWork(p);
    
    addList(i);
    updateCount();
  }
}

export function addList(i) {
  const listRef = document.querySelector(`.${LIST_CLASSNAME}`);
  if (listRef === null) return;

  let li = document.createElement('li');
  li.classList.add('content__list-item');
  li.dataset.obj = state.works[i];
  listRef.appendChild(li);
  li.innerText = state.works[i].text;
}