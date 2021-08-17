import Component from '../core/Component.js';

export default class Header extends Component {
  template() {
    const { leftCount } = this.props;

    const date = new Date();

    const timeFormat = new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
    }).format(date);

    return `
      <h1 class="header__title">${timeFormat.replaceAll('.', '')}</h1>
      <div class="header__left-count">${leftCount}</div>
    `;
  }
}
