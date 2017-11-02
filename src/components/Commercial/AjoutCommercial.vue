<style>
.input-group {

      width:100%;
      padding-top:2%;

}
.input-group-addon {
      width:15%;

}
 


</style>


<template>
  <div class="ajout container">
   <h1 class="page-header"> Ajout Client</h1>
     <ol class="breadcrumb" style='width:60%'>
  <li class="breadcrumb-item ">
 
  <router-link :to="{name: 'Commercial'}">Commercial</router-link></li>
    <li class="breadcrumb-item ">
 
  <router-link :to="{name: 'AjoutCommercial'}">Add Commercial</router-link></li>
</ol>


   <form   style='width:60%'   @submit.prevent="validateForm('form-2')" data-vv-scope="form-2">
   <div class="well">
   <h4>Commercial info</h4>
   
    <div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >Nom</i> </span>
  <input class="form-control" type="text"  v-model="client.name"       >
</div>
 
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >Tel1</i> </span>
  <input class="form-control" type="phone"  v-model="client.tel"     >
</div>
 
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >Email</i> </span>
 
  <input name="email"   class="form-control" type="text" v-model="client.email">
                
</div>
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >adresse</i> </span>
  <input class="form-control" type="text"  v-model="client.adresse" >
</div>
                
              
            
         
 

   </div>
   <button type="submit" class="btn btn-primary" @click="store() "  >Submit</button>


   </form>
   
  </div>
</template>

<script>

export default {
   data () {
    return{


 

    client:{

    
        "name": " ",
         
        "tel": " ",
        "email": " ",
        "adresse": " ",
         
      },
     formData: new FormData(),


         
    



    

    }



  },
 
methods:{

 
 
   
  
      
   
     validateForm(scope) {
      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!' 
          );

        }
      });
    },

    store : function() {
 


this.formData.append('name',this.client.name);

 this.formData.append('tel',this.client.tel);
 this.formData.append('adresse',this.client.adresse);
 
 this.formData.append('email',this.client.email);
 




   this.$http.post('http://localhost/ApiDevinStock/public/v2/Commercial', this.formData, {
   emulateJSON: true,
    emulateHTTP: true,

}).then(function (response) {

        // success callback
        console.log(response);

      }, function (response) {

        // error callback
        console.log(response);

      });

}
}}

</script>