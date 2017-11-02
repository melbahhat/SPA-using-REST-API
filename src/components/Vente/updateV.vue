<style>

.btn{
  
      border-radius: 5px;

}
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
 
  <router-link :to="{name: 'Client'}">Client</router-link></li>
  <li class="breadcrumb-item is-active">
 
  <router-link :to="{name: 'update'}">update</router-link></li>

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
  <span class="input-group-addon"><i class="fa">company</i> </span>
  <input class="form-control" type="text"  v-model="users.company" >
</div><br>
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"><i class="fa">Tel1</i> </span>
  <input class="form-control" type="text"  v-model="users.tel1" >
</div><br>
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"><i class="fa">Email</i> </span>
  <input class="form-control" type="text"  v-model="users.email" >
</div><br>

 <div class="input-group margin-bottom-sm">
  <span class="input-group-addon"><i class="fa">Adresse</i> </span>
  <input class="form-control" type="text"  v-model="users.adresse" >
</div>
</tr>
 </table>
  <button type="button" class="btn btn-success"  @click="save(users)" >

 
  update
</button>  
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

   this.$http.get('http://localhost/ApiDevinStock/public/v2/clients/'+itemId  ).then(response => {
   this.users = response.data
   }, (response) => {
   console.log('erreur', response)
   })

},
methods: {

save(users){
  var itemId= this.$route.params.id

   this.$http.put('http://localhost/ApiDevinStock/public/v2/clients/'+itemId,{name:users.name,company:users.company,email:users.email}     ).then(response => {
   this.users = response.data
   }, (response) => {
   console.log('erreur', response)
   })
   this.$router.push('/Client')
}

}
   




}
</script>