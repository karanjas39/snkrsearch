"use client";

import { TabsContent } from "@/components/ui/tabs";
import EditProfileForm from "./edit-profile-form";
import { userApi } from "@/store/api/user-api";
import DashboardLoader from "@/app/loading";

function ProfileEditTab() {
  const { data, isFetching } = userApi.endpoints.userDetails.useQuery();

  if (isFetching || !data) {
    return <DashboardLoader />;
  }
  console.log(data);

  return (
    <TabsContent value="edit">
      {data && data.user ? (
        <EditProfileForm
          data={{
            dob: data.user.dob,
            email: data.user.email,
            gender: data.user.gender,
            name: data.user.name,
          }}
        />
      ) : null}
    </TabsContent>
  );
}

export default ProfileEditTab;
