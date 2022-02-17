import taskHandler from "./taskhandler"
import { combineReducers } from "redux"

const allReducers = combineReducers({
    taskHandler: taskHandler,
})

export default allReducers