import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-xl rounded-(--radius) border border-border bg-card p-10 text-center shadow-lg">
        {/* 404 Badge */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <span className="text-3xl font-bold text-primary">404</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Sorry, the page you are looking for doesn't exist, has been moved,
          or the URL may be incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-(--radius) bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Return Home
          </Link>

          <Link
            href="javascript:history.back()"
            className="inline-flex items-center justify-center rounded-(--radius) border border-border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Go Back
          </Link>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* Footer */}
        <p className="text-sm text-muted-foreground">
          If you believe this is an error, please contact support or try
          navigating from the homepage.
        </p>
      </div>
    </main>
  );
}