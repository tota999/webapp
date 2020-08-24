import Dexie from "dexie";
import { EthNetworkVariables, Converter } from "@/types/bancor";
import {
  EthNetworks,
  RegisteredContracts,
  ConverterAndAnchor
} from "@/api/helpers";

interface PoolDbObject {
  chainId: EthNetworks;
  poolId: string;
  converterAddress: string;
}

interface PoolDbInstance extends PoolDbObject {
  id: string;
}

interface RegisteredContractsParam extends RegisteredContracts {
  id: number;
}

class PoolDatabase extends Dexie {
  public pools: Dexie.Table<PoolDbObject, number>;
  public bancorContracts: Dexie.Table<RegisteredContractsParam, number>;

  public constructor() {
    super("PoolDatabase");
    this.version(1).stores({
      pools: "++id,&poolId,chainId",
      bancorContracts: "id"
    });

    this.pools = this.table("pools");
    this.bancorContracts = this.table("bancorContracts");
  }

  async setBancorContractAddresses(
    chainId: EthNetworks,
    contracts: RegisteredContracts
  ) {
    const existingKey = await this.bancorContracts.put(
      { ...contracts, id: chainId },
      chainId
    );
    return existingKey;
  }

  async getAnchorsAndConverters(
    chainId: EthNetworks
  ): Promise<ConverterAndAnchor[]> {
    const poolObjects = await this.pools
      .where("chainId")
      .equals(chainId)
      .toArray();
    if (poolObjects.length == 0) throw new Error("No converters stored");
    return poolObjects.map(
      (x): ConverterAndAnchor => ({
        converterAddress: x.converterAddress,
        anchorAddress: x.poolId
      })
    );
  }

  async setAnchorsAndConverters(anchorsAndConverters: ConverterAndAnchor[]) {
    await this.pools.toCollection().delete();
    await this.pools.bulkAdd(
      anchorsAndConverters.map(({ anchorAddress, converterAddress }) => ({
        poolId: anchorAddress,
        converterAddress: converterAddress,
        chainId: 1
      }))
    );
  }

  async getBancorContractAddresses(chainId: EthNetworks) {
    const result = await this.bancorContracts.get(chainId);
    if (!result) throw new Error("f");
    return result;
  }

  async getPool(poolId: string) {
    return this.pools.where("poolId").equalsIgnoreCase(poolId);
  }

  async getPools() {
    return this.pools.toArray();
  }

  async addPool(pool: PoolDbObject) {
    const poolRes = await this.pools.add(pool);
    console.log(poolRes, "was added");
    return poolRes;
  }

  async addPools() {}
}

export const db = new PoolDatabase();
