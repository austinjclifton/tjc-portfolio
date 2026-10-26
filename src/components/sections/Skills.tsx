import { portfolio } from '../../data/portfolio'

export function Skills() {
  return (
    <section
      id="skills"
      className="skills themed-section"
      data-theme-bg="#E7D7C9"
      data-theme-fg="#302018"
    >
      <div className="section-heading">
        <div className="section-number">05 / Skills</div>
        <div data-reveal>
          <h2>
            A working
            <br />
            vocabulary.
          </h2>
        </div>
      </div>

      <div className="skill-list">
        {portfolio.skillCategories.map((category, index) => (
          <article key={category.title} data-reveal>
            <p>0{index + 1}</p>
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
