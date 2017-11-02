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
 
  <router-link :to="{name: 'Client'}">Client</router-link></li>
    <li class="breadcrumb-item ">
 
  <router-link :to="{name: 'AjoutClient'}">Add client</router-link></li>
</ol>


   <form   style='width:60%'   @submit.prevent="validateForm('form-2')" data-vv-scope="form-2">
   <div class="well">
   <h4>Client info</h4>
    <div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >code</i> </span>
  <input class="form-control" type="text"  v-model="client.code"   v-validate data-vv-rules="required|numeric" :class="{'input': true, 'is-danger': errors.has('code') }"    >
                  <span v-show="errors.has('code')" class="help is-danger">{{ errors.first('title') }}</span>

</div>
    <div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >Name</i> </span>
  <input class="form-control" type="text"  v-model="client.name"       >
</div>
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >Company</i> </span>
  <input class="form-control" type="text"  v-model="client.company"  >
</div>
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >Tel1</i> </span>
  <input class="form-control" type="phone"  v-model="client.tel1"     >
</div>
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >Tel2</i> </span>
  <input class="form-control" type="phone"   v-model="client.tel2"    >
</div>
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >Email</i> </span>
 
  <input name="email"   class="form-control" type="text" v-model="client.email">
                
</div>
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >adresse</i> </span>
  <input class="form-control" type="text"  v-model="client.adresse" >
</div>
   <div class="input-group margin-bottom-sm">
  <span class="input-group-addon  "  ><i class="fa "  > image :</i> </span>
  
        <input  type="file"    @change="onFileChange" class="form-control"   >


</div>                
              
            
         
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >Cuid </i> </span>
  <input class="form-control" type="text"  v-model="client.cuid" >
</div>
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >Country </i> </span>
  <select class="form-control  chosen-select"  id="sel1 " v-model="client.pays_id"  >


         <option   v-for="pays in coutries"   v-bind:value="pays.id" > {{pays.name}} </option>
       </select> 

</div>
<div class="input-group margin-bottom-sm">
  <span class="input-group-addon"  ><i class="fa"  >Etat client </i> </span>
  <select class="form-control chosen-select"  id="sel2 " v-model="client.ET_id"  >


         <option   v-for="S in status"   v-bind:value="S.id" > {{S.client_status}} </option>
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


    coutries: [],
    status:[],


    client:{

        code :"" ,
         name : " ",
         company : " ",
         tel1 : " ",
         tel2 : " ",
         email : " ",
         adresse : " ",
          cuid :"",

         pays_id :"",
         ET_id :"",
      image :"",
      },
     formData: new FormData(),
             loading: false,



         
    



    

    }



  },


  mounted (){
    this.$http.get('http://localhost/ApiDevinStock/public/v2/Coutries').then(response => {
   this.coutries = response.data
   }, (response) => {
   console.log('erreur', response)
   })
  ;
      this.$http.get('http://localhost/ApiDevinStock/public/v2/Etclient').then(response => {
   this.status = response.data
   }, (response) => {
   console.log('erreur', response)
   })

},
methods:{

onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
       var reader = new FileReader();
 
      reader.onload = (e) => {
        this.client.image = e.target.result;


            this.formData.append('image',this.client.image);


      };
      reader.readAsDataURL(file);




    },
 
   
  
      
   
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

this.formData.append('company',this.client.company);
this.formData.append('tel1',this.client.tel1);
this.formData.append('tel2',this.client.tel2);
this.formData.append('adresse',this.client.adresse);
this.formData.append('cuid',this.client.cuid);
this.formData.append('pays_id',this.client.pays_id);
 this.formData.append('email',this.client.email);

this.formData.append('code',this.client.code);

this.formData.append('ET_id',this.client.ET_id);
 



let options = { emulateJSON: true };
 this.$http.post("http://localhost/ApiDevinStock/public/v2/clients",this.formData, options).then(function (response) {

        // success callback
        console.log(response);

      }, function (response) {

        // error callback
        console.log(response);

      });
            }
}
  }

  </script>