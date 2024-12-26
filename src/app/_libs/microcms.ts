import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Blog = {
  title: string;
  body: string;
} & MicroCMSListContent;

export type Tag = {
  title: string;
  slug: string;
} & MicroCMSListContent;

export type Toc = {
  text: string;
};

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getBlogsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: "blogs",
    queries,
  });
  return listData;
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blog>({
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: "blogs",
    contentId,
    queries,
  });

  return detailData;
};

export const getAllTags = async () => {
  const listData = await client.getList<Tag>({
    endpoint: "tags",
  });

  return listData;
};
