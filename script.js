document.addEventListener('DOMContentLoaded',() =>{
    document.querySelector('#addtask').disabled = true;
    document.querySelector('#removetask').disabled = true;
    document.querySelector('#text').onkeyup = () =>{
       if(document.querySelector('#text').value.length > 0){
        document.querySelector('#addtask').disabled = false;
       }
       else{
        document.querySelector('#addtask').disabled = true;
       }
    }
    document.querySelector('#task').onsubmit = () =>{
       let li = document.createElement('li');
        li.innerHTML =  document.querySelector('#text').value;
            document.querySelector('#newtasks').append(li);
            document.querySelector('#removetask').disabled = false;
            return false;
    }
    document.querySelector('#removetask').onclick = () =>{
        /*var a =  document.querySelectorAll('li');
        if(a.length == 1){
        document.querySelector('li').remove();
        document.querySelector('#removetask').disabled = true;
        }
        else
        {
            document.querySelector('li').remove();
        }*/
        document.querySelector('li').remove();
    }
})