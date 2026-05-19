type TagProps = {
  children: string;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text-muted">
      {children}
    </span>
  );
}
