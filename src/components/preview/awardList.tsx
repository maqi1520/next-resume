import React, { ReactElement } from "react";
import { View, Link, Text, Path } from "@react-pdf/renderer";
import { styles as s } from "./style";

interface awardItem {
  time: string;
  info: string;
}

interface Props {
  data: awardItem[];
}

export default function awardList({ data }: Props): ReactElement {
  return (
    <View style={s.wrapper}>
      <View style={s.wrapper_header}>
        <Text>更多信息</Text>
      </View>
      <View>
        {data.map((item, index) => {
          return (
            <View style={s.mb8} key={index}>
              <View style={s.flex_row}>
                <Text>{item.info}</Text>
                <Text>{item.time}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
