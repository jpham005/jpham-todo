const arr = [];

function buttonInit() {
  const BUTTON_CLASSNAME = 'fab';

  const buttonRef = document.querySelector(`.${BUTTON_CLASSNAME}`);
  if (buttonRef === null) return;

  buttonRef.addEventListener('click', () => {
    const classes = buttonRef.className.split(' ');
    if (classes.length === 0) return;

    if (classes.includes(`${BUTTON_CLASSNAME}--new`)) {
      let i = 0;
      
      while (1) {
        arr[i] = prompt('할 일', '');
        
        if (arr[i] === null || arr[i] === '') break;
        
        addList(i);
        
        i++;
        leftCount();
        

      }
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
  
  if (check() === 0) {
    listRef.addEventListener('click', (e) => {
      if (e.target.nodeName !== 'LI') return;

      const classes = e.target.className.split(' ');

      if (classes.includes(`${LIST_CLASSNAME}-item--done`)) {
        e.target.className = `${LIST_CLASSNAME}-item`;
        return;
      }

      e.target.className = `${LIST_CLASSNAME}-item ${LIST_CLASSNAME}-item--done`;
    });
  } else if (check() === 1) {
    
  }
}

function leftCount() {
  const LEFT_COUNT = 'header__left-count';
  
  const num = document.querySelector(`.${LEFT_COUNT}`);
  if (num === null) return;

  num.innerText = arr.length;
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
  const BUTTON_CLASSNAME = 'sab';

  const buttonRef = document.querySelector(`.${BUTTON_CLASSNAME}`);
  if (buttonRef === null) return;

  buttonRef.addEventListener('click', () => {
    const classes = buttonRef.className.split(' ');
    if (classes.length === 0) return;

    if (classes.includes(`${BUTTON_CLASSNAME}--off`)) {
      buttonRef.className = `${BUTTON_CLASSNAME} ${BUTTON_CLASSNAME}--on`;
    }

    if (classes.includes(`${BUTTON_CLASSNAME}--on`)) {
      buttonRef.className = `${BUTTON_CLASSNAME} ${BUTTON_CLASSNAME}--off`;
    }
  });
}

function check() {
  const BUTTON_CLASSNAME = 'sab';

  const buttonRef = document.querySelector(`.${BUTTON_CLASSNAME}`);
  if (buttonRef === null) return;

  const classes = buttonRef.className.split();
  if (classes.includes(`${BUTTON_CLASSNAME}--off`)) {
    return 0;
  }

  if (classes.includes(`${BUTTON_CLASSNAME}--on`)) {
    return 1;
  }  
}

function App() {
  leftCount();
  buttonInit();
  titleInit();
  listInit();
}

(() => {
  App();
})();

/*
시간
리스트 갯수 세는 무언가 >> 배열 길이

추가버튼 눌러서 리스트 추가
  리스트 이름 입력받기 (한번 더 누를때까지 반복)
  arr.push로 배열 저장
  

  

삭제버튼 만들기
  
리스트 클릭시 줄긋기 + 전체 갯수 조절

creatElement, appendChild 배열 길이동안 반복

*/