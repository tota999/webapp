import { Model } from "@vuex-orm/core";
import Token from "./Token";

export default class Reserve extends Model {
  static entity = "reserves";

  static fields() {
    return {
      id: this.attr(null),
      reserve_id: this.attr(null),
      decWeight: this.attr(""),
      token: this.hasOne(Token, "token_id")
    };
  }
}
