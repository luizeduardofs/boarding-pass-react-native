import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
  },

  header: {
    flex: 1,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },

  title: {
    color: colors.white,
    fontSize: 24,
    fontFamily: fontFamily.extraBold,
    marginTop: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },

  subtitle: {
    color: colors.gray[300],
    fontSize: 14,
    fontFamily: fontFamily.medium,
    marginTop: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },

  ticket: {
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 22,
    overflow: "hidden",
    paddingBottom: 24,
  },

  content: {
    padding: 20,
  },

  flight: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginBottom: 52,
  },

  duration: {
    alignItems: "center",
  },

  hours: {
    color: colors.gray[800],
    fontSize: 14,
    fontFamily: fontFamily.regular,
  },

  label: {
    color: colors.gray[400],
    fontSize: 12,
    textTransform: "uppercase",
    fontFamily: fontFamily.regular,
  },

  name: {
    color: colors.black,
    fontSize: 24,
    fontFamily: fontFamily.bold,
  },

  details: {
    marginTop: 52,
  },

  inline: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  footer: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    gap: 44,
  },

  footerContent: {
    flex: 1,
    gap: 24,
  },
});
