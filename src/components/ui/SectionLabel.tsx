type SectionLabelProps = {
  label: string;
};

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <p className="font-mono text-sm text-accent-cyan tracking-wide">
      {label}
    </p>
  );
}
