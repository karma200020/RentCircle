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
  { path: 'productDetail',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then(m => m.ProductDetailModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
