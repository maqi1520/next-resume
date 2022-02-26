import React, { ReactElement } from "react";
import { View, Link, Text, Path } from "@react-pdf/renderer";
import { styles as s } from "./style";

interface Education {
  time: string[];
  school: string;
  major: string;
  degree: string;
}

interface Props {
  data: Education[];
}

export default function Educations({ data }: Props): ReactElement {
  return (
    <View style={s.wrapper}>
      <View style={s.wrapper_header}>
        <Text>教育背景</Text>
      </View>
      <View>
        {data.map((item, index) => {
          return (
            <View style={s.mb8} key={index}>
              <View style={s.flex_row}>
                <Text>{item.school}</Text>
                {Array.isArray(item.time) && item.time.join("") !== "" ? (
                  <Text>{item.time.join("/")}</Text>
                ) : null}
              </View>

              <View style={s.flex_row}>
                <Text>{item.major}</Text>
                {item.degree ? <Text>({item.degree})</Text> : null}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
