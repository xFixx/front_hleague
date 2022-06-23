import React from 'react';
import cn from 'classnames';
import ModalBase from 'react-modal';

import cls from './modal.module.scss';

const customStyles = {
  overlay: {
    backgroundColor: 'rgb(48 46 58 / 78%)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#302E3A',
  },
};

export const Modal = ({
  children,
  isOpen,
  onRequestClose,
}) => {
  return (
    <ModalBase
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className={cls.b}>
        <button
          className={cls.b__close}
          onClick={onRequestClose}
        />
      {children}
      </div>
    </ModalBase>
  );
};
