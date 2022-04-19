import '../app_filter/app_filter.css';
import Employee from './emploee/emploee';

const AppFilter = ({ employees, deleteItem, toggleProp }) => {

    let elements = employees.map(el => {
        const { id, ...elProperties } = el;
        return <Employee key={id} id={id} {...elProperties} deleteItem={deleteItem} toggleProp={(e) => toggleProp(id, e.target.getAttribute('data-prop'))} />
    })

    return (
        <div>
            {elements}
        </div>
    )
}

export default AppFilter;