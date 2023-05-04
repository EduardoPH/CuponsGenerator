interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function IconButton({ children, ...props }: ButtonProps) {
  return (
    <button type='button' {...props} className="flex items-center justify-center max-w-[63px] min-w-[63px] bg-primary rounded h-[63px] outline-none ">
      {children}
    </button>
  )
}