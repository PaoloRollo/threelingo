"use client";

import { useEffect, useState } from "react";
import { Web3AuthModalPack, Web3AuthConfig } from "@safe-global/auth-kit";
import { Web3AuthOptions } from "@web3auth/modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import {
  ADAPTER_EVENTS,
  CHAIN_NAMESPACES,
  WALLET_ADAPTERS,
} from "@web3auth/base";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/lib/store/user-store";

export const useWeb3Auth = (automaticSignIn: boolean = false) => {
  const [web3Auth, setWeb3Auth] = useState<Web3AuthModalPack | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const setAddress = useUserStore((state) => state.setAddress);
  const setSafes = useUserStore((state) => state.setSafes);
  const router = useRouter();

  useEffect(() => {
    initializeWeb3Auth();
  }, []);

  // useEffect(() => {
  //   if (user) {
  //     router.push("/learn");
  //   }
  // }, [user]);

  useEffect(() => {
    if (web3Auth) {
      web3Auth.subscribe(ADAPTER_EVENTS.CONNECTED, async (u) => {
        const eoa = await web3Auth.getAddress();
        const safes = await web3Auth.getSafes(
          "https://safe-transaction-zkevm.safe.global"
        );
        setAddress(eoa);
        setSafes(safes || []);
        const userInfo = await web3Auth.getUserInfo();
        setUser(userInfo);
        router.push("/learn");
        console.log(eoa, safes, userInfo);
      });

      web3Auth.subscribe(ADAPTER_EVENTS.DISCONNECTED, () => {
        setUser(null);
        setAddress("");
        setSafes([]);
      });
    }
  }, [web3Auth]);

  const initializeWeb3Auth = async () => {
    try {
      const options: Web3AuthOptions = {
        clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID as string,
        web3AuthNetwork: "testnet",
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: "0x44d",
          rpcTarget: "https://polygon-zkevm.drpc.org",
        },
        uiConfig: {
          theme: "dark",
          loginMethodsOrder: ["google", "facebook"],
        },
      };

      const modalConfig = {
        [WALLET_ADAPTERS.TORUS_EVM]: {
          label: "torus",
          showOnModal: false,
        },
        [WALLET_ADAPTERS.METAMASK]: {
          label: "metamask",
          showOnDesktop: true,
          showOnMobile: true,
        },
      };

      const openloginAdapter = new OpenloginAdapter({
        loginSettings: {
          mfaLevel: "mandatory",
        },
        adapterSettings: {
          uxMode: "popup",
          whiteLabel: {
            name: "Safe",
          },
        },
      });

      const web3AuthConfig: Web3AuthConfig = {
        txServiceUrl: "https://safe-transaction-zkevm.safe.global",
      };

      // Instantiate and initialize the pack
      const web3AuthModalPack = new Web3AuthModalPack(web3AuthConfig);
      await web3AuthModalPack.init({
        options,
        adapters: [openloginAdapter],
        modalConfig,
      });
      setWeb3Auth(web3AuthModalPack);
      if (automaticSignIn) {
        const { eoa, safes } = await web3AuthModalPack.signIn();
        setAddress(eoa);
        setSafes(safes || []);
        const userInfo = await web3AuthModalPack.getUserInfo();
        setUser(userInfo);
      }
    } catch (e) {
      console.error(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (w3auth = undefined) => {
    if (!web3Auth) throw new Error("web3auth not initialized");
    const { eoa, safes } = await web3Auth.signIn();
    setAddress(eoa);
    setSafes(safes || []);
    const userInfo = await web3Auth.getUserInfo();
    setUser(userInfo);
    console.log("hereeeee");
    return { eoa, safes };
  };

  const signOut = async () => {
    if (!web3Auth) throw new Error("web3auth not initialized");
    setUser(null);
    return await web3Auth.signOut();
  };

  return { web3Auth, loading, error, signIn, signOut };
};
