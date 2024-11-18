import DashboardPage from "../pages/dashboard/index";
import { createBrowserRouter } from "react-router-dom";
import { paths } from "./paths";
import DashboardLayout from "@/layout/dashboard-layout";
import MessageTemplate from "@/pages/messages/message-template";
import AddNew from "@/pages/messages/add-new";
import Contact from "@/pages/contacts/contact";
import AddNewContact from "@/pages/contacts/add-new-contact";
import ListTags from "@/pages/contacts/list-tags";
import ImportExport from "@/pages/contacts/import-export";
import Notification from "@/pages/notifications/notification";
import AddNewNotification from "@/pages/notifications/add-new";
import AnalyticsMessaging from "@/pages/analytics/messaging";
import AnalyticsNotifications from "@/pages/analytics/notifications";
import AnalyticsMessageTemplates from "@/pages/analytics/message-templates";
import Basic from "@/pages/automations/basic";
import AutomationAutoReplies from "@/pages/automations/auto-replies";
import Inbox from "@/pages/inbox";
import CreateGroup from "@/pages/group/create-group";
import ListGroups from "@/pages/group/list-groups";
import GroupListNotification from "@/pages/group/list-notification";
import GroupSendMessage from "@/pages/group/send-message";
import CreateTemplateGroup from "@/pages/group/create-template-group";
import SubscriptionPlan from "@/pages/subscription";

const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    children: [
      {
        element: <DashboardPage />,
        path: paths.dashboard,
      },
      {
        element: <MessageTemplate />,
        path: paths.messageTemplate,
      },
      {
        element: <AddNew />,
        path: paths.addNew,
      },
      {
        element: <Contact />,
        path: paths.contact,
      },
      {
        element: <AddNewContact />,
        path: paths.addNewContact,
      },
      {
        element: <ListTags />,
        path: paths.listTags,
      },
      {
        element: <ImportExport />,
        path: paths.importExport,
      },
      {
        element: <Notification />,
        path: paths.notification,
      },
      {
        element: <AddNewNotification />,
        path: paths.addNewNotification,
      },
      {
        element: <AnalyticsMessaging />,
        path: paths.analyticsMessaging,
      },
      {
        element: <AnalyticsNotifications />,
        path: paths.analyticsNotifications,
      },
      {
        element: <AnalyticsMessageTemplates />,
        path: paths.analyticsMessageTemplates,
      },
      {
        element: <Basic />,
        path: paths.basic,
      },
      {
        element: <AutomationAutoReplies />,
        path: paths.automationAutoReplies,
      },
      {
        element: <Inbox />,
        path: paths.inbox,
      },
      {
        element: <CreateGroup />,
        path: paths.createGroup,
      },
      {
        element: <ListGroups />,
        path: paths.listGroups,
      },
      {
        element: <GroupListNotification />,
        path: paths.groupListNotification,
      },
      {
        element: <GroupSendMessage />,
        path: paths.groupSendMessage,
      },
      {
        element: <CreateTemplateGroup />,
        path: paths.createTemplateGroup,
      },
      {
        element: <SubscriptionPlan />,
        path: paths.subscriptionPlan,
      },
    ],
  },
]);
export default router;
