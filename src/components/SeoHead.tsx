import { useEffect } from "react";
import { profile } from "../data/profile";

type SeoHeadProps = {
  title?: string;
  description?: string;
  path?: string;
};

function setMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function setJsonLd(data: Record<string, unknown>) {
  const id = "portfolio-jsonld";
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function SeoHead({ title, description, path = "" }: SeoHeadProps) {
  useEffect(() => {
    const pageTitle = title
      ? `${title} | ${profile.name}`
      : `${profile.name} · AI Engineer · ML Engineer · GenAI Engineer`;
    const pageDescription =
      description ??
      "AI Engineer building production voice agents, RAG assistants, ML scoring, and agentic apps. 4,400+ AI-qualified calls, 150k+ insured clients, 57 offers automated.";
    const url = `${profile.siteUrl}${path}`.replace(/\/?$/, "/");
    const image = `${profile.siteUrl}profile.png`;

    document.title = pageTitle;

    setMeta("description", pageDescription);
    setMeta("author", profile.name);
    setMeta("og:type", "website", true);
    setMeta("og:title", pageTitle, true);
    setMeta("og:description", pageDescription, true);
    setMeta("og:url", url, true);
    setMeta("og:image", image, true);
    setMeta("og:site_name", profile.name, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", pageTitle);
    setMeta("twitter:description", pageDescription);
    setMeta("twitter:image", image);
    setLink("canonical", url);

    setJsonLd({
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.name,
      jobTitle: "AI Engineer",
      url: profile.siteUrl,
      image,
      email: profile.contactEmail,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressCountry: "FR",
      },
      sameAs: [profile.links.github, profile.links.linkedin],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Generative AI",
        "Retrieval-Augmented Generation",
        "Voice AI",
        "Large Language Models",
      ],
    });
  }, [title, description, path]);

  return null;
}
