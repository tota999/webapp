import { Model } from "@vuex-orm/core";
import BigNumber from "bignumber.js";
import Reserve from "./Reserve";

export default class Pool extends Model {
  static entity = "pools";

  static fields() {
    return {
      id: this.attr(null),
      network: this.attr("ETH"),
      converterContract: this.attr(null),
      anchorContract: this.attr(null),
      owner: this.attr(""),
      fee: this.attr(""),
      reserves: this.hasMany(Reserve, "pool_id"),
      converterType: this.attr(""),
      version: this.attr("")
    };
  }

  get liqDepth() {
    return this.reserves
      .reduce(
        (acc, item) => new BigNumber(item.feed.liqDepth).plus(acc),
        new BigNumber("0")
      )
      .toString();
  }

  id!: string;
  owner!: string;
  fee!: string;
  reserves!: Reserve[];
  converterType!: string;
  version!: string;
  converterContract!: string;
  anchorContract!: string;
}
