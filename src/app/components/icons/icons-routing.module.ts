import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatherIconComponent } from './feather-icon/feather-icon.component';
import { FlagIconComponent } from './flag-icon/flag-icon.component';
import { FontAwesomeIconComponent } from './font-awesome-icon/font-awesome-icon.component';
import { IcoIconComponent } from './ico-icon/ico-icon.component';
import { ThemifyIconComponent } from './themify-icon/themify-icon.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { SimpleLineIconComponent } from './simple-line-icon/simple-line-icon.component';
import { MaterialDesignIconComponent } from './material-design-icon/material-design-icon.component';
import { Pe7IconComponent } from './pe7-icon/pe7-icon.component';
import { TypiconsIconComponent } from './typicons-icon/typicons-icon.component';
import { IonicIconsComponent } from './ionic-icons/ionic-icons.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'flag',
        component: FlagIconComponent
      },
      {
        path: 'fontawesome',
        component: FontAwesomeIconComponent
      },
      {
        path: 'ico',
        component: IcoIconComponent
      },
      {
        path: 'themify',
        component: ThemifyIconComponent
      },
      {
        path: 'feather',
        component: FeatherIconComponent
      },
      {
        path: 'weather',
        component: WeatherIconComponent
      },
      {
        path: 'simple-line-icon',
        component: SimpleLineIconComponent
      },
      {
        path: 'material-design-icon',
        component: MaterialDesignIconComponent
      },
      {
        path: 'pe7-icon',
        component: Pe7IconComponent
      },
      {
        path: 'typicons-icon',
        component: TypiconsIconComponent
      },
      {
        path: 'ionic-icon',
        component: IonicIconsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
