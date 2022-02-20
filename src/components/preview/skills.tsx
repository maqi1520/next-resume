import React, { ReactElement } from "react";
import { View, Text } from "@react-pdf/renderer";
import { styles as s } from "./style";
import { IconStar } from "../icon";

interface Skill {
  name: string;
  desc: string;
  level: number;
}

interface Props {
  data: Skill[];
}

export default function Skills({ data }: Props): ReactElement {
  return (
    <View style={s.wrapper}>
      <View style={s.wrapper_header}>
        <Text>个人技能</Text>
      </View>
      <View>
        {data.map((skill, index) => {
          return (
            <View style={s.skill_item} key={index}>
              <View style={s.skill_item_head}>
                <Text style={s.skill_name}>{skill.name}</Text>
                <View style={s.skill_level}>
                  {new Array(5).fill("*").map((item, i) => (
                    <IconStar active={skill.level >= i + 1} key={i} />
                  ))}
                </View>
              </View>
              <View>
                <Text style={s.skill_item_desc}>{skill.desc}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
