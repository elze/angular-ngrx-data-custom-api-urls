import { Injectable } from '@angular/core';
import { DefaultDataService, DefaultDataServiceConfig, DefaultHttpUrlGenerator, DefaultPluralizer } from "@ngrx/data";
import { HttpClient } from '@angular/common/http';
import { StructSkill } from "./models/struct-skill";

@Injectable()
export class SkillsDataService extends DefaultDataService<StructSkill> {
  private defaultDataServiceConfig: DefaultDataServiceConfig;
  constructor(http: HttpClient, 
    defaultDataServiceConfig: DefaultDataServiceConfig) {
    const urlGenerator = new DefaultHttpUrlGenerator(new DefaultPluralizer([]));
    //const url = new DefaultHttpUrlGenerator();
    const urlRoot = defaultDataServiceConfig.root;  
    const resourceUrls = {
      entityResourceUrl: `${defaultDataServiceConfig.root}/structskill`,
      collectionResourceUrl: `${defaultDataServiceConfig.root}/structskills`
      };
      urlGenerator.registerHttpResourceUrls({['StructSkill']: resourceUrls});
      super('StructSkill', http, urlGenerator);
      this.defaultDataServiceConfig = defaultDataServiceConfig;
  }
}