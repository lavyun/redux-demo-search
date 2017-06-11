import { SHOW_LINKS_LIST, SET_LINKS_ACTIVE, SET_LIST } from '../actions'

const defaultState = {
    data: [],
    show: false,
    activeIndex: -1
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case SET_LIST:
            return {...state, data: action.list}
        case SHOW_LINKS_LIST:
            return {...state, show: action.show}
        case SET_LINKS_ACTIVE:
            return {...state, activeIndex: action.index}
        default:
            return state
    }
}
