import { ProjectCoverArt } from "./ProjectCoverArt";

type ProjectCoverProps = {
  projectId: string;
  title: string;
};

export function ProjectCover({ projectId, title }: ProjectCoverProps) {
  return (
    <div className="relative h-40 shrink-0 overflow-hidden rounded-t-xl border-b border-white/5">
      <ProjectCoverArt projectId={projectId} />
      <span className="sr-only">{title}</span>
    </div>
  );
}
