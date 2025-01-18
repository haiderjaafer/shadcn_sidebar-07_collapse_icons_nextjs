"use client"

import * as React from "react"
import {
  
  BookOpen,
  Bot,
  
  Frame,
 
  Building,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
 
  CircleUserRound,
  Code,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ModeToggle } from "./Mode-Toggle"


// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "شركة مصافي الوسط",
      logo: Building,
      plan: "ITC",
    },
    {
      name: "قسم تقنية المعلومات",
      logo: CircleUserRound ,
      plan: "Startup",
    },
    {
      name: "شعبة ادارة الشبكات والبرمجة",
      logo: Code ,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "اضافة الموظفيين",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
      items: [

        // {
        //   title: "الصفحة الرئيسية",
        //   url: "/",
        // },

        {
          title: "توليد رمز استجابة للموظفيين",
          url: "/generateQRCodesPage",
        },
        // {
        //   title: "QR code رمز الاستجابة السريع",
        //   url: "/employeesQRCode",
        // },
        // {
        //   title: "تقارير",
        //   url: "api/reports",
        // },
      ],
    },
    {
      title: "البحث",
      url: "#",
      icon: Bot,
      items: [
        // {
        //   // title: "Search by Emo No",
        //   url: "/employees",
        // },
        {
          title: " رمز استجابة الموظفيين",
          url: "/tanstack_table",
        },
        // {
        //   title: "Quantum",
        //   url: "#",
        // },
      ],
    },
    {
      title: "التقارير",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "الاعدادات",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "searchParamsExample",
          url: "/searchParamsExample",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "محتويات المشروع",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const [isCollapsed, setIsCollapsed] = React.useState(false);
  

   // Toggle the collapsed state
   const handleSidebarToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Sidebar onClick={handleSidebar} collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        
        
      </SidebarHeader>


        {/* Display the isCollapsed state */}
        {/* <div className="p-2 text-sm text-gray-600">
          isCollapsed: {isCollapsed ? 'true' : 'false'}
        </div> */}
      
       {/* Ensure the className and layout are managed correctly */} 
       

       {/* <div className={`  ${isCollapsed ? "flex  items-center flex-col-reverse   " : "flex items-center justify-between m-2   " }`} > */}
        {/* <div className="m-auto">
          <ModeToggle />
        </div> */}
      <div className="flex justify-end mr-2">
      <SidebarTrigger
           
          className=""
          onClick={handleSidebarToggle}
        />
      </div>
      {/* </div> */}
      
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      
      <SidebarRail />
    </Sidebar>
  );
}

//npx shadcn@latest add sidebar-07