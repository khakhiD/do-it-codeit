type ButtonProps = {
  text: string;
  type?: 'slate' | 'violet' | 'red' | 'lime';
  size?: 'small' | 'large';
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isWhite?: boolean;
};

const Button = ({
  text,
  type = 'slate',
  icon: Icon,
  size = 'large',
}: ButtonProps) => {
  const baseClass = `relative flex justify-center items-center px-4 py-2 rounded-3xl gap-x-1`;
  const fontClass = 'font-NanumSquare font-bold text-base';
  const borderClass = 'border-2 border-slate-900';
  const beforeClass = `before:content-[''] before:w-full before:h-full before:absolute before:top-[3.5px] before:left-[4px] before:bg-slate-900 before:border-2 before:border-slate-900 before:rounded-3xl before:-z-10`;
  const colorClass = {
    slate: 'bg-slate-200 text-slate-900 stroke-slate-900',
    violet: 'bg-violet-600 text-white stroke-white',
    lime: 'bg-lime-300 text-slate-900 stroke-slate-900',
    red: 'bg-rose-500 text-white stroke-white',
  };

  return (
    <button
      className={`${colorClass[type]} ${baseClass} ${borderClass} ${beforeClass}`}>
      <Icon className={'stroke-2'} />
      <p className={`${fontClass} ${size === 'small' ? 'hidden' : 'block'}`}>
        {text}
      </p>
    </button>
  );
};

export default Button;
