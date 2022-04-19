import '../app_header/app_header.css';

const AppHeader = (props) => {
    return (
        <div className="app_header">
            <h1>Учёт сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {props.employeesQuantity}</h2>
            <h2>Премии получат: {props.bonus}</h2>
        </div>
    )
}

export default AppHeader;