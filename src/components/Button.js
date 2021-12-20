const Button = ({ text, type, onClick, width, icon }) => {
  return (
    <button
      aria-label="button"
      onClick={onClick}
      type={type}
      className={`w-${width} h-[48px] sm:px-[16px] md:px-[32px] rounded font-semibold bg-violet-dark text-white hover:bg-violet-light `}
    >
      {text}
    </button>
  );
};

export default Button;
