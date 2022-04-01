import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "ps09flap",
  dataset: "productionvarun",

  apiVersion: "2022-04-01",
  useCdn: true,
  token:
    "skdrKsk6cixlDCZpDsULh3cB6KETdbmtKXeHL0ngaRULJA3g2JGydTZRv5jjj2hDfe2nhl1RCvfYHNLD8MYLnq4VTJynmj7awqADH6lrmWy4UYtY81TDnuBOzdI5hxQV8aa6q4PAIon6Ymo0ERHRZYeLeswSWelQkYtovvco5QQG8TtC5bCU",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
  
};
