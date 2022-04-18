import React from 'react';
import '../app_filter.css';

class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: this.props.bonus,
            promoted: this.props.promotion
        }
    }

    increase = () => {
        this.setState({
            increase: !this.state.increase
        })
    }

    promoteEmployee = () => {
        this.setState({
            promoted: !this.state.promoted
        })
    }

    render() {
        let bonus = this.state.increase;
        let promoted = this.state.promoted;
        let { name, salary, deleteItem } = this.props;
        let classnames = "emploee d-flex justify-content-between m-2";
        let starClassname = "fa-solid fa-star";

        if (bonus) {
            classnames += ' emploee_increase';
        }

        if (promoted) {
            starClassname += ' marked';
        }

        return (
            <div>
                <li className={classnames}>
                    <div onClick={this.promoteEmployee}>{name}</div>

                    <div>{salary + '$'}</div>

                    <div className='group_items d-flex align-items-center justify-content-between'>
                        <button>
                            <i className="fa-solid fa-cookie" onClick={this.increase}></i>
                        </button>
                        <button>
                            <i className="fa-solid fa-trash" onClick={() => deleteItem(this.props.id)}></i>
                        </button>
                        <i className={starClassname}></i>
                    </div>
                </li>
            </div>
        )
    }
}

export default Employee;