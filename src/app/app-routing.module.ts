import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplatesFrontComponent } from './FrontOffice/all-templates-front/all-templates-front.component';
import { AllTemplatesBackComponent } from './BackOffice/all-templates-back/all-templates-back.component';
import { CovoiturageComponent } from './BackOffice/viewsBack/covoiturage/covoiturage.component';
import { AddCovoiturageComponent } from './FrontOffice/viewsFront/covoiturage/add-covoiturage/add-covoiturage.component';
import { ListCovoiturageComponent } from './FrontOffice/viewsFront/covoiturage/list-covoiturage/list-covoiturage.component';
import { AvisComponent } from './BackOffice/viewsBack/avis/avis.component'; 
import { DetailCovoiturageComponent } from './FrontOffice/viewsFront/covoiturage/detail-covoiturage/detail-covoiturage.component';
import { MyCovoituragesComponent } from './FrontOffice/viewsFront/covoiturage/my-covoiturages/my-covoiturages.component';



const routes: Routes = [
   {
    path:"",
    component : AllTemplatesFrontComponent,
    children:[
      {path:"listCovoiturage",component:ListCovoiturageComponent},
      {path:"addCovoiturage",component:AddCovoiturageComponent},
      {path:"DetailCov/:id_cov",component:DetailCovoiturageComponent},
      {path:"Mycov",component:MyCovoituragesComponent}
      // {path:"collocationList", component:CollocationListComponent},
     // {path:"collocationadd", component:CollocationAddComponent}

      // hné l components mta3 l frontOffice lkol
   
   ]
   },
 
  
   {
    path:"admin",
    component : AllTemplatesBackComponent,
    children:[

      // hné l components mta3 l backOffice lkol 
    {path:"covoiturage",component:CovoiturageComponent},
    {path:"avisBack",component:AvisComponent}
   
   ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
