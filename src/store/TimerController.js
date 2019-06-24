import { observable } from "mobx";

class TimerController {
  @observable abcd = "DEFH";

  changeAbcd = () => {
    this.abcd = "IJKL";
  };
}

export default new TimerController();
