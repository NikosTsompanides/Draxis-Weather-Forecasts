import { getArrayPiece } from '../utils/helpers'
export const state = () => ({
  array: [],
  page: 1,
  sortType: 'asc'
})

export const mutations = {
  setArray: (state, humidity) => (state.array = humidity),
  setPage: (state, page) => (state.page = page),
  setSortType: (state, type) => (state.sortType = type)
}

export const getters = {
  getArray: ({ array, page }) => getArrayPiece(array, page, 4),
  getHumidityAverage: (state) => {
    const sum = state.array.reduce((acc, curr) => acc + parseFloat(curr.value), 0)
    const length = state.array.length
    return Number(sum / length).toFixed(2)
  }
}

export const actions = {
  sortArray ({ state, commit }) {
    const array = [...state.array]
    const sortFunction = (that, other) => Number(that.value) - Number(other.value)
    const sorted = array.sort(sortFunction)

    if (state.sortType === 'desc') {
      commit('humidity/setArray', sorted.reverse(), { root: true })
      return
    }

    commit('humidity/setArray', sorted, { root: true })
  }
}
