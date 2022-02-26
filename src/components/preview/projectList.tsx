import React, { ReactElement } from "react";
import { View, Text } from "@react-pdf/renderer";
import { styles as s } from "./style";
import Icon from "../icon";

interface Item {
  name: string;
  role: string;
  time: string[];
  desc: string;
  content: string;
}

interface Props {
  data: Item[];
  theme: { primaryColor: string; secondaryColor: string };
}

export default function ProjectList({ data, theme }: Props): ReactElement {
  return (
    <View style={s.section}>
      <View
        style={{
          ...s.section_header,
          borderBottom: `2px solid ${theme.primaryColor}`,
        }}
      >
        <Text style={{ color: theme.primaryColor }}>项目经历</Text>
      </View>
      <View>
        {data.map((item, index) => {
          return (
            <View style={s.mb8} key={index}>
              <View style={s.flex_row}>
                <View style={s.flex_row}>
                  <Icon
                    style={s.company_icon}
                    color={theme.primaryColor}
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                  <Text style={s.company}>{item.name}</Text>
                  {Array.isArray(item.time) && item.time.join("") !== "" ? (
                    <Text style={s.department}>{item.time.join("/")}</Text>
                  ) : null}
                </View>
                <View
                  style={{
                    ...s.tag,
                    backgroundColor: theme.secondaryColor,
                    color: theme.primaryColor,
                  }}
                >
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
