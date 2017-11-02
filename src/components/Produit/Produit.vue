
<style>

.btn-success{
  
      border-radius: 5px;
 
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
         <router-link to="/AjoutProduit">
<button type="button" class="btn btn-primary">Add Produit</button>
</router-link>
  <ol class="breadcrumb">
  <li class="breadcrumb-item ">
 
  <router-link :to="{name: 'Produit'}">Produit</router-link></li>
</ol>

  <table class="table table-hover table-bordered"
 
 style="width:66% ;  " >
<thead>
<tr>
<th>name</th>
<th>description</th>
<th>famille</th>
 
<th>update</th>
<th>delete</th>
</tr>

</thead>
   
  

<tbody>
 
<tr v-for="user in users"  >
 <td><router-link :to="{name:'ProduitId',params:{id:  user.id  }}">{{user.name}}</router-link></td>
  <td>     
{{user.description}} </td>

  <td v-for="client in clients" v-if="client.id==user.fam_id">     
{{ client.name}}    </td><td>
  
<router-link :to="{name: 'updateP',params:{id:  user.id  }}">
 

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
    this.$http.get('http://localhost/ApiDevinStock/public/v2/produits').then(response => {
   this.users = response.data
   }, (response) => {
   console.log('erreur', response)
   }),
      this.$http.get('http://localhost/ApiDevinStock/public/v2/famille').then(response => {
   this.clients = response.data
   }, (response) => {
   console.log('erreur', response)
   }) 


},

methods:{
destroy(user){
  

   this.$http.delete('http://localhost/ApiDevinStock/public/v2/produits/'+user.id    ).then(response => {
   this.users = this.users.filter(u=>u !==user)
   }, (response) => {
   console.log('erreur', response)
   })



},
   
 
}
   
}


 

</script> 

