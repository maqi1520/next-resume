import React, { ReactElement } from "react";
import { View, Link, Text, Path } from "@react-pdf/renderer";
import { styles as s } from "./style";
import Icon, { IconLocation, IconAcademicCap, IconGithub } from "../icon";

interface Props {
  profile: {
    name: string;
    about: string;
    email: string;
    mobile: string;
    github: string;
    home: string;
    workExpYear?: number;
    workPlace: string;
    positionTitle: string;
  };
}

export default function Profile({ profile }: Props): ReactElement {
  return (
    <View style={s.profile_list}>
      <View style={s.profile_name}>
        <Text>{profile.name}</Text>
      </View>
      {profile.about ? (
        <View style={s.profile_about}>
          <Text>{profile.about}</Text>
        </View>
      ) : null}
      {profile.mobile ? (
        <View style={s.profile_item}>
          <Icon d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          <Text>{profile.mobile}</Text>
        </View>
      ) : null}
      {profile.email ? (
        <View style={s.profile_item}>
          <Icon d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          <Text>{profile.email}</Text>
        </View>
      ) : null}
      {profile.github ? (
        <View style={s.profile_item}>
          <IconGithub />
          <Link style={s.profile_link} src={profile.github}>
            {profile.github}
          </Link>
        </View>
      ) : null}
      {profile.home ? (
        <View style={s.profile_item}>
          <Icon d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          <Link style={s.profile_link} src={profile.home}>
            {profile.home}
          </Link>
        </View>
      ) : null}
      {profile.workPlace ? (
        <View style={s.profile_item}>
          <IconLocation />
          <Text>工作地点：{profile.workPlace}</Text>
        </View>
      ) : null}
      {profile.workExpYear ? (
        <View style={s.profile_item}>
          <Icon d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          <Text>工作经验：{profile.workExpYear}</Text>
        </View>
      ) : null}
      {profile.positionTitle ? (
        <View style={s.profile_item}>
          <IconAcademicCap />
          <Text>职位：{profile.positionTitle}</Text>
        </View>
      ) : null}
    </View>
  );
}
