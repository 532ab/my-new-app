import React, {useState} from "react";
import Task from "./Task";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]); /* This holds the tasks variable */
  const [title, setTitle] = useState("");/* This holds the title of the task variable */
  const [description, setDescription] = useState("");/* This holds the description variable */
  const [date, setDate]= useState("");/* This holds the date variable */
  const [filter, setFilter]= useState("");/* This holds the filter variable */
  const [dontShow, setDontShow]= useState([]);/* This holds the dontShow variable */

  /* This is the add task function. We create a new task variable and set the variables for a new function.
  After all variables are set and we have stored their values, we add to a new task array and therefore
  add a task */
  const addTask = () => {
    const newTask = {
      title: title,
      description: description,
      date: date,
      subject: document.getElementById("subject").value,
      priority: document.getElementById("priority").value,
    }
    setTasks([...tasks, newTask]);
  }
/* The edit task serves to edit former tasks. For the first part, I basically copied my addTask function without setting
the newTasks. I then made a for loop which went through the lists of tasks and pushed out each task away and then set up a new one.
Basically, we deleted and added a task, which helped us "edit" the task. For editing, I didn't make lines that you could
edit in the box, so when I clicked the edit button, I went back to our input buttons where we entered all our info,
and then added new information and pressed edit again, which edited our task. */
  const editTask = (index) => {
    const newTasks = [];
    const newTask = {
      title: title,
      description: description,
      date: date,
      subject: document.getElementById("subject").value,
      priority: document.getElementById("priority").value
    }
    for(let i=0; i< tasks.length;i++)
      {
        if(i!==index)
        {
            newTasks.push(tasks[i]);
        } else {
          newTasks.push(newTask);
        }
      }
      setTasks(newTasks);
  }
/* The delete task serves to delete former tasks. I created an empty array, set up a for loop to go through all
previous tasks, and push out those tasks we did not want. I also used this in the edit function since pretty much
all we were doing is deleting a task and adding a new one. */
  const deleteTask= (index) => {
      const newTasks=[];
      for(let i=0; i< tasks.length;i++)
      {
        if(i!==index)
        {
            newTasks.push(tasks[i]);
        }
      }
      setTasks(newTasks);

  }
/* This is the filter tasks function. I first made it case-insensitive through making the filterBy parameter
to lower case and made it the parameter to the setFilter variale. I made a newDontShow empty array where I used a
for loop to loop through all tasks and made a toSearch variables where all strings (title, description, date, priority)
were combined and set to lower case, making it case insensitive. I pushed out all tasks that didn't meet the filter
search and threw them away and showed the ones that did. */
  const filterTasks=(filterBy)=> {
    filterBy=filterBy.toLowerCase();
      setFilter(filterBy);
      let newDontShow=[];
      for(let i=0;i<tasks.length;i++)
      {
        let toSearch = tasks[i].title+tasks[i].description+tasks[i].date + tasks[i].subject + tasks[i].priority;
        toSearch=toSearch.toLowerCase();
        if(!toSearch.includes(filterBy))
        {
          newDontShow.push(i);
        }
      }
      setDontShow(newDontShow);
  }

  return (
    <div id="title-list">
      <h1> Task Manager App </h1> {/* This shows the title of the app: Task Manager */}
      <div style={{display: "block", textAlign: "center", height: "50px",}}>
        <input style={{height: "20px"}} placeholder="Filter" value={filter}
            onChange={(e) => filterTasks(e.target.value)}/>
        </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input value={title} placeholder="Title" style= {{width: "5px"}} /* This shows the input for adding the title. 
            The input is passed to the title variable and I kept a placeholder to show what the text box is for, which would be the
          title of the task*/
              onChange={(e) => setTitle(e.target.value)}
            />
       
                <input value={description} placeholder="Description" style= {{width: "5px"}}
                /* This shows the input for adding the description for the task. 
            The input is passed to the description variable and I kept a placeholder to show what the text box is for, which would be the
          description of the task*/
                onChange={(e) => setDescription(e.target.value)}
            />

       
                <input value={date} type="date" placeholder="Date" style= {{width: "5px"}}
                 onChange={(e) => setDate(e.target.value)}
            />
                {/* In this part, I implemented two dropdowns, one for subject and priority in that order.
                I uses basic school subjects and for priority, I set up an urgent level (high), middle(in between)
                and a low one to show thw urgency of the task */}
                <select name="subject" id="subject">
                  <option value="Subject">Subject</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="History">History</option>
                  <option value="English">English</option>
                  <option value="Other">Other</option>
                </select>

                <select name= "priority" id= "priority">
                  <option value= "Priority">Priority</option>
                  <option value= "Urgent">Urgent</option>
                  <option value= "Middle">Middle</option>
                  <option value= "Low">Low</option>
                </select>

    <div className="text-right" style={{marginLeft: "5px"}}> 
          <button onClick={addTask}>Add</button> {/* This is the onClick add Task button. It incorporates 
          all the details of the task on the screen.*/}
        </div>

    </form>
    <div>
      {    /* Tasks.map helps me display all my variables. I display the title, date, description, subject, priority.
      I also display the tasks such as add and delete, filtering for specific dates, subject, priority level, etc. */
        tasks.map((task, index) => {
          if(!dontShow.includes(index)) {
            return <Task
            Index={index}
            Title={task.title}
            Date={task.date}
            Description={task.description}
            Subject={task.subject}
            Priority={task.priority}
            DeleteTask={deleteTask}
            EditTask={editTask}
            />
          }

        })
      }
    </div>
</div>
  );
  }

export default App;