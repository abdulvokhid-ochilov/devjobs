const Button = ({ text, type, onClick }) => {
  return (
    <button
      aria-label="button"
      onClick={onClick}
      type={type}
      className={`h-[48px] px-[32px] rounded font-semibold bg-violet-dark text-white hover:bg-violet-light`}
    >
      {text}
    </button>
  );
};

export default Button;
