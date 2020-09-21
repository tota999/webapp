import Pool from "./Pool";
import Token from "./Token";

export default class V1Pool extends Pool {
  static entity = "v1pool";
  static baseEntity = "pools";

  static fields() {
    return {
      ...super.fields(),
      poolToken: this.hasOne(Token, "token_id", "id")
    };
  }
}
