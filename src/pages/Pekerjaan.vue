<template>
    <!-- Page title & actions -->
    <Header title="Experience" :updatedAt="updatedAt" />
    <div class="flow-root px-12 py-6">
        <ul class="-mb-8">
            <li v-for="(experience, experienceIndex) in experiences" :key="experience.id">
                <div class="relative pb-8">
                    <span v-if="(experienceIndex !== experiences.length - 1)" class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                    <div class="relative flex items-start space-x-3">
                        <div class="relative">
                                <span :class="[experience.bgColor,'h-10 w-10 rounded-full flex items-center justify-center ring-8 ring-white']">
                                    <BriefcaseIcon class="h-5 w-5 text-white" aria-hidden="true" />
                                </span>
                            </div>
                            <div class="min-w-0 flex-1">
                                <div>
                                    <div class="text-sm">
                                        <a href="#" class="font-medium text-gray-900">{{ experience.jabatan + ' di '+experience.perusahaan }}</a>
                                    </div>
                                    <p class="mt-0.5 text-sm text-gray-500">{{ experience.mulai+' - '+ experience.selesai }}</p>
                                </div>
                                <div class="mt-1 text-sm text-gray-700">
                                    <p v-html="experience.deskripsi"></p>
                                </div>
                            </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { BriefcaseIcon } from '@heroicons/vue/outline'
import Header from '../components/Header.vue'

const experiences = [
    {
        id : 1,
        jabatan: 'Programmer',
        perusahaan : 'Universitas Andalas',
        mulai : 'Feb 2018',
        selesai : 'April 2021',
        bgColor : 'bg-purple-400',
        deskripsi : `
            membangun dan mengembangkan beberapa aplikasi yang dipakai di universitas andalas.
            berikut aplikasi yang pernah dibangun diuniversitas andalas : <br>
            <ol class="list-decimal ml-8">
                <li>Sistem Informasi Persensi</li>
                <li>Sistem Informasi Kepegawaian</li>
                <li>Sistem Informasi Inventori</li>
                <li>Dashboard Energi</li>
            </ol> 
            <br>

            berikut aplikasi yang dikembangkan di universitas andalas : <br>
            <ol class="list-decimal ml-8">
                <li>sistem informasi remun</li>
                <li>sistem informasi portal berbasis android.</li>
                <li>sistem informasi laboratorium</li>
            </ol> `
    },
    {
        id : 2,
        jabatan: 'Programmer',
        perusahaan : 'Dinas Kesehatan Kota Padang',
        mulai : 'Feb 2020',
        selesai : 'Okt 2020',
        bgColor : 'bg-purple-400',
        deskripsi : `Membangun sebuah Aplikasi untuk pendataan inventori yang berkaitan dengan covid19 berbasis web pada suatu cabang.`
    },
    {
        id : 3,
        jabatan: 'Asisten Laboratorium',
        perusahaan : 'Laboratorium Enterprise Application Universitas Andalas',
        mulai : 'Mar 2017',
        selesai : 'Nov 2019 ',
        bgColor : 'bg-purple-400',
        deskripsi : `Laboratorium Enterprise Application adalah sebuah laboratorium yang berada di jurusan sistem informasi, fakultas teknologi informasi, universitas andalas. pekerjaan dari asisten adalah membangun aplikasi, mengadakan pelatihan dan memberikan pembelajaran IT kepada mahasiswa ataupun masyarakat.`
    },
    {
        id : 4,
        jabatan: 'Asisten Pengajar',
        perusahaan : 'Digital Talent Scholarship',
        mulai : 'Agus 2019',
        selesai : 'Agus 2019 ',
        bgColor : 'bg-purple-400',
        deskripsi : `menyiapkan materi, dan membantu mengajarkan materi tentang machine learning.`
    },
    {
        id : 5,
        jabatan: 'Programmer (Magang)',
        perusahaan : 'Polisi Daerah Sumatera Barat',
        mulai : 'Jan 2019',
        selesai : 'Feb 2019 ',
        bgColor : 'bg-purple-400',
        deskripsi : `bekerja di bidang TI, dan membangun 2 aplikasi. berikut aplikasi yang di bangun : <br>
        <ol class="list-decimal ml-8">
            <li>Sistem Informasi Surat Pengaduan</li>
            <li>Sistem Informasi Inventori</li>
        </ol>`
    },
    {
        id : 6,
        jabatan: 'Programmer',
        perusahaan : 'Visio Incubator',
        mulai : 'Feb 2017',
        selesai : 'Feb 2018 ',
        bgColor : 'bg-purple-400',
        deskripsi : `bekerja di bidang TI, dan membangun 2 aplikasi. berikut aplikasi yang di bangun : <br>
        <ol class="list-decimal ml-8">
            <li>Sistem Informasi Surat Pengaduan</li>
            <li>Sistem Informasi Inventori</li>
        </ol>`
    }
]

export default {
    components: {
        BriefcaseIcon,
        Header,
    },
    setup() {
        return {
            experiences
        }
    },
    data(){   
        return {
            updatedAt : "27 April 2021"
        }
    }
}
</script>
