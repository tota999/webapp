import { Model } from "@vuex-orm/core";
import Reserve from "./Reserve";

export default class ReserveBalance extends Model {
  static entity = "reservebalances";

  static fields() {
    return {
      id: this.attr(null),
      weiBalance: this.attr(""),
      reserve: this.hasOne(Reserve, "id")
    };
  }
}
