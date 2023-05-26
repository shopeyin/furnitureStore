import Page from 'classes/Page'

export default class Home extends Page {
  constructor () {
    super({
      id: 'home',
      element: '.home',
      elements: {
        navigation: document.querySelector('.navigation'),
        title: '.header__content--title',
        subtitle: '.header__content--subtitle'
      }
    })
  }

  create () {
    super.create()
    this.elements.title.forEach(function (item) {
      item.style.color = 'red'
      item.style.fontWeight = 'bold'
    })
  }
}
