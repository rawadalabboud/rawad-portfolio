import { useEffect } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { BlogPost } from "../data/blog";
import { Tag } from "./ui/Tag";
import { scrollToTop } from "../lib/scroll";

type BlogArticleProps = {
  post: BlogPost;
  children: ReactNode;
};

export function BlogArticle({ post, children }: BlogArticleProps) {
  useEffect(() => {
    scrollToTop("auto");
  }, [post.id]);

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-bg-base">
      <header className="border-b border-white/5 px-4 py-6 pt-28 sm:px-6">
        <div className="section-container">
          <Link
            to="/#blogs"
            className="inline-flex items-center gap-2 text-sm text-text-muted transition hover:text-accent-cyan"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>
        </div>
      </header>

      <div className="section-container py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <h1 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-text-muted">{post.description}</p>

          <p className="mt-6 font-mono text-sm text-text-muted">
            {formattedDate} · {post.readTime} read
          </p>

          <div className="prose-blog mt-10">{children}</div>
        </div>
      </div>
    </article>
  );
}
