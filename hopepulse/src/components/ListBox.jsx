import React from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import classNames from '../../utils'; // Import the classNames utility function

const ListBox = ({ selected, setSelected, options }) => {
  return (
    <div className="flex items-center mx-auto" style={{ maxWidth: '350px' }}>
      <label htmlFor="category" className="text-md font-medium text-grayish mr-2 self-center">Select a Category</label>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <div className="relative mt-2">
            <Listbox.Button className="w-48 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-center text-grayish shadow-sm ring-1 ring-inset ring-grayish focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3">{selected.name}</span>
              </span>
              <span className="absolute ml-3 flex items-center justify-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              as={React.Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="mt-1 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-secondary text-fafafa' : 'text-grayish',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <div className="flex items-center">
                        <span
                          className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                        >
                          {option.name}
                        </span>
                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-fafafa' : 'text-primary',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
};

export default ListBox;
