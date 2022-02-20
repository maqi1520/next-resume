/* eslint-disable jsx-a11y/alt-text */

import React, { ReactElement } from "react";
import { View, Image } from "@react-pdf/renderer";
import { styles as s } from "./style";

interface Props {
  data: {
    url: string;
    display: boolean;
    circle: boolean;
    theme: string;
  };
}

export default function Avatar({ data }: Props): ReactElement {
  if (!data.display) {
    return null;
  }
  return (
    <View style={s.avatar_warpper}>
      <Image style={data.circle ? s.avatar : s.avatar_rect} src={data.url} />
    </View>
  );
}
