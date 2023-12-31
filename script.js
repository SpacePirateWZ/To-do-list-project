const addBtn = document.getElementById('add-btn')
const taskContainer = document.getElementById('task-container')
const inputText = document.getElementById('text-box')

addBtn.addEventListener('click',function(){
    
    let task = document.createElement('div');
    task.classList.add('task');
    
    let li = document.createElement('li');
    li.innerText = `${inputText.value}`;
    task.appendChild(li);

    let checkbtn = document.createElement('button');
    checkbtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    // checkbtn.innerText = "fish"; *test to see is it any text within the div will get strike-through
    checkbtn.classList.add('checkTask');
    task.appendChild(checkbtn);

    let deletebtn = document.createElement('button');
    deletebtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deletebtn.classList.add('deleteTask');
    task.appendChild(deletebtn);

    if(inputText.value === "") {
        alert("Please enter a task");
    }
    else {
        taskContainer.appendChild(task)
    } 

    inputText.value = ""; // to reset the default text value back to blank

    checkbtn.addEventListener('click', function(){
        const taskDiv = checkbtn.parentElement;
        if (taskDiv.style.textDecoration === "none") {
            taskDiv.style.textDecoration = "line-through";
        }
        else {
            taskDiv.style.textDecoration = "none";
        }
    });

    deletebtn.addEventListener('click', function(e){
        let target = e.target;
        if (target.tagName === "I") {
            target.parentElement.parentElement.remove();
        }
        else {
            target.parentElement.remove();
        }
    });
    
});


// 2 bugs to fix:
// 1) deleting task will delete all if we didnt click on the <i> *done
// 2) after deleting task, if we try to add the task, the task wont be added *fixed when loaded in live-server

// to add one more function such that re-clicking the checkbtn, will remove the strikethrough *done


