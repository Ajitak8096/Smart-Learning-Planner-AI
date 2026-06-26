import MainLayout from "../components/layout/MainLayout";

import AppearanceSettings from "../components/settings/AppearanceSettings";
import NotificationSettings from "../components/settings/NotificationSettings";
import AISettings from "../components/settings/AISettings";
import SecuritySettings from "../components/settings/SecuritySettings";
import DangerZone from "../components/settings/DangerZone";

function Settings(){

return(

<MainLayout>

<div className="space-y-8">

<h1 className="text-4xl font-bold">

⚙ Settings

</h1>

<div className="grid lg:grid-cols-2 gap-8">

<AppearanceSettings/>

<NotificationSettings/>

<AISettings/>

<SecuritySettings/>

</div>

<DangerZone/>

</div>

</MainLayout>

)

}

export default Settings;