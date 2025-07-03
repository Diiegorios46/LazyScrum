const Section = ({ title, children }) => (
  <div className="mb-10">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="space-y-4">{children}</div>
  </div>
);


export default Section;