<template>
    <!-- Page title & actions -->    
    <Header title="Skill" :updatedAt="updatedAt" />
    <div class="p-3">
        <ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <li v-for="skill in skills" :key="skill.id" class="col-span-1 flex shadow-sm rounded-md">
                <div :class="[skill.bgColor, 'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md']">
                    {{ skill.code }}
                </div>
                <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                    <div class="flex-1 px-4 py-2 text-sm truncate">
                        <a href="#" class="text-gray-900 font-medium hover:text-gray-600">{{ skill.name }}</a>
                        <p class="text-gray-500">{{ skill.kemampuan }}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
const skills = [
    {
        id: 1,
        code: 'JS',
        name: 'JavaScript',
        kemampuan : 'Menengah',
        bgColor: 'bg-pink-600'
    },
    {
        id: 2,
        code: 'AD',
        name: 'Android Development',
        kemampuan : 'Menengah',
        bgColor: 'bg-pink-600'
    },
    {
        id: 3,
        code: 'Vue.js',
        name: 'Vue.js',
        kemampuan : 'Menengah',
        bgColor: 'bg-pink-600'
    },
    {
        id: 4,
        code: 'K',
        name: 'Kotlin',
        kemampuan : 'Menengah',
        bgColor: 'bg-pink-600'
    },
    {
        id: 5,
        code: 'PHP',
        name: 'Laravel',
        kemampuan : 'Mahir',
        bgColor: 'bg-purple-600'
    },
    {
        id: 6,
        code: 'PHP ',
        name: 'PHP ',
        kemampuan : 'Mahir',
        bgColor: 'bg-purple-600'
    },
    {
        id: 7,
        code: 'Java',
        name: 'Java ',
        kemampuan : 'Mahir',
        bgColor: 'bg-purple-600'
    },
    {
        id: 8,
        code: 'SQL',
        name: 'MySQL',
        kemampuan : 'Mahir',
        bgColor: 'bg-purple-600'
    }
]
export default {
    
    components: { Header },

    setup() {
        return {
            skills,
        }
    },
    data(){   
        return {
            updatedAt : "26 April 2021"
        }
    }
}
</script>
