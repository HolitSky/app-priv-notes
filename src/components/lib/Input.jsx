const Input = ({ onChange, placeHolder, type, value, className }) => {
  return (
    <div>
      <input onChange={onChange} type={type} value={value} className={className} placeholder={placeHolder} />
    </div>
  );
};

export default Input;
