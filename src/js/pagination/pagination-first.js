export default {
  functional: true,
  props: ['label', 'expand'],
  render (h, { props, parent }) {
    const { label, expand } = props

    // if not rendered by VkPagination, return comment to mark the position
    if (!(parent.$options && parent.$options._componentTag === 'vk-pagination')) {
      return h('li', { attrs: { label, expand } }, 'first')
    }

    return h('li', {
      class: {
        'uk-disabled': parent.prevPage < 1,
        'uk-margin-auto-right': expand !== undefined
      }
    }, [
      h('a', {
        on: { click: e => parent.$emit('change', 1) }
      }, [
        h('span', {
          staticClass: 'uk-pagination-prev uk-icon',
          class: { 'uk-margin-small-right': label },
          attrs: { 'uk-pagination-previous': true }
        }),
        label && label
      ])
    ])
  }
}