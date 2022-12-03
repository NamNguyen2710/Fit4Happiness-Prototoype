import ChevronUp from 'resource/chevron-up-solid.svg';

function SlidedownButton(props) {
  const { isOpen, onClick, children } = props;

  return (
    <div className="slidedownBtn" onClick={onClick}>
      {children}
      <img className={isOpen && 'reverse'} src={ChevronUp} alt="arrowUp" />
    </div>
  );
}

export default SlidedownButton;