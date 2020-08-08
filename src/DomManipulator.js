const renderProjects = (projects) => {

};

const renderTodos = (todos) => {

};

const switchDetailsToEdit = () => {

};

const switchDetailsToView = () => {
    const details = document.getElementById("details");

    while(details.lastChild){
        details.removeChild(details.lastChild);
    }
};

export {switchDetailsToView};