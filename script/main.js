// listen for form submit
document.getElementById('bookmarkForm').addEventListener('submit', saveBookmark);
document.getElementById('taskListForm').addEventListener('submit', saveTask);
function saveBookmark(e){
    // get variables and outpout to console
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    var siteNote = document.getElementById('siteNote').value;
    

    //define var for local storage
    var bookmark = {
        name: siteName,
        url: siteUrl,
        note: siteNote
    }
    /*
    //local storage test
    localStorage.setItem('test', "Hello World");
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    */

    //Test if bookmark is null
    if(localStorage.getItem('bookmarks') === null){
        var bookmarks = [];
        // push bookmark to array
        bookmarks.push(bookmark);
        // Set to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        //get bookmarks from localStorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // add bookmark to array
        bookmarks.push(bookmark);
        // Re-set back to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    
    // refetch bookmarks
    fetchBookmarks();

    // Prevent form from submitting
    e.preventDefault();
}

function deleteBookmark(url){
    // get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks')); 
    
    // loop through bookmarks
    for(var i = 0; i < bookmarks.length; i++){
        if(bookmarks[i].url == url){
            // remove from array
            bookmarks.splice(i, 1);
        }
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    
    // refectch bookmarks
    fetchBookmarks();
}


// Fetch Bookmarks
function fetchBookmarks(){
    // get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks')); 
    // Get output id
    var bookmarkResults = document.getElementById('bookmarkResults');
    
    // build output
    bookmarkResults.innerHTML = '';

    for(var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        var note = bookmarks[i].note;

        bookmarkResults.innerHTML += '<div class="card" "card card-inverse" style="background-color: white; border-color: darkgray;">'+
                                     '<h4 class="card-title">'+name+
                                     ':  '+
                                     '<div class="card-body" align="right">'+
                                     '<a class="btn btn-success" target="_blank" href="'+url+'">Visit</a> ' +
                                     '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a>' +
                                     '</h4>'+
                                     '<h5>'+"Note:"+
                                     '</h5>'+
                                     '<p>'+note+
                                     '</p>'+
                                     '<br>'+
                                     '</div>'+
                                     '</div>';
    }
}


function saveTask(e){
    // get variables and outpout to console
    var taskName = document.getElementById('taskTitle').value;
    var taskDuedate = document.getElementById('taskDuedate').value;
    

    //define var for local storage
    var task = {
        name: taskName,
        duedate: taskDuedate        
    }
    /*
    //local storage test
    localStorage.setItem('test', "Hello World");
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    */

    //Test if task is null
    if(localStorage.getItem('tasks') === null){
        var tasks = [];
        // push task to array
        tasks.push(task);
        // Set to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        //get bookmarks from localStorage
        var tasks = JSON.parse(localStorage.getItem('tasks'));
        // add bookmark to array
        tasks.push(task);
        // Re-set back to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    // refetch bookmarks
    fetchTasks();

    // Prevent form from submitting
    e.preventDefault();
}

function deleteTask(name){
    // get bookmarks from localStorage
    var tasks = JSON.parse(localStorage.getItem('tasks')); 
    
    // loop through bookmarks
    for(var i = 0; i < tasks.length; i++){
        if(tasks[i].name == name){
            // remove from array
            tasks.splice(i, 1);
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    // refectch bookmarks
    fetchTasks();
}


// Fetch Bookmarks
function fetchTasks(){
    // get bookmarks from localStorage
    var tasks = JSON.parse(localStorage.getItem('tasks')); 
    // Get output id
    var taskResults = document.getElementById('taskResults');
    
    // build output
    taskResults.innerHTML = '';

    for(var i = 0; i < tasks.length; i++){
        var name = tasks[i].name;
        var duedate = tasks[i].duedate;
        

        taskResults.innerHTML += '<div class="card" "card card-inverse" style="background-color: white; border-color: darkgray;">'+
                                     '<h5 class="card-title">'+name+
                                     ':  '+
                                     '</h5>'+
                                     '<h4>'+duedate+
                                     '<div class="card-body" align="right">'+
                                    //'<a class="btn btn-success" target="_blank" href="'+name+'">Visit</a> ' +
                                     '<a onclick="deleteTask(\''+name+'\')" class="btn btn-danger" href="#">Delete</a>' +
                                     '</h4>'+
                                     //'<h5>'+"Note:"+
                                    // '</h5>'+
                                     //'<p>'+note+
                                     //'</p>'+
                                     //'<br>'+
                                     '</div>'+
                                     '</div>';
    }
}