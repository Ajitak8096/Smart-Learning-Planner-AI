function NotificationSettings() {

  return (

    <div className="bg-slate-900 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-6">

        🔔 Notifications

      </h2>

      <div className="space-y-4">

        <label className="flex justify-between">

          Daily Reminder

          <input type="checkbox"/>

        </label>

        <label className="flex justify-between">

          Quiz Reminder

          <input type="checkbox"/>

        </label>

        <label className="flex justify-between">

          Weekly Report

          <input type="checkbox"/>

        </label>

      </div>

    </div>

  );

}

export default NotificationSettings;