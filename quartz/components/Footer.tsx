import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        {/* 1. 你的版权声明 */}
        <p>
          © {year} <strong>DORIKURO</strong> | CC BY-NC-SA 4.0
        </p>
        <p style={{fontSize: "0.85em", marginTop: "-0.5rem"}}>
         <strong>No AI training or generative use allowed.</strong>
        </p>

        {/* 2. 你的社交链接 */}
        <ul class="footer-links">
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link} target="_blank" rel="noopener noreferrer">{text}</a>
            </li>
          ))}
        </ul>

        {/* 3. Quartz 作者声明 */}
        <p style={{fontSize: "0.8em", opacity: 0.6}}>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a>
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor