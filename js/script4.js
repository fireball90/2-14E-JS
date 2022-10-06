/*
document.getElementById('fetch-posts').onclick = function(){
    var xhr = new XMLHttpRequest;

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var posts = JSON.parse(xhr.responseText)
            
            var postListHTML = ""
            for(var post of posts){
                postListHTML += '<p>'+post.title+'</p><small>'+post.body+'</small>'
            }
        
            document.getElementById('post-list-container').innerHTML = postListHTML
        }

    }
    
    xhr.open('GET','http://jsonplaceholder.typicode.com/posts')

    xhr.send()
}*/

document.getElementById('fetch-posts').onclick = function(){

    var postListHTML ="";

    fetch('http://jsonplaceholder.typicode.com/posts')
        .then((response)=>response.json())
        .then((data)=>appendData(data))
        .catch(function (err) {
            console.log('error: ' + err);
        });

    function appendData(data) {
        for (var i = 0; i < data.length; i++) {
            postListHTML+=`
            <div id="post-container">
                <p id="post-title">${data[i].title}</p><p id="post-body">${data[i].body}</p>
            </div>
            `
        }

        document.getElementById('post-list-container').innerHTML = postListHTML;
    }
}