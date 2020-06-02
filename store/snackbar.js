export const state = () => ({
  text: '',
  color: null,
  open: false
})

export const mutation = {
  setSnackbar: (state, options) => (state = { ...options })
}

export const getters = {
  getSnackbar: state => state
}
