import { usePathname } from "next/navigation";

export function useIsPathName(pathName: string) {
  const path = usePathname();
  return path === pathName;
}
