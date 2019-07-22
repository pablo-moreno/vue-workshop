import store from './store'

export const isAuthenticated = () => {
  return store.state.auth.isAuthenticated
}

/**
 * 
 * @param {Array} list List of items
 * @param {*} item Item to remove
 */
export const removeItem = (list, item) => {
  // Always use immutability
  const newList = [...list]
  const i = list.indexOf(item)
  const removed = newList.splice(i, 1)
  return newList
}
