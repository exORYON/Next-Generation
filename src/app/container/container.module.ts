import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CardComponent } from "../components/card/card.component";
import { CloseButtonComponent } from "../components/close-button/close-button.component";
import { TriangleComponent } from "../components/triangle/triangle.component";
import { ContainerComponent } from "./container.component";

@NgModule({
  declarations: [
    ContainerComponent,
    TriangleComponent,
    CardComponent,
    CloseButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class ContainerModule {}