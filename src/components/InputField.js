export default function InputField({
  type, className, placeholder, onChange
}) {
  return (
    <>
      <div className="input__field">
        <label>
          <input
            type={type}
            className={className}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
          />
        </label>
      </div>
    </>
  );
}