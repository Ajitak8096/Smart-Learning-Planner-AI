function AppearanceSettings() {
  return (
    <div className="bg-slate-900 rounded-3xl p-6">
      <h2 className="text-2xl font-bold mb-6">🎨 Appearance</h2>

      <div className="space-y-4">

        <label className="flex items-center justify-between">
          <span>Dark Mode</span>
          <input type="checkbox" className="w-5 h-5" />
        </label>

        <label className="flex items-center justify-between">
          <span>Compact Layout</span>
          <input type="checkbox" className="w-5 h-5" />
        </label>

      </div>
    </div>
  );
}

export default AppearanceSettings;