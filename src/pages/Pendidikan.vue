<template>
    <Header title="Education" :updatedAt="updatedAt" />
    <div class="p-3">
        <dl class="mt-1 grid grid-cols-1 gap-3">
            <div v-for="item in educations" :key="item.id" class="relative bg-white py-5 px-4 sm:py-6 sm:px-6 shadow rounded-lg overflow-hidden border border-gray-400">
                <dt>
                    <div class="absolute bg-indigo-500 rounded-md p-3">
                        <component :is="item.icon" class="h-11 w-11 text-white" aria-hidden="true" />
                    </div>
                    <p class="ml-20 font-medium text-gray-900 truncate">{{ item.sekolah }}</p>
                </dt>
                <dd class="ml-20 items-baseline">
                    <p class="font-semibold text-gray-500">
                        {{ item.gelar+', '+item.jurusan+', '+item.nilai }}
                    </p>
                    <p class="text-sm font-semibold text-gray-400">
                        {{ item.mulai+' - '+item.selesai }}
                    </p>
                </dd>
            </div>
        </dl>
    </div>
</template>

<script>
import { AcademicCapIcon } from '@heroicons/vue/outline'
import Header from '../components/Header.vue'

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
    components: { Header },

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
