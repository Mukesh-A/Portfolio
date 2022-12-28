import client from "@sanity/client";

export default client({
  projectId: "g5zjybz8",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-12-27",
});
