import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";

import { GeneralModule } from "./modules/general";
import { EosTransitModule } from "./modules/wallet/eosWallet";
import { EthereumModule } from "./modules/wallet/ethWallet";
import { EosBancorModule } from "./modules/swap/eosBancor";
import { EthBancorModule } from "./modules/swap/ethBancor";
import { BancorModule } from "./modules/swap/index";
import { WalletModule } from "./modules/wallet/index";
import { NetworkModule } from "./modules/network/index";
import { EosNetworkModule } from "./modules/network/eosNetwork";
import { createProxy, extractVuexModule } from "vuex-class-component";
import Token from "./modules/swap/models/Token";
import Pool from "./modules/swap/models/Pool";
import Reserve from "./modules/swap/models/Reserve";
import ReserveBalance from "./modules/swap/models/ReserveBalance";
import TokenReserve from "./modules/swap/models/TokenReserve";
import TokenMeta from "./modules/swap/models/TokenMeta";
import V1Pool from "./modules/swap/models/V1Pool";
import V2Pool from "./modules/swap/models/V2Pool";
import V2Reserve from "./modules/swap/models/V2Reserve";



const database = new VuexORM.Database();

database.register(Token);
database.register(Pool);
database.register(Reserve);
database.register(ReserveBalance);
database.register(TokenReserve);
database.register(TokenMeta);
database.register(V1Pool);
database.register(V2Pool);
database.register(V2Reserve);

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(EosBancorModule),
    ...extractVuexModule(EthBancorModule),
    ...extractVuexModule(GeneralModule),
    ...extractVuexModule(EosTransitModule),
    ...extractVuexModule(EthereumModule),
    ...extractVuexModule(BancorModule),
    ...extractVuexModule(WalletModule),
    ...extractVuexModule(NetworkModule),
    ...extractVuexModule(EosNetworkModule)
  },
  plugins: [VuexORM.install(database)],
  strict: process.env.NODE_ENV !== "production"
});

export const vxm = {
  general: createProxy(store, GeneralModule),
  wallet: createProxy(store, WalletModule),
  eosWallet: createProxy(store, EosTransitModule),
  ethWallet: createProxy(store, EthereumModule),
  eosBancor: createProxy(store, EosBancorModule),
  ethBancor: createProxy(store, EthBancorModule),
  bancor: createProxy(store, BancorModule),
  eosNetwork: createProxy(store, EosNetworkModule),
  network: createProxy(store, NetworkModule)
};
