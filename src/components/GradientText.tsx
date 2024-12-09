type Props = {
  text: string;
};

function GradientText({ text }: Props) {
  return (
    <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent ">
      {text}
    </span>
  );
}

export default GradientText;
