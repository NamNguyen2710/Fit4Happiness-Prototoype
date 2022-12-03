function SlidedownBody({ isOpen, children }) {
  return (
    <div className={`slidedownBody ${isOpen ? 'expanded' : ''}`}>
      {children}
    </div>
  );
}

export default SlidedownBody;