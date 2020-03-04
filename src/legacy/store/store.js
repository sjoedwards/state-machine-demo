
import races from '../data/races'

const initialStore = async => ({
  modalOpen: false,
  races: async ? [] : races
})

export default initialStore

