import type { IconType } from 'react-icons'
import { FaJava } from 'react-icons/fa6'
import {
  SiCss3,
  SiElastic,
  SiFastapi,
  SiFlask,
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSpringboot,
  SiSqlite,
  SiSupabase,
} from 'react-icons/si'

interface StackItem {
  name: string
  icon?: IconType
  monogram?: string
}

interface StackGroup {
  label: string
  items: StackItem[]
}

const STACK_GROUPS: StackGroup[] = [
  {
    label: 'Frontend',
    items: [
      { name: 'React.js', icon: SiReact },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Flask', icon: SiFlask },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Java', icon: FaJava },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Python', icon: SiPython },
    ],
  },
  {
    label: 'Database',
    items: [
      { name: 'Elastic', icon: SiElastic },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'SQLite3', icon: SiSqlite },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'Chroma', monogram: 'Ch' },
    ],
  },
]

const TechStackCard = () => {
  return (
    <div className="bg-background/40 flex size-full flex-col overflow-hidden p-3">
      <div className="grid min-h-0 flex-1 gap-2">
        {STACK_GROUPS.map((group) => (
          <section
            key={group.label}
            className="border bg-background/85 flex min-h-0 flex-col p-2.5"
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <p className="text-foreground/60 text-[9px] uppercase tracking-[0.22em]">
                {group.label}
              </p>
              <span className="text-foreground/35 text-[9px]">
                {group.items.length}
              </span>
            </div>
            <div
              className={
                group.label === 'Backend'
                  ? 'grid grid-cols-3 gap-1.5'
                  : 'flex flex-wrap gap-1.5'
              }
            >
              {group.items.map((item) => {
                const ItemIcon = item.icon

                return (
                  <div
                    key={item.name}
                    className="group/stack border bg-muted/55 text-foreground/78 hover:text-foreground hover:border-foreground/30 hover:bg-accent/85 inline-flex items-center gap-1.5 px-2 py-1.5 text-[10px] leading-none transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_18px_rgba(236,208,168,0.16)]"
                  >
                    <span className="flex size-3.5 shrink-0 items-center justify-center text-[14px] transition-transform duration-200 group-hover/stack:scale-110">
                      {ItemIcon ? (
                        <ItemIcon />
                      ) : (
                        <span className="text-[9px] font-semibold">{item.monogram}</span>
                      )}
                    </span>
                    <span>{item.name}</span>
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default TechStackCard
