import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { FarmerProfile } from "./matching";
import type { LangCode } from "./i18n";

export interface FinderState {
  mode: "speak" | "type" | null;
  lang: LangCode;
  profile: FarmerProfile;
  submitted: boolean;
}

const empty: FinderState = {
  mode: null,
  lang: "en",
  profile: { name: "", state: "", district: "", crop: "", landAcres: "", method: "", category: "", problem: "" },
  submitted: false,
};

interface Ctx {
  state: FinderState;
  update: (p: Partial<FinderState>) => void;
  updateProfile: (p: Partial<FarmerProfile>) => void;
  photos: { url: string; name: string }[];
  setPhotos: (p: { url: string; name: string }[]) => void;
  hydrated: boolean;
}

const FinderCtx = createContext<Ctx | null>(null);
const KEY = "krishisetu-finder"; // session only, this browser tab

export function FinderProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<FinderState>(empty);
  const [photos, setPhotos] = useState<{ url: string; name: string }[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(KEY);
      if (raw) setState({ ...empty, ...JSON.parse(raw) });
    } catch { /* ignore */ }
    setHydrated(true);
  }, []);
  useEffect(() => {
    if (hydrated) sessionStorage.setItem(KEY, JSON.stringify(state));
  }, [state, hydrated]);

  return (
    <FinderCtx.Provider
      value={{
        state,
        hydrated,
        update: (p) => setState((s) => ({ ...s, ...p })),
        updateProfile: (p) => setState((s) => ({ ...s, profile: { ...s.profile, ...p } })),
        photos,
        setPhotos,
      }}
    >
      {children}
    </FinderCtx.Provider>
  );
}

export function useFinder() {
  const c = useContext(FinderCtx);
  if (!c) throw new Error("useFinder must be inside FinderProvider");
  return c;
}
