'use client'

import { Popover, Transition } from '@headlessui/react'
import FiChevronDown from '@notion-x/src/icons/FiChevronDown'
import Link from 'next/link'
import { Fragment, useRef } from 'react'

import { MENUS } from '../../../data/menus'
import { menuItemCommonClass } from './NavTopicItem'

const dropdownItemClass = 'flex items-center p-3 whitespace-nowrap'

export default function NavTopicsDropdown() {
  const btnRef = useRef<HTMLButtonElement>(null)
  const onClickOpt = (open: boolean) => {
    if (!open) return
    if (open) btnRef.current?.click()
  }
  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              ref={btnRef}
              className={`
        ${open ? '!bg-slate-700 text-white' : 'text-opacity-90'}
        group ${menuItemCommonClass + ' flex lg:hidden !outline-none pr-1.5'}`}
            >
              <span>Menu</span>
              <FiChevronDown
                className={`${open ? '' : 'text-opacity-70'}
              ml-1 h-6 w-6 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className={`absolute left-0 z-10 mt-4 w-fit
              shadow-xl sm:px-0 lg:max-w-3xl`}
              >
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <div
                    className={`relative grid divide-y divide-slate-600
                  bg-nav-dark-bg px-3 py-1 lg:grid-cols-2`}
                  >
                    {MENUS.map(item => (
                      <Link
                        onClick={() => onClickOpt(open)}
                        key={item.uri}
                        href={item.uri}
                        className={dropdownItemClass}
                      >
                        <div className="flex gap-2">
                          {item.icon}
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  )
}
