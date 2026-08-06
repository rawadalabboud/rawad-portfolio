import { Navigate, useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ProjectDetailArticle } from "../components/ProjectDetailArticle";
import { SeoHead } from "../components/SeoHead";
import { getProject } from "../data/projects";
import { projectIdAliases } from "../data/projectCaseStudies";

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProject(id) : undefined;

  if (id && projectIdAliases[id] && project) {
    return (
      <Navigate to={`/project/${projectIdAliases[id]}`} replace />
    );
  }

  if (!project?.links.details) {
    return <Navigate to="/#projects" replace />;
  }

  return (
    <div className="min-h-screen bg-bg-base">
      <SeoHead
        title={project.title}
        description={project.description}
        path={`project/${project.id}`}
      />
      <Navbar />
      <ProjectDetailArticle project={project} />
      <Footer />
    </div>
  );
}
