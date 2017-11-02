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
 
  <router-link :to="{name: 'Famille'}">Famille</router-link></li>
  <li class="breadcrumb-item is-active">
 
  <router-link :to="{name: 'updateF'}">update</router-link></li>

</ol>

  <table class="table table-hover "
 
 style="width:65% ;  " >
 <tr> 
   <div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >Nom</i> </span>
  <input class="form-control" type="text"  v-model="users.name" >
</div>
 </tr>

 <br>
 
<tr>
  
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"><i class="fa">Designation</i> </span>
  <input class="form-control" type="text"  v-model="users.Designation" >
</div><br>
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"><i class="fa">fuid</i> </span>
  <input class="form-control" type="text"  v-model="users.fuid" >
</div><br>
 </tr>
 
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
 
name:"",
Designation:"",
fuid:"",
 
   


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
methods: {

save(users){
  var itemId= this.$route.params.id

   this.$http.put('http://localhost/ApiDevinStock/public/v2/famille/'+itemId,{name:users.name,Designation:users.Designation,fuid:users.fuid}     ).then(response => {
   this.users = response.data
   }, (response) => {
   console.log('erreur', response)
   })
   this.$router.push('/Famille')
}

}
   




}
</script>