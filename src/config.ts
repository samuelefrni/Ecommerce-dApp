import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { injected, walletConnect } from "wagmi/connectors";
import { projectId } from "./utils/utils";

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected(), walletConnect({ projectId })],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
