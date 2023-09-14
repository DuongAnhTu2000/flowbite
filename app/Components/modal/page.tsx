'use client';
import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from 'flowbite-react';

interface ModalProps {
  showModalCreate: boolean;
  setShowModalCreate: (show: boolean) => void;
}

export default function CreateModal(prop: ModalProps): JSX.Element {
  const [form, setForm] = useState<{
    productName: string;
    category: string;
    brand: string;
    description: string;
    price: string;
  }>({
    productName: '',
    category: '',
    brand: '',
    description: '',
    price: '',
  });
  const { showModalCreate, setShowModalCreate } = prop;

  const handleSubmit = (): void => {
    console.log(
      'check data form',
      form.productName,
      form.category,
      form.brand,
      form.description,
      form.price
    );
  };

  const handleCloseModal = (): void => {
    setForm({
      productName: '',
      category: '',
      brand: '',
      description: '',
      price: '',
    });
    setShowModalCreate(false);
  };
  return (
    <>
      <Modal
        show={showModalCreate}
        // size='xl'
        onClose={() => handleCloseModal()}
      >
        <Modal.Header />
        <Modal.Body>
          <div className='w-full'>
            <h3 className='text-xl font-medium text-gray-900 dark:text-white'>Create Product</h3>
            <br />
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='product-name' value='Product Name' />
              </div>
              <TextInput
                id='product-name'
                placeholder='Product Name'
                required
                value={form.productName}
                onChange={e => setForm({ ...form, productName: e.target.value })}
              />
            </div>
            <br />
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='category' value='Category' />
              </div>
              <br />
              <TextInput
                id='category'
                type='text'
                placeholder='Cellphone'
                required
                value={form.category}
                onChange={e => setForm({ ...form, category: e.target.value })}
              />
            </div>
            <br />
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='brand' value='Brand' />
              </div>
              <br />
              <TextInput
                id='brand'
                type='text'
                placeholder='Apple'
                required
                value={form.brand}
                onChange={e => setForm({ ...form, brand: e.target.value })}
              />
            </div>
            <div>
              <br />
              <div className='mb-2 block'>
                <Label htmlFor='description' value='Description' />
              </div>
              <br />
              <TextInput
                id='description'
                type='text'
                placeholder='Apple iphone'
                required
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
              />
            </div>
            <div>
              <br />
              <div className='mb-2 block'>
                <Label htmlFor='price' value='Price' />
              </div>
              <br />
              <TextInput
                id='price'
                type='text'
                placeholder='999$'
                required
                value={form.price}
                onChange={e => setForm({ ...form, price: e.target.value })}
              />
            </div>
            <br />
            <div>
              <Button className='w-full' onClick={() => handleSubmit()}>
                Create User
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
