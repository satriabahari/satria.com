type SectionHeadingProps = {
  title: string;
  icon?: React.ReactNode;
  className?: string;
};

export default function SectionHeading({
  title,
  icon,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex items-center gap-1.5 text-xl font-medium text-neutral-800 dark:text-neutral-300 ${className}`}
    >
      {icon ? <i>{icon}</i> : null}
      <h2 className="capitalize">{title}</h2>
    </div>
  );
}
