<style>
.panel{

width:40%;
	

  

 }
.app{

display: flex;
	 

}
 


</style>

<template>
  <div id="app">
  <div class="app">
 <div class="panel panel-default" style=" background-color: rgba(158, 203, 255, 0.7);margin-right: 1%; ">
  <div class="panel-heading" style=" background-color: rgba(158, 203, 255, 0.7); " > Clients ajoutés/mois</div>

    <table>
  
 <tr v-for="user in users ">

<td v-if="DateT(user.created_at)==true"  >  
   <div class="panel-body">
           <router-link :to="{name:'test',params:{id:  user.id  }}"  >{{user.name}}</router-link>   {{ user.created_at }}     </div>

     </td>
 



  </tr>

   </table>
   </div>
    
   <div class="panel panel-default" style="background-color: rgba(0, 208, 105, 0.4);">
  <div class="panel-heading" style="background-color: rgba(0, 208, 105, 0.4);"> Ventes effectuées/mois</div>

    <table>
  <tr v-for="(element,index)  in list"    >
 
<td v-if="DateT(element.created_at)==true"  >  
   <div class="panel-body">
        {{ element.vuid}}  &nbsp &nbsp   {{element.created_at}}
   </div>

     </td>
 



  </tr>

   </table>
   </div>
 
 
</div>
    </div>
</template>

<script>
import moment from 'moment'
 
 

 export default {

 
 data() {
    return{
    users: [],
    list:[],
    
   


    }
  
},
 mounted (){
    this.$http.get('http://localhost/ApiDevinStock/public/v2/clients').then(response => {
   this.users = response.data
   }, (response) => {
   console.log('erreur', response)
   }),
      this.$http.get('http://localhost/ApiDevinStock/public/v2/vente').then(response => {
   this.list = response.data
   }, (response) => {
   console.log('erreur', response)
   })

},

 
methods:{
DateT(time){
var test=time;
 var time=moment(time).format("MM/YYYY")
	
var today = new Date();
 
var mm = today.getMonth()+1;  
var yyyy = today.getFullYear();
var t=mm+'/'+yyyy; 

 if(t==time){

 return   true;
 
 }
  else {
  return false
  }
  
 },
     
 
 

},
 
 

}



</script>

<style>

</style>
