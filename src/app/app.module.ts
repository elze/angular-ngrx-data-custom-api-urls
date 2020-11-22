import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { entityMetadata } from './entity-metadata';
import { EffectsModule } from '@ngrx/effects';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { MatTreeModule} from "@angular/material/tree";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { StoreModule } from "@ngrx/store";
import { SkillsComponent } from "./skills/skills.component";
import { SkillsService } from './skills/skills.service';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://sc2019.skillclusters.com/sc/',
  timeout: 3000
}

export const entityConfig = {
  entityMetadata
};

@NgModule({
  imports: 
  [
    BrowserModule, FormsModule, HttpClientModule, MatButtonModule, MatIconModule, MatTreeModule,
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    StoreModule.forRoot({}),
    ],
  declarations: [AppComponent, HelloComponent, SkillsComponent],
  bootstrap: [AppComponent],
  providers: [
    {provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig},
    SkillsService
    ]
})
export class AppModule {}
