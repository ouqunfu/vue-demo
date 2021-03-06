import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import starter from '@/components/starter'
import columnsList from '@/components/contents/columns-list'
import columnsAdd from '@/components/contents/columns-add'
import catoList from '@/components/contents/cato-list'
import catoAdd from '@/components/contents/cato-add'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		name: 'starter',
  		component: starter
  	},
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/columns-list',
      name: 'columns-list',
      component: columnsList
    },
    {
      path: '/columns-add',
      name: 'columns-add',
      component: columnsAdd
    },
    {
      path: '/cato-list',
      name: 'cato-list',
      component: catoList
    },
    {
      path: '/cato-add',
      name: 'cato-add',
      component: catoAdd
    }
  ]
})
