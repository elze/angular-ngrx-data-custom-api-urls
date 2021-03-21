//import {BehaviorSubject} from 'rxjs';

export class StructSkill {
  /** Will be used in the future */
  static DefaultFontSize = "12px";
  static DefaultHeight: string = "80px";
  static CategoryWeightThreshold = 0.5;

  item: string;
  fontSize: string;
  percentOfTime: number;
  kind: string;
  successors: StructSkill[];
  public expandCollapseIcon: string = "arrow_drop_down_circle";

  public nodeAlwaysVisible: boolean = false;
  //private _nodeVisible: boolean = false;

  constructor(
    itemObj: any,
    fontSize: any,
    percentOfTime: any,
    kind: any,
    childrenArr?: any[]
  ) {
    this.item = itemObj;
    this.fontSize = fontSize;
    this.percentOfTime = percentOfTime;
    this.kind = kind;
    this.successors = childrenArr
      ? StructSkill.CreateChildrenArray(childrenArr)
      : [];
  }

  static CreateChildrenArray(childrenArr?: any[]) {
    let snChildren = new Array<StructSkill>();
    if (childrenArr) {
      childrenArr.map(child => {
        let sn = new StructSkill(
          child.item,
          child.fontSize,
          child.percentOfTime,
          child.kind,
          child.successors
        );
        snChildren.push(sn);
      });
    }
    return snChildren;
  }
}

export class SkillFlatNode {
  constructor(
    public expandable: boolean,
    public name: string,
    public fontSize: string,
    public percentOfTime: number,
    public kind: string,
    public level: number
  ) {}
}
