import {NgModule} from "@angular/core";
import {
  MdToolbarModule, MdSnackBarModule, MdTooltipModule, MdDialogModule, MdIconModule,
  MdButtonModule, MdListModule, MdSidenavModule, MdMenuModule, MdSelectModule, MdInputModule, MdCard, MdCardModule,
  MdGridListModule
} from "@angular/material";

@NgModule({
  imports: [
    MdToolbarModule,
    MdInputModule,
    MdSelectModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdButtonModule,
    MdIconModule,
    MdDialogModule,
    MdTooltipModule,
    MdSnackBarModule,
    MdCardModule,
    MdGridListModule,
    MdButtonModule
  ],
  exports: [
    MdToolbarModule,
    MdInputModule,
    MdSelectModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdButtonModule,
    MdIconModule,
    MdDialogModule,
    MdTooltipModule,
    MdSnackBarModule,
    MdCardModule,
    MdGridListModule,
    MdButtonModule
  ]
})

export class EasyApplyMaterialModule {

}
