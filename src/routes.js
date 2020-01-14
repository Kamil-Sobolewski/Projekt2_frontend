import ProductList from '@/views/ProductList.vue'
import ProductCategoryList from '@/views/ProductCategoryList.vue'
import ProductCreate from '@/views/ProductCreate.vue'
import ProductView from '@/views/ProductView.vue'
import ProductEdit from '@/views/ProductEdit.vue'


export default [
    {path: '/', component: ProductList, name:'product-list'},
    {path: '/products/:id', component: ProductView, name:'product'},
    {path: '/products/:id/edit', component: ProductEdit, name:'product-edit'},
    {path: '/category/:id', component: ProductCategoryList, name:'category'},
    {path: '/create', component: ProductCreate, name:'product-create'},
]