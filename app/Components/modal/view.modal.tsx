'use client';
import React, { useState } from 'react';
import { Button, Label, Modal, TextInput, Textarea } from 'flowbite-react';
// import { getProductsId } from '@/redux/productSlice';
import { useParams } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { RootState } from '@/redux/store';

interface ModalProps {
  showModalView: boolean;
  setShowModalView: (value: boolean) => void;
  data: IProduct | null;
  setData: (value: IProduct | null) => void;
}

export default function ViewModal(prop: ModalProps): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { product, isFetchProductID } = useAppSelector((state: RootState) => state.product);
  
  const [form, setForm] = useState<{
    productName: string;
    category: string;
    brand: string;
    stock: string;
    description: string;
    price: string;
  }>({
    productName: '',
    category: '',
    brand: '',
    stock: '',
    description: '',
    price: '',
  });
  const { showModalView, setShowModalView, setData, data } = prop;

  const handleSubmit = (): void => {
    setTimeout(() => {
      setShowModalView(false);
      console.log(
        'check data form',
        form.productName,
        form.category,
        form.brand,
        form.stock,
        form.description,
        form.price
      );
    }, 1000);
  };

  const handleCloseModal = (): void => {
    setForm({
      productName: '',
      category: '',
      brand: '',
      stock: '',
      description: '',
      price: '',
    });
    setShowModalView(false);
  };


  return (
    <>
      <Modal show={showModalView} onClose={() => handleCloseModal()}>
        <Modal.Header>
          <span>
          <h3 className='text-xl font-medium text-gray-900 dark:text-white'>View Product</h3>
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className='w-full'>
            <br />
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='product-name' value='Product Name' />
              </div>
              <TextInput
                id='product-name'
                placeholder='Product Name'
                required
                name='title'
                value={form.productName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, productName: e.target.value })
                }
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
                name='category'
                value={form.category}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, category: e.target.value })
                }
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
                name='brand'
                value={form.brand}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, brand: e.target.value })
                }
              />
            </div>
            <div>
              <br />
              <div className='mb-2 block'>
                <Label htmlFor='description' value='Description' />
              </div>
              <br />
              <Textarea
                id='description'
                placeholder='Apple iphone'
                required
                name='description'
                value={form.description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setForm({ ...form, description: e.target.value })
                }
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
                type='number'
                placeholder='$999'
                required
                name='price'
                value={form.price}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, price: e.target.value })
                }
              />
            </div>
            <br />
            <div>
              <Button className='w-full' onClick={() => handleSubmit()}>
                Create Product
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
