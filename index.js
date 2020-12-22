console.log('Before');

 getUser(1, function(user){
    console.log('User', user);
    getRepositories(user.gitHubUsername, (repos)=>{
    console.log('Repos', repos);
 });
});

console.log('After');

//Callbacks
// Promises
//Asyc/wait


function getUser(id, callback){ 
setTimeout(() => {
    console.log('Whats up homies');
    callback({id: id, gitHubUsername: 'Ahsan'});
}, 500);
}

function getRepositories(username, callback){
    setTimeout(()=>{
        console.log('Calling API');
        callback(['repo1', 'repo2', 'repo3']);

    }, 2000);
}