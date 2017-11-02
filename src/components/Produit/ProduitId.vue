<style>




.breadcrumb{
        width:66%;


}</style>



<template>
<div class=" table-responsive container">
  <h1 class="page-header">  </h1>
   <ol class="breadcrumb" >
  <li class="breadcrumb-item ">
 
  <router-link :to="{name: 'Produit'}">Produit</router-link></li>
  <li class="breadcrumb-item is-active">
 
  <router-link :to="{name: 'ProduitId'}">{{users.name}}</router-link></li>
  
</ol>
<div  style="
  display: flex"
>
 
 <table class="table table-hover table-bordered"
 
 style="width:66% ;     margin-right: 1%;
 " >
 <tbody>
<tr>
<th>Nom</th>
 <td>{{users.name}}</td>

</tr>

    
  

 
 
<tr>
<th>Description </th>

  <td>  {{users.description}} </td>


</tr>
 <tr>
<th> coût de produit </th>

  <td>  {{users.cout_produit}} MAD </td>


</tr>

 <tr>
<th>qte_min </th>

  <td>  {{users.qte_min}} </td>


</tr>
 
<tr>
<th>Famille</th>

  <td v-for="fam in etat" v-if="fam.id==users.fam_id">     
{{fam.name}}    </td>
 


</tr>

</tbody>
</table>
  
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

   this.$http.get('http://localhost/ApiDevinStock/public/v2/produits/'+itemId  ).then(response => {
   this.users = response.data
   }, (response) => {
   console.log('erreur', response)
   }),
   this.$http.get('http://localhost/ApiDevinStock/public/v2/famille' ).then(response => {
   this.etat = response.data;
  
   }, (response) => {
   console.log('erreur', response)
   })
     
 

},
methods: {
  famille: function (IdEt) {

  this.$http.get('http://localhost/ApiDevinStock/public/v2/famille/'+IdEt ).then(response => {
   this.etat = response.data.name;
  
   }, (response) => {
   console.log('erreur', response)
   })
     
return this.etat
    }
}
 
}

</script>