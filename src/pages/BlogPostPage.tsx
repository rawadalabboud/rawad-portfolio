import { Navigate, useParams } from "react-router-dom";
import { BlogArticle } from "../components/BlogArticle";
import { getBlogPost } from "../data/blog";
import { blogContent } from "../content/blog";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;
  const Content = slug ? blogContent[slug] : undefined;

  if (!post || !Content || post.status !== "read") {
    return <Navigate to={{ pathname: "/", hash: "writing" }} replace />;
  }

  return (
    <BlogArticle post={post}>
      <Content />
    </BlogArticle>
  );
}
