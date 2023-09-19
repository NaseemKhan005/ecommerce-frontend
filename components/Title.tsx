interface titleProps {
  title: string;
  desc?: string;
}

const Title = ({ title, desc }: titleProps) => {
  return (
    <div className="max-w-lg mx-auto text-center">
      <h2 className="text-4xl font-semibold mb-7 relative w-fit  before:absolute before:-bottom-3 before:left-1/2 before:-translate-x-1/2 mx-auto before:w-1/2 before:h-[6px] before:bg-orange before:rounded-full">
        {title}
      </h2>
      <p className="text-light-black/70 dark:text-white/50 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

export default Title;
