import React from "react";

const AppendCategory = ({ inputRef, handleInput, handleSubmit, category }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="field">
          <input
            ref={inputRef}
            className="input"
            type="text"
            value={category}
            placeholder="Category"
            onChange={handleInput}
          />
        </div>
      </form>
    </div>
  );
};

export default AppendCategory;
