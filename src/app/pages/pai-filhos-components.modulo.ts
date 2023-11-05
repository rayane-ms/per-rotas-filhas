import { NgModule } from "@angular/core";
import { Filho1PageComponent } from "./filho1-page.component";
import { Filho2PageComponent } from "./filho2-page.component";
import { PaiPageComponent } from "./pai-page.component";
import { ModuloPaiRoutingModule } from "./pai-routing.module";

@NgModule ({
    declarations: [
        Filho1PageComponent,
        Filho2PageComponent,
        PaiPageComponent
    ],
    imports: [
        ModuloPaiRoutingModule
    ],
    exports: [
    ]
})

export class PaiFilhosComponentsModule {

}