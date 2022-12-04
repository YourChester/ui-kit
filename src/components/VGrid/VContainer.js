import './VGrid.scss'

const VContainer = {
  name: 'v-container',
  functional: true,
  props: {
    id: String,
    tag: {
      type: String,
      default: 'div'
    }
  },
  render (h, { props, children }) {
    const data = {}

    if (props.id) {
      data.domProps.id = props.id
    }


    return h(
      props.tag,
      {
        staticClass: 'v-container',
        ...data
      },
      children
    )
  }
}

export default VContainer