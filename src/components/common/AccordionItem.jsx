export const AccordionItem = ({
  itemId,
  parentId,
  title,
  ariaExpanded = "false",
  showContain = "",
  accordionButtonCollapse = "collapsed",
  children,
}) => {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header" id={itemId}>
          <button
            className={`accordion-button ${accordionButtonCollapse}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${itemId}Collapse`}
            aria-expanded={ariaExpanded}
            aria-controls={`${itemId}Collapse`}
          >
            {title}
          </button>
        </h2>
        <div
          id={`${itemId}Collapse`}
          className={`accordion-collapse collapse ${showContain}`}
          aria-labelledby={itemId}
          data-bs-parent={`#${parentId}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};
