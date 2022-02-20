import React, { ReactElement, useContext } from "react";
import { Page, Text, View, Document, PDFViewer } from "@react-pdf/renderer";
import { styles as s } from "./style";
import Profile from "./profile";
import Avatar from "./avatar";
import Skills from "./skills";
import Educations from "./education";
import AwardList from "./awardList";
import WorkExpList from "./workExpList";
import ProjectList from "./projectList";
import { State } from "../../context/resumeContext";
import { themes } from "../../components/editor/conifg";

interface Props {
  state: State;
}

export default function Preview({ state }: Props): ReactElement {
  const theme = themes.find((t) => t.key === state.avatar.theme) || themes[0];
  return (
    <Document>
      <Page wrap={false} size="A4" style={s.page}>
        <View
          style={{ ...s.left_section, backgroundColor: theme.primaryColor }}
        >
          <Avatar data={state.avatar} />

          <Profile profile={state.profile} />
          <Skills data={state.skillList} />
          <Educations data={state.educationList} />
          <AwardList data={state.awardList} />
        </View>
        <View style={s.right_section}>
          <WorkExpList data={state.workExpList} theme={theme} />
          <ProjectList data={state.projectList} theme={theme} />
        </View>
      </Page>
    </Document>
  );
}
