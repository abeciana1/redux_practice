import { combineReducers } from 'redux'

import cake from './cake-reducer'
import baker from './baker-reducer'

export default combineReducers({
    cake,
    baker
})