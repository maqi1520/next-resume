import React, { ReactChildren } from "react";
import { Svg, Path } from "@react-pdf/renderer";
import { styles as s } from "../preview/style";

export default function Icon({
  d,
  color = "#fff",
  fill = "none",
  style = s.profile_icon,
}: {
  d: string;
  color?: string;
  fill?: string;
  style?: any;
}) {
  return (
    <Svg style={style} viewBox="0 0 24 24">
      <Path fill={fill} stroke={color} d={d}></Path>
    </Svg>
  );
}

export function IconGithub({ color = "#fff" }: { color?: string }) {
  return (
    <Svg style={s.profile_icon} viewBox="0 0 16 16">
      <Path
        fill="none"
        stroke={color}
        d="M7.975 16a9.39 9.39 0 003.169-.509c-.473.076-.652-.229-.652-.486l.004-.572c.003-.521.01-1.3.01-2.197 0-.944-.316-1.549-.68-1.863 2.24-.252 4.594-1.108 4.594-4.973 0-1.108-.39-2.002-1.032-2.707.1-.251.453-1.284-.1-2.668 0 0-.844-.277-2.77 1.032A9.345 9.345 0 008 .717c-.856 0-1.712.113-2.518.34C3.556-.24 2.712.025 2.712.025c-.553 1.384-.2 2.417-.1 2.668-.642.705-1.033 1.612-1.033 2.707 0 3.852 2.342 4.72 4.583 4.973-.29.252-.554.692-.642 1.347-.58.264-2.027.692-2.933-.831-.19-.302-.756-1.045-1.549-1.032-.843.012-.34.478.013.667.428.239.919 1.133 1.032 1.422.201.567.856 1.65 3.386 1.184 0 .55.006 1.079.01 1.447l.003.428c0 .265-.189.567-.692.479 1.007.34 1.926.516 3.185.516z"
      ></Path>
    </Svg>
  );
}

export function IconLocation({ color = "#fff" }: { color?: string }) {
  return (
    <Svg style={s.profile_icon} viewBox="0 0 24 24">
      <Path
        fill="none"
        stroke={color}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      ></Path>
      <Path
        fill="none"
        stroke={color}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      ></Path>
    </Svg>
  );
}

export function IconAcademicCap({ color = "#fff" }: { color?: string }) {
  return (
    <Svg style={s.profile_icon} viewBox="0 0 24 24">
      <Path fill="none" stroke={color} d="M12 14l9-5-9-5-9 5 9 5z"></Path>
      <Path
        fill="none"
        stroke={color}
        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
      ></Path>
      <Path
        fill="none"
        stroke={color}
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
      ></Path>
    </Svg>
  );
}

export function IconStar({
  active,
  color = "#fadb14",
}: {
  active: boolean;
  color?: string;
}) {
  return (
    <Svg style={s.profile_icon} viewBox="0 0 24 24">
      <Path
        fill={active ? color : "#f0f0f0"}
        stroke={active ? color : "#f0f0f0"}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      ></Path>
    </Svg>
  );
}
