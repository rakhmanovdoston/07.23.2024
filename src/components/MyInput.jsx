const MyInput = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter a color or text"
      />
    </div>
  );
};

export default MyInput;
