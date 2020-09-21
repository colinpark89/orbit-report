export class Satellite {
  name: string;
  orbitType: string;
  type: string;
  operational: boolean;
  launchDate: string;
  showWarning: boolean

constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
    this.name = name;
    this.type = type;
    this.launchDate = launchDate;
    this.operational = operational;
    this.orbitType = orbitType;
    this.shouldShowWarning();
  }

  shouldShowWarning = function() {
    if (this.type.toLowerCase() === "space debris") {
     this.showWarning = true;
    } else {
      this.showWarning = false
    }
  }
}