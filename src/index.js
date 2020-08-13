import {renderProject, renderTodo, switchDetailsToView, switchDetailsToEdit, clearProjects, clearTodos, clearDetails} from "./DomManipulator.js";
import {createTodo} from "./factory"

//load data from localStorage

let projects = [];
let selectedProject, selectedTodo;
projects = getDefaultProjects();


// Render projects and todos
// this should add the listeners to those objects
displayProjects();



function getDefaultProjects(){
    let defaultProjects = [];
    let nonemptyProject = {name: "Uncategorized", todos: []};
    nonemptyProject.todos.push(createTodo("Wash dog", undefined, undefined, "Low"));
    nonemptyProject.todos.push(createTodo("Trash", undefined, undefined, "Medium"));
    nonemptyProject.todos.push(createTodo("Lorem", undefined, undefined, "High"));

    defaultProjects.push(nonemptyProject);
    defaultProjects.push({name: "Empty", todos: []});
    return defaultProjects;
}

//provided to the switch details to view function to provide functionality to the "Edit" button it produces
function switchToEditing(){
    switchDetailsToEdit(projects[selectedProject].todos[selectedTodo], saveChangesFromDetails);
}

//redraws projects container and assigns necessary listeners
function displayProjects(){
    clearProjects();
    projects.forEach((p, index) => {
        let pDiv = renderProject(p);
        pDiv.addEventListener("click", function(){
            if(selectedProject != index){
                selectedProject = index;
                clearDetails();
                selectedTodo = undefined;
                displayTodos();
            }
            
        })
    });
}

//redraws todos container and assigns necessary listeners
function displayTodos(){
    clearTodos();
    projects[selectedProject].todos.forEach((t, index) => {
        let todoDiv = renderTodo(t);
        todoDiv.addEventListener("click", function(){
            if(selectedTodo != index){
                selectedTodo = index;
                switchDetailsToView(projects[selectedProject].todos[selectedTodo], switchToEditing);
            }
        })
    });
}

//this function is passed to the DomManipulator so the "Save" button in the details pane has soemthing to do
function saveChangesFromDetails(todo){
    projects[selectedProject].todos[selectedTodo] = todo;
    switchDetailsToView(projects[selectedProject].todos[selectedTodo], switchToEditing);
    displayTodos();
    
}