import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Tasks extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
            taskname: "",
            taskdetails: ""
        }

        this.handleTaskInputChange = this.handleTaskInputChange.bind(this);
        this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
        this.editTask = this.editTask.bind(this);
    }

    handleTaskInputChange(event) {
        //This will be invoked always when there is change in input
        let nam = event.target.name;
        let val = event.target.value;
        
        this.setState({
          [nam]: val
        });
    }

    handleTaskSubmit(event) {
        // This will be invoked on form submit
        if(this.state.taskname === "") {
            alert("Task Name cannot be empty");
        }else if(this.state.taskdetails === "") {
            alert("Task Details cannot be empty");
        }else {
            // empty task and task details fields
            this.setState({
                taskname: "",
                taskdetails: ""
            })

            // Fill the list of all tasks with this new task
            this.state.tasks.push([this.state.taskname, this.state.taskdetails]);
            console.log(this.state.tasks);
        }

        event.preventDefault();
    }

    editTask(event) {
        // Edit task names or details
        console.log(event.currentTarget.innerText);
        let original_val = event.target.innerText;

        let new_val = prompt("Please enter new value", original_val);

        if (new_val === null || new_val === "") {
            // User did not change the value. Hence keep it as is
            event.target.innerText = original_val;
        } else {
            // Set New value in innerHTML
            event.target.innerText = new_val;
        }

        // Make a copy of tasks[] for editing
        let tasksCopy = this.state.tasks;

        for(var i = 0; i < tasksCopy.length; i++) {
            // Identify it the innerHTML value belongs to task name or task details
            if (tasksCopy[i][0] === original_val) {
                //Replace old task name with new value
                console.log('Original Task Name:\t' + tasksCopy[i][0]);
                tasksCopy[i][0] = new_val;
            }else if (tasksCopy[i][1] === original_val) {
                // Replace old task details with new value
                console.log('Original Task Details:\t' + tasksCopy[i][1]);
                tasksCopy[i][1] = new_val;
            }
        }

        // Finally replace original tasks with new tasks
        this.setState({
            tasks: tasksCopy
        })
    }

    render() {
        return (
            <div className="container">
               <div style={{marginTop: 10}}>
                 <h3>Add New Task</h3>
                 <form onSubmit = {this.handleTaskSubmit}>
                     <div className="form-group">
                         <label>Task Name:  </label>
                         <input
                            type="text"
                            name="taskname"
                            className="form-control"
                            value={this.state.taskname}
                            onChange={this.handleTaskInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Task Details: </label>
                        <input
                            type="text"
                            name="taskdetails"
                            className="form-control"
                            value={this.state.taskdetails}
                            onChange={this.handleTaskInputChange} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Task" className="btn btn-primary"/>
                    </div>
                </form>

                <div className="container">
                <div className="col-xs-12">
                    <h1>ToDo List:</h1>
                    <hr />
                    <h5>Click on tasks displayed below to edit them</h5>
                    <hr />
                    {this.state.tasks.map((task) => (
                        <div className="card">
                            <div className="card-body">
                                <h5 
                                 className="card-title col-xs-6" 
                                 onClick={this.editTask}
                                >
                                    {task[0]}
                                </h5>
                                <h6
                                 className="card-subtitle col-xs-4 mb-2 text-muted"
                                 onClick={this.editTask}
                                >
                                    { task[1]}
                                </h6>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
              </div>

            </div>
        )
    }
}

export default Tasks;