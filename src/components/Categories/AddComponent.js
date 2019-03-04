import React from 'react';

const AddComponent = ({inputRef, handleInput, handleSubmit, category}) => {
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

export default AddComponent;
