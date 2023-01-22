import { useSyncExternalStore } from "react";

const subscribe = (callback) => {
  window.addEventListener("scroll", callback);
  return () => {
    window.removeEventListener("scroll", callback);
  };
};

export default function useScrollYStatus(NodeRef) {
  return useSyncExternalStore(subscribe, () => {
    const scrolledY = Window.scrollY;
    NodeRef.current.style.top = scrolledY > 400 ? "50px" : "400px";
  });
}
