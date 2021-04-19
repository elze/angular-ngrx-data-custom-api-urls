import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { EntityDataModule, DefaultDataServiceConfig } from "@ngrx/data";
import { entityMetadata } from "./entity-metadata";
import { EffectsModule } from "@ngrx/effects";

import { HttpClientModule } from "@angular/common/http";

import { MatCardModule } from "@angular/material/card";
import { MatTreeModule } from "@angular/material/tree";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { StoreModule } from "@ngrx/store";

import { MatomoModule } from "ngx-matomo";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { EntityStoreModule } from "./store/entity-store.module";
import { SkillsComponent } from "./skills/skills.component";
import { SkillsService } from "./skills/skills.service";

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: "https://sc2019.skillclusters.com/sc/",
  timeout: 3000
};

export const entityConfig = {
  entityMetadata
};

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTreeModule,
    AppRoutingModule,
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    EntityStoreModule,
    StoreModule.forRoot({}),
    MatomoModule
  ],
  declarations: [AppComponent, SkillsComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    SkillsService
  ]
})
export class AppModule {}
