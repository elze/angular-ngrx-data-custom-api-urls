import { NgModule } from "@angular/core";
import { EntityDataService } from "@ngrx/data"; // <-- import the NgRx Data data service registry
import { SkillsDataService } from "../skills/skills-data.service";

@NgModule({
  providers: [SkillsDataService] // <-- provide the data service
})
export class EntityStoreModule {
  constructor(
    entityDataService: EntityDataService,
    skillsDataService: SkillsDataService
  ) {
    entityDataService.registerService("StructSkill", skillsDataService); // <-- register it
  }
}
