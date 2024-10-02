// navLinks.js
export const navLinks = [
    {
      title: "Main",
      links: []
    },
    {
      title: "Dashboard",
      href: "/home",
      icon: "House",
    },
    {
      title: "Customers",
      href: "/customer",
      icon: "Users",
    },
    {
      title: "Estimates",
      href: "/estimates",
      icon: "ClipboardList",
    },
    {
      title: "Invoices",
      href: "#",
      icon: "ChartPie",
      dropdownIcon : "ChevronRight",
      subMenu: [
        { title: "Invoices List", href: "/invoices-list" },
        { title: "Invoices Grid", href: "/invoices-grid1" },
        { title: "Invoices Grid 2", href: "/invoices-grid-2" },
        { title: "Add Invoices", href: "/add-invoice" },
        { title: "Edit Invoices", href: "/edit-invoice" },
        { title: "Invoice Details", href: "/invoice-details" },
        { title: "Invoice Details 2", href: "/invoice-details2" },
        { title: "Invoice Setting", href: "/invoice-setting" },
      ]
    },
    {
      title: "Items",
      href: "/items",
      icon: "Star",
    },
    {
      title: "Payments",
      href: "/payments",
      icon: "CreditCard",
    },
    {
      title: "Expenses",
      href: "/expenses",
      icon: "Package",
    },
    {
      title: "Reports",
      href: "#",
      icon: "ChartPie",
      subMenu: [
        { title: "Sales Report", href: "/sales-report" },
        { title: "Expense Report", href: "/expense-report" },
        { title: "Profit & Loss", href: "#" },
        { title: "Taxs Reports", href: "#" },
      ]
    },

    {
      title: "Settings",
      href: "/setting",
      icon: "Settings",
    
    },

    {
      title: "Pages",
      links: []
    },
    {
      title: "Profile",
      href: "/profile",
      icon: "UserRoundPen",
    
    },
    {
      title: "Authentication",
      href: "#",
      icon: "Lock",
      subMenu: [
        { title: "Login", href: "/login" },
        { title: "Register", href: "/register" },
        { title: "Forgot Password", href: "/forgot-password" },
        { title: "Taxs Reports", href: "/lock-screen" },
      ]
    
    },

    {
      title: "Error pages",
      href: "#",
      icon: "OctagonAlert",
      subMenu: [
        { title: "404 Error", href: "/404" },
        { title: "505 Error", href: "/505" },
       
      ]
    
    },

    {
      title: "Users",
      href: "/users",
      icon: "User",
    },
    {
      title: "Blank Page",
      href: "/blank",
      icon: "StickyNote",
    },

    // More links...
  ];
  