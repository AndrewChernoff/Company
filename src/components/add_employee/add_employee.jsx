import React from 'react';
import '../add_employee/add_employee.css';

class AddEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    changeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createNewEmployee = () => {
        this.props.addEmployee(this.state.name, +this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        return (
            <div className="footer">
                <h2>Добавьте нового сотрудника:</h2>
                <div className="footer_manage d-flex justify-content-between">
                    <input type="text" onChange={this.changeValue} name="name" value={this.state.name} className="form-control footer_input" placeholder="Как его зовут?" aria-label="Username" aria-describedby="basic-addon1" />
                    <input type="text" onChange={this.changeValue} name="salary" value={this.state.salary} className="form-control footer_input" placeholder="З/п в $?" aria-label="Username" aria-describedby="basic-addon1" />
                    <button type="button" className="footer_btn btn btn-light" onClick={this.createNewEmployee}>Добавить</button>
                </div>
            </div>
        )
    }
}

export default AddEmployee;