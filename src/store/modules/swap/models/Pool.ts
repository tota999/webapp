import { Model } from "@vuex-orm/core";
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

  id!: string;
  owner!: string;
  fee!: string;
  reserves!: Reserve[];
  converterType!: string;
  version!: string;
  converterContract!: string;
  anchorContract!: string;
}
