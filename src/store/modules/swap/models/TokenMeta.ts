import { Model } from "@vuex-orm/core";

export default class TokenMeta extends Model {
  static entity = "tokenmetas";

  static fields() {
    return {
      id: this.attr(null),
      meta_id: this.attr(""),
      contract: this.attr(""),
      image: this.attr(
        "https://ropsten.etherscan.io/images/main/empty-token.png"
      ),
      name: this.attr(""),
      symbol: this.attr("")
    };
  }

  id!: string;
  meta_id!: string;
  contract!: string;
  image!: string;
  name!: string;
  symbol!: string;
}
