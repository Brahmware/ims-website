class NavMap {
  private navMap: {
    title: string;
    videoUrl: string;
    items: {
      title: string;
      link: string;
    }[];
  }[];

  constructor() {
    this.navMap = [
      {
        title: 'Business',
        videoUrl: '/media/videos/navMenu/business.webm',
        items: [
          {
            title: 'About',
            link: '/business/about',
          },
          {
            title: 'Careers',
            link: '/business/careers',
          },
        ],
      },
      {
        title: 'Media Network',
        videoUrl: '/media/videos/navMenu/media-network.webm',
        items: [
          {
            title: 'Business and Brands',
            link: '/media-network/business-and-brands',
          },
          // ... Other items ...
        ],
      },
      // ... Other page groups ...
    ];
  }

  getPageGroupByTitle(title: string) {
    return this.navMap.find(pageGroup => pageGroup.title === title);
  }

  getPageGroupByLink(link: string) {
    return this.navMap.find(pageGroup => pageGroup.items.find(page => page.link === link));
  }
}

// Create an instance of NavMap
const navMapInstance = new NavMap();

// Example usage
const businessPageGroup = navMapInstance.getPageGroupByTitle('Business');
console.log(businessPageGroup);

const aboutPageGroup = navMapInstance.getPageGroupByLink('/business/about');
console.log(aboutPageGroup);
