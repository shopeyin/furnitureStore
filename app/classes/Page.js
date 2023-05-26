import { each } from 'lodash'
import GSAP from 'gsap'
export default class Page {
  constructor ({ id, element, elements }) {
    this.id = id
    this.selector = element
    this.selectorChildren = { ...elements }
  }

  create () {
    this.element = document.querySelector(this.selector)
    this.elements = {}
    this.count = 0
    each(this.selectorChildren, (value, key) => {
      if (
        value instanceof window.HTMLElement ||
        value instanceof window.NodeList ||
        Array.isArray(value)
      ) {
        this.elements[key] = value
      } else {
        this.elements[key] = document.querySelectorAll(value)

        if (this.elements[key].length === 0) {
          this.elements[key] = null
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(value)
        }
      }
    })
    console.log('Create called', this.count, this.id, this.element, this.elements)
  }

  show () {
    GSAP.from(this.element, {
      autoAlpha: 0,
      delay: 2
    })
  }

  hide () {
    GSAP.to(this.element, {
      autoAlpha: 0

    })
  }
}
