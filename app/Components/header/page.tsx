'use client';
import { Avatar, Dropdown } from 'flowbite-react';
import React from 'react';

export default function Header() {
  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900 relative'>
      <div className='max-w-screen-xl flex flex-wrap Dropdown.items-center justify-between mx-auto p-4 mb-4 '>
        <a href='https://flowbite.com/' className='flex Dropdown.items-center'>
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='h-8 mr-3'
            alt='Flowbite Logo'
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Flowbite
          </span>
        </a>
        <div className='flex flex-wrap gap-2'>
          <Dropdown
            inline
            label={
              <Avatar
                alt='User settings'
                img='https://flowbite.com/docs/images/people/profile-picture-4.jpg'
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>Bonnie Green</span>
              <span className='block truncate text-sm font-medium'>name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}
