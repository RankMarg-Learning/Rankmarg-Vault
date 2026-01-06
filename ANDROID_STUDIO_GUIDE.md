# How to Test Your App in Android Studio

## Step-by-Step Guide

### 1. Open Android Studio

- Launch Android Studio

### 2. Open the Android Project

- Click **File** → **Open**
- Navigate to: `E:\Development\RankMarg\rankmarg-vault\android`
- Select the `android` folder and click **OK**

### 3. Wait for Gradle Sync

- Android Studio will automatically sync Gradle
- Wait for the sync to complete (check the bottom status bar)
- If you see any errors, click **Sync Now** or **File** → **Sync Project with Gradle Files**

### 4. Set Up an Android Emulator (if you don't have a physical device)

#### Option A: Create a New Virtual Device

1. Click **Tools** → **Device Manager** (or click the device icon in the toolbar)
2. Click **Create Device**
3. Select a device (e.g., **Pixel 5** or **Pixel 6**)
4. Click **Next**
5. Select a system image (e.g., **API 33** or **API 34** - latest recommended)
   - If you don't have one, click **Download** next to the system image
6. Click **Next** → **Finish**

#### Option B: Use a Physical Device

1. Enable **Developer Options** on your Android phone:
   - Go to **Settings** → **About Phone**
   - Tap **Build Number** 7 times
2. Enable **USB Debugging**:
   - Go to **Settings** → **Developer Options**
   - Enable **USB Debugging**
3. Connect your phone via USB
4. Allow USB debugging when prompted on your phone

### 5. Run the App

1. Select your device/emulator from the device dropdown (top toolbar)
2. Click the **Run** button (green play icon) or press **Shift + F10**
3. Wait for the app to build and install
4. The app will launch automatically on your device/emulator

### 6. Sync Web Changes (Important!)

Whenever you make changes to your web app:

1. Build your web app: `npm run build`
2. In Android Studio, click **File** → **Sync Project with Gradle Files**
3. Or run: `npx cap sync android` from the terminal
4. Run the app again

## Troubleshooting

### If Gradle Sync Fails:

- Check that `local.properties` has correct paths
- Click **File** → **Invalidate Caches** → **Invalidate and Restart**

### If Build Fails:

- Check the **Build** tab at the bottom for error messages
- Make sure you have internet connection (for downloading dependencies)
- Try **Build** → **Clean Project**, then **Build** → **Rebuild Project**

### If App Crashes:

- Check **Logcat** tab at the bottom for error messages
- Make sure you've built the web app first (`npm run build`)

## Quick Commands Reference

```bash
# Build web app
npm run build

# Sync Capacitor (copies web assets to Android)
npx cap sync android

# Open in Android Studio (from project root)
npx cap open android
```
