interface FormFieldProps {
  label: string;
  type: string;
  id: string;
  ariaDescribedby?: string;
  helpText?: string;
}

export const FormField = ({
  label,
  type,
  id,
  ariaDescribedby,
  helpText,
}: FormFieldProps) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        aria-describedby={ariaDescribedby}
      />
      {helpText && (
        <div id={ariaDescribedby} className="form-text">
          {helpText}
        </div>
      )}
    </div>
  );
};
