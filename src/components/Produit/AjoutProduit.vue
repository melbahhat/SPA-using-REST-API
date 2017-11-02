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
   <h1 class="page-header"> Ajout Produit</h1>
     <ol class="breadcrumb" style='width:60%'>
  <li class="breadcrumb-item ">
 
  <router-link :to="{name: 'Produit'}">Produit</router-link></li>
    <li class="breadcrumb-item ">
 
  <router-link :to="{name: 'AjoutProduit'}">Add Produit</router-link></li>
</ol>


   <form   style='width:60%'   @submit.prevent="validateForm('form-2')" data-vv-scope="form-2">
   <div class="well">
   <h4>Produit info</h4>
  
    <div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >Name</i> </span>
  <input class="form-control" type="text"  v-model="client.name"       >
</div>
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >description</i> </span>
  <input class="form-control" type="text"  v-model="client.description"  >
</div>
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >qte_min</i> </span>
  <input class="form-control" type="text"  v-model="client.qte_min"  >
</div>
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >coût de  produit</i> </span>
  <input class="form-control" type="text"  v-model="client.cout_produit"  >
</div>
 
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >Famille </i> </span>
  <select class="form-control chosen-select"  id="sel2 " v-model="client.fam_id"  >


         <option   v-for="f in famille"   v-bind:value="f.id" > {{f.name}} </option>
       </select> 

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

    produits: [],

    famille: [],
    


    client:{

        name :"" ,
         description : " ",
         fam_id:"",
         qte_min:"",
                 cout_produit:""

          
      },
     formData: new FormData(),
             loading: false,



         
    



    

    }



  },


  mounted (){
    this.$http.get('http://localhost/ApiDevinStock/public/v2/produits').then(response => {
   this.produits = response.data
   }, (response) => {
   console.log('erreur', response)
   })
  ;
      this.$http.get('http://localhost/ApiDevinStock/public/v2/famille').then(response => {
   this.famille = response.data
   }, (response) => {
   console.log('erreur', response)
   })

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


this.formData.append('name',this.client.name);

this.formData.append('description',this.client.description);
this.formData.append('fam_id',this.client.fam_id);
this.formData.append('cout_produit',this.client.cout_produit);
this.formData.append('qte_min',this.client.qte_min);

 



let options = { emulateJSON: true };
 this.$http.post("http://localhost/ApiDevinStock/public/v2/produits",this.formData, options).then(function (response) {

        // success callback
        console.log(response);

      }, function (response) {

        // error callback
        console.log(response);

      });
         this.$router.push('/Produit')

            }
}
  }

  </script>