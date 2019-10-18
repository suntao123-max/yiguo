import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

function loadView(view) {
  return () => import(`@/components/${view}.vue`)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/address",
      name:'Address',
      component:loadView('HelloWorld/Address')
    },
    {
      path: '/assortment',
      name: 'Assortment',
      component: loadView('Assortment'),
      children:[
      	{
		      path: '/assortment/importedfruit',
		      name: 'ImportedFruit',
		      component: loadView('Assortment/ImportedFruit')
		    },
		    {
	      	path: '/assortment/domesticfruit',
	      	name: 'DomesticFruit',
	      	component: loadView('Assortment/DomesticFruit')
	      },
		    {
	      	path: '/assortment/meat',
	      	name: 'Meat',
	      	component: loadView('Assortment/Meat')
	      },
		    {
	      	path: '/assortment/egg',
	      	name: 'Egg',
	      	component: loadView('Assortment/Egg')
	      },
		    {
	      	path: '/assortment/seafood',
	      	name: 'Seafood',
	      	component: loadView('Assortment/Seafood')
	      },
		    {
	      	path: '/assortment/cooking',
	      	name: 'Cooking',
	      	component: loadView('Assortment/Cooking')
	      },
		    {
	      	path: '/assortment/dairypastry',
	      	name: 'DairyPastry',
	      	component: loadView('Assortment/DairyPastry')
	      },
		    {
	      	path: '/assortment/freshvegetables',
	      	name: 'FreshVegetables',
	      	component: loadView('Assortment/FreshVegetables')
	      },
		    {
	      	path: '/assortment/fastfood',
	      	name: 'FastFood',
	      	component: loadView('Assortment/FastFood')
	      },
		    {
	      	path: '/assortment/chandlery',
	      	name: 'Chandlery',
	      	component: loadView('Assortment/Chandlery')
	      },
		    {
	      	path: '/assortment/drink',
	      	name: 'Drink',
	      	component: loadView('Assortment/Drink')
	      },
		    {
	      	path: '/assortment/giftcertificate',
	      	name: 'GiftCertificate',
	      	component: loadView('Assortment/GiftCertificate')
	      }
      ]
      ,redirect:'/assortment/importedfruit'
    },
    {
      path: '/individualcenter',
      name: 'IndividualCenter',
      component: loadView('IndividualCenter')
    },
    {
  	  path: '/set',
      name: 'UserSet',
      component: loadView('IndividualCenter/UserSet')
    },
    {
  	  path: '/login',
      name: 'Login',
      component: loadView('IndividualCenter/Login'),
      children:[
        {
        path: '/pulgIn',
        name: 'PlugIn',
        component: loadView('IndividualCenter/PlugIn')
        }
      ],
      redirect:'/pulgIn'
    },
    {
      path: '/enroll',
      name: 'Enroll',
      component: loadView('IndividualCenter/Enroll')
    },
    {
  	  path: '/resetPwd',
      name: 'ResetPwd',
      component: loadView('IndividualCenter/ResetPwd')
    },
    {
  	  path: '/about',
      name: 'About',
      component: loadView('IndividualCenter/Set/About')
    },
    {
  	  path: '/businessLicence',
      name: 'BusinessLicence',
      component: loadView('IndividualCenter/Set/BusinessLicence')
    },
    {
  	  path: '/serviceAgreement',
      name: 'ServiceAgreement',
      component: loadView('IndividualCenter/Set/ServiceAgreement')
    },
    {
  	  path: '/eat',
      name: 'Eat',
      component: loadView('Eat')
    },
    {
      path: '/shopcart',
      name: 'ShopCart',
      component: loadView('ShopCart')
    },
    {
    	path: '*',
      name: 'FontNot',
      component: loadView('FontNot')
    }
  ]
})
