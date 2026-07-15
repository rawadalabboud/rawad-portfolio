import { Navigate, useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ProjectDetailArticle } from "../components/ProjectDetailArticle";
import { getProject } from "../data/projects";

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProject(id) : undefined;

  if (!project?.links.details) {
    return <Navigate to="/#projects" replace />;
  }

  return (
    <div className="min-h-screen bg-bg-base">
      <Navbar />
      <ProjectDetailArticle project={project} />
      <Footer />
    </div>
  );
}
