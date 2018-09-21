import { NgModule } from "@angular/core";
import { CustomDropdownDirective } from "./custom-dropdown.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        CustomDropdownDirective
    ],
    exports: [
        CommonModule,
        CustomDropdownDirective
    ]
})
export class SharedModule {}