import React from 'react'

const TaskSection = ({taskList, editTask, deleteTask}) => {
    return (
        <div className="row">
                    {taskList.map((e, i) => {
                        return (
                            <div className="col s12 m6 l4" key={i}>
                                <div className="card teal">
                                    <div className="card-content">
                                        <span className="white-text task-title">{e.title}</span>
                                        <p className="white-text">{e.description}</p>
                                    </div>
                                     <div className="card-tabs">
                                        <ul className="tabs tabs-fixed-width">
                                             <li className="tab"><a onClick={() => editTask(e._id)}>Edit</a></li>
                                             <li className="tab"><a onClick={() => deleteTask(e._id)}>Delete</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
        </div>  
    )
}

export default TaskSection