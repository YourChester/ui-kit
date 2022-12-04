import './VApp.scss'

const VApp = {
  name: 'v-app',
  render (h) {
    const wrapper = h('div', { staticClass: 'v-app__wrapper' }, this.$slots.default)

    return h(
      'div',
      {
        staticClass: 'v-app',
        domProps: { id: this.id }
      },
      [wrapper]
    )
  }
}

export default VApp
