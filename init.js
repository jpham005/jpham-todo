import {
  FAB_NAME,
  TITLE_CLASSNAME,
  LIST_CLASSNAME,
  ADD_BUTTON_CLASSNAME,
  REMOVE_BUTTON_CLASSNAME,
  UPDATE_COUNT,
} from './constant.js';

import {
  handleClickList,
  handleClickListItem,
  handleClickAddItemButton,
  handleClickDeleteItemButton,
  handleClickFab
} from './handle.js';

function initFab() {
  const ref = document.querySelector(`.${FAB_NAME}`);
  if (ref === null) return;

  ref.addEventListener('click', handleClickFab);
}
  
function initTitle() {
  const ref = document.querySelector(`.${TITLE_CLASSNAME}`);
  if (ref === null) return;

  const date = new Date();

  const timeFormat = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
  }).format(date);//
  
  ref.innerText = timeFormat.replaceAll('.', '');
}
  
function initList() {
  const ref = document.querySelector(`.${LIST_CLASSNAME}`);
  if (ref === null) return;

  ref.addEventListener('click', handleClickList);
}

function initAddItemButton() {
  const ref = document.querySelector(`.${ADD_BUTTON_CLASSNAME}`);
  if (ref === null) return;

  ref.addEventListener('click', handleClickAddItemButton);
}  

function initDeleteItemButton() {
  const ref = document.querySelector(`.${REMOVE_BUTTON_CLASSNAME}`);
  if (ref === null) return;

  ref.addEventListener('click', handleClickDeleteItemButton);
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
