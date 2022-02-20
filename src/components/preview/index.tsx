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

interface Props {
  state: State;
}

export default function Preview({ state }: Props): ReactElement {
  return (
    <Document>
      <Page wrap={false} size="A4" style={s.page}>
        <View style={s.left_section}>
          <Avatar data={state.avatar} />

          <Profile profile={state.profile} />
          <Skills data={state.skillList} />
          <Educations data={state.educationList} />
          <AwardList data={state.awardList} />
        </View>
        <View style={s.right_section}>
          <WorkExpList data={state.workExpList} />
          <ProjectList data={state.projectList} />
        </View>
      </Page>
    </Document>
  );
}
