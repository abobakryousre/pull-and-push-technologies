<template>
    <div class="container">
        <div class="rwo">
            <form class="col-md-8 text-center" @submit.prevent="sendMessages()">
                <input v-model="message" class="form-control" type="text" placeholder="Enter Your Message">      
            </form>
        </div>
         <div class="row">
             <div class="col-md-8">
                 <ul class="list-group" v-for="message in messages" :key="message">
                     <li class="list-group-itme" >{{message.message}}</li>
                 </ul>
             </div>
        </div>

        <div>
            <input id="test" type="text" v-model="messages">
        </div>
    </div>
</template>

<script>
import services from '../services/messages';
export default {
    created(){
        this.getMessage();
    },
    data() {
        return {
            messages: [],
            message: '',
            
        }
    },
    methods: {
       async sendMessages(){
           const res = await services.postMessages(this.message)
            this.message = "";
        },
    },

}
</script>