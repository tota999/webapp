import Pool from "./Pool";
import Token from "./Token";

export default class V2Pool extends Pool {
  static entity = "v2pool";
  static baseEntity = "pools";

  static fields() {
    return {
      ...super.fields(),
      poolTokens: this.hasMany(Token, "token_id", "id")
    };
  }
}
