<template>
    <!-- Page title & actions -->
    <div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div class="flex-1 min-w-0">
            <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
                Education
            </h1>
            </div>
            <div class="mt-4 flex sm:mt-0 sm:ml-4">
            <button type="button" class="order-1 ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-0 sm:ml-0">
                Last Update, {{ updatedAt }}
            </button>
            <button type="button" class="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3">
                Email
            </button>
        </div>
    </div>
    <div class="p-3">
        <dl class="mt-1 grid grid-cols-1 gap-3">
            <div v-for="item in educations" :key="item.id" class="relative bg-white py-5 px-4 sm:py-6 sm:px-6 shadow rounded-lg overflow-hidden border border-gray-300">
                <dt>
                    <div class="absolute bg-indigo-500 rounded-md p-3">
                        <component :is="item.icon" class="h-11 w-11 text-white" aria-hidden="true" />
                    </div>
                    <p class="ml-20 text-sm font-medium text-gray-900 truncate">{{ item.sekolah }}</p>
                </dt>
                <dd class="ml-20 items-baseline">
                    <p class="font-semibold text-gray-500">
                        {{ item.gelar+', '+item.jurusan+', '+item.nilai }}
                    </p>
                    <p class="font-semibold text-gray-400">
                        {{ item.mulai+' - '+item.selesai }}
                    </p>
                </dd>
            </div>
        </dl>
    </div>
</template>

<script>
import { AcademicCapIcon } from '@heroicons/vue/outline'

const educations = [
    { 
        id: 1, 
        sekolah: 'Universitas Andalas', 
        gelar: "Bachelor's degree", 
        jurusan: 'Information Systems', 
        nilai: 3.65, mulai: "Juli 2016", 
        selesai: "Februari 2021", 
        icon: AcademicCapIcon 
    },
]

export default {
    setup() {
        return {
            educations
        }
    },
    data(){   
        return {
            updatedAt : "22 April 2021"
        }
    },

}
</script>
