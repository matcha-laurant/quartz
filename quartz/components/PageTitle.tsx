import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        {/* 这里的 class 名和结构要配合下面的 CSS */}
        <img class="logo-light" src="/static/logo.png" alt={title} />
        <img class="logo-dark" src="/static/logo-dark.png" alt={title} />
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}

/* 1. 默认状态：显示浅色 Logo，隐藏深色 Logo */
.logo-light {
  display: block !important;
}
.logo-dark {
  display: none !important;
}

/* 2. 学习黑幕的写法：当 :root 带有 [saved-theme="dark"] 属性时反转 */
:root[saved-theme="dark"] .logo-light {
  display: none !important;
}
:root[saved-theme="dark"] .logo-dark {
  display: block !important;
}

.page-title img {
  max-height: 9rem; /* 电脑端高度 */
  width: auto;
}

@media (max-width: 768px) {
  .page-title img {
    max-height: 2rem; /* 手机端高度 */
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor