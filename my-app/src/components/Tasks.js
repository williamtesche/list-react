import React from "react";


const Tasks = ({tasks}) => {
    return (
        <ul>
        {tasks.map((tasks) => (
            <li>{tasks.title}</li>
        ))}
        
        </ul>
    );

    }
export default Tasks;