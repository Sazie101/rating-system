import { useState } from 'react';
import Dialog from './components/Dialog';
import StarRating from './components/StarRating';

function App() {
  const [showStars, setShowStars] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  const setTheDisplay = () => {
    setShowDialog(true);
    setShowStars(false);
  }

  const closeTheDisplay = () => {
    setShowDialog(false);
    setShowStars(true);
  }

  return (
    <main>
      <div className="container">
        <StarRating display={showStars ? 'block' : 'none'} />
        <Dialog onClick={closeTheDisplay} display={showDialog ? 'block' : 'none'} />
        <button className='dialogBtn' onClick={setTheDisplay}>
            Open Dialog Box
        </button>
      </div>
    </main>
  );
}

export default App;
