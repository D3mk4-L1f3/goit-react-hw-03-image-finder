import PropTypes from 'prop-types';
import { Component } from 'react';
import ReactModal from 'react-modal';
import { customStyles } from '../component-style/modal.styled';

import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

ReactModal.setAppElement('#root');

export class Modal extends Component {
  render() {
    const { isModalOpen, onCloseModal, largeImageURL, tags } = this.props;
    return (
      <>
        <ReactModal
          style={customStyles}
          isOpen={isModalOpen}
          onRequestClose={onCloseModal}
          onAfterOpen={disableBodyScroll}
          onAfterClose={clearAllBodyScrollLocks}
        >
          <img src={largeImageURL} alt={tags} width="800px" />
        </ReactModal>
      </>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
