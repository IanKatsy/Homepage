# Homepage

My homepage :>

## Features

- Weather information from OpenWeatherMap API
- Customizable shortcuts to your favorite websites
- Clean, modern UI

### Prerequisites

- OpenWeatherMap API key (for weather functionality)

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd homepage
   ```

2. **Install dependencies**:

   ```bash
   bun install
   ```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweathermap_api_key
```

To get an OpenWeatherMap API key:
1. Sign up at [OpenWeatherMap](https://openweathermap.org/)
2. Navigate to your API keys section
3. Generate a new API key
4. Copy the key to your `.env.local` file

## Development

To run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

To create a production build:

```bash
bun run build
```

The build output will be in the `out` directory, as the project is configured for static exports.

## Deployment

This is a static site that can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- Any other static hosting service

Simply upload the contents of the `out` directory after building.

## Customization

### Shortcuts

Edit the `shortcuts` object in `src/components/Shortcuts.tsx` to customize your shortcut links.

### Weather Location

By default, the weather is set to Athens, Greece (latitude 37.93, longitude 23.75). To change this, edit the coordinates in the `weather_url` in `src/components/Weather.tsx`.

## License

[MIT](LICENSE)