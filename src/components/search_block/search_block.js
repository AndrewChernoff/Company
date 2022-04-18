import '../search_block/search_block.css';

const SearchBlock = () => {
    return (
        <div className='search_block'>
            <input className='form-control' placeholder='Найти сотрудника' />
            <div className='search_block__btns'>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-light">Left</button>
                    <button type="button" className="btn btn-light">Middle</button>
                    <button type="button" className="btn btn-light">Right</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBlock;