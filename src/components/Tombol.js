export default {
  render(createElement) {
    return createElement('button', {

      domProps: {
        innerHTML: 'Click saya'
      },

      on: {
        click() {
          alert('Saya diklik')
        }
      }

    })
  }
}
