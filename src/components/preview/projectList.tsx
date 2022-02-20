import React, { ReactElement } from "react";
import { View, Text } from "@react-pdf/renderer";
import { styles as s } from "./style";

interface Item {
  name: string;
  role: string;
  time: string[];
  desc: string;
  content: string;
}

interface Props {
  data: Item[];
}

export default function ProjectList({ data }: Props): ReactElement {
  return (
    <View style={s.section}>
      <View style={s.section_header}>
        <Text>项目经历</Text>
      </View>
      <View>
        {data.map((item, index) => {
          return (
            <View style={s.mb8} key={index}>
              <View style={s.flex_row}>
                <View style={s.flex_row}>
                  <Text style={s.company}>{item.name}</Text>
                  {Array.isArray(item.time) && (
                    <Text style={s.department}>{item.time.join("/")}</Text>
                  )}
                </View>
                <View style={s.tag}>
                  <Text>{item.role}</Text>
                </View>
              </View>
              <View style={s.mt4}>
                <Text>{item.desc}</Text>
              </View>
              <View style={s.mt4}>
                <Text>{item.content}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
