import React, {Component} from 'react'
import Nav from './components/Nav/Nav'
import Form from './components/Form/Form'
import TaskSection from './components/TaskSection/TaskSection'
import './../styles/styles.scss'

class App extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            currentID: '',
            taskList: [ ]
        }
    }

    componentDidMount = () => {
        this.fetchTasks()
    }

    fetchTasks = () => {
        fetch('/api/tasks')
            .then(res => res.json())
            .then(res => this.setState({taskList: res.taskList}))
    }


    saveTask = e => {
        e.preventDefault()

        if (this.state.currentID) {
            fetch(`/api/tasks/${this.state.currentID}`, {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
                .then(res => res.json())
                .then(res => {
                    M.toast({html: 'Updated'})
                    this.setState({title: '', description: '', currentID: ''})
                    this.fetchTasks()
                })
        } else {
            fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(res => {
                M.toast({html: 'Saved'})
                this.setState({title: '', description: ''})
                this.fetchTasks()
            })
        }
    }

    deleteTask = id => {
        if (confirm('Are you sure you want to delete it?')) {
            fetch(`/api/tasks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(res => {
                M.toast({html: 'Deleted'})
                this.fetchTasks()
            })
        }
    }

    editTask = id => {
        fetch(`/api/tasks/${id}`)
            .then(res => res.json())
            .then(res => this.setState({
                title: res.title,
                description: res.description,
                currentID: res._id
            }))
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    render () {
        return ( 
            <React.Fragment>
                <Nav />
                <div className="container">
                    <Form saveTask={this.saveTask} handleChange={this.handleChange} title={this.state.title} description={this.state.description} />
                    <TaskSection taskList={this.state.taskList} editTask={this.editTask} deleteTask={this.deleteTask}/>
                </div>
            </React.Fragment>
        )
    }
}

export default App