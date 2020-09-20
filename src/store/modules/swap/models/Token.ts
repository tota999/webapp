import { Model } from "@vuex-orm/core";
import Pool from "./Pool";

export default class Post extends Model {
  static entity = "tokens";

  static fields() {
    return {
      id: this.attr(null),
      token_id: this.attr(null),
      decimals: this.attr(0),
      symbol: this.attr("")
    };
  }
}
