import { Model } from "@vuex-orm/core";
import Token from "./Token";
import ReserveBalance from "./ReserveBalance";
import TokenReserve from "./TokenReserve";
import ReserveFeed from "./ReserveFeed";

export default class Reserve extends Model {
  static entity = "reserves";

  static fields() {
    return {
      id: this.attr(null), 
      pool_id: this.attr(null),
      decWeight: this.attr(""),
      feed: this.hasOne(ReserveFeed, 'reserve_id'),
      token: this.belongsToMany(Token, TokenReserve, "reserve_id", "token_id"),
      balance: this.hasOne(ReserveBalance, "reserve_id")
    };
  }
}
