import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search-result/search-result.module').then(m => m.SearchResultModule)
  },
  {
    path: 'search/:id',
    loadChildren: () => import('./pages/search-result/search-result.module').then(m => m.SearchResultModule)
  },
  {
    path: 'chatBot',
    loadChildren: () => import('./components/chat-bot/chat-bot.module').then(m => m.ChatBotModule)
  },
  { path: 'productDetail/:id',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then(m => m.ProductDetailModule)
  },
  { path: 'productDetail',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then(m => m.ProductDetailModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
     path: 'category',
     loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule)
  },
  {
     path: 'cart',
     loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) 
  },
  { 
    path: 'wishlist', 
    loadChildren: () => import('./pages/wishlist/wishlist.module').then(m => m.WishlistModule) 
  },
  { 
    path: 'post', 
    loadChildren: () => import('./pages/post/post.module').then(m => m.PostModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
