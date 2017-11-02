<style>




.breadcrumb{
        width:66%;


}</style>



<template>
<div class=" table-responsive container">
  <h1 class="page-header">  </h1>
   <ol class="breadcrumb" >
  <li class="breadcrumb-item ">
 
  <router-link :to="{name: 'Client'}">Client</router-link></li>
  <li class="breadcrumb-item is-active">
 
  <router-link :to="{name: 'test'}">{{users.name}}</router-link></li>
  <router-link :to="{name: 'test'}">  </router-link></li>
</ol>
<div  style="
  display: flex"
>
 
 <table class="table table-hover table-bordered"
 
 style="width:55% ;     margin-right: 1%;
 " >
<thead>

<tr>
<th>Nom</th>
 <td>{{users.name}}</td>

</tr>

</thead>
   
  

<tbody>

 
<tr>
<th>entreprise </th>

  <td>  {{users.company}}  </td>


</tr>
<tr>
<th>Tel 1</th>

  <td>  {{users.tel1}}  </td>


</tr>
<tr>
<th>Tel2</th>

  <td>  {{users.tel2}}  </td>


</tr>
<tr>
<th>Email</th>

  <td>  {{users.email}}  </td>


</tr>
<tr>
<th>Adresse </th>

  <td>  {{users.adresse}}  </td>


</tr>
<tr>
<th>Etat de clients </th>

  <td> 
  {{ Etat(users.ET_id) }}

 </td>


</tr>

</tbody>
</table>
 <img :src="'http://localhost/ApiDevinStock/public/img/'+users.image" style="width:10% ; height:5%  "/> 

</div>
  </div>
</template>

<script>

 

 export default {

 
 data() {
    return{
    users: [],
      etat: [],
    


    }
    
  
},
 

   

mounted (){
 var itemId= this.$route.params.id

   this.$http.get('http://localhost/ApiDevinStock/public/v2/clients/'+itemId  ).then(response => {
   this.users = response.data
   }, (response) => {
   console.log('erreur', response)
   })


},
methods: {
  Etat: function (IdEt) {

  this.$http.get('http://localhost/ApiDevinStock/public/v2/Etclient/'+IdEt ).then(response => {
   this.etat = response.data.client_status;
  
   }, (response) => {
   console.log('erreur', response)
   })
     
return this.etat
    }
}
 
}

</script>