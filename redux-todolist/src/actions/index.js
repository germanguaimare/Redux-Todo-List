export const addTask = (newTask) => {
    return {
        type: "add_task",
        payload: newTask
    }
}

export const deleteTask = (index) => {
    return {
        type: "delete_task",
        payload: index
    }
}

export const editTask = (index) => {
    return {
        type: "edit_task",
        payload: index
    }
}