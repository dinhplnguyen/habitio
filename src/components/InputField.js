export default function InputField({
  type, label, className, placeholder, onChange, required
}) {
  return (
    <>
      <div className="input__field">
        <label className={label}>
          <input
            type={type}
            className={className}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
            required={required}
          />
        </label>
      </div>
    </>
  );
}