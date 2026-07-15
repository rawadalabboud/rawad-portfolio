type SectionLabelProps = {
  label: string;
};

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="relative flex h-px w-10 items-center" aria-hidden="true">
        <span className="absolute inset-0 bg-gradient-to-r from-accent-cyan/60 to-transparent" />
        <span className="absolute -right-0.5 h-1 w-1 rotate-45 bg-accent-cyan" />
      </span>
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent-cyan">
        {label}
      </p>
    </div>
  );
}
