import { useState } from 'react';

import CAlert from '@/components/ui/CAlert';

const SampleModal = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  return (
    <div className="SampleModal">
      <div>
        <button
          type="button"
          onClick={() => {
            setIsAlertOpen(true);
          }}
        >
          Alert
        </button>

        <CAlert
          isOpen={isAlertOpen}
          handleClose={() => {
            console.log(123);
            setIsAlertOpen(false);
          }}
        />
      </div>

      <div>
        <button type="button">Confirm</button>
      </div>

      <div>
        <button type="button">LayerPopup</button>
      </div>
    </div>
  );
};

export default SampleModal;
