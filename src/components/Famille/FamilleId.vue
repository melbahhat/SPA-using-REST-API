<style>




.breadcrumb{
        width:66%;


}</style>



<template>
<div class=" table-responsive container">
  <h1 class="page-header">  </h1>
   <ol class="breadcrumb" >
  <li class="breadcrumb-item ">
 
  <router-link :to="{name: 'Famille'}">Famille</router-link></li>
  <li class="breadcrumb-item is-active">
 
  <router-link :to="{name: 'FamilleId'}">{{users.name}}</router-link></li>
  
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
<th>Designation </th>

  <td>  {{users.Designation}} </td>


</tr>
 <tr>
<th> fuid </th>

  <td>  {{users.fuid}}  </td>


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

   this.$http.get('http://localhost/ApiDevinStock/public/v2/famille/'+itemId  ).then(response => {
   this.users = response.data
   }, (response) => {
   console.log('erreur', response)
   })
   
     
 

},
 
 
}

</script>