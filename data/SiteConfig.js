module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "post-authors", // The name of directory that contains your authors.
  blogAuthorId: "okb", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Oregon Knowledge Bank", // Site title.
  siteTitleAlt: "OKB Public Safety Resource", // Alternative site title for SEO.
  siteLogo:
    "/logos/logo-1024.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://okb.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "A local public safety resource", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "/images/blog-cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "OKB", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 25, // The max number of posts per page.
  googleAnalyticsID: "", // GA tracking ID.
  siteSocialUrls: [
    "https://facebook.com",
    "https://twitter.com/ORKnowledgeBank",
    "mailto:okb@oregon.gov"
  ],
  postDefaultCategoryID: "Policing", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "Request Research",
      url: "mailto:okb@oregon.gov",
      iconClassName: "fa fa-book" // Disabled, see Navigation.jsx
    },
    {
      label: "Submit Program",
      url: "https://twitter.com/ORKnowledgeBank",
      iconClassName: "fa fa-edit" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:okb@oregon.gov",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Criminal Justice Commission" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: false // Enables the GatsbyJS promotion information in footer.
};
