const Task = ({Index, Title, Date, Description, Subject, DeleteTask, EditTask, Priority, Filtering}) => {
    return (
        <div 
            style={{
                maxWidth: "1000px", /* These style the outcome of the details of the task. For example,
                the maxWidth shows the total width of each task on the list as it is displayed. The background
                color is #aaa, which is just grey since I wanted different color. */
                border: "2px solid", 
                borderRadius: "5px", 
                padding: "20px",
                margin: "10px auto",
                backgroundColor: "#aaa"
            }}
        >
            <h3>{Title}</h3>
            <p>{Date}</p>
            <p>{Description}</p>
            <p>{Subject}</p>
            <p>{Priority}</p>
            <p>{Filtering}</p>
            <button onClick={() => DeleteTask(Index)}>Delete task</button> 
            <button onClick={() => EditTask(Index)} style={{marginLeft: "5px"}}>Edit Task</button>
            {/* These two buttons above are the onClick buttons which help accomplish the deleteTask and editTask functions.
            I had to style editTask a little bit because the input boxes were too big and priority was not
            showing up, so I shifted edit to the left by 5 pixels and created more space */}
    </div>

    )
}

 
 
export default Task
