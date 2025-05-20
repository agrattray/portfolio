import { ColorPalette } from "@/components/color-palette"

export default function BrandPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Brand Color Palette</h1>
      <p className="mb-8 text-muted-foreground">
        This page shows your brand colors as configured in the theme. Update the colors in globals.css to match your
        brand.
      </p>

      <ColorPalette />

      <div className="mt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">UI Components with Your Brand Colors</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4 p-6 border rounded-lg">
              <h3 className="text-xl font-bold">Buttons</h3>
              <div className="flex flex-wrap gap-2">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Primary Button
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/90 h-10 px-4 py-2">
                  Secondary Button
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Outline Button
                </button>
              </div>
            </div>

            <div className="space-y-4 p-6 border rounded-lg">
              <h3 className="text-xl font-bold">Cards</h3>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
                <h4 className="font-semibold">Card Title</h4>
                <p className="text-sm text-muted-foreground">This card uses your brand's card colors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
