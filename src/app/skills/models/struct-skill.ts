import {BehaviorSubject} from 'rxjs';

export class StructSkill {
  /** Will be used in the future */
    static DefaultFontSize = '12px';
    static DefaultHeight: string = "80px";
    static CategoryWeightThreshold = 0.5;  

    item: string;
    fontSize: string;
    percentOfTime: number;
    children: StructSkill[];
    public expandCollapseIcon: string = 'arrow_drop_down_circle';  
      
    public nodeAlwaysVisible: boolean = false;
    private _nodeVisible: boolean = false;

    constructor(itemObj: any, fontSize: any, percentOfTime: any, childrenArr?: any[]) {    
        this.item = itemObj;
        this.fontSize = fontSize;
        this. percentOfTime = percentOfTime;
        this.children = childrenArr ? StructSkill.CreateChildrenArray(childrenArr): null;    
    }

    static CreateChildrenArray(childrenArr?: any[]) {
        let snChildren = new Array<StructSkill>();
        childrenArr.map(child => {
          let sn = new StructSkill(child.item, child.fontSize, child.percentOfTime, child.successors);
          snChildren.push(sn);
        });
        return snChildren;
    }                
}

export class SkillFlatNode {
    constructor(public expandable: boolean, public name: string, public fontSize: string, public percentOfTime: number, public level: number) {}
 }