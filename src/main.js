// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
 
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
 
 
 
import Client from './components/Client/Client'
import clientId from '@/components/Client/clientId'
import update from '@/components/Client/update'
import AjoutClient from '@/components/Client/AjoutClient'
import Commercial from '@/components/Commercial/Commercial'
import getCom from '@/components/Commercial/getCom'
import UpdateCom from '@/components/Commercial/UpdateCom'
import AjoutCommercial from '@/components/Commercial/AjoutCommercial'
import Vente from '@/components/Vente/Vente'
import AjoutVente from '@/components/Vente/AjoutVente'
import updateV from '@/components/Vente/updateV'
import VenteId from '@/components/Vente/VenteId'
import Produit from '@/components/Produit/Produit'
import AjoutProduit from '@/components/Produit/AjoutProduit'
import updateP from '@/components/Produit/updateP'
import ProduitId from '@/components/Produit/ProduitId'
import Famille from '@/components/Famille/Famille'
import AjoutFamille from '@/components/Famille/AjoutFamille'
import updateF from '@/components/Famille/updateF'
import  FamilleId from '@/components/Famille/FamilleId'




import App from '@/App'
  


 


import axios from 'axios'
 

import VeeValidate from 'vee-validate'


Vue.use(vueResource)
Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.use(require('vue-moment'));
 

 
Vue.use(require('vue-filter'));
 
 
/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
            {path:'/', component: App, name:'App' },
 

        {path:'/Client', component: Client, name:'Client' },
         {
      path: '/client/:id',
      name: 'test',
      component: clientId
    },
    {
      path: '/update/:id',
      name: 'update',
      component: update
    },
         {path:'/Commercial', component: Commercial, name:'Commercial' },
               {
      path: '/Commercial/:id',
      name: 'addCom',
      component: getCom
    },
 
               {
      path: '/UpdateCom/:id',
      name: 'UpdateCom',
      component: UpdateCom
    },
   
              {path:'/AjoutClient', component: AjoutClient,name:'AjoutClient'},
              {path:'/AjoutCommercial', component: AjoutCommercial,name:'AjoutCommercial'},
              {path:'/Vente', component: Vente, name:'Vente' },
             {path:'/AjoutVente', component: AjoutVente, name:'AjoutVente' },
             {path:'/updateV/:id', component: updateV, name:'updateV' },
                          {path:'/VenteId', component: VenteId, name:'VenteId' },

{path:'/Produit', component: Produit, name:'Produit' },
             {path:'/AjoutProduit', component: AjoutProduit, name:'AjoutProduit' },
             {path:'/updateP/:id', component: updateP, name:'updateP' },
                          {path:'/ProduitId/:id', component: ProduitId, name:'ProduitId' },


{path:'/Famille', component: Famille, name:'Famille' },
             {path:'/AjoutFamille', component: AjoutFamille, name:'AjoutFamille' },
             {path:'/updateF/:id', component: updateF, name:'updateF' },
                          {path:'/FamilleId/:id', component: FamilleId, name:'FamilleId' },


  ]

})
new Vue({
 router,
 
 template: `
<div id="app">

  <body>
<nav class="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>

      <a class="navbar-brand" href="#"><img src="http://test3.devinstock.com/images/company/logo.png"/></a> 

    </div>
    <div class="collapse navbar-collapse animated fadeIn" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav animated fadeIn text16">
        <li class="active"><a href="#"><span class="glyphicon glyphicon-cog"></span></a></li>
        <li><a href="#"><span class="glyphicon glyphicon-download-alt"></span></a></li>
        <li>
            <form class="navbar-form" role="search">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="search" name="q">
                <div class="input-group-btn">
                    <button class="btn btn-default" type="submit"><i class="fa fa-search"></i></button>
                </div>
            </div>
            </form>    
        </li>

      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-user"></span><b> Login</b> <span class="caret"></span></a>
        
        <ul id="login-dp" class="dropdown-menu">
        <li>
           <div class="row">
              <div class="col-md-12">
                <!-- Login -->
                <div class="social-buttons">
                    <div class="iconSpecial"><i class="glyphicon glyphicon-user"></i>Login</div>
                </div>                               
                 <form class="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                    <div class="form-group">
                       <label class="sr-only" for="exampleInputEmail2">login</label>
                       <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Entrar Usuário" required>
                    </div>
                    <div class="form-group">
                       <label class="sr-only" for="exampleInputPassword2">Senha</label>
                       <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" required>
                                             <div class="help-block text-right"><a href="">Esquecí minha senha ?</a></div>
                    </div>
                    <div class="form-group">
                       <button type="submit" class="btn btn-primary btn-block">Entrar</button>
                    </div>
                    <div class="checkbox text-dark">
                       <label>
                       <input type="checkbox"> Manter-me Logado
                       </label>
                    </div>
                 </form>
              </div>            
           </div>
        </li>
      </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Second Nav -->
<nav class="navbar navbar-default navbar-static-top" role="navigation">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <!-- Brand -->
      <a class="navbar-brand" href="#">DevinWeb--DevinStock</a>
    </div>
    <div class="collapse navbar-collapse animated fadeIn" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav animated fadeIn">
         


      </ul>

       <ul class="nav navbar-nav navbar-right">
 

      </ul>
      
      
    </div>
  </div>
</nav>

<div class="row affix-row">
    <div class="col-sm-3 col-md-2 affix-sidebar">
    <div class="sidebar-nav">
  <div class="navbar navbar-default" role="navigation">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      </button>
      <span class="visible-xs navbar-brand">Sidebar menu</span>
    </div>
    <div class="navbar-collapse collapse sidebar-navbar-collapse">
      <ul class="nav navbar-nav" id="sidenav01">
       
      
      
       
        <li>     <router-link to='/Client'> 
<span class="fa fa-male"></span> Clients</router-link></li>
 <li>     <router-link to='/Commercial'> 
<span class="fa fa-male"></span> Commerciaux</router-link></li>
<li><router-link to='/Famille'> <span class="fa fa-cubes"></span> Familles</router-link></li>
        <li><router-link to="/Produit"><span class="fa fa-cube"></span> Produits</router-link></li>
 <li><a href="#"><span class="fa fa-cart-arrow-down"></span> Achats</a></li>
         <li><router-link to='/Vente'> <span class="fa fa-shopping-cart"></span> Ventes</a></router-link>
         <li><a href="#"><span class="fa fa-newspaper-o"></span> Factures</a></li>
        <li><a href="#"><span class="fa fa-file-text-o"></span> Devis</a></li>
        
        <li><a href="#"><span class="fa fa-truck"></span> Fournisseurs</a></li>
         <li><a href="#"><span class="fa fa-exchange"></span> Comptabilité</a></li>
       
       
       
      </ul>
      </div>
    </div>
  </div>
  </div>
  <div class="col-sm-9 col-md-10 affix-content">
    <div class="container">
      
<router-view></router-view>    
    </div>
  </div>
</div>


</div>
</body>
 `
}).$mount('#app')
