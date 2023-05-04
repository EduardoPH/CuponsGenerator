interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label: string;
  additional?: string;
  disabled?: boolean;
}

export default function InputText(props: InputTextProps) {
  return (
    <div className="flex relative flex-col w-full focus-within:shadow-sm shadow-primary">
      <label
       className="absolute py-0 px-2 font-bold top-[-0.6rem] left-4 text-base bg-secundary z-10"
       htmlFor={props.label}> {props.label}</label>
      <div className="flex border-2 border-solid border-[#cccccc62] rounded items-center">
        <input
        {...props}
        id={props.label}
        type="text"
        className={`withAdditional py-4 px-6 text-xl bg-secundary outline-none border-none w-full `}
        />
        {props.additional && <span 
          className="inline-block align-middle box-border py-4 px-6 font-bold border-2 border-solid border-[#cccccc13] text-[#ffffff62] bg-[#cccccc1a]"
          >
            {props.additional}
          </span>}
      </div>
    </div>
  )
}