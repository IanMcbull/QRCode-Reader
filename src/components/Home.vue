<template>
    <nav>
        <!--Logo-->
        <div class="mx-auto p-6">
         <img src="@/assets/logo.png" alt="logo image" class="w-24"/>
        </div>
    </nav>
    <section class="mt-4">
        <div class="mx-auto flex space-y-4 text-left md:text-center justify-start p-4 md:p-0 md:justify-center">
            <h2 class="text-3xl md:text-6xl xl:text-7xl font-bold tracking-widest">Generate Dynamic<a class="text-orange-500"><br>QR Codes </a>for any occasion.</h2>
        </div>
    </section>
    <main class="mt-8 md:mt-20">
      <!--Container-->
      <div class="mx-auto container p-4 md:p-0">
       <div class="flex flex-col md:flex-row space-y-6 md:space-x-12 md:space-y-0">
        <!-- <div class="w-full md:w-32">
            <p class="font-bold text-md md:text-xl">Target</p>
            <div class="mt-6 flex justify-between items-center flex-wrap">
                <div class="mt-2" @click="changeHeader">
                <router-link to="/" class="w-14 h-14 rounded-md flex justify-center items-center border focus:border-darkOrange focus:text-yellow-400">
                <i class="fa-solid fa-paperclip text-gray-400 text-xl"></i>
                </router-link>
                <p class="text-center text-sm">Website</p>
                </div>
                <div class="mt-2">
                <router-link to="/" class="w-14 h-14 rounded-md flex justify-center items-center border focus:border-darkOrange">
                <i class="fa-brands fa-youtube text-gray-400 text-xl focus:text-yellow-400"></i>
                </router-link>
                <p class="text-center text-sm">Youtube</p>
                </div>
                <div class="mt-2">
                <router-link to="/" class="w-14 h-14 rounded-md flex justify-center items-center border focus:border-darkOrange">
                <i class="fa-solid fa-at text-gray-400 text-xl focus:text-yellow-400"></i>
                </router-link>
                <p class="text-center text-sm">Email</p>
                </div>
                <div class="mt-2">
                <router-link to="/" class="w-14 h-14 rounded-md flex justify-center items-center border focus:border-darkOrange">
                <i class="fa-brands fa-instagram text-gray-400 text-xl focus:text-yellow-400"></i>
                </router-link>
                <p class="text-center text-sm">Instagram</p>
                </div>
                <div class="mt-2">
                <router-link to="/" class="w-14 h-14 rounded-md flex justify-center items-center border focus:border-darkOrange">
                <i class="fa-brands fa-pinterest text-gray-400 text-xl focus:text-yellow-400"></i>
                </router-link>
                <p class="text-center text-sm">Pinterest</p>
                </div>
                <div class="mt-2">
                <router-link to="/" class="w-14 h-14 rounded-md flex justify-center items-center border focus:border-darkOrange">
                <i class="fa-brands fa-twitter text-gray-400 text-xl focus:text-yellow-400"></i>
                </router-link>
                <p class="text-center text-sm">twitter</p>
                </div>
                <div class="mt-2">
                <router-link to="/" class="w-14 h-14 rounded-md flex justify-center items-center border focus:border-darkOrange">
                <i class="fa-brands fa-google text-gray-400 text-xl focus:text-yellow-400"></i>
                </router-link>
                <p class="text-center text-sm">Google</p>
                </div>
                <div class="mt-2">
                <router-link to="/" class="w-14 h-14 rounded-md flex justify-center items-center border focus:border-darkOrange">
                <i class="fa-brands fa-facebook text-gray-400 text-xl focus:text-yellow-400"></i>
                </router-link>
                <p class="text-center text-sm">Facebook</p>
                </div>
            </div>
        </div> -->
        <div class="w-full md:w-1/2 p-4">
            <p class="font-bold text-md md:text-xl">Enter your website URL</p>
            <div class="mt-8 flex flex-col">
                <form @submit.prevent="getCode">
                    <input type="url" class="border form-input border-darkOrange w-full text-xl md:text-2xl p-2 rounded-lg" placeholder="Enter your website URL" v-model="url"/>
                </form>
                <div class="mt-8 self-center" v-if="showSpinner">
                   <VueSpinnerPie size="300" color="#f46530"/>
                </div>
                <div class="mt-8 self-center" v-if="value">
                    <p class="font-bold mb-6 text-center">Live Preview</p>
                    <p class="text-center">Right click the image to download it.</p>
                     <qrcode-vue :value="value" :size="size" level="H" :foreground="foreground"/>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-between md:w-80 flex-col" v-if="value">
            <div class="p-2">
                <p class="font-bold text-md md:text-xl">Colors</p>
                <div class="mt-8 flex flex-wrap">
                <a id="#000000" class="border colors active:border-darkOrange rounded-md h-10 w-10 flex justify-center items-center rounded-md bg-black" @click="changeColor">
                </a>
                
                 <a id="#FF0000" class="border colors active:border-darkOrange rounded-md h-10 w-10 flex justify-center items-center rounded-md bg-red" @click="changeColor">
                </a>

                <a id="#A020F0" class="border colors active:border-darkOrange rounded-md h-10 w-10 flex justify-center items-center rounded-md bg-purple" @click="changeColor">
                </a>

                <a id="#4B0082" class="border colors active:border-darkOrange rounded-md h-10 w-10 flex justify-center items-center rounded-md bg-indigo" @click="changeColor">
                </a>

                <a id="#FFDB58" class="border colors active:border-darkOrange rounded-md h-10 w-10 flex justify-center items-center rounded-md bg-mustard" @click="changeColor">
                </a>

                <a id="#FFC0CB" class="border colors active:border-darkOrange rounded-md h-10 w-10 flex justify-center items-center rounded-md bg-pink" @click="changeColor">
                </a>

                <a id="#00FF00" class="border colors active:border-darkOrange rounded-md h-10 w-10 flex justify-center items-center rounded-md bg-green" @click="changeColor">
                </a>

                <a id="#964B00" class="border colors active:border-darkOrange rounded-md h-10 w-10 flex justify-center items-center rounded-md bg-brown" @click="changeColor">
                </a>

                <a id="#0000FF" class="border colors active:border-darkOrange rounded-md h-10 w-10 flex justify-center items-center rounded-md bg-blue" @click="changeColor">
                </a>

                <a id="#FFD700" class="border colors active:border-darkOrange rounded-md h-10 w-10 flex justify-center items-center rounded-md bg-yellowGold" @click="changeColor">
                </a>


                <a id="#87ceeb" class="border colors active:border-darkOrange rounded-md h-10 w-10 flex justify-center items-center rounded-md bg-skyBlue" @click="changeColor">
                </a>

                <a id="#A7226E" class="border colors active:border-darkOrange rounded-md h-10 w-10 flex justify-center items-center rounded-md bg-purpleUnique" @click="changeColor">
                </a>

               <a id="#F7DB4F" class="border colors active:border-darkOrange rounded-md h-10 w-10 flex justify-center items-center rounded-md bg-redUnique" @click="changeColor">
                </a>
                
                <a id="#F26B38" class="border colors active:border-darkOrange rounded-md h-10 w-10 flex justify-center items-center rounded-md bg-orangeUnique" @click="changeColor">
                </a>

                <a id="#EC2049" class="border colors active:border-darkOrange rounded-md h-10 w-10 flex justify-center items-center rounded-md bg-yellowUnique" @click="changeColor">
                </a>

                <a id="#2F9599" class="border colors active:border-darkOrange rounded-md h-10 w-10 flex justify-center items-center rounded-md bg-tealUnique" @click="changeColor">
                </a>

            </div>
            <p class="mt-4 text-lg">Custom color</p>
            <input type="color" class="h-10 w-10 rounded-md mt-2" v-model="customColor"/>
            </div>
        </div>  
       </div>
      </div>
    </main>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import QrcodeVue from 'qrcode.vue'
import {VueSpinnerPie} from 'vue3-spinners'
import { useToast } from 'vue-toastification'

export default defineComponent({
    name:'Home',
    // mounted(){
    // },
    setup(){
      const toast = useToast();
      return {toast}
    },
    data(){
      return{
        url:'',
        foreground:'#000000',
        value:'',
        size:300,
        showSpinner:false,
        customColor:''
      }
    },
    computed:{
    // background(){
    //     return this.defaultColor === ''? 'black': this.defaultColor
    // } 
    },
    watch:{
      customColor(){
        this.foreground = this.customColor
      }
    },
    components:{
        QrcodeVue,
        VueSpinnerPie
    },
    methods:{
        getCode(){
            this.value = '';
            this.showSpinner = true;
            setTimeout(()=>{
               this.showSpinner = false;
                this.value = this.url;
                this.toast.success("QR code generated",{
                    timeout:3000
                })
            },3000)
        },
        changeColor(e:any) {
           this.foreground=  e.target.id
        },
        changeHeader(e:any){
          
        }
    }
    
})

</script>

<style scoped>
.colors{
    cursor: pointer;
}
</style>