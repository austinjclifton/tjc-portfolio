export function StatusLabel({ children = 'Content needed' }: { children?: string }) { return <span className="status-label"><span aria-hidden="true" />{children}</span> }
