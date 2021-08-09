function buttonInit() {
  const BUTTON_CLASSNAME = 'fab';

  const buttonRef = document.querySelector(`.${BUTTON_CLASSNAME}`);
  if (buttonRef === null) return;

  buttonRef.addEventListener('click', () => {
    const classes = buttonRef.className.split(' ');
    if (classes.length === 0) return;

    if (classes.includes(`${BUTTON_CLASSNAME}--new`)) {
      buttonRef.className = `${BUTTON_CLASSNAME} ${BUTTON_CLASSNAME}--delete`;
    }

    if (classes.includes(`${BUTTON_CLASSNAME}--delete`)) {
      buttonRef.className = `${BUTTON_CLASSNAME} ${BUTTON_CLASSNAME}--new`;
    }
  });
}

function titleInit() {
  const TITLE_CLASSNAME = 'header__title';

  const titleRef = document.querySelector(`.${TITLE_CLASSNAME}`);
  if (titleRef === null) return;

  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const timeFormat = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);

  titleRef.innerText = timeFormat.replaceAll('.', '');
}

function App() {
  buttonInit();
  titleInit();
}

(() => {
  App();
})();
