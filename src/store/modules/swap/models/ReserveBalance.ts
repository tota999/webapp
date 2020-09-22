import { Model } from "@vuex-orm/core";

export default class ReserveBalance extends Model {
  static entity = "reservebalances";

  static fields() {
    return {
      id: this.attr(null),
      reserve_id: this.attr(null),
      weiBalance: this.attr("")
    };
  }

  weiBalance!: string;
}
