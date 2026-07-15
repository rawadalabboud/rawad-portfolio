import { Navigate, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BlogArticle } from "../components/BlogArticle";
import { getBlogPost } from "../data/blog";
import { blogContent } from "../content/blog";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;
  const Content = slug ? blogContent[slug] : undefined;

  if (!post || !Content || post.status !== "read") {
    return <Navigate to="/#blogs" replace />;
  }

  return (
    <div className="min-h-screen bg-bg-base">
      <Navbar />
      <BlogArticle post={post}>
        <Content />
      </BlogArticle>
      <Footer />
    </div>
  );
}
