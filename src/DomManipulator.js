const renderProject = (project) => {
    let projectDiv = document.createElement("div");
    projectDiv.setAttribute("class", "project");
    projectDiv.innerText = project.name;

    let button = document.getElementById('newProject');
    document.getElementById('projects').insertBefore(projectDiv, button);
    return projectDiv;
};

const renderTodo = (todo) => {
    
    const todosPane = document.getElementById("todos");
    
    let todoDiv = document.createElement("div");
    todoDiv.setAttribute("class", "todo");
    todoDiv.innerText = todo.name;

    let button = document.getElementById('newTodo');
    todosPane.insertBefore(todoDiv, button);
    return todoDiv;
};

const clearProjects = () => {
    let projectsContainer = document.getElementById('projects');

    while(projectsContainer.childNodes.length > 2){
        projectsContainer.removeChild(projectsContainer.firstChild);
    }
}

const clearTodos = () => {
    let todosContainer = document.getElementById('todos');

    while(todosContainer.childNodes.length > 2){
        todosContainer.removeChild(todosContainer.firstChild);
    }
}

const switchDetailsToEdit = (todo, saveChanges) => {
    const details = document.getElementById("details");

    while(details.lastChild){
        details.removeChild(details.lastChild);
    }

    details.innerHTML = `
        Details Pane
        <div class="detailsDiv">
            Title: <input type="text" value="${todo.name}" id="titleInput">
        </div>
        <div class="detailsDiv">
            Description: <input type="text" value="${todo.details}" id="detailsInput" name=details>
        </div>
        <div class="detailsDiv">
            Due Date: <input type="date" id="dueDateSelector" value ="${todo.dueDate}">
        </div>
    `;
    
    let selectDiv = document.createElement("div");
    selectDiv.setAttribute("class", "detailsDiv");
    switch(todo.priority){
        case "Low":
            selectDiv.innerHTML = `
            <div class="detailsDiv">
            Priority: <select id="prioritySelector">
                <option value="Low" selected>Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>bra
            </select>
            </div>`;
            break;
        case "Medium":
            selectDiv.innerHTML = `
            <div class="detailsDiv">
            Priority: <select id="prioritySelector">
                <option value="Low">Low</option>
                <option value="Medium" selected>Medium</option>
                <option value="High">High</option>bra
            </select>
            </div>`;
            break;
        case "High":
            selectDiv.innerHTML = `
            <div class="detailsDiv">
            Priority: <select id="prioritySelector">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High" selected>High</option>bra
            </select>
            </div>`;
            break;
    }

    details.appendChild(selectDiv);

    let saveButton = document.createElement("button");
    saveButton.innerText = "Save";
    saveButton.addEventListener("click", function(){
        saveChanges({
            name: document.getElementById("titleInput").value,
            details: document.getElementById("detailsInput").value,
            dueDate: document.getElementById("dueDateSelector").value,
            priority: document.getElementById("prioritySelector").value
        });
    });
    details.appendChild(saveButton);

};

const switchDetailsToView = (todo, editFunction) => {
    const details = document.getElementById("details");

    while(details.lastChild){
        details.removeChild(details.lastChild);
    }

    details.innerHTML = `
        Details Pane
        <div class="detailsDiv">
            Title: ${todo.name}
        </div>
        <div class="detailsDiv">
            Description: ${todo.details}
        </div>
        <div class="detailsDiv">
            Due Date: ${todo.dueDate}
        </div>
        <div class="detailsDiv">
            Priority: ${todo.priority}
            </select>
        </div>
        <button id="editButton">Edit</button>
    `;
    document.getElementById("editButton").addEventListener("click", editFunction);
};

const clearDetails = () => {
    let detailsContainer = document.getElementById('details');

    detailsContainer.innerHTML = null;
};

export {renderProject, renderTodo, switchDetailsToView, switchDetailsToEdit, clearProjects, clearTodos, clearDetails};