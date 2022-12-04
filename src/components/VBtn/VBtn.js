import './VBtn.scss'

const VBtn = {
  name: 'v-btn',
  props: {
    icon: {
      type: Boolean
    },
    primary: {
      type: Boolean
    },
    secondary: {
      type: Boolean
    },
    block: {
      type: Boolean
    },
    small: {
      type: Boolean
    },
    large: {
      type: Boolean
    }
  },
  computed: {
    medium () {
      return !this.small && !this.large
    },
    isRound() {
      return this.icon
    },
    classes () {
      return {
        'v-btn': true,
        'v-btn--primary': this.primary,
        'v-btn--icon': this.icon,
        'v-btn--block': this.block,
        'v-btn--secondary': this.secondary,
        'v-btn--round': this.isRound,
        'v-size--small': this.small,
        'v-size--large': this.large,
        'v-size--default': this.medium,
      }
    }
  },
  methods: {
    onClick (e) {
      this.$emit('click', e)
    },
    genChild () {
      return this.$createElement(
        'span',
        {
          class: {
            'v-btn__content': true
          }
        },
        this.$slots.default
      )
    },
    genData () {
      return {
        class: this.classes,
        on: {
          click: this.onClick
        }
      }
    }
  },

  render (h) {
    const children = [this.genChild()]

    const data = this.genData()

    return h('button', data, children)
  }
}

export default VBtn
