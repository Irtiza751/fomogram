interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Textarea({ label, ...props }: TextareaProps) {
  return (
    <div>
      <label
        className="block text-sm font-medium leading-6 text-gray-900 mb-1"
        htmlFor={label}
      >
        {label}
      </label>
      <textarea
        id={label}
        {...props}
        className="block outline-none w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
}
