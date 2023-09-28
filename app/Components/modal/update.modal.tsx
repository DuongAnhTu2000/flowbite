'use client';
import React, { useEffect, useState } from 'react';
import { Button, Label, Modal, TextInput, Textarea } from 'flowbite-react';
import { updateProducts } from '@/redux/productSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useParams } from 'next/navigation';
import { RootState } from '@/redux/store';

interface ModalProps {
  showModalUpdate: boolean;
  setShowModalUpdate: (value: boolean) => void;
  data: IProduct | null;
  setData: (value: IProduct | null) => void;
}

export default function UpdateModal(prop: ModalProps) {
  const { showModalUpdate, setShowModalUpdate, data, setData } = prop;
  const params = useParams();
  const dispatch = useAppDispatch();
  const { product, isFetching } = useAppSelector((state: RootState) => state.product);
  const [form, setForm] = useState<{
    id: number;
    name: string;
    category: string;
    brand: string;
    description: string;
    price: string;
  }>({
    id: 0,
    name: '',
    category: '',
    brand: '',
    description: '',
    price: '',
  });

  useEffect(() => {
    product.map((item: IProduct) => {
      if (item.id === params) {
        setForm({
          id: item.id,
          name: item.name,
          category: item.category,
          brand: item.brand,
          description: item.description,
          price: item.price,
        });
      }
    });
  }, [isFetching]);

  const handleUpdateProduct = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    let editUser = {
      ...form,
    };
    console.log(editUser);
    await dispatch(updateProducts(editUser as IProduct));
    setShowModalUpdate(false);
    // setForm({
    //   id: 0,
    //   name: '',
    //   category: '',
    //   brand: '',
    //   description: '',
    //   price: '',
    // });
  };

  const handleCloseModal = (): void => {
    setForm({
      id: 0,
      name: '',
      category: '',
      brand: '',
      description: '',
      price: '',
    });
    setShowModalUpdate(false);
    setData(null);
  };

  return (
    <>
      <Modal show={showModalUpdate} onClose={() => handleCloseModal()}>
        <Modal.Header>
          <span>
            <h3 className='text-xl font-medium text-gray-900 dark:text-white'>Update Product</h3>
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
                name='name'
                value={form.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setForm(form => {
                    return { ...form, name: e.target.value };
                  });
                }}
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setForm(form => {
                    return { ...form, category: e.target.value };
                  });
                }}
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setForm(form => {
                    return { ...form, brand: e.target.value };
                  });
                }}
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setForm(form => {
                    return { ...form, price: e.target.value };
                  });
                }}
              />
            </div>
            <br />
            <div>
              <Button
                className='w-full'
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                  handleUpdateProduct(e)
                }
              >
                Update Product
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
