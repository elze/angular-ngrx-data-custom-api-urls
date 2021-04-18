import { Component, OnInit } from "@angular/core";

import { FlatTreeControl } from "@angular/cdk/tree";
import {
  MatTreeFlatDataSource,
  MatTreeFlattener
} from "@angular/material/tree";

import { MatomoTracker } from 'ngx-matomo';

import { StructSkill, SkillFlatNode } from "./models/struct-skill";
import { SkillsService } from "./skills.service";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  levels = new Map<StructSkill, number>();
  treeControl: FlatTreeControl<SkillFlatNode>;
  treeFlattener: MatTreeFlattener<StructSkill, SkillFlatNode>;

  private transformer = (node: StructSkill, level: number) => {
    return new SkillFlatNode(
      !!node.successors && node.successors.length > 0,
      node.item,
      node.fontSize,
      node.id,
      node.percentOfTime,
      node.kind,
      level
    );
  };

  dataSource: MatTreeFlatDataSource<StructSkill, SkillFlatNode>;

  constructor(private skillsService: SkillsService,
    private matomoTracker: MatomoTracker) {
    this.treeControl = new FlatTreeControl<SkillFlatNode>(
      node => node.level,
      node => node.expandable
    );
    console.log(`SkillsComponent.constructor(): instantiated this.treeControl`);
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      node => node.level,
      node => node.expandable,
      node => node.successors
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

  ngOnInit(): void {
    this.matomoTracker.setDocumentTitle('ngx-Matomo SkillsComponent');
    this.skillsService.getAll();
  }

  hasChild = (index: number, node: SkillFlatNode): boolean => {
    /*
    console.log(
      `hasChild: node.name = ${node.name} node.expandable = ${node.expandable}`
    );
    */
    return node.expandable;
  };

  trackNodeExpandCollapse(node: SkillFlatNode): void {
    this.matomoTracker.trackEvent('Node expanded or collapsed', `Node with itemId ${node.itemId} is expanded? ${this.treeControl.isExpanded(node)}`, node.name, node.level);
  }  
}
