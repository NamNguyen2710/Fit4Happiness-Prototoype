import { useState } from 'react';
import SlidedownBody from './SlidedownBody';
import SlidedownButton from './SlidedownButtion';

function Slidedown(props) {
  const { header, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <SlidedownButton
        isOpen={isOpen}
        onClick={() => setIsOpen(val => !val)}
      >
        <h3>{header}</h3>
      </SlidedownButton>
      <SlidedownBody>
        {children}
      </SlidedownBody>
    </div>
  );
}

export default Slidedown;