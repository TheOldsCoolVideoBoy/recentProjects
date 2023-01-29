import data from './data.json' assert {type: "json"};

/* for(let i = 0; i<data.users.length; i++){
    console.log(data.users[i].firstName+'\n');    
}
 */

for(let i = 0; i<data.users.length; i++){
    console.log(data.users[i].firstName+" "+data.users[i].lastName+" born at "+data.users[i].dateOfBirth+". Known as "+data.users[i].knowsAs);    
}