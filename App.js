import Component from './core/Component.js';
import Header from './components/Header.js';
import Todos from './components/Todos.js';
import Fab from './components/Fab.js';

export default class App extends Component {
  setup() {
    this.state = {
      works: [],
      isDeleting: false,
      isFabOpen: false,
    };
  }

  template() {
    return `
      <div class="header__container" data-component="header"></div>
      <div class="content__container" data-component="todos"></div>
      <div data-component="fab"></div>
    `;
  }

  mounted() {
    const headerElement = this.target.querySelector('[data-component="header"]');
    const contentElement = this.target.querySelector('[data-component="todos"]');
    const fabElement = this.target.querySelector('[data-component="fab"]');

    new Header(headerElement, {
      leftCount: this.leftCount,
    });

    new Todos(contentElement, {
      works: this.state.works,
      isDeleting: this.state.isDeleting,
      toggleWork: this.toggleWork.bind(this),
      deleteWork: this.deleteWork.bind(this),
    });

    new Fab(fabElement, {
      isOpen: this.state.isFabOpen,
      toggleFab: this.toggleFab.bind(this),
      toggleDeleteMode: this.toggleDeleteMode.bind(this),
      addWork: this.addWork.bind(this),
    });
  }

  get leftCount() {
    const { works } = this.state;
    return works.length;
  }

  addWork(text) {
    const works = [...this.state.works];
    works.push({
      id: works.length + 1,
      text,
      isDone: false,
    });

    this.setState({ works });
  }

  deleteWork(id) {
    const works = [...this.state.works];
    const index = works.findIndex((el) => el.id === id);
    if (index < 0) return;

    works.splice(index, 1);
    this.setState({ works });
  }

  toggleWork(id) {
    const works = [...this.state.works];
    const index = works.findIndex((el) => el.id === id);
    if (index < 0) return;

    works[index].isDone = !works[index].isDone;
    this.setState({ works });
  }

  toggleFab() {
    const { isFabOpen } = this.state;

    this.setState({ isFabOpen: !isFabOpen });
  }

  toggleDeleteMode() {
    const { isDeleting } = this.state;

    this.setState({ isDeleting: !isDeleting });
  }
}
