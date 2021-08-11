const arr = [];
let onoff = 0;

const FAB_NAME = 'fab';
const FAB_COLLAPSE_NAME = `${FAB_NAME}--collapse`;
const FAB_EXTENDED_NAME = `${FAB_NAME}--extended`;

const FAB_CONTAINER_NAME = 'fab__container';
const FAB_CONTAINER_COLLAPSE_NAME = `${FAB_CONTAINER_NAME}--collapse`;
const FAB_CONTAINER_EXTENDED_NAME = `${FAB_CONTAINER_NAME}--extended`;

function buttonInit() {
  const fabRef = document.querySelector(`.${FAB_NAME}`);
  if (fabRef === null) return;
  const fabContainerRef = document.querySelector(`.${FAB_CONTAINER_NAME}`);
  if (fabContainerRef === null) return;

  fabRef.addEventListener('click', () => {
    if (fabRef.classList.contains(FAB_COLLAPSE_NAME)
    && fabContainerRef.classList.contains(FAB_CONTAINER_COLLAPSE_NAME)) {
      fabRef.classList.remove(FAB_COLLAPSE_NAME);
      fabRef.classList.add(FAB_EXTENDED_NAME);
      fabContainerRef.classList.remove(FAB_CONTAINER_COLLAPSE_NAME);
      fabContainerRef.classList.add(FAB_CONTAINER_EXTENDED_NAME);
      return;
    }

    if (fabRef.classList.contains(FAB_EXTENDED_NAME)
    && fabContainerRef.classList.contains(FAB_CONTAINER_EXTENDED_NAME)) {
      fabRef.classList.remove(FAB_EXTENDED_NAME);
      fabRef.classList.add(FAB_COLLAPSE_NAME);
      fabContainerRef.classList.remove(FAB_CONTAINER_EXTENDED_NAME);
      fabContainerRef.classList.add(FAB_CONTAINER_COLLAPSE_NAME);
    }
  });
}

function titleInit() {
  const TITLE_CLASSNAME = 'header__title';

  const titleRef = document.querySelector(`.${TITLE_CLASSNAME}`);
  if (titleRef === null) return;

  const date = new Date();

  const timeFormat = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
  }).format(date);//
  
  titleRef.innerText = timeFormat.replaceAll('.', '');//
}

function listInit() {
  const LIST_CLASSNAME = 'content__list';

  const listRef = document.querySelector(`.${LIST_CLASSNAME}`);
  if (listRef === null) return;
  

  listRef.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'LI') return;
    const classes = e.target.className.split(' ');
    
    if (onoff === 0) {      
      if (classes.includes(`${LIST_CLASSNAME}-item--done`)) {
        e.target.className = `${LIST_CLASSNAME}-item`;
        return;
      }
      e.target.className = `${LIST_CLASSNAME}-item ${LIST_CLASSNAME}-item--done`;      
    } else if (onoff === 1) {
      let a = e.target;
      let b = Number(e.target.dataset.num);
      listRef.removeChild(a);  
      arr.splice(b, 1);
      console.log(arr);
      leftCount();
      
    }
  });
}

function leftCount() {
  const LEFT_COUNT = 'header__left-count';
  
  const num = document.querySelector(`.${LEFT_COUNT}`);
  if (num === null) return;

  num.innerText = arr.length;
  console.log(arr.length);
}

function addItem() {
  const BUTTON_CLASSNAME = 'add-item__button';

  const buttonRef = document.querySelector(`.${BUTTON_CLASSNAME}`);
  if (buttonRef === null) return;

  buttonRef.addEventListener('click', () => {
    const classes = buttonRef.className.split(' ');
    if (classes.length === 0) return;

    if (classes.includes(`${BUTTON_CLASSNAME}`)) {
      for (let i = 0;; i += 1) {
        arr[i] = prompt('할 일', '');
        if (arr[i] === null || arr[i] === '') {
          delete arr[i];
          break;
        }
        
        addList(i);
        leftCount();
      }
    }
  });
}

function addList(i) {
  const LIST_CLASSNAME = 'content__list';

  const listRef = document.querySelector(`.${LIST_CLASSNAME}`);
  if (listRef === null) return;

  let li = document.createElement('li');
  li.classList.add('content__list-item');
  li.dataset.num = `${i}`;
  listRef.appendChild(li);
  li.innerText = arr[i];
}

function deleteList() {
  const BUTTON_CLASSNAME = 'remove-item__button';

  const buttonRef = document.querySelector(`.${BUTTON_CLASSNAME}`);
  if (buttonRef === null) return;

  buttonRef.addEventListener('click', () => {
    const classes = buttonRef.className.split(' ');
    if (classes.length === 0) return;

    if (classes.includes(`${BUTTON_CLASSNAME}--off`)) {
      buttonRef.className = `${BUTTON_CLASSNAME} ${BUTTON_CLASSNAME}--on`;
      onoff = 1;
    }

    if (classes.includes(`${BUTTON_CLASSNAME}--on`)) {
      buttonRef.className = `${BUTTON_CLASSNAME} ${BUTTON_CLASSNAME}--off`;
      onoff = 0;
    }
  });
}

function App() {
  leftCount();
  addItem();
  deleteList();
  buttonInit();
  titleInit();
  listInit();
}

(() => {
  App();
})();
