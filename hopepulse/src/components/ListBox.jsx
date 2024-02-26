import React from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import classNames from '../../utils';

const ListBox = ({ selected, setSelected, options, labeltext }) => {
  return (
    <div className="relative mx-auto" style={{ maxWidth: '350px' }}>
      <label htmlFor="category" className="absolute top-0 left-4 text-md font-medium text-grayish mr-16 self-center">{ labeltext }</label>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <div className="relative ml-40 mt-5">
            <Listbox.Button className="w-44 rounded-md bg-white py-1.5 pl-3 pr-10 text-center text-grayish shadow-sm ring-1 ring-inset ring-grayish focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3">{selected.name}</span>
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              as={React.Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="mt-1 w-44 rounded-md max-h-60 bg-fafafa py-1 shadow-lg ring-1 ring-grayish ring-opacity-5 focus:outline-none sm:text-sm overflow-y-auto">
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
                          className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 truncate')}
                        >
                          {option.name}
                        </span>
                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-fafafa' : 'text-primary',
                              'inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 ml-2 w-5" aria-hidden="true" />
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
