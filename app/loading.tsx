export default function Loading() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:max-w-7xl">
        {/* Hero Section */}
        <div className="animate-pulse space-y-4">
          <div className="h-10 w-3/4 rounded-xl bg-muted" />
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-5/6 rounded bg-muted" />
          <div className="mt-6 h-95 w-full rounded-2xl bg-muted" />
        </div>

        {/* Content */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Posts */}
          <div className="space-y-6 lg:col-span-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="flex animate-pulse gap-4 rounded-xl border border-border p-4"
              >
                <div className="h-28 w-40 shrink-0 rounded-lg bg-muted" />

                <div className="flex-1 space-y-3">
                  <div className="h-6 w-3/4 rounded bg-muted" />
                  <div className="h-4 w-full rounded bg-muted" />
                  <div className="h-4 w-5/6 rounded bg-muted" />
                  <div className="h-4 w-1/4 rounded bg-muted" />
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="hidden space-y-6 lg:block">
            <div className="animate-pulse rounded-xl border border-border p-5">
              <div className="mb-5 h-6 w-1/2 rounded bg-muted" />

              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="mb-4 space-y-2 last:mb-0">
                  <div className="h-4 w-full rounded bg-muted" />
                  <div className="h-4 w-3/4 rounded bg-muted" />
                </div>
              ))}
            </div>

            <div className="animate-pulse rounded-xl border border-border p-5">
              <div className="h-56 w-full rounded-xl bg-muted" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}