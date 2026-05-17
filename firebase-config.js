// ─── AshaJyothi Shared Configuration ─────────────────────────────────────────
// After setup, replace every REPLACE_WITH_YOUR_* value below.
//
// Firebase config:
//   Firebase Console → Project Settings → Your apps → Web app → SDK setup
//
// Cloudinary config:
//   cloudinary.com → Dashboard (cloud name) + Settings → Upload → Upload presets
// ─────────────────────────────────────────────────────────────────────────────

export const firebaseConfig = {
  apiKey:            "AIzaSyDUIi-M72NT3r8C9yvrCcH5IXUI9tnjy1I",
  authDomain:        "ashajyothi-bf879.firebaseapp.com",
  projectId:         "ashajyothi-bf879",
  messagingSenderId: "936856881769",
  appId:             "1:936856881769:web:c6413f4ae728665c3f70f8",
};

// Cloudinary (free media hosting — no credit card required)
// Upload preset must be set to "Unsigned" in Cloudinary → Settings → Upload presets
export const cloudinaryConfig = {
  cloudName:    "dshrpij9a",    // e.g. "ashajyothi"
  uploadPreset: "aj_news_unsigned", // e.g. "aj_news_unsigned"
};
