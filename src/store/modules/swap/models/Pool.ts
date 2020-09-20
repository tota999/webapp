import { Model } from "@vuex-orm/core";
import Reserve from "./Reserve";

export default class Pool extends Model {
  static entity = "pools";

  static fields() {
    return {
      id: this.attr(null),
      fee: this.attr(""),
      reserves: this.hasMany(Reserve, "pool_id"),
      converterType: this.attr(""),
      version: this.attr("")
    };
  }
}
