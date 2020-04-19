import Modal, {Styles} from 'react-modal';
import React from 'react';
import LaceUpModalImage from './laceup-modal-image/laceup-modal-image';
import LaceUpModalMetrics from './laceup-modal-metrics/laceup-modal-metrics';
import LaceUpModalDescription from './laceup-modal-description/laceup-modal-description';
import {Race} from '../../../interfaces'

Modal.setAppElement('html');

interface LaceUpModalProps {
  toggleModal: Function,
  modalOpen: boolean,
  customStyle: Styles,
  race: Race
}

const LaceUpModal = (props: LaceUpModalProps) => {
  return (
    <Modal
      isOpen={props.modalOpen}
      closeTimeoutMS={200}
      onRequestClose={() => props.toggleModal()}
      style={props.customStyle}
      contentLabel="Race Info Modal"
    >
      <div className="laceup__row">
        <div className="laceup__modal__container">
          <div className="laceup__row">
            <LaceUpModalImage race={props.race} />
            <LaceUpModalMetrics race={props.race} />
          </div>
          <div className="laceup__row">
            <LaceUpModalDescription />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LaceUpModal;
