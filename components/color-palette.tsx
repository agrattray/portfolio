export function ColorPalette() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Primary Colors</h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 bg-primary rounded-md"></div>
            <div>
              <p className="font-medium">Primary</p>
              <p className="text-sm text-muted-foreground">bg-primary</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 bg-primary-foreground text-primary border rounded-md flex items-center justify-center">
              Aa
            </div>
            <div>
              <p className="font-medium">Primary Foreground</p>
              <p className="text-sm text-muted-foreground">bg-primary-foreground</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Secondary Colors</h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 bg-secondary rounded-md"></div>
            <div>
              <p className="font-medium">Secondary</p>
              <p className="text-sm text-muted-foreground">bg-secondary</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 bg-secondary-foreground text-secondary border rounded-md flex items-center justify-center">
              Aa
            </div>
            <div>
              <p className="font-medium">Secondary Foreground</p>
              <p className="text-sm text-muted-foreground">bg-secondary-foreground</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">UI Colors</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-muted rounded-md"></div>
            <div>
              <p className="font-medium">Muted</p>
              <p className="text-xs text-muted-foreground">bg-muted</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-accent rounded-md"></div>
            <div>
              <p className="font-medium">Accent</p>
              <p className="text-xs text-muted-foreground">bg-accent</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-background border rounded-md"></div>
            <div>
              <p className="font-medium">Background</p>
              <p className="text-xs text-muted-foreground">bg-background</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-card border rounded-md"></div>
            <div>
              <p className="font-medium">Card</p>
              <p className="text-xs text-muted-foreground">bg-card</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Component Preview</h3>
        <div className="space-y-2">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Primary Button
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/90 h-10 px-4 py-2 ml-2">
            Secondary Button
          </button>
        </div>
      </div>
    </div>
  )
}
