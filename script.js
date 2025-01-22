function addTask() {
    const newTask = document.getElementById('li')
    const taskList = document.getElementById('taskList')
    taskList.appendChild(newTask)
    newTask.textContent = document.getElementById('inputTask').value
    document.getElementById('inputTask').value=""
    deleteTask(newTask)
}
function deleteTask(newTask)
{
    const deleteBtn= document.createElement('button')
    deleteBtn.textContent="Delete"
    newTask.appendchild(deleteBtn)
    deleteBtn.onclick=function(){
        newTask.remove()
    }
}
