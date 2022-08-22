import { useState } from 'react';

import CButton from '@/components/form/CButton';
import CAlert from '@/components/ui/CAlert';
import CConfirm from '@/components/ui/CConfirm';
import CModal from '@/components/ui/CModal';

import {
  SampleContent,
  SampleSummary,
  SampleDetails,
  SampleWrapper,
} from '@/styled/Sample';

const SampleModal = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SampleWrapper>
      <SampleDetails>
        <SampleSummary>Alert</SampleSummary>

        <SampleContent>
          <div>
            <CButton
              type="button"
              _click={() => {
                setIsAlertOpen(true);
              }}
            >
              Alert
            </CButton>

            {isAlertOpen && (
              <CAlert
                content="Alert Test"
                _click={(flag: boolean) => {
                  setIsAlertOpen(flag);
                }}
              />
            )}
          </div>
        </SampleContent>
      </SampleDetails>

      <SampleDetails>
        <SampleSummary>Confirm</SampleSummary>

        <SampleContent>
          <div>
            <CButton
              type="button"
              _click={() => {
                setIsConfirmOpen(true);
              }}
            >
              Confirm
            </CButton>

            {isConfirmOpen && (
              <CConfirm
                content="Confirm Test"
                _click={(flag: boolean) => {
                  if (!flag) {
                    setIsConfirmOpen(flag);
                  } else {
                    setIsAlertOpen(true);
                  }
                }}
              />
            )}
          </div>
        </SampleContent>
      </SampleDetails>

      <SampleDetails>
        <SampleSummary>Modal</SampleSummary>

        <SampleContent>
          <div>
            <CButton
              type="button"
              _click={() => {
                setIsModalOpen(true);
              }}
            >
              LayerPopup
            </CButton>

            {isModalOpen && (
              <CModal _click={(flag: boolean) => setIsModalOpen(flag)}>
                <>
                  모달 팝업 테스트
                  <button
                    type="button"
                    onClick={() => {
                      setIsAlertOpen(true);
                      // setIsModalOpen(false);
                    }}
                  >
                    모달 닫기
                  </button>
                </>
              </CModal>
            )}
          </div>
        </SampleContent>
      </SampleDetails>
    </SampleWrapper>
  );
};

export default SampleModal;
