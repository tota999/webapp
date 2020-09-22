import { Model } from "@vuex-orm/core";

export default class Feed extends Model {
  static entity = "feeds";

  static fields() {
    return {
      id: this.attr(null),
      reserve_id: this.attr(null),
      liqDepth: this.string("0"),
      costByNetworkUsd: this.number(0),
      change24H: this.number(0),
      volume24H: this.number(0),
      priority: this.number(0)
    };
  }

  id!: string;
  reserve_id!: string;
  liqDepth!: string;
  costByNetworkUsd!: number;
  change24H!: number;
  volume24H!: number;
  priority!: number;
}
