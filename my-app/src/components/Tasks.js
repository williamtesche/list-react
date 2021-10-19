import React from "react";


const Tasks = ({tasks}) => {
    return (
        <>
        {tasks.map((task) => (
            <Tasks tasks={tasks} />
        ))}
        
        </>
    );

    }
export default Tasks;