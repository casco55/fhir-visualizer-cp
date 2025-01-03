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
      <div class="accordion-item">
        <h2 class="accordion-header" id={itemId}>
          <button
            class={`accordion-button ${accordionButtonCollapse}`}
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
          class={`accordion-collapse collapse ${showContain}`}
          aria-labelledby={itemId}
          data-bs-parent={`#${parentId}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};
