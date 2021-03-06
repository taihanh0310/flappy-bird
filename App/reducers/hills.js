import { HILLS_RESET, HILLS_MOVE_LEFT, HILLS_WIDTH, HILLS_HEIGHT, HILLS_X, HILLS_Y } from '../constants/hills'

const initialState = {
    hillsWidth: HILLS_WIDTH,
    hillsHeight: HILLS_HEIGHT,
    hillsX: HILLS_X,
    hillsY: HILLS_Y
}

function hills(state = initialState, action) {
    switch(action.type) {
        case HILLS_RESET:
            return {...state,
                hillsX: initialState.hillsX
            }
        case HILLS_MOVE_LEFT:
            return {...state,
                hillsX: state.hillsX - action.amount
            }
        default:
            return state
    }
}

export default hills
