"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Technology', href: '/technology', current: false },
//   { name: 'Gadget', href: '/gadget', current: false },
//   { name: 'Software', href: '/software', current: false },
//   { name: 'Games', href: '/games', current: false },
//   { name: 'Podcast', href: '/podcast', current: false },
// ]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const pathname = usePathname();
  const [navigation, setNavigation] = useState({
    nav: [
      { name: "Technology", href: "/technology", current: false },
      { name: "Gadget", href: "/gadget", current: false },
      { name: "Software", href: "/software", current: false },
      { name: "Apps", href: "/application", current: false },
      { name: "Games", href: "/games", current: false },
      { name: "Podcast", href: "/podcast", current: false },
    ],
  });

  useEffect(() => {
    let newState = { ...navigation, nav: [...navigation.nav] };
    const matchHref = newState.nav.findIndex((item) => item.href === pathname);
    if (matchHref != -1) {
      newState.nav[matchHref] = {
        ...newState.nav[matchHref],
        current: !newState.nav[matchHref].current,
      };
    }
    setNavigation(newState);
  }, [pathname]);
  
  const navigationHandler = () => {
    //  let updatedNav = navigation.nav.map((item,index)=>{
    //     if(item.href === pathname){
    //       return({...item, current:!item.current})
    //     } return item
    //   })
    //   setNavigation({nav:updatedNav})
  };

  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-red-500">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link
                  href="/"
                  className="flex flex-shrink-0 items-center h-full"
                >
                  <Image
                    className="h-8 w-auto"
                    src="/slider/blog_icon.png"
                    alt="Your Company"
                    width={700}
                    height={500}
                  />
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.nav.map((item: any, index: number) => (
                      <a
                        onClick={() => navigationHandler()}
                        key={index}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-fuchsia-900 text-white font-semibold"
                            : "text-white font-semibold hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <span className="bg-emerald-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Account
                      </span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/dashboard"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/authentication/register"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Register
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/authentication/login"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Login
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <Toaster />
            <ToastContainer />
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.nav.map((item: any, index: number) => (
                <Disclosure.Button
                  key={index}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
