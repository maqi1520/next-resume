/* eslint-disable jsx-a11y/alt-text */

import React, { ReactElement } from "react";
import { View, Link, Image } from "@react-pdf/renderer";
import { styles as s } from "./style";

interface Props {
  data: {
    url: string;
    display: boolean;
  };
}

export default function Avatar({ data }: Props): ReactElement {
  if (!data.display) {
    return null;
  }
  return (
    <View style={s.avatar_warpper}>
      <Image style={s.avatar} src={data.url} />
    </View>
  );
}
