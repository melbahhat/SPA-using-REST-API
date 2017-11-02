<style>




.breadcrumb{
        width:65%;


}</style>



<template>
<div class=" table-responsive container">
  <h1 class="page-header">  </h1>
   <ol class="breadcrumb" >
  <li class="breadcrumb-item ">
 
  <router-link :to="{name: 'Commercial'}">Commercial</router-link></li>
  <li class="breadcrumb-item is-active">
 
  <router-link :to="{name: 'addCom'}">{{users.name}}</router-link></li>
 </ol>
<div  style="
  display: flex"
>
 
 <table class="table table-hover table-bordered"
 
 style="width:55% ;  " >
<thead>

<tr>
<th>name</th>
 <td>{{users.name}}</td>

</tr>

</thead>
   
  

<tbody>

 
<tr>
<th>Email</th>

  <td>  {{users.email}}  </td>


</tr>
<tr>
<th>Tel 1</th>

  <td>  {{users.tel}}  </td>


</tr>
<tr>
<th>adresse</th>

  <td>  {{users.adresse}}  </td>


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
   


    }
    
  
},
 

   

mounted (){
 var itemId= this.$route.params.id

   this.$http.get('http://localhost/ApiDevinStock/public/v2/Commercial/'+itemId  ).then(response => {
   this.users = response.data
   }, (response) => {
   console.log('erreur', response)
   })

}


}
</script>