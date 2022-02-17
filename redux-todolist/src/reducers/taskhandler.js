const taskHandler = (state = ["Tarea 1","Tarea 2"], action) => {
    switch (action.type) {
        case "add_task":
            return state.concat(action.payload)
        default:
            return state
        case "delete_task":
            return state.filter(key => key != action.payload)
        case "edit_task":
                let toEdit = document.getElementById(action.payload)
                let newItem = document.createElement('text_input')
                newItem.textContent = "Probando"
            return toEdit.replaceChild(newItem, toEdit)
    }
}

export default taskHandler