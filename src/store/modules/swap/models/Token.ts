import { Model } from "@vuex-orm/core";
import Reserve from "./Reserve";
import TokenReserve from "./TokenReserve";

export default class Token extends Model {
  static entity = "tokens";

  static fields() {
    return {
      id: this.attr(null),
      reserves: this.belongsToMany(
        Reserve,
        TokenReserve,
        "token_id",
        "reserve_id"
      ),
      contract: this.attr(""),
      decimals: this.attr(0),
      symbol: this.attr("")
    };
  }
}
