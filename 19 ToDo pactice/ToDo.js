
const STATUS = {
    TODO: "ToDo",
    INPROGRESS: "In Progress",
    DONE: "Done",
};

const list = {};

function changeStatus(nameOfTask, status)
{
    if (nameOfTask in list)
    {
        list[nameOfTask] = status;
        console.log("Status changed successfully!");
    }
    else
    {
        console.log("Task does not exist.");
    }
};

function addTask(nameOfTask)
{
    if (nameOfTask in list)
    {
        console.log("Task already exist.")
    }
    else
    {
        list[nameOfTask] = STATUS.TODO;
    }
};

function deleteTask(nameOfTask)
{
    if(nameOfTask in list)
    {
        delete list[nameOfTask];
        console.log("Task successfully deleted!");
    }
    else
    {
        console.log("Task does not exist");
    }
};

function showList()
{
    let list_TODO = {};
    let list_INPROGRESS = {};
    let list_DONE = {};

    for (let task in list)
    {
        switch(list[task])
        {
            case STATUS.TODO:
                list_TODO[task] = "";
                break;
            case STATUS.INPROGRESS:
                list_INPROGRESS[task] = "";
                break;
            case STATUS.DONE:
                list_DONE[task] = "";
                break;
              default:
                console.log("ПРОИЗОШЁЛ ДЕФОЛТ?!?!!?");
                break;
        }
    }    
        console.log('\n' + 'ToDo:')
        for (let task in list_TODO)
        {
            console.log(`\t"${task}",`);
        }

        console.log('\n' + 'In Progress:')
        for (let task in list_INPROGRESS)
        {
            console.log(`\t"${task}",`);
        }

        console.log('\n' + 'Done:')
        for (let task in list_DONE)
        {
            console.log(`\t"${task}",`);
        }
    
}

addTask("create a new practice task");
addTask("make a bed");
addTask("write a post");
addTask("delete task");

changeStatus("write a post", STATUS.INPROGRESS);

deleteTask("delete task");

//new tasks:
addTask("wash teeth");
changeStatus("wash teeth", STATUS.DONE);

addTask("build a rocket");
deleteTask("build a rocket");

addTask("ыфвамываавы");
changeStatus("ыфвамываавы", STATUS.DONE);

addTask("ыфвамываавы");
deleteTask("ыфвkllвы");

showList();


