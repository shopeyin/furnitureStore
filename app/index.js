import Home from 'pages/Home'
import { each } from 'lodash'
import Catalogue from 'pages/Catalogue'

class App {
  constructor () {
    this.createContainer()
    this.createPages()

    this.addLinkListeners()
  }

  createContainer () {
    this.container = document.querySelector('.container')

    this.template = this.container.getAttribute('data-template')
    console.log(this.template)
  }

  createPages () {
    this.pages = {
      home: new Home(),
      catalogue: new Catalogue()
    }

    this.page = this.pages[this.template]
    // console.log(this.page)
    this.page.create()
    this.page.show()
  }

  async onChange (url) {
    await this.page.hide()

    const request = await window.fetch(url)
    if (request.status === 200) {
      const html = await request.text()
      //   console.log(html)
      const div = document.createElement('div')

      div.innerHTML = html

      const divContent = div.querySelector('.container')
      this.container.setAttribute('data-template', divContent.getAttribute('data-template'))
      this.container.innerHTML = divContent.innerHTML
      //   this.container.innerHTML = divContent.innerHTML
      //   this.template = divContent.getAttribute('data-template')

      //   this.navigation.onChange(this.template)
      //   this.content.setAttribute('data-template', this.template)
      //   this.content.innerHTML = divContent.innerHTML

      //   this.page = this.pages[this.template]

      //   this.page.create()
      //   this.onResize()

    //   this.page.show()
    //   this.addLinkListeners()
    } else {
      console.log('Error')
    }
  }

  addLinkListeners () {
    const links = document.querySelectorAll('a')
    each(links, link => {
      link.onclick = event => {
        const { href } = link
        event.preventDefault()
        // console.log(href)
        this.onChange(href)
      }
    })
  }
}

new App()
