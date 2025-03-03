# 🌟 Hotspotti Mobile App

<div align="center">
  <img src="./assets/icon.png" alt="Hotspotti Logo" width="120" height="120"/>
  
  [![Expo](https://img.shields.io/badge/Expo-51.0.28-blue.svg)](https://expo.dev)
  [![React Native](https://img.shields.io/badge/React%20Native-0.74.5-blue.svg)](https://reactnative.dev)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue.svg)](https://www.typescriptlang.org/)
  
  A modern, feature-rich mobile application for discovering and exploring hotspots around you.
</div>

## 📱 Features

- 🗺️ Interactive maps with Mapbox integration
- 📍 Location-based hotspot discovery
- 🎨 Beautiful, modern UI with custom animations
- 🔒 Secure authentication and data storage
- 📱 Cross-platform support (iOS, Android, Web)
- 🎯 Personalized recommendations
- 🔄 Real-time updates
- 🌙 Light/Dark mode support

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac users) or Android Studio
- Mapbox API key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/hotspotti-mobile.git
cd hotspotti-mobile
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your Mapbox API key:

```
MAPBOX_TOKEN=your_mapbox_token_here
```

4. Start the development server:

```bash
npm start
# or
yarn start
```

5. Run on your preferred platform:

```bash
# For iOS
npm run ios
# For Android
npm run android
# For web
npm run web
```

## 🛠️ Built With

- [Expo](https://expo.dev/) - The open-source platform for making universal native apps
- [React Native](https://reactnative.dev/) - A framework for building native apps with React
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Mapbox](https://www.mapbox.com/) - Maps and location services
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [React Navigation](https://reactnavigation.org/) - Navigation library
- [Expo Secure Store](https://docs.expo.dev/versions/latest/sdk/securestore/) - Secure data storage

## 📦 Project Structure

```
hotspotti-mobile/
├── assets/          # Images, fonts, and other static files
├── src/             # Source code
│   ├── components/  # Reusable UI components
│   ├── screens/     # Screen components
│   ├── navigation/  # Navigation configuration
│   ├── store/       # Redux store setup
│   └── utils/       # Utility functions
├── App.js           # Root component
└── app.json         # Expo configuration
```

## 🔧 Configuration

The app can be configured through various files:

- `app.json` - Expo configuration
- `.env` - Environment variables
- `eas.json` - EAS Build configuration

## 📱 Supported Platforms

- iOS 13.0 and above
- Android 6.0 (API level 23) and above
- Web browsers (Chrome, Firefox, Safari)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Mapbox for providing excellent mapping services
- Expo team for the amazing development platform
- React Native community for continuous support and resources

---

<div align="center">
  Made with ❤️ by the Hotspotti Team
</div>
