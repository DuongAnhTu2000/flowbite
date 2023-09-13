import React from 'react';
export default function Header() {
  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 lg:container'>
        <a href='https://flowbite.com/' className='flex items-center'>
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='h-8 mr-3'
            alt='Flowbite Logo'
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Flowbite
          </span>
        </a>
        <div className='flex items-center md:order-2'>
          <button
            type='button'
            className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
            id='user-menu-button'
            aria-expanded='false'
            data-dropdown-toggle='user-dropdown'
            data-dropdown-placement='bottom'
          >
            <span className='sr-only'>Open user menu</span>
            <img
              className='w-10 h-10 rounded-full'
              src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
              alt='Rounded avatar'
            />
          </button>
          <div
            className='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600'
            id='user-dropdown'
          >
            <div className='px-4 py-3'>
              <span className='block text-sm text-gray-900 dark:text-white'>Bonnie Green</span>
              <span className='block text-sm  text-gray-500 truncate dark:text-gray-400'>
                name@flowbite.com
              </span>
            </div>
            <ul className='py-2' aria-labelledby='user-menu-button'>
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle='navbar-user'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-user'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
