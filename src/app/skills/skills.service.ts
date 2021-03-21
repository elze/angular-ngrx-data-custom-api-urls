import { Injectable } from "@angular/core";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from "@ngrx/data";
import { StructSkill } from "./models/struct-skill";

@Injectable()
export class SkillsService extends EntityCollectionServiceBase<StructSkill> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super("StructSkill", serviceElementsFactory);
  }
}
