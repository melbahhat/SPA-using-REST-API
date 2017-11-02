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
 
  <router-link :to="{name: 'Commercial'}">Commercial</router-link></li>
  <li class="breadcrumb-item is-active">
 
  <router-link :to="{name: 'UpdateCom'}">update</router-link></li>

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
  <span class="input-group-addon"><i class="fa">Email</i> </span>
  <input class="form-control" type="text"  v-model="users.email" >
</div>
 
</tr>
 <br>

<tr>
  
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"><i class="fa">Tel</i> </span>
  <input class="form-control" type="text"  v-model="users.tel" >
</div>
 
</tr>
 <br>

<tr>
  
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"><i class="fa">adresse</i> </span>
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

   this.$http.get('http://localhost/ApiDevinStock/public/v2/Commercial/'+itemId  ).then(response => {
   this.users = response.data
   }, (response) => {
   console.log('erreur', response)
   })

},
methods: {

save(users){
  var itemId= this.$route.params.id

   this.$http.put('http://localhost/ApiDevinStock/public/v2/Commercial/'+itemId,{name:users.name,email:users.email,adresse:users.adresse,tel:users.tel}    ).then(response => {
   this.users = response.data
   }, (response) => {
   console.log('erreur', response)
   }),
      this.$router.push('/Commercial')

 }

}
   




}
</script>