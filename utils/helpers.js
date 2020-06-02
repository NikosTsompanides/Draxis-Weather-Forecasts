import moment from 'moment'

/**
 * @function objectToDataListArray
 * @param {Object} obj
 * @returns {Array} array of objects in form of { date, value }
 * @description This method converts an object to an array for the DataList component
 */
export const objToDataListArray = obj =>
  Object.keys(obj).map(key => ({
    date: moment(key).format('DD/MM/YYYY HH:mm'),
    value: Number(obj[key]).toFixed(3)
  }))

/**
 * @function getArrayPiece
 * @param {Array} array
 * @param {Number} page
 * @param {Number} size
 * @returns {Array} piece of the initial array
 */
export const getArrayPiece = (array, page, size) => {
  const start = page === 1 ? 0 : (page - 1) * size
  const end = start + size > array.length ? array.length : start + size
  return array.slice(start, end)
}

export const getPaginatedArray = (object, page, size) => {
  const convertedArray = objToDataListArray(object)
  return getArrayPiece(convertedArray, page, size)
}
