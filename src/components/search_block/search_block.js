import React from 'react';
import '../search_block/search_block.css';

class SearchBlock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    onInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
        this.props.searchItem(e.target.value);
    }

    render() {
        const buttonsData = [
            { name: 'Все сотрудники', filter: 'all' },
            { name: 'На повышение', filter: 'promotion' },
            { name: 'ЗП больше 6000$', filter: 'salary' }
        ]

        const buttons = buttonsData.map(({ name, filter }) => {
            let active = this.props.arrayFilter;
            let clazz = (active === filter) ? 'btn btn-outline-light' : 'btn btn-light';
            return <button type="button" key={filter} className={clazz} onClick={() => this.props.onGetFilter(filter)}>{name}</button>
        })

        return (
            <div className='search_block'>
                <input className='form-control' onChange={this.onInputChange} value={this.state.value} placeholder='Найти сотрудника' />
                <div className='search_block__btns'>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        {buttons}
                        {/* <button type="button" className="btn btn-light" onClick={() => this.props.onGetFilter('all')}>Все сотрудники</button>
                        <button type="button" className="btn btn-outline-light" onClick={() => this.props.onGetFilter('promotion')}>На повышение</button>
                        <button type="button" className="btn btn-outline-light" onClick={() => this.props.onGetFilter('salary')} >ЗП больше 6000$</button> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBlock;