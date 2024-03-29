import React from "react";

export interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <h3>{title}</h3>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <section>{children}</section>}
    </div>
  );
};
