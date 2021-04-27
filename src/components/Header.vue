<template>
  <div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
    <div class="flex-1 min-w-0">
        <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            {{ title }}
        </h1>
        </div>
        <div class="mt-4 flex sm:mt-0 sm:ml-4">
        <button type="button" class="order-1 ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-0 sm:ml-0">
            Last Update, {{ updatedAt }}
        </button>
        <Menu as="div" class="order-0 relative inline-block text-left sm:order-1 sm:ml-3">
            <div>
                <MenuButton class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    Contact
                    <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </MenuButton>
            </div>

            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                    <div class="py-1">
                        <MenuItem>
                            <a href="mailto: aldo.reshap@gmail.com" class="group flex items-center px-4 py-2 text-sm">
                                <InboxInIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                aldo.reshap@gmail.com
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="https://api.whatsapp.com/send?text=Hello&phone=+6282267486262"  class="group flex items-center px-4 py-2 text-sm" target="blank">
                                <PhoneIncomingIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                +62 822 6748 6262
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="https://goo.gl/maps/aFemoRCVgPz6YdBY6" target="blank"  class="group flex items-center px-4 py-2 text-sm">
                                <LocationMarkerIcon class="mr-3 h-14 w-14 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                Jln Rambun Bulan No.17 Berok Lapai, Nanggalo, Padang Sumatera Barat
                            </a>
                        </MenuItem>
                    </div>
                </MenuItems>
            </transition>
        </Menu>
    </div>
</div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import {
  ChevronDownIcon,
  InboxInIcon,
  AtSymbolIcon,
  PhoneIncomingIcon,
  LocationMarkerIcon,
} from '@heroicons/vue/solid'
export default {
    components: {
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        ChevronDownIcon,
        InboxInIcon,
        AtSymbolIcon,
        PhoneIncomingIcon,
        LocationMarkerIcon
    },
    props : [ 'title', 'updatedAt' ]
}
</script>

<style>

</style>