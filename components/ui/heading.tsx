interface HeadingProps {
  title: string;
  description: string;
  ActionButton?: any;
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  ActionButton,
}) => {
  return (
    <>
      <div className="flex items-center justify-between space-y-2 mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {ActionButton}
      </div>
    </>
  );
};
