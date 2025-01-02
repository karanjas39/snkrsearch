import ProfileEditTab from "@/components/dashboard/profile/profile-edit-tab";
import ProfileTab from "@/components/dashboard/profile/profile-tab";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ProfilePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Who Am I ?</CardTitle>
        <CardDescription>
          This is your profile page. You can view and edit your profile here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="profile">
          <TabsList>
            <TabsTrigger value="profile">Account Details</TabsTrigger>
            <TabsTrigger value="edit">Edit Details</TabsTrigger>
          </TabsList>
          <ProfileTab />
          <ProfileEditTab />
        </Tabs>
      </CardContent>
    </Card>
  );
}

export default ProfilePage;
