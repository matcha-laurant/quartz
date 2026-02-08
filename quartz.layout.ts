import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Bilibili":"https://space.bilibili.com/67928395",
      "Teyan":"https://m.teyan.xyz/ocMe?id=1468309"
    },
  }),
}

// 提取通用的过滤器逻辑，避免代码重复并确保逻辑一致
const secretFilter = (node: any) => {
  // 统一使用可选链访问，确保不会因为路径缺失报错
  const isSecret = node.file?.frontmatter?.secret === true || node.frontmatter?.secret === true
  return !isSecret
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      // 修正：使用可选链访问 slug，防止 page.fileData 为空时崩溃
      condition: (page) => page?.fileData?.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search({
            filterFn: secretFilter
          }as any),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      filterFn: secretFilter
    }),
  ],
  right: [
    Component.Graph({
      localGraph: {
        removeTags: ["hidden"],
      },
      globalGraph: {
        removeTags: ["hidden"],
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page?.fileData?.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search({
            filterFn: secretFilter
          }as any),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      filterFn: secretFilter
    }),
  ],
  right: [],
}