import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
  DefaultDataServiceConfig
} from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { SkillNode, SkillFlatNode } from "./models/skill-node";
import { StructSkill } from "./models/struct-skill";
import { Observable } from 'rxjs';

@Injectable()
//export class SkillsService extends EntityCollectionServiceBase<SkillNode> 
export class SkillsService extends EntityCollectionServiceBase<StructSkill> {  

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private http: HttpClient,
    private defaultDataServiceConfig: DefaultDataServiceConfig    
  ) { 
    super('StructSkill', serviceElementsFactory);
  }

}