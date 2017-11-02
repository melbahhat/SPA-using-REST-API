<style>


.input-group {

      width:100%;

}
.input-group-addon {
      width:15%;

}
 

  </style>

<template>


<div class=" table-responsive container">
  <h1 class="page-header"> </h1>
  <ol class="breadcrumb" >
  <li class="breadcrumb-item ">
 
  <router-link :to="{name: 'Produit'}">Produit</router-link></li>
  <li class="breadcrumb-item is-active">
 
  <router-link :to="{name: 'updateP'}">update</router-link></li>

</ol>

  <table class="table table-hover "
 
 style="width:65% ;  " >
 <tr> 
   <div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >Name</i> </span>
  <input class="form-control" type="text"  v-model="users.name" >
</div>
 </tr>

 <br>
 
<tr>
  
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"><i class="fa">description</i> </span>
  <input class="form-control" type="text"  v-model="users.description" >
</div><br>
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"><i class="fa">coût de  produit</i> </span>
  <input class="form-control" type="text"  v-model="users.cout_produit" >
</div><br>
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"><i class="fa">Qte min</i> </span>
  <input class="form-control" type="text"  v-model="users.qte_min" >
</div><br>
 <div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >Famille </i> </span>
  <select class="form-control  chosen-select"  id="sel1 " v-model="users.fam" >


         <option   v-for="fa in famille"  v-bind:value="fa.id" > {{fa.name}} </option>
       </select> 

</div>
</tr>
<tr>  </tr>
 </table>
<button type="button" class="btn btn-success"    @click="save(users)" >  update
</button> 

 
  </div>
</template>

<script>
 export default {

 
 data() {
    return{
    users: [],
famille:[],
fam:"",
name:"",
description:"",
cout_produit:"",
qte_min:""

   


    }
    
  
},
 
mounted (){
 var itemId= this.$route.params.id

   this.$http.get('http://localhost/ApiDevinStock/public/v2/produits/'+itemId  ).then(response => {
   this.users = response.data
   }, (response) => {
   console.log('erreur', response)
   }),
    this.$http.get('http://localhost/ApiDevinStock/public/v2/famille').then(response => {
   this.famille = response.data
   }, (response) => {
   console.log('erreur', response)
   })


},
methods: {

save(users){
  var itemId= this.$route.params.id

   this.$http.put('http://localhost/ApiDevinStock/public/v2/produits/'+itemId,{name:users.name,description:users.description,fam_id:users.fam,cout_produit:users.cout_produit,qte_min:users.qte_min}     ).then(response => {
   this.users = response.data
   }, (response) => {
   console.log('erreur', response)
   })
   this.$router.push('/Produit')
}

}
   




}
</script>