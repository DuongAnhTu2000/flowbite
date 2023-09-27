'use client';
import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { deleteProducts } from '@/redux/productSlice';
import { useAppDispatch } from '@/redux/hook';
interface ModalProps {
  showModalDelete: boolean;
  setShowModalDelete: (show: boolean) => void;
  data: Product | null;
  setData: (value: Product | null) => void;
}

export default function DeleteModal(prop: ModalProps): JSX.Element {
  const dispatch = useAppDispatch();

  const { showModalDelete, setShowModalDelete, data, setData } = prop;

  const handleSubmit = (): void => {};

  const handleCloseModal = (): void => {
    setShowModalDelete(false);
  };

  return (
    <>
      <Modal show={showModalDelete} onClose={() => handleCloseModal()}>
        <Modal.Header>
          <span>
            <h3 className='text-xl font-medium text-gray-900 dark:text-white'>Delete Product</h3>
          </span>
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
