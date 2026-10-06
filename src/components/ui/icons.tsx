import type { SVGProps } from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconCoolBreeze(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12 L12 5 L20 12" />
      <path d="M6 12 V20 H18 V12" />
      <path d="M14 9 Q18 9 19 6" />
    </svg>
  );
}

export function IconSolar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9 L11 6 L11 13 L4 16 Z" />
      <path d="M13 6 L20 9 L20 16 L13 13 Z" />
      <circle cx="18" cy="4.5" r="1.6" />
      <path d="M18 1.6 V2.4 M20.3 3 L19.7 3.4 M15.7 3 L16.3 3.4" />
    </svg>
  );
}

export function IconWaterDrop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 C12 3 6.5 10 6.5 14.5 C6.5 17.8 9 20 12 20 C15 20 17.5 17.8 17.5 14.5 C17.5 10 12 3 12 3 Z" />
    </svg>
  );
}

export function IconSprout(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20 V10" />
      <path d="M12 10 C12 6 8 5 5 5.5 C5.5 9 8 11 12 10 Z" />
      <path d="M12 13 C12 10 15 9 18 9.5 C17.5 12.5 15 14 12 13 Z" />
    </svg>
  );
}

export function IconEcoMaterial(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 15 C4 10 8 6 12 6 C16 6 20 10 20 15" />
      <path d="M4 15 H20" />
      <path d="M9 15 C9 11.5 10.5 8.5 12 6" />
      <path d="M15 15 C15 11.5 13.5 8.5 12 6" />
    </svg>
  );
}

export function IconDaylight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="12" height="16" rx="0.5" />
      <path d="M8 8 H12 M8 12 H12 M8 16 H12" />
      <circle cx="19" cy="7" r="1.8" />
      <path d="M19 3.2 V4.3 M22.5 7 H21.4 M20.7 4.7 L20 5.4 M20.7 9.3 L20 8.6" />
    </svg>
  );
}

export function IconBed(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 19 V9.5 A1.5 1.5 0 0 1 4.5 8 H10 A1.5 1.5 0 0 1 11.5 9.5 V13" />
      <path d="M11.5 13 H21 V19" />
      <path d="M3 15.5 H21" />
      <circle cx="6.3" cy="10.8" r="1.1" />
    </svg>
  );
}

export function IconPool(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="12" rx="1.2" />
      <path d="M3 19.5 C4.5 18.3 5.5 18.3 7 19.5 C8.5 20.7 9.5 20.7 11 19.5 C12.5 18.3 13.5 18.3 15 19.5 C16.5 20.7 17.5 20.7 19 19.5 C20 18.7 20.7 18.7 21 19" />
    </svg>
  );
}

export function IconSunset(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 14 A6 6 0 0 1 16 14" />
      <path d="M3 14 H17 M2 17.5 H18" />
      <path d="M10 4.5 V7 M4.6 8 L6.2 9.2 M15.4 8 L13.8 9.2" />
    </svg>
  );
}

export function IconGrid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="0.8" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="0.8" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="0.8" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="0.8" />
    </svg>
  );
}

export function IconHost(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M2 14 L6.5 9.5 C7.3 8.7 8.5 8.7 9.2 9.4 L11 11.2" />
      <path d="M22 14 L17.5 9.5 C16.7 8.7 15.5 8.7 14.8 9.4 L13 11.2" />
      <path d="M9 12 L11.3 14.3 C12 15 12 16 11.3 16.6 C10.6 17.3 9.6 17.3 8.9 16.6 L6.5 14.2" />
      <path d="M15 12 L12.7 14.3" />
    </svg>
  );
}

export function IconCar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 15.5 L5 10 A2 2 0 0 1 6.9 8.5 H17.1 A2 2 0 0 1 19 10 L20.5 15.5" />
      <rect x="2.5" y="15.5" width="19" height="4.5" rx="1.2" />
      <circle cx="6.5" cy="17.7" r="0.9" />
      <circle cx="17.5" cy="17.7" r="0.9" />
    </svg>
  );
}

export function IconSofa(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12 V9.5 A1.5 1.5 0 0 1 5.5 8 H18.5 A1.5 1.5 0 0 1 20 9.5 V12" />
      <path d="M3 12 H21 V16.5 A1 1 0 0 1 20 17.5 H4 A1 1 0 0 1 3 16.5 Z" />
      <path d="M4 17.5 V19.5 M20 17.5 V19.5" />
    </svg>
  );
}

export function IconGreenGarden(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 14.5 C4 17.8 6.7 20 10.5 20 H15 C17 20 18.5 18.6 18.5 17.1 C18.5 15.6 17 14.6 15.5 15.1 L10.8 16.7" />
      <path d="M4 14.5 C4 11.3 5.8 9.3 8.5 9.3 C9.6 9.3 10.6 9.9 11.1 11" />
      <path d="M13.8 8.3 C13.8 5.5 11.4 3.8 8.6 4 C8.7 6.6 10.7 8.5 13.8 8.3 Z" />
    </svg>
  );
}

export function IconBirdHerb(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12 C7 9.5 10 9.5 10.5 12 C11.5 10.5 13.5 10.5 13 13 C15 12 16.5 13 15.5 15" />
      <circle cx="6.3" cy="11" r="0.4" fill="currentColor" stroke="none" />
      <path d="M17 20 V13 M17 15 C17 13.5 18.5 13 19.5 13.5 M17 17 C17 15.5 15.5 15 14.5 15.5" />
    </svg>
  );
}

export function IconChat(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 6 A2 2 0 0 1 7 4 H17 A2 2 0 0 1 19 6 V13 A2 2 0 0 1 17 15 H9.5 L5.5 18.5 V15 A2 2 0 0 1 5 13 Z" />
    </svg>
  );
}

export function IconPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21 C12 21 5.5 13.6 5.5 9 A6.5 6.5 0 0 1 18.5 9 C18.5 13.6 12 21 12 21 Z" />
      <circle cx="12" cy="9" r="2.2" />
    </svg>
  );
}

export function IconKey(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="7.5" cy="12" r="3.8" />
      <path d="M11 12 H20.5 M16.5 12 V15.5 M19 12 V14.5" />
    </svg>
  );
}

export function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6.5 H20 M4 12 H20 M4 17.5 H20" />
    </svg>
  );
}

export function IconClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5.5 5.5 L18.5 18.5 M18.5 5.5 L5.5 18.5" />
    </svg>
  );
}

export function IconDownload(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 V14.5" />
      <path d="M7.5 10 L12 14.5 L16.5 10" />
      <path d="M4.5 18.5 H19.5" />
    </svg>
  );
}

export function IconAlert(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5 V13" />
      <circle cx="12" cy="16.2" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12.5 L9.5 17.5 L19.5 6.5" />
    </svg>
  );
}

export function IconBolt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M13 3 L5.5 13.5 H11.5 L10.5 21 L18.5 10 H12.5 Z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSolarHotWater(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 14 H14.5 M5 14 V12 H13 V14" />
      <path d="M5 14 V17 C5 18.2 6 19 7.2 19 H11 C12.2 19 13 18.2 13 17 V14" />
      <path d="M9 19 V21" />
      <circle cx="17.5" cy="6.5" r="1.8" />
      <path d="M17.5 2.8 V3.6 M20.6 4.2 L20 4.8 M14.4 4.2 L15 4.8 M21.2 6.5 H20.4" />
    </svg>
  );
}

export function IconRain(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M7 14 H17 C19 14 20.5 12.6 20.5 10.8 C20.5 9 19 7.6 17.2 7.7 C16.6 5.5 14.6 4 12.3 4 C9.6 4 7.4 6 7.2 8.6 C5.2 8.7 3.5 10.1 3.5 11.4 C3.5 12.9 5 14 7 14 Z" />
      <path d="M8.5 17 L8 19 M12 17 L11.5 19 M15.5 17 L15 19" />
    </svg>
  );
}

export function IconEvCharge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 20 V5 C5 4 5.8 3.5 6.6 3.5 H12.4 C13.2 3.5 14 4 14 5 V20" />
      <path d="M3.5 20 H15.5" />
      <path d="M10.2 7 L8 11 H11 L8.8 15" />
      <path d="M14 10 H16.5 C17.3 10 18 10.7 18 11.5 V16.5 C18 17.3 18.7 18 19.5 18 C20.3 18 21 17.3 21 16.5 V9 L19.5 7" />
    </svg>
  );
}

export function IconCompostBin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 7 H19.5 M10 7 V5 H14 V7" />
      <path d="M6 7 L7 20 H17 L18 7" />
      <path d="M12 17 V13.5 M12 13.5 C12 11.8 10.4 11 9 11.3 C9.2 12.9 10.5 13.8 12 13.5 Z M12 14.5 C12 13 13.4 12.3 14.8 12.6 C14.6 14 13.4 14.8 12 14.5 Z" />
    </svg>
  );
}

export function IconBreezeLeaf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M15 20 V12" />
      <path d="M15 12 C15 9 17.5 7.5 20 8 C19.8 10.8 17.6 12.4 15 12 Z" />
      <path d="M15 14.5 C15 12.4 13 11.3 11 11.8 C11.3 13.8 13 15 15 14.5 Z" />
      <path d="M3 8 C5 8 5.8 6.5 5 5.4 C4.2 4.4 2.8 5 3 6.2" />
      <path d="M3 11 H9 C10.5 11 11 12.6 10 13.4" />
    </svg>
  );
}

export function IconSun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3 V5 M12 19 V21 M3 12 H5 M19 12 H21 M5.6 5.6 L7 7 M17 17 L18.4 18.4 M5.6 18.4 L7 17 M17 7 L18.4 5.6" />
    </svg>
  );
}

export function IconWind(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 9 H14 C16 9 17 7.5 16.5 6.2 C16 5 14.3 4.8 13.6 6" />
      <path d="M3 13 H18 C20 13 21 14.5 20.5 15.8 C20 17 18.3 17.2 17.6 16" />
      <path d="M3 17 H11" />
    </svg>
  );
}

export function IconThermometer(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M10 14.5 V5 C10 3.9 10.9 3 12 3 C13.1 3 14 3.9 14 5 V14.5 C15.2 15.2 16 16.5 16 18 C16 20.2 14.2 22 12 22 C9.8 22 8 20.2 8 18 C8 16.5 8.8 15.2 10 14.5 Z" />
      <path d="M12 11 V18" />
      <path d="M17 6 H19 M17 9 H19 M17 12 H19" />
    </svg>
  );
}

export function IconMoon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M19 15.5 C17.9 15.8 16.8 16 15.6 16 C11.4 16 8 12.6 8 8.4 C8 6.4 8.8 4.6 10 3.2 C6 4.1 3 7.7 3 12 C3 17 7 21 12 21 C15.3 21 18.1 19.2 19.6 16.5" />
    </svg>
  );
}

export function IconLeaf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 19 C5 11 10 5 20 4 C20 13 15 19 7 19 Z" />
      <path d="M5 19 L13 11" />
    </svg>
  );
}

export function IconWalk(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="13" cy="4.5" r="1.6" />
      <path d="M12 8 L10 13 L13 16 L14 21" />
      <path d="M10 13 L8 21" />
      <path d="M12 8 L15 11 L18 12" />
      <path d="M12 8 L8.5 10 L7 13" />
    </svg>
  );
}

export function IconLotus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 17 C9.5 14.5 9.5 10.5 12 7 C14.5 10.5 14.5 14.5 12 17 Z" />
      <path d="M12 17 C8.5 17 5.5 14.5 4.5 11 C7.5 11 10 12.8 12 17" />
      <path d="M12 17 C15.5 17 18.5 14.5 19.5 11 C16.5 11 14 12.8 12 17" />
      <path d="M4 19.5 H20" />
    </svg>
  );
}

export function IconPeople(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20 C3.5 16.4 6 14 9 14 C12 14 14.5 16.4 14.5 20" />
      <circle cx="16.5" cy="9" r="2.4" />
      <path d="M15.5 14.2 C18.4 14 20.5 16.2 20.5 19.5" />
    </svg>
  );
}
