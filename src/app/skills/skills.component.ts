import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { FlatTreeControl } from "@angular/cdk/tree";
import {
  MatTreeFlatDataSource,
  MatTreeFlattener
} from "@angular/material/tree";

import { /* SkillNode,*/ SkillFlatNode } from "./models/skill-node";
import { StructSkill } from "./models/struct-skill"
import { SkillsService } from "./skills.service";
//import {getSkillsApi} from './skills-actions';
//import {AppState, selectSkills} from '../reducers/index';

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"]
})
export class SkillsComponent implements OnInit {
  //levels = new Map<SkillNode, number>();
  levels = new Map<StructSkill, number>();
  treeControl: FlatTreeControl<SkillFlatNode>;
  //treeFlattener: MatTreeFlattener<SkillNode, SkillFlatNode>;
  treeFlattener: MatTreeFlattener<StructSkill, SkillFlatNode>;

  //private transformer = (node: SkillNode, level: number) => {
  private transformer = (node: StructSkill, level: number) => {
    return new SkillFlatNode(
      !!node.children && node.children.length > 0,
      node.item,
      node.fontSize,
      node.percentOfTime,
      level
    );
  };

  //dataSource: MatTreeFlatDataSource<SkillNode, SkillFlatNode>;
  dataSource: MatTreeFlatDataSource<StructSkill, SkillFlatNode>;

  constructor(//private skillsStore: Store<AppState,
  private skillsService: SkillsService) {
    this.treeControl = new FlatTreeControl<SkillFlatNode>(
      node => node.level,
      node => node.expandable
    );
    console.log(`SkillsComponent.constructor(): instantiated this.treeControl`);
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      node => node.level,
      node => node.expandable,
      node => node.children
    );
    console.log(
      `SkillsComponent.constructor(): instantiated this.treeFlattener`
    );
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
    console.log(`SkillsComponent.constructor(): instantiated this.dataSource`);

    this.skillsService.entities$.subscribe(data => {
      this.dataSource.data = data;
      console.log(`SkillsComponent.subscribe(): data = ${data}`);
    });

  }

  ngOnInit() {
    this.skillsService.getAll();
    //this.skillsStore.dispatch(getSkillsApi());
  }

  // This method is not necessary yet at this point
  //getChildren = (node: SkillNode) => {
  getChildren = (node: StructSkill) => {
    console.log(
      `SkillsComponent.getChildren(): node.item = ${
        node.item
      } node.children = ${node.children}`
    );
    return node.children;
  };

  hasChild = (index: number, node: SkillFlatNode): boolean => {
    console.log(
      `hasChild: node.name = ${node.name} node.expandable = ${node.expandable}`
    );
    return node.expandable;
  };
}