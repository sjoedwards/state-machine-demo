const reducer = (state, action) => {
  switch(action.type) {
    case 'TOGGLE_MODAL':
      return {...state, modalOpen: !state.modalOpen}
    case 'SELECT_RACE':
      return {...state, modalOpen: !state.modalOpen, selectedRace: state.races[action.payload]}
    case 'UPDATE_RACES':
      return {...state, races: [...action.payload]}
    default:
      return
  }
}

export default reducer