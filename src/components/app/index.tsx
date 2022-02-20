import React, { useEffect, useReducer, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import {
  ResumeContext,
  initialState,
  reducer,
  State,
} from "../../context/resumeContext";
import Editor from "../editor";
import Preview from "../preview";

type Props = {};

export default function App({}: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
    <ResumeContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div className="flex-1">
        <div className="header flex justify-between">
          <h1 className="logo">在线简历生成器</h1>
          <div className="space-x-2">
            <PDFDownloadLink
              document={<Preview state={state} />}
              fileName={`${state.profile.name}的简历.pdf`}
            >
              {({ loading }) => <Button type="primary">下载</Button>}
            </PDFDownloadLink>

            <Button type="primary" ghost>
              预览
            </Button>
            <Button>重置</Button>
          </div>
        </div>
        <Editor />
      </div>
      <div className="flex-1 bg-gray-800 flex justify-center items-center">
        {loading ? (
          <LoadingOutlined style={{ fontSize: 50, color: "#fff" }} />
        ) : (
          <PDFViewer
            showToolbar={false}
            style={{ width: "100%", height: "100%" }}
          >
            <Preview state={state} />
          </PDFViewer>
        )}
      </div>
    </ResumeContext.Provider>
  );
}
