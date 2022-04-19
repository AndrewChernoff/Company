import React from 'react';
import '../app_filter.css';

const Employee = (props) => {

    let { name, salary, deleteItem } = props;
    let classnames = "emploee d-flex justify-content-between m-2";
    let starClassname = "fa-solid fa-star";

    if (props.bonus) {
        classnames += ' emploee_increase';
    }

    if (props.promotion) {
        starClassname += ' marked';
    }

    return (
        <div>
            <li className={classnames}>
                <div data-prop='promotion' onClick={props.toggleProp}>{name}</div>

                <div>{salary + '$'}</div>

                <div className='group_items d-flex align-items-center justify-content-between'>
                    <button onClick={props.toggleProp}>
                        <i data-prop='bonus' className="fa-solid fa-cookie" ></i>
                    </button>
                    <button onClick={() => deleteItem(props.id)}>
                        <i className="fa-solid fa-trash" ></i>
                    </button>
                    <i className={starClassname}></i>
                </div>
            </li>
        </div>
    )

}

export default Employee;