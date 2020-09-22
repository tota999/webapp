import { Model } from "@vuex-orm/core";
import Reserve from "./Reserve";
import TokenMeta from "./TokenMeta";
import TokenReserve from "./TokenReserve";

export default class Token extends Model {
  static entity = "tokens";

  static fields() {
    return {
      id: this.attr(null),
      token_id: this.attr(""),
      reserves: this.belongsToMany(
        Reserve,
        TokenReserve,
        "token_id",
        "reserve_id"
      ),
      contract: this.attr(""),
      decimals: this.attr(0),
      symbol: this.attr(""),
      meta: this.hasOne(TokenMeta, "meta_id")
    };
  }

  id!: string;
  token_id!: string;
  reserves!: Reserve[];
  contract!: string;
  decimals!: string;
  symbol!: string;
  meta!: TokenMeta;
}
