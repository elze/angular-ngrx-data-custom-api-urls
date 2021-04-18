//import {BehaviorSubject} from 'rxjs';

export class StructSkill {
  /** Will be used in the future */
  static DefaultFontSize = "12px";
  static DefaultHeight: string = "80px";
  static CategoryWeightThreshold = 0.5;

  id!: number;
  item!: string;
  fontSize!: string;
  percentOfTime!: number;
  kind!: string;
  successors!: StructSkill[];
  public expandCollapseIcon: string = "arrow_drop_down_circle";

  public nodeAlwaysVisible: boolean = false;
  //private _nodeVisible: boolean = false;
}

export class SkillFlatNode {
  constructor(
    public expandable: boolean,
    public name: string,
    public fontSize: string,
    public itemId: number,
    public percentOfTime: number,
    public kind: string,
    public level: number
  ) {}
}
