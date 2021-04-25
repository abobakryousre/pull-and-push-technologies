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
                     <li class="list-group-itme" >{{message}}</li>
                 </ul>
             </div>
        </div>
    </div>
</template>

<script>
const BSE_URL = 'http://localhost:3000';
const socket = io(BSE_URL)
export default {
    mouonted(){
        socket.on('new-message', (message)=>{
            this.messages.push(message);
        })
    },
    data() {
        return {
            messages: [],
            message: '',
            
        }
    },
    methods: {
       async sendMessages(){
           socket.emit("message", this.message)
            this.message = "";
        },
    },

}
</script>