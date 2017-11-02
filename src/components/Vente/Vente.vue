
<style>

.btn-success{
  
      border-radius: 5px;
      width:80%;

}
.btn-primary{
  
      float: right;
            border-radius: 5px;

          margin-right: 20%;


}
.breadcrumb{
        width:66%;


}

  </style>

<template>
<div class=" table-responsive container">
  <h1 class="page-header"> </h1>
         <router-link to="/AjoutVente">
<button type="button" class="btn btn-primary">Add Client</button>
</router-link>
  <ol class="breadcrumb">
  <li class="breadcrumb-item ">
 
  <router-link :to="{name: 'Vente'}">Vente</router-link></li>
</ol>

  <table class="table table-hover table-bordered"
 
 style="width:66% ;  " >
<thead>
<tr>
<th>vuid</th>
<th>total</th>
<th>Client</th>
<th>Commercial</th>
<th>update</th>
<th>delete</th>
</tr>

</thead>
   
  

<tbody>
 
<tr v-for="user in users"  >
 <td><router-link :to="{name:'VenteId',params:{id:  user.id  }}">{{user.vuid}}</router-link></td>
  <td>     
{{user.total}}  MAD </td>
  <td v-for="client in clients" v-if="client.id==user.id_client">     
{{ client.name}}    </td>
  <td v-for="com in commercial" v-if="com.id==user.id_commercial">     
{{com.name}}    </td>
<td> 
<router-link :to="{name: 'updateV',params:{id:  user.id  }}">
 

  <button type="button" class="btn btn-success" >

  Update
</button> 


</router-link> 
 </td>
<td>
<a class="btn btn-danger" @click='destroy(user)'  aria-label="Delete">
  <i class="fa fa-trash-o" aria-hidden="true"></i>

</a>
   

  </td>
 

</tr>
</tbody>
</table>

  </div>

 
</template>

<script>

 

 export default {

 
 data() {
    return{
    users: [],
    clients:[],
    commercial:[]



    }
  
},
 

   

mounted (){
    this.$http.get('http://localhost/ApiDevinStock/public/v2/vente').then(response => {
   this.users = response.data
   }, (response) => {
   console.log('erreur', response)
   }),
      this.$http.get('http://localhost/ApiDevinStock/public/v2/clients').then(response => {
   this.clients = response.data
   }, (response) => {
   console.log('erreur', response)
   }),
      this.$http.get('http://localhost/ApiDevinStock/public/v2/Commercial').then(response => {
   this.commercial = response.data
   }, (response) => {
   console.log('erreur', response)
   })


},

methods:{
destroy(user){
  

   this.$http.delete('http://localhost/ApiDevinStock/public/v2/vente/'+user.id    ).then(response => {
   this.users = this.users.filter(u=>u !==user)
   }, (response) => {
   console.log('erreur', response)
   })



},
   
 
}
   
}


 

</script> 

