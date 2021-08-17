import Component from '../core/Component.js';

const FabIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
`;

const AddIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
`;

const RemoveIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
`;

export default class Fab extends Component {
  template() {
    const { isOpen } = this.props;

    return `
      <button class="fab ${isOpen ? 'fab--extended' : 'fab--collapse'}">${FabIcon}</button>
      <div class="fab__container ${isOpen ? 'fab__container--extended' : 'fab__container--collapse'}">
        <button class="remove-item__button remove-item__button--off">${RemoveIcon}</button>
        <button class="add-item__button">${AddIcon}</button>
      </div>
    `;
  }

  setEvent() {
    const { toggleFab, toggleDeleteMode, addWork } = this.props;

    this.addEvent('click', '.fab', () => {
      toggleFab();
    });

    this.addEvent('click', '.add-item__button', () => {
      while (true) {
        const input = prompt('할 일', '');

        if (input === null || input === '') break;
        addWork(input);
      }
    });

    this.addEvent('click', '.remove-item__button', () => {
      toggleDeleteMode();
      return;
    });
  }
}
