type TagProps = {
  children: string;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-text-muted transition hover:border-accent-cyan/20 hover:text-text-primary">
      {children}
    </span>
  );
}
