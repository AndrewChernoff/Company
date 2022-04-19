import React from 'react';
import './App.css';
import AddEmployee from './components/add_employee/add_employee';
import AppFilter from './components/app_filter/app_filter';
import AppHeader from './components/app_header/app_header';
import SearchBlock from './components/search_block/search_block';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        { name: 'Andrew', salary: 5500, bonus: true, promotion: false, id: 1 },
        { name: 'John', salary: 6000, bonus: false, promotion: false, id: 2 },
        { name: 'Mark', salary: 7000, bonus: false, promotion: false, id: 3 }
      ]
    }
    this.maxID = 3;
  }

  deleteItem = (id) => {
    this.setState(() => {
      let arr = this.state.employees.filter(el => el.id !== id)

      return {
        employees: arr
      }
    })

  }

  addEmployee = (employeeName, employeeSalary) => {
    let newEmpyoee = { name: employeeName, salary: employeeSalary, bonus: false, promotion: false, id: ++this.maxID }
    this.setState((state) => {
      return {
        employees: [...state.employees, newEmpyoee]
      }
    })
    console.log(this.state.employees)
  }

  toggleProp = (id, prop) => {
    this.setState({
      employees: [...this.state.employees.map(el => {
        if (el.id === id) {
          return { ...el, [prop]: !el[prop] }
        }
        return el;
      })]
    })
  }


  render() {
    let bonusForSalary = this.state.employees.filter(el => el.bonus === true).length;
    let employeesQuantity = this.state.employees.length;

    return (
      <div className="App">
        <AppHeader bonus={bonusForSalary} employeesQuantity={employeesQuantity} />
        <SearchBlock />
        <AppFilter employees={this.state.employees} deleteItem={this.deleteItem} toggleProp={this.toggleProp} />
        <AddEmployee addEmployee={this.addEmployee} />
      </div>
    );
  }
}

export default App;
