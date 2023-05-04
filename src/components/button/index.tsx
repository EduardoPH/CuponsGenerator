import './button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <button className='bg-primary text-secundary rounded p-[0.6rem] text-lg cursor-pointer w-full border-none relative' {...props}>
      {props.children}
    </button>
  )
}