/* src/components/Section/Section.tsx */

/* import React from "react"; */

interface Article {
  title?: string;
  subtitle?: string;
  content?: string;
  footer?: string;
}

interface SectionProps {
  title: string;
  articles: Article[];
}

export default function Section({ title, articles }: SectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <article>
              <header>
                {article.title && <h1>{article.title}</h1>}
                {article.subtitle && <h2>{article.subtitle}</h2>}
              </header>
              {article.content && <p>{article.content}</p>}
              {article.footer && <footer>{article.footer}</footer>}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
