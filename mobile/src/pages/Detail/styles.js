import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  incident: {
    borderRadius: 8,
    padding: 24,
    backgroundColor: "#FFF",
    marginBottom: 16,
    marginTop: 48
  },

  incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold"
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737380"
  },

  contactBox: {
    borderRadius: 8,
    padding: 24,
    backgroundColor: "#FFF",
    marginBottom: 16
  },

  heroTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#13131a",
    lineHeight: 30
  },

  heroDescription: {
    fontSize: 15,
    color: "#737380",
    marginTop: 16
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16
  },

  action: {
    backgroundColor: "#e02041",
    borderRadius: 8,
    width: "48%",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },

  actionText: {
    color: "#fff"
  }
});
