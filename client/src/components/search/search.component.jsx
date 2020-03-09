import React, { useState, memo } from "react";

import { SearchInputContainer } from "./search.styles";

const Search = ({ submitHandler }) => {
  const [seachQuery, setSeachQuery] = useState('');

  return (
    <SearchInputContainer
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler && submitHandler(seachQuery);
        }}
      >
        <div className="input-field col s6">
          <input
            type="text"
            className="validate"
            value={seachQuery}
            onChange={e => { setSeachQuery(e.target.value)}}
          />
          <label className="active">Search query</label>
        </div>

        <button className="btn waves-effect waves-light" type="submit">Submit</button>
      </SearchInputContainer>
  )
}

export default memo(Search);