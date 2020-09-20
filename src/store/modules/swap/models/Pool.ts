import { Model } from "@vuex-orm/core";
import Reserve from "./Reserve";
import ReserveBalance from "./ReserveBalance";
import Token from "./Token";

// export interface Relay {
//     id: string;
//     reserves: TokenWithWeight[];
//     anchor: Anchor;
//     contract: ContractAccount;
//     fee: number;
//     version: string;
//     converterType: PoolType;
//     owner: string;
//   }

//   export interface RelayWithReserveBalances extends Relay {
//     reserveBalances: { id: string; amount: string }[];
//   }

export default class Pool extends Model {
  static entity = "pools";

  static fields() {
    return {
      id: this.attr(null),
      fee: this.attr(""),
      token: this.hasOne(Token, "token_id"),
      converterType: this.attr(""),
      version: this.attr("")
    };
  }
}
