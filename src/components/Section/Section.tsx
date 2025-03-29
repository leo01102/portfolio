/* src/components/Section/Section.tsx */

import React from "react";
import "./Section.scss";
import { Section as SectionProps } from "@/lib/translations/types";
import { useTechnologyHighlight } from "@/lib/contexts/TechnologyHighlightContext";
import Contact from "@/components/Contact/Contact";

type SectionLayoutProps = SectionProps & {
  sectionKey: string;
  layout?: "vertical" | "horizontal";
};

function Section({
  sectionKey,
  title,
  articles,
  layout = "horizontal",
}: SectionLayoutProps) {
  const { selectedItems, toggleSelectedItem } = useTechnologyHighlight();

  // Special styling for ARSTATS title
  const renderTitle = (title: string) => {
    if (title === "ARSTATS") {
      return (
        <span className="logo-title">
          <span className="logo-title__first">AR</span>
          <span className="logo-title__last">STATS</span>
        </span>
      );
    }
    return title;
  };

  // Render bullet points with improved accessibility
  const renderContent = (content: string) => {
    // Check if content contains bullet-style markers
    const hasBulletPoints = /^[-•]/m.test(content);

    // If no bullet points, return as plain text
    if (!hasBulletPoints) {
      return <div className="article__content">{content}</div>;
    }

    // If bullet points exist, render as list
    return (
      <ul className="article__content article__bullet-list">
        {content.split("\n").map((line, index) => {
          // Remove the original '-' or '•' if present
          const cleanedLine = line.replace(/^[-•]\s*/, "").trim();

          return (
            <li
              key={index}
              className="article__bullet"
              aria-label={`Project detail ${index + 1}`}
            >
              <span className="article__bullet-marker" aria-hidden="true">
                •
              </span>
              <span className="article__bullet-text">{cleanedLine}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  // Handle item click
  const handleItemClick = (item: string, e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSelectedItem(item);
  };

  // Determine if this is a special section (About or Contact)
  const isSpecialSection = title === "About" || title === "Contact";

  // If this is the contact section, render the Contact component
  if (sectionKey === "contact") {
    return <Contact />;
  }

  return (
    <section
      id={sectionKey}
      className={`section ${layout === "vertical" ? "section-vertical" : ""}`}
    >
      <h2
        className={`section__title ${
          isSpecialSection ? "section__title--special" : ""
        }`}
      >
        {renderTitle(title)}
      </h2>
      <ul
        className={`section__list ${
          layout === "vertical" ? "section__list-vertical" : ""
        }`}
      >
        {articles.map((article, index) => (
          <li key={index} className="section__item">
            <article
              className={`article ${
                isSpecialSection ? "article--special" : ""
              }`}
            >
              {/* header */}
              <header className="article__header">
                {article.title && (
                  <h3 className="article__title">
                    {article.title === "ARSTATS"
                      ? renderTitle(article.title)
                      : article.title}
                  </h3>
                )}
                {article.subtitle && (
                  <p className="article__subtitle">{article.subtitle}</p>
                )}
              </header>

              {/* content */}
              {article.content && renderContent(article.content)}

              {/* Rest of the component remains the same */}
              {/* footer */}
              {article.footer && (
                <div className="article__footer">
                  {/* tags */}
                  {article.footer.tags && article.footer.tags.length > 0 && (
                    <div className="article__footer-tags">
                      {article.footer.tags.map((tag, itemIndex) => (
                        <span
                          key={itemIndex}
                          className={`article__footer-item article__footer-tag ${
                            selectedItems.includes(tag)
                              ? "article__footer-item--selected"
                              : ""
                          } ${
                            selectedItems.length > 0 &&
                            !selectedItems.includes(tag)
                              ? "article__footer-item--dimmed"
                              : ""
                          }`}
                          data-item-name={tag}
                          onClick={(e) => handleItemClick(tag, e)}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* technologies */}
                  {article.footer.technologies &&
                    article.footer.technologies.length > 0 && (
                      <div className="article__footer-technologies">
                        {article.footer.technologies.map((tech, itemIndex) => (
                          <span
                            key={itemIndex}
                            className={`article__footer-item article__footer-tech ${
                              selectedItems.includes(tech)
                                ? "article__footer-item--selected"
                                : ""
                            } ${
                              selectedItems.length > 0 &&
                              !selectedItems.includes(tech)
                                ? "article__footer-item--dimmed"
                                : ""
                            }`}
                            data-item-name={tech}
                            onClick={(e) => handleItemClick(tech, e)}
                          >
                            <span className="article__footer-tech-icon">
                              <img
                                src={`/icons/${tech}.svg`}
                                alt={`${tech} icon`}
                                className="tech-icon"
                                width="16"
                                height="16"
                              />
                            </span>
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                </div>
              )}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Section;
