import Component from '../core/Component.js';

export default class Todos extends Component {
  template() {
    const { works } = this.props;

    return `
      <ul class="content__list">
        ${works.map((work) => `
          <li class="content__list-item" data-id="${work.id}">
            ${work.text}
          </li>
        `).join('')}
      </ul>
    `;
  }

  setEvent() {
    const { isDeleting, toggleWork, deleteWork } = this.props;

    this.addEvent('click', '.content__list-item', ({ target }) => {
      if (isDeleting) {
        deleteWork(target.dataset.id.toString());
      } else {
        toggleWork(target.dataset.id.toString());
        target.classList.toggle('content__list-item--done');
      }
    });
  }
}
