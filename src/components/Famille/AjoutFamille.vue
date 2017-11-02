<style>
.input-group {

      width:100%;
      padding-top:2%;

}
.input-group-addon {
      width:20%;

}
 



</style>


<template>
  <div class="ajout container">
   <h1 class="page-header"> Ajout Famille</h1>
     <ol class="breadcrumb" style='width:60%'>
  <li class="breadcrumb-item ">
 
  <router-link :to="{name: 'Famille'}">Famille</router-link></li>
    <li class="breadcrumb-item ">
 
  <router-link :to="{name: 'AjoutFamille'}">Add Famille</router-link></li>
</ol>


   <form   style='width:60%'   @submit.prevent="validateForm('form-2')" data-vv-scope="form-2">
   <div class="well">
   <h4>Produit info</h4>
  
    <div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >Nom</i> </span>
  <input class="form-control" type="text"  v-model="famille.name"       >
</div>
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >Designation</i> </span>
  <input class="form-control" type="text"  v-model="famille.Designation"  >
</div>
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >fuid</i> </span>
  <input class="form-control" type="text"  v-model="famille.fuid"  >
</div>

 


 

   </div>
   <button type="submit" class="btn btn-primary" @click="store"  >Submit</button>


   </form>
   
  </div>
</template>

<script>

export default {
   data () {
    return{

  
    


    famille:{

        name :"" ,
         Designation : " ",
         fuid:"",
         

          
      },
     formData: new FormData(),
             loading: false,



         
    



    

    }



  },


 
methods:{

 
   
  
      
   
     validateForm(scope) {
      this.$validator.validateAll(scope).then((result) => {
        if (result) {
           alert('Form Submitted!' 
          );

        }
      });
    },

    store : function() {
 
            this.loading = true;


this.formData.append('name',this.famille.name);

this.formData.append('Designation',this.famille.Designation);
this.formData.append('fuid',this.famille.fuid);
 

 



let options = { emulateJSON: true };
 this.$http.post("http://localhost/ApiDevinStock/public/v2/famille",this.formData, options).then(function (response) {

        // success callback
        console.log(response);

      }, function (response) {

        // error callback
        console.log(response);

      });
         this.$router.push('/Famille')

            }
}
  }

  </script>