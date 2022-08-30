
function Input({ labelText, value, onChange, type  }) {
  return (
    <div>
        <h1>{labelText}</h1>
      <input
        type={type}
        
        onChange={onChange}
        value={value}
        id="inputFor"
        className="form-input w-full border-2 rounded"
      />
      
    </div>
  );
}

export default Input;