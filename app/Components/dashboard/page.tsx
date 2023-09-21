'use client';
import { Button, Dropdown, Label, Pagination, Select, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import CreateModal from '../modal/page';

export default function Dashboard() {
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>('');
  const [sortProduct, setSortProduct] = useState<string>('default');
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(`${process.env.API_KEY}`);
      const data = await res.json();
      setData(data.products);
    };
    getProducts();
  }, []);

  useEffect(() => {
    let newProduct = [...data];
    if (searchValue !== '') {
      newProduct = newProduct.filter((item: any) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (sortProduct !== '') {
      switch (sortProduct) {
        case 'default':
          newProduct = newProduct.sort((a, b) => {
            return a.id > b.id ? 1 : -1;
          });
          break;
        case 'ascending':
          newProduct = newProduct.sort((a, b) => {
            return a.price - b.price;
          });
          break;
        case 'descending':
          newProduct = newProduct.sort((a, b) => {
            return b.price - a.price;
          });
          break;
      }
    }
    setData(newProduct);
  }, [searchValue, sortProduct]);

  return (
    <div>
      <section className='bg-gray-100  p-3 sm:p-5'>
        <div className='mx-auto max-w-screen-xl px-4 lg:px-12 container border-black border-solid rounded-xl '>
          <br /> <br />
          <div className='bg-white relative shadow-md sm:rounded-lg overflow-hidden'>
            <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4'>
              <div className='w-full md:w-1/2'>
                <div className='flex items-center w-1/2'>
                  <label htmlFor='simple-search' className='sr-only'>
                    Search
                  </label>
                  <div className='relative w-full'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                      <svg
                        aria-hidden='true'
                        className='w-5 h-5 text-gray-500 dark:text-gray-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <input
                      type='text'
                      id='simple-search'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 block w-full pl-10 p-2  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500'
                      placeholder='Search...'
                      onChange={e => setSearchValue(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className='w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0'>
                <div className='flex items-center justify-between gap-4'>
                  <div>
                    <Button onClick={() => setShowModalCreate(true)}>Add Product</Button>
                    <CreateModal
                      showModalCreate={showModalCreate}
                      setShowModalCreate={setShowModalCreate}
                      data={data}
                    />
                  </div>
                  <div className='max-w-md flex items-center justify-between gap-4' id='select'>
                    <Select
                      value={sortProduct}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setSortProduct(e.target.value)
                      }
                    >
                      <option value='default'>Default</option>
                      <option value='ascending'>Sort by price: Low to High</option>
                      <option value='descending'>Sort by price: High to Low</option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            <div className='overflow-x-auto'>
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>Product name</Table.HeadCell>
                  <Table.HeadCell>Category</Table.HeadCell>
                  <Table.HeadCell>Description</Table.HeadCell>
                  <Table.HeadCell>Price</Table.HeadCell>
                  <Table.HeadCell>
                    <span className='sr-only'>Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                {data.map((product: any) => (
                  <Table.Body className='divide-y' key={product.id}>
                    <Table.Row className='bg-white'>
                      <Table.Cell className='whitespace-nowrap font-medium text-gray-900'>
                        {product.title}
                      </Table.Cell>
                      <Table.Cell>{product.category}</Table.Cell>
                      <Table.Cell>{product.description}</Table.Cell>
                      <Table.Cell>${product.price}</Table.Cell>
                      <Table.Cell>
                        <Dropdown inline label=''>
                          <Dropdown.Item onClick={() => setShowModalCreate(true)}>
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item>View</Dropdown.Item>
                          <Dropdown.Item>Delete</Dropdown.Item>
                        </Dropdown>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                ))}
              </Table>
            </div>
            <nav
              className='flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4'
              aria-label='Table navigation'
            >
              <span className='text-sm font-normal text-gray-500 dark:text-gray-400 flex gap-1'>
                Showing
                <span className='font-semibold text-gray-900 dark:text-white'>1-10</span>
                of
                <span className='font-semibold text-gray-900 dark:text-white'>30</span>
              </span>
              <Pagination
                currentPage={1}
                onPageChange={page => {
                  setCurrentPage(page);
                }}
                totalPages={10}
              />
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
