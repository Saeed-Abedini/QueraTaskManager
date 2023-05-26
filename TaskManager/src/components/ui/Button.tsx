type ButtonProps = {
  value: string;
  className? : string
} & React.ComponentProps<"button">;

const Button = ({ value,className, ...rest  }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`w-full h-10 p-2.5 text-sm font-bold leading-4 flex justify-center items-center text-white rounded-md bg-208D8E focus:outline-none focus:ring-1 focus:ring-208D8E transition-colors duration-300 hover:bg-transparent border border-208D8E hover:text-208D8E ${className}`}
    >
      {value}
    </button>
  );
};

export default Button;
