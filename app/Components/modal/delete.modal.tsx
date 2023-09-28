'use client';
import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { deleteProducts } from '@/redux/productSlice';
import { useAppDispatch } from '@/redux/hook';
interface ModalProps {
  showModalDelete: boolean;
  setShowModalDelete: (show: boolean) => void;
  data: IProduct | null;
  setData: (value: IProduct | null) => void;
}

export default function DeleteModal(prop: ModalProps): JSX.Element {
  const dispatch = useAppDispatch();

  const { showModalDelete, setShowModalDelete, data, setData } = prop;

  const handleDeleteProduct = (): void => {
    dispatch(deleteProducts(data?.id as number));
  };

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
              <Button className='w-full' onClick={() => handleDeleteProduct()}>
                Delete Product
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
