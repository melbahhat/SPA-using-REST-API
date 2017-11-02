
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
         <router-link to="/AjoutFamille">
<button type="button" class="btn btn-primary">Add Famille</button>
</router-link>
  <ol class="breadcrumb">
  <li class="breadcrumb-item ">
 
  <router-link :to="{name: 'Famille'}">Famille</router-link></li>
</ol>

  <table class="table table-hover table-bordered"
 
 style="width:66% ;  " >
<thead>
<tr>
<th>name</th>
<th>Designation</th>
 <th>fuid</th>

<th>update</th>
<th>delete</th>
</tr>

</thead>
   
  

<tbody>
 
<tr v-for="famille in familles"  >
 <td><router-link :to="{name:'FamilleId',params:{id:  famille.id  }}">{{famille.name}}</router-link></td>
  <td>     
{{famille.Designation}} </td>
<td>     
{{famille.fuid}} </td>
<td>
 
<router-link :to="{name: 'updateF',params:{id:  famille.id  }}">
 

  <button type="button" class="btn btn-success" >

  Update
</button> 


</router-link> 
 </td>
<td>
<a class="btn btn-danger" @click='destroy(famille)'  aria-label="Delete">
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
    familles: [],
 



    }
  
},
 

   

mounted (){
  
      this.$http.get('http://localhost/ApiDevinStock/public/v2/famille').then(response => {
   this.familles = response.data
   }, (response) => {
   console.log('erreur', response)
   }) 


},

methods:{
destroy(famille){
  

   this.$http.delete('http://localhost/ApiDevinStock/public/v2/famille/'+famille.id    ).then(response => {
   this.familles = this.familles.filter(u=>u !==famille)
   }, (response) => {
   console.log('erreur', response)
   })



},
   
 
}
   
}


 

</script> 

