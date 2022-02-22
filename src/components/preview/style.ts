import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Alibaba-PuHuiTi-Light",
  src: "/huakang.ttf",
});

export const styles = StyleSheet.create({
  page: {
    fontFamily: "Alibaba-PuHuiTi-Light",
    flexDirection: "row",
    display: "flex",
    fontSize: 12,
    color: "#333",
    lineHeight: 1.5,
  },
  left_section: {
    color: "#fff",
    backgroundColor: "#084c41",
    width: "30%",
    padding: 10,
    flexGrow: 1,
  },
  right_section: {
    width: "70%",
    padding: "0 24",
    flexGrow: 1,
  },
  avatar_warpper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20",
  },
  avatar: {
    borderRadius: "50%",
    width: 90,
    height: 90,
  },
  avatar_rect: {
    border: "2px solid  #fff",
    width: 90,
    height: 90,
  },
  profile_list: {},
  profile_name: {
    marginTop: "20px",
    fontSize: 24,
    textAlign: "center",
  },

  profile_about: {
    fontSize: 14,
    marginTop: 12,
    marginBottom: 12,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    flex: 1,
  },
  profile_icon: {
    width: 14,
    height: 14,
    marginRight: 4,
  },
  company_icon: {
    width: 14,
    height: 14,
    marginRight: 4,
    marginBottom: 3,
  },
  profile_item: {
    fontSize: 10,
    textAlign: "left",
    marginTop: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profile_link: {
    color: "#fff",
  },
  wrapper: { marginTop: 24, fontSize: 10 },
  wrapper_header: {
    color: "#FFF",
    fontSize: 14,
    borderBottom: "2px solid #fff",
    marginBottom: 8,
  },
  flex_row: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  mb8: {
    marginBottom: 8,
  },
  mb12: {
    marginBottom: 12,
  },
  skill_item: {
    marginBottom: 8,
  },
  skill_item_head: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  skill_item_desc: {
    fontSize: 8,
  },
  skill_name: {
    fontWeight: 600,
    flex: 5,
    fontSize: 10,
  },
  skill_level: {
    flex: 2,
    flexDirection: "row",
    display: "flex",
  },
  skill_star: {
    marginRight: 4,
  },
  section: { marginTop: 24, fontSize: 10 },
  section_header: {
    fontSize: 14,
    fontWeight: 600,
    color: "#084c41",
    borderBottom: "2px solid #084c41",
    marginBottom: 8,
  },
  section_header_left: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
  },
  company: {
    fontSize: 14,
    marginBottom: -3,
  },
  department: {
    color: "#666",
    marginLeft: 8,
  },
  tag: {
    backgroundColor: "#8bc34a",
    color: "#fff",
    borderRadius: "2px",
    paddingLeft: 6,
    paddingRight: 6,
    height: 20,
    paddingTop: 4,
  },
  mt4: {
    marginTop: 4,
  },
});
