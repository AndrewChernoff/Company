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
        return (
            <div className='search_block'>
                <input className='form-control' onChange={this.onInputChange} value={this.state.value} placeholder='Найти сотрудника' />
                <div className='search_block__btns'>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light" onClick={() => this.props.onGetFilter('all')}>Все сотрудники</button>
                        <button type="button" className="btn btn-light" onClick={() => this.props.onGetFilter('promotion')}>На повышение</button>
                        <button type="button" onClick={() => this.props.onGetFilter('salary')} className="btn btn-light">ЗП больше 6000$</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBlock;