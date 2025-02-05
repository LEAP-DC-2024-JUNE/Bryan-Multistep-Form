type Props = {
  field: string;
  name: string;
  placeholder: string;
  errorMessage: string;
  value: string;
  handleChange: (field: string, newValue: string) => void;
  error: boolean;
};
export const Input = ({
  field,
  name,
  placeholder,
  errorMessage,
  value,
  handleChange,
  error,
}: Props) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={name.toLowerCase()} className="text-sm font-semibold">
        {name} <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name={name.toLowerCase()}
        id={name.toLowerCase()}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(field, e.target.value)}
        className={`w-full rounded-lg p-3 py-2 ${
          error ? "text-red-500 border-red-500" : "border-gray-300"
        } border-2 focus:border-[#0CA5E9] focus:outline-none`}
      />
      {error && <p className="text-red-500 text-xs">{errorMessage}</p>}
    </div>
  );
};
