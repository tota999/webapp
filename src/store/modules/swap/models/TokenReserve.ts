import { Model } from "@vuex-orm/core";

export default class TokenReserve extends Model {
  static entity = "tokenreserves";

  static primaryKey = ["token_id", "reserve_id"];

  static fields() {
    return {
      token_id: this.attr(null),
      reserve_id: this.attr(null)
    };
  }
}
