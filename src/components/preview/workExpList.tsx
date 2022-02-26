import React, { ReactElement } from "react";
import { View, Text } from "@react-pdf/renderer";
import { styles as s } from "./style";
import Icon from "../icon";

interface Item {
  company: string;
  department: string;
  time: string[];
  desc: string;
}

interface Props {
  data: Item[];
  theme: { primaryColor: string; secondaryColor: string };
}

export default function WorkList({ data, theme }: Props): ReactElement {
  return (
    <View style={s.section}>
      <View
        style={{
          ...s.section_header,
          borderBottom: `2px solid ${theme.primaryColor}`,
        }}
      >
        <Text style={{ color: theme.primaryColor }}>工作经历</Text>
      </View>
      <View>
        {data.map((item, index) => {
          return (
            <View style={s.mb12} key={index}>
              <View style={s.flex_row}>
                <View style={s.flex_row}>
                  <Icon
                    style={s.company_icon}
                    color={theme.primaryColor}
                    fill={theme.primaryColor}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />

                  <Text style={s.company}>{item.company}</Text>
                  <Text style={s.department}>{item.department}</Text>
                </View>
                <View style={s.flex_row}>
                  {Array.isArray(item.time) && item.time.join("") !== "" ? (
                    <Text>{item.time.join("/")}</Text>
                  ) : null}
                </View>
              </View>
              <View style={s.mt4}>
                <Text>{item.desc}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
