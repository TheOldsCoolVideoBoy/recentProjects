/* При чем, еще интереснее будет иметь массив объектов, например такой:

const list = [ { name: 'create a post', status: 'In progress', priority: 'low'  },
{ name: 'test', status: 'Done', priority: 'high'  } ]  */

const list = [];

const STATUS = {
    INPR: "In Progress",
    DONE: "Done",
    TODO: "ToDo",
};

const PRIORITY = {
    LOW: "Low",
    NORMAL: "Normal",
    HIGH: "High",
};

const ERROR = {
    TASK_EXIST: "Task already exist",
    TASK_NOTEXIST: "Task does not exist",
};

function addTask(name, status = STATUS.TODO, priority = PRIORITY.NORMAL)
{
    let taskIndex = list.findIndex(function(item){
        return item.name.toLowerCase() == name.toLowerCase();
    });

    if(taskIndex == -1)
    {
        list.push({name, status, priority});
    }
    else
    {
        console.log(ERROR.TASK_EXIST);
    }
}

function changeTask(name, status, priority)
{
    let taskIndex = list.findIndex(function(item){
        return item.name.toLowerCase() == name.toLowerCase();
    });
    if(taskIndex == -1)
    {
        console.log(ERROR.TASK_NOTEXIST);
    }
    else
    {
        list[taskIndex].status = status;
        list[taskIndex].priority = priority;
    }
}

function deleteTask(name)
{
    let taskIndex = index.findIndex(function(item){
        return item.name.toLowerCase() == name.toLowerCase();
    });

    if(taskIndex == -1)
    {
        list.splice(taskIndex, 1);
    }
    else
    {
        console.log(ERROR.TASK_NOTEXIST);
    }
}
function showList()
{
    for(let index in STATUS )
    {
        console.log(`${STATUS[index]} :`);
        let statusName = '';

        for( let i = 0; i < list.length; i++ )
        {

          if( list[i].status == STATUS[index] )
          {
            statusName += `  ${list[i].name} priority ${list[i].priority}\n`;
          }
        }
        
        if( statusName != '' )
        {
          console.log(`${statusName}`);
        } 
        else 
        {
          console.log('  -');
        }
    }
}

addTask()
showList();

 
