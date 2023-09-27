'use client';
import React, { useState,MouseEventHandler } from 'react';
import { Button, Label, Modal, TextInput, Textarea } from 'flowbite-react';
import { addProducts } from '@/redux/productSlice';
import { useAppDispatch } from '@/redux/hook';
interface ModalProps {
  showModalCreate: boolean;
  setShowModalCreate: (show: boolean) => void;
}

export default function CreateModal(prop: ModalProps) {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<IFormData>({
    name: '',
    category: '',
    brand: '',
    description: '',
    price: '',
  });

  const { showModalCreate, setShowModalCreate } = prop;

  const handleAddProduct = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    let addUser = {
      ...form,
    };
    await dispatch(addProducts(addUser as IProduct));
    setShowModalCreate(false);
    setForm({
      name: '',
      category: '',
      brand: '',
      description: '',
      price: '',
    });
  };

  const handleCloseModal = (): void => {
    setForm({
      name: '',
      category: '',
      brand: '',
      description: '',
      price: '',
    });
    setShowModalCreate(false);
  };

  return (
    <>
      <Modal show={showModalCreate} onClose={() => handleCloseModal()}>
        <Modal.Header>
          <span>
          <h3 className='text-xl font-medium text-gray-900 dark:text-white'>Create Product</h3>
          </span>
        </Modal.Header>
        <Modal.Body>
          <form>
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setForm({ ...form, name: e.target.value })
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
                <Button
                  className='w-full'
                  onClick={(e) => handleAddProduct(e)}
                >
                  Create Product
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
