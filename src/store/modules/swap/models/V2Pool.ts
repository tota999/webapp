import Pool from "./Pool";
import V2Reserve from "./V2Reserve";

export default class V2Pool extends Pool {
  static entity = "v2pool";
  static baseEntity = "pools";

  static fields() {
    return {
      ...super.fields(),
      poolContainerAddress: this.attr(''),
      reserves: this.hasMany(V2Reserve, "pool_id"),
    };
  }
}
