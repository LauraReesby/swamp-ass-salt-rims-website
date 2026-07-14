export function RecipesTab({ isSummer = false }: { isSummer?: boolean }) {
  return (
    <section className="space-y-12">
      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
          GATOR-APPROVED RECIPES
        </h2>
        <p className="text-xl max-w-2xl mx-auto">A few of our favorite concoctions to get you started.</p>
        {isSummer ? (
          <p className="text-lg font-black max-w-3xl mx-auto uppercase">
            SUMMER OPERATING CONDITIONS: 96°F, 900% HUMIDITY, ZERO REGRETS.
          </p>
        ) : null}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative bg-card text-card-foreground border-8 border-foreground p-8 shadow-brutal">
          <span className="absolute -top-7 -left-7">
            <svg viewBox="0 0 64 64" className="h-14 w-14 drop-shadow-[4px_4px_0_rgba(0,0,0,0.25)]" aria-hidden="true">
              <g fill="white" stroke="black" strokeWidth="3" strokeLinecap="square">
                <path d="M32 2v10M32 52v10M2 32h10M52 32h10" />
                <path d="m11 11 8 8M45 45l8 8M53 11l-8 8M19 45l-8 8" />
              </g>
              <circle cx="32" cy="32" r="19" fill="#facc15" stroke="black" strokeWidth="4" />
              <circle cx="26" cy="27" r="6" fill="white" stroke="black" strokeWidth="3" />
              <circle cx="39" cy="38" r="7" fill="#dc2626" stroke="black" strokeWidth="3" />
            </svg>
          </span>
          <h3 className="text-2xl font-black mb-4 uppercase border-b-4 border-foreground pb-2">Heat Advisory</h3>
          <p className="text-lg font-mono mb-4">
            Cold enough to make the humidity mind its own damn business.
          </p>
          <ul className="list-disc list-inside font-mono space-y-2">
            <li>8 oz coconut rum</li>
            <li>8 oz mango nectar</li>
            <li>16 oz pineapple juice</li>
            <li>4 oz fresh lime juice</li>
            <li>Tajín rim</li>
            <li>Optional splash of hot sauce for people who ignore good advice</li>
          </ul>
        </div>

        <div className="bg-card text-card-foreground border-8 border-foreground p-8 shadow-brutal">
          <h3 className="text-2xl font-black mb-4 uppercase border-b-4 border-foreground pb-2">Spicy Cypress Sipper</h3>
          <p className="text-lg font-mono mb-4">For those who like a little kick in the pants.</p>
          <ul className="list-disc list-inside font-mono space-y-2">
            <li>1 bottle (750ml) Tequila</li>
            <li>1/2 bottle (375ml) Triple Sec</li>
            <li>1 large can (12oz) frozen limeade</li>
            <li>4-5 sliced jalapeños (more if you're brave)</li>
          </ul>
        </div>

        <div className="bg-card text-card-foreground border-8 border-foreground p-8 shadow-brutal">
          <h3 className="text-2xl font-black mb-4 uppercase border-b-4 border-foreground pb-2">Bayou Berry Blitz</h3>
          <p className="text-lg font-mono mb-4">A sweeter option for a hot day.</p>
          <ul className="list-disc list-inside font-mono space-y-2">
            <li>1 bottle (750ml) Tequila</li>
            <li>1/2 bottle (375ml) Triple Sec</li>
            <li>1 large can (12oz) frozen strawberry mix</li>
            <li>1 cup fresh strawberries</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
