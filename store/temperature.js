import { getArrayPiece } from '../utils/helpers'

export const state = () => ({
  array: [],
  page: 1,
  sortType: 'asc'
})

export const mutations = {
  setArray: (state, temp) => (state.array = temp),
  setPage: (state, page) => (state.page = page),
  setSortType: (state, type) => (state.sortType = type)
}

export const getters = {
  getArray: ({ array, page }) => getArrayPiece(array, page, 4)
}

export const actions = {
  sortArray ({ state, commit }) {
    const array = [...state.array]
    const sortFunction = (that, other) => Number(that.value) - Number(other.value)
    const sorted = array.sort(sortFunction)

    if (state.sortType === 'desc') {
      commit('temperature/setArray', sorted.reverse(), { root: true })
      return
    }

    commit('temperature/setArray', sorted, { root: true })
  }
}
