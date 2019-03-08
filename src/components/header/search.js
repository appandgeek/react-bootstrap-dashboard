import React from 'react';

const search = () => {

    return (
        <div className="u-header-search">
            <div className="u-header-search-form">
                <form>
                    <div className="input-group">
                        <button className="btn-link input-group-prepend u-header-search__btn" type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                        <input className="form-control u-header-search__field" type="search" placeholder="Type to search…" />
                    </div>
                </form>
            </div>
        </div>
    );
}


export default search;