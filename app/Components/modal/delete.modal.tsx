'use client';
import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';

interface ModalProps {
  showModalDelete: boolean;
  setShowModalDelete: (show: boolean) => void;
  data: any[];
}

export default function DeleteModal(prop: ModalProps): JSX.Element {

  const { showModalDelete, setShowModalDelete, data } = prop;

  const handleSubmit = (): void => {
  
  };

  const handleCloseModal = (): void => {
    setShowModalDelete(false);
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };
  return (
    <>
      <Modal show={showModalDelete} onClose={() => handleCloseModal()}>
        <Modal.Header>
        <h3 className='text-xl font-medium text-gray-900 dark:text-white'>Delete Product</h3>
        </Modal.Header>
        <Modal.Body>
          <div className='w-full'>
            <br />
            <div>
              <Button className='w-full' onClick={() => handleSubmit()}>
                Delete Product
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
