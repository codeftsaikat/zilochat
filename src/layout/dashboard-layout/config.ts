import { SidebarLink } from "./types";

 export const sidebarLinks: SidebarLink[] = [
    { label: "Dashboard", icon: "fa fa-tachometer", href: "/" },
    {
      label: "Message Templates",
      icon: "fa fa-file-text-o",
      href: "#",
      childs: [
        { label: "Message Templates", href: "/message-template" },
        { label: "Add New", href: "/add-new" },
      ],
    },
    {
      label: "Contacts",
      icon: "fa fa-mobile",
      href: "#",
      childs: [
        { label: "Contacts", href: "/contact" },
        { label: "Add New", href: "/add-new-contact" },
        { label: "Lists & Tags", href: "/list-tags" },
        { label: "Import / Export", href: "/import-export" },
      ],
    },
    {
      label: "Notifications",
      icon: "fa fa-bell-o",
      href: "#",
      childs: [
        { label: "Notifications", href: "/notification" },
        { label: "Add New", href: "/add-new-notification" },
      ],
    },
    {
      label: "Analytics",
      icon: "fa fa-line-chart",
      href: "#",
      childs: [
        { label: "Messaging", href: "/analytics-messaging" },
        { label: "Notifications", href: "/analytics-notifications" },
        { label: "Message Templates", href: "/analytics-message-templates" },
      ],
    },
    {
      label: "Automations",
      icon: "fa fa-cogs",
      href: "#",
      childs: [
        { label: "Basic", href: "/basic" },
        { label: "Auto-replies", href: "/automation-auto-replies" },
      ],
    },
    { label: "Inbox", icon: "fa fa-inbox", href: "/inbox" },
    {
      label: "Group",
      icon: "fa fa-users",
      href: "#",
      childs: [
        { label: "Create Group", href: "/create-group" },
        { label: "List Groups", href: "/list-groups" },
        { label: "List Notifications", href: "/group-list-notification" },
        { label: "Send Message", href: "/group-send-message" },
        { label: "Create Template", href: "/create-template-group" },
      ],
    },
  ];
  
  export default sidebarLinks;
  