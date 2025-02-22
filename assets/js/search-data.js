// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-whoami",
    title: "whoami",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-xml-external-entity-xxe-vulnerabilities",
      
        title: "xml external entity (XXE) vulnerabilities",
      
      description: "xml external entity (XXE) vulnerabilities",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/xml-external-entity/";
        
      },
    },{id: "post-basic-windows-privilege-escalation",
      
        title: "Basic Windows privilege escalation",
      
      description: "A collection of basic techiques, procedures and tools for performing privilege escalation on windows.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/windows-privesc/";
        
      },
    },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Johannes-Flachberger", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/johannes-flachberger", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
