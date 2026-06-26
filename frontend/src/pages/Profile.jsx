import { useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import ProfileCard from "../components/profile/ProfileCard";
import ProfileStats from "../components/profile/ProfileStats";
import EditProfileModal from "../components/profile/EditProfileModal";

import useProfile from "../hooks/useProfile";

function Profile() {
  const { user, loading, refresh } = useProfile();

  const [open, setOpen] = useState(false);

  if (loading) {
    return (
      <MainLayout>
        <div className="text-white text-2xl">
          Loading...
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>

      <div className="space-y-8">

        <ProfileCard user={user} />

        <div className="flex justify-end">

          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 px-6 py-3 rounded-xl"
          >
            Edit Profile
          </button>

        </div>

        <ProfileStats />

      </div>

      {open && (
        <EditProfileModal
          user={user}
          refresh={refresh}
          onClose={() => setOpen(false)}
        />
      )}

    </MainLayout>
  );
}

export default Profile;