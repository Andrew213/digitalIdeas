import build, { getParam } from "build-route-tree";

const rawTree = {
  about: null,
  projects: null,
  contacts: null,
  blog: {
    blogSlug: getParam(null),
  },
  partners: null,
  documents: null,
  volunteering: null,
  donat: null,
};

export const routes = build(rawTree);
