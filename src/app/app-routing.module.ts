import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DramaComponent } from './drama/drama.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SciFictionComponent } from './sci-fiction/sci-fiction.component';
import { ThrillerComponent } from './thriller/thriller.component';

const routes: Routes = [
  {
    path: "", loadChildren: () =>
      import('./home/home.module')
        .then(moduleClass => moduleClass.HomeModule)
  },

  {
    path: "Movies", loadChildren: () =>
      import('./movies/movies.module')
        .then(moduleClass => moduleClass.MoviesModule)
  },

  { path: "About", component: AboutComponent },

  { path: "Thriller", component: ThrillerComponent },

  { path: "Drama", component: DramaComponent },

  { path: "SciFiction", component: SciFictionComponent },

  { path: "ContactUs", component: ContactUsComponent },

  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
