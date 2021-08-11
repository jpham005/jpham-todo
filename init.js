import {
  FAB_NAME,
  TITLE_CLASSNAME,
  LIST_CLASSNAME,
  ADD_BUTTON_CLASSNAME,
  REMOVE_BUTTON_CLASSNAME,
  UPDATE_COUNT,
} from './constant.js';

import {
  handleClickListItem,
  handleClickAddItemButton,
  handleClickDeleteItemButton,
  handleClickFab
} from './handle.js';

function initFab() {
  const fabRef = document.querySelector(`.${FAB_NAME}`);
  if (fabRef === null) return;

  fabRef.addEventListener('click', handleClickFab);
}
  
function initTitle() {
  const titleRef = document.querySelector(`.${TITLE_CLASSNAME}`);
  if (titleRef === null) return;

  const date = new Date();

  const timeFormat = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
  }).format(date);//
  
  titleRef.innerText = timeFormat.replaceAll('.', '');
}
  
function initList() {
  const listRef = document.querySelector(`.${LIST_CLASSNAME}`);
  if (listRef === null) return;

  listRef.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'LI') return;
    handleClickListItem(e);
  });
}

function initAddItemButton() {
  const buttonRef = document.querySelector(`.${ADD_BUTTON_CLASSNAME}`);
  if (buttonRef === null) return;

  buttonRef.addEventListener('click', handleClickAddItemButton);
}  

function initDeleteItemButton() {
  const buttonRef = document.querySelector(`.${REMOVE_BUTTON_CLASSNAME}`);
  if (buttonRef === null) return;

  buttonRef.addEventListener('click', handleClickDeleteItemButton);
}

function initItemCount() {
  const ref = document.querySelector(`.${UPDATE_COUNT}`);
  if (ref === null) return;

  ref.innerText = '0';
}

export default function initAll() {
  initFab();
  initTitle();
  initList();
  initAddItemButton();
  initDeleteItemButton();
  initItemCount();
}
